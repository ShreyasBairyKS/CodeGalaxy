# CodeGalaxy
CodeGalaxy is a web application for sharing and discovering code snippets across various programming languages. It allows users to create, view, comment on, and vote for code snippets. The platform features syntax highlighting, user authentication, and a neon-themed user interface.
Features
User Authentication: Register and log in to create and manage your own snippets.
Create Snippets: Add new code snippets with titles, descriptions, and language selection.
Syntax Highlighting: Preview code snippets with language-specific syntax highlighting.
Comment System: Engage with other users by commenting on their snippets.
Voting System: Upvote or downvote snippets to promote valuable content.
Search and Filter: Search for snippets by title, description, or language.
Categories: Browse snippets organized by programming language categories.
Community Snippets: Explore snippets shared by other users.
User Profiles: View all snippets created by a specific user.
Responsive Design: Fully responsive UI with a modern neon theme.
Technologies Used
Frontend
React
Redux Toolkit
React Router DOM
Axios
React Syntax Highlighter
Bootstrap
React Icons
Backend
Node.js
Express.js
MongoDB with Mongoose
JWT for authentication
Bcrypt.js for password hashing
Installation
Prerequisites
Node.js and npm installed
MongoDB database (local or hosted)
Git (optional)
Steps
Clone the repository

git clone https://github.com/yourusername/CodeGalaxy.git
Backend Setup

cd CodeGalaxy/backend
npm install
Environment Variables

Create a .env file in the backend directory and add the following:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Default Snippets

npm run seed
Frontend Setup

cd ../frontend
npm install
Environment Variables

Create a .env file in the frontend directory and add:

REACT_APP_API_URL=http://localhost:5000/api
Start the Frontend and Backend

cd ..
npm run dev
Access the Application

Open your browser and navigate to http://localhost:3000

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch: git checkout -b feature/YourFeature
Commit your changes: git commit -m 'Add some feature'
Push to the branch: git push origin feature/YourFeature
Open a pull request.
License
This project is licensed under the GNU GENERAL PUBLIC LICENSE.

Contact
G Shreekar: GitHub
Shreyas Bairy K S: GitHub
H Sampreeth Bhat: GitHub

