from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session, joinedload
from sqlalchemy import desc
from typing import List
from app.database.session import get_db
from app.models.post import Post
from app.schemas.post import PostCreate,PostOut
from app.auth.dependencies import get_current_user,User

router = APIRouter(
    prefix="/posts",
    tags=["Diaries"]
)

@router.get("/", response_model=List[PostOut])
def get_posts(db: Session = Depends(get_db)):
    posts = db.query(Post).order_by(desc(Post.created_at)).all()
    return posts

@router.get("/me",response_model=List[PostOut])
def get_my_posts(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    posts = db.query(Post).filter(Post.owner_id == current_user.id).order_by(desc(Post.created_at)).all()
    return posts

# Creating the public profile route here

@router.get("/user/{username}", response_model=List[PostOut])
def get_user_posts(username: str, db: Session = Depends(get_db)):
    # 1. Find the user by username
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    
    # 2. Get all posts belonging to that user
    posts = db.query(Post).options(joinedload(Post.author))\
              .filter(Post.owner_id == user.id)\
              .order_by(desc(Post.created_at)).all()
    return posts

@router.get("/{post_id}",response_model=PostOut)
def get_post(post_id: int, db: Session = Depends(get_db)):
    post = db.query(Post).options(joinedload(Post.author)).filter(Post.id == post_id).first()
    
    if not post:
        raise HTTPException(status_code=404, detail="Diary entry not found")
    return post



@router.post("/", response_model=PostOut, status_code=status.HTTP_201_CREATED)
def create_post(
    post: PostCreate, 
    db: Session = Depends(get_db), 
    current_user = Depends(get_current_user)
):
    new_post = Post(**post.model_dump(), owner_id=current_user.id)
    
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post

#Update the diary
@router.put("/{post_id}", response_model=PostOut)
def update_post(
    post_id: int, 
    updated_post: PostCreate, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    post_query = db.query(Post).filter(Post.id == post_id)
    post = post_query.first()

    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")

    # Check: Compare owner_id with current_user.id
    if post.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to edit this post")

    # Update the fields
    post_query.update(updated_post.model_dump(), synchronize_session=False)
    db.commit()
    db.refresh(post)

    return post


@router.delete("/{post_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(
    post_id: int, 
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    post_query = db.query(Post).filter(Post.id == post_id)
    post = post_query.first()

    if post == None:
        raise HTTPException(status_code=404, detail="Post not found")

    # Check: Only allow owner to delete
    if post.owner_id != current_user.id:
        raise HTTPException(status_code=403, detail="Not authorized to perform this action")

    post_query.delete(synchronize_session=False)
    db.commit()