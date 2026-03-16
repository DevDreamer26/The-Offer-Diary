from fastapi import FastAPI
from app.database.session import engine, Base
from app.models import user,post
from app.routers import user as user_router, auth,post
from fastapi.middleware.cors import CORSMiddleware
from settings import settings

Base.metadata.create_all(bind=engine)


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins =[settings.FRONTEND_URL],
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"], 
)

app.include_router(user_router.router)
app.include_router(auth.router)
app.include_router(post.router)

@app.get("/")
async def root():
    return {"message": "The Offer Diary Backend is live !"}