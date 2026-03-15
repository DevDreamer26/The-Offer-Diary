from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from .user import UserOut

# 1. Base fields for an interview experience
class PostBase(BaseModel):
    title: str
    company: str
    content: str
    tips: Optional[str] = None

# 2. Schema for creating a new post (Input)
class PostCreate(PostBase):
    pass

# 3. Schema for sending data back (Output)
class PostOut(PostBase):
    id: int
    created_at: datetime
    owner_id: int
    author: UserOut

    class Config:
        from_attributes = True