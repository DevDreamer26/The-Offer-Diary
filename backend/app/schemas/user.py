from pydantic import BaseModel, EmailStr
from typing import Optional

# 1. Common fields for both creating and reading
class UserBase(BaseModel):
    username: str
    email: EmailStr  

# 2. Schema for Registration (input)
class UserCreate(UserBase):
    password: str

# 3. Schema for API Response (output)
class UserOut(UserBase):
    id: int
    username:str
    email:str

    class Config:
        from_attributes = True