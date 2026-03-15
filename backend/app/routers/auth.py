from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from ..database.session import get_db
from ..models.user import User
from ..auth import utils
from ..schemas.token import Token

router = APIRouter(tags=['Authentication'])

@router.post('/login', response_model=Token)
def login(user_credentials: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == user_credentials.username).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")

    if not utils.verify_password(user_credentials.password, user.hashed_password):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="Invalid Credentials")

    # Create a token
    access_token = utils.create_access_token(data={"sub": str(user.id)})
    # print(f"Here is your token : {access_token}")

    return {"access_token": access_token, "token_type": "bearer"}
    