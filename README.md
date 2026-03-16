# 🚀 The Offer Diary

**The Offer Diary** is a professional full-stack platform designed for job seekers and students to share, discover, and manage real-world interview experiences. It bridges the gap between candidates by providing a community-driven space for interview transparency.

## ✨ Core Features
- **Secure Authentication:** JWT-based login/registration with Argon2 password hashing.
- **Dynamic Feed:** Real-time interview experience feed sorted by most recent posts.
- **Full CRUD:** Logged-in users can Create, Read, Update, and Delete their own diary entries.
- **Protected Routes:** Secure frontend navigation to prevent unauthorized access.
- **Public Profiles:** Clickable usernames to view all experiences shared by a specific user, including their contact email.
- **Search & Filter:** Instant frontend search by company name or job role.
- **Theme Support:** Fully responsive UI with a polished Dark Mode toggle.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Lucide React, Axios.
- **Backend:** FastAPI (Python), PostgreSQL, SQLAlchemy ORM, Pydantic.
- **Security:** OAuth2 with Password Flow, JWT Tokens, CORS Middleware.

---

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/DevDreamer26/The-Offer-Diary/
cd the-offer-diary

### 2. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
# Create .env file with the following variables:
# DATABASE_URL=postgresql://username:password@localhost:5432/offer_diary
uvicorn main:app --reload
```
### 3. Frontend Setup
```bash
cd ../frontend
npm install react react-dom react-router-dom axios tailwindcss postcss autoprefixer lucide-react
npx tailwindcss init -p
# Configure tailwind.config.js and postcss.config.js as needed
npm run dev
```
## 🌟 Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.
## 🤝 
---Thank you for checking out The Offer Diary! We hope it helps you navigate your job search with confidence and transparency. Happy coding! 🚀

