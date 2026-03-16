# 🚀 The Offer Diary

**The Offer Diary** is a professional full-stack platform designed for job seekers and students to share, discover, and manage real-world interview experiences. It bridges the gap between candidates by providing a community-driven space for interview transparency.

## 🌟 How It Works: The User Journey

The Offer Diary is built to be intuitive, whether you are here to learn from others or share your own success.

### 🔍 Discover Insights
When you land on the home feed, you are greeted with the most recent interview stories from around the community. 
* **Smart Search:** Use the search bar to find specific companies (e.g., "Google") or specific roles (e.g., "Frontend Intern").
* **Deep Dives:** Click on any diary entry to read the full breakdown of the interview rounds, questions asked, and the candidate's personal "Pro-Tips" for success.

### ✍️ Share Your Story
Got an offer or went through a grueling interview? Help others by documenting it.
* **Easy Publishing:** Once logged in, hit the "Write" button to describe your experience.
* **Formatting Matters:** Your line breaks and paragraphs are preserved, so you can write structured, readable guides for your peers.

### 👤 Build Your Presence
Every user has a dedicated **Public Profile**. 
* **Candidate Portfolio:** Click on a username to see all experiences shared by that person. 
* **Direct Connection:** Profiles display the user's registered email, making it easy for others to reach out for specific advice or networking.

### 🛠️ Manage Your Content
Your **"My Diary"** page acts as your personal command center.
* **Control:** You can revisit any of your past stories to update them with new insights or delete them if you no longer wish to share them publicly.

### 🌙 Comfortable Reading
Whether you're prepping late at night or during the day, the platform supports a polished **Dark Mode** to reduce eye strain during those long study sessions.

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS, Lucide React, Axios.
- **Backend:** FastAPI (Python), PostgreSQL, SQLAlchemy ORM, Pydantic.
- **Security:** OAuth2 with Password Flow, JWT Tokens, CORS Middleware.

---

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/DevDreamer26/The-Offer-Diary
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


