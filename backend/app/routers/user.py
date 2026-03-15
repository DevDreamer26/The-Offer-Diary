from fastapi import APIRouter,Depends,HTTPException,status
from sqlalchemy.orm import Session
from app.database.session import get_db
from app.models.user import User
from app.schemas.user import UserCreate,UserOut
from app.auth import utils
from typing import List
from app.auth.dependencies import get_current_user

router = APIRouter(
    prefix="/users",
    tags=["Users"]
)

@router.get("/me", response_model=UserOut)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user

@router.get("/", response_model=List[UserOut])
def get_users(
    db: Session = Depends(get_db), 
    current_user: User = Depends(get_current_user)
):
    users = db.query(User).all()
    return users

@router.post("/",response_model=UserOut, status_code=status.HTTP_201_CREATED)
def create_user(user: UserCreate,db: Session = Depends(get_db)):
    
    # Check if the user already exists by email
    db_user = db.query(User).filter(User.email == user.email).first()
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered !")
    
    # Hash the password
    hashed_pwd = utils.hash_password(user.password)

    #Create the user object for the database
    
    new_user = User(
        username = user.username,
        email = user.email,
        hashed_password = hashed_pwd
    )
    
    #Save to database
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    
    return new_user

