# OddoHackathonSkillSwap

## Topic: Skill Swap Platform

### Members:

1. **Manish Srivastav**  
    manishshrivastav423@gmail.com

2. **Deepak Deshmukh**  
    deshmukhdeepak906@gmail.com

3. **Bhavin Suthar**  
    bhsuthar9191@gmail.com

4. **Priyanshu Singh**  
    priyanshusingh10012003@gmail.com

# 🔄 Skill Swap Platform

A modern skill exchange platform built using **React** and **Tailwind CSS** where users can offer and request skills, connect with others, and manage their profiles. This application is designed to encourage community-driven learning and collaboration.

---

## 🚀 Features

- 👤 User registration and login
- 🎯 Skill offering and requesting
- 🔍 Search and filter users
- 📨 Skill swap requests
- 📊 Request statistics (charts)
- ✏️ Editable user profiles
- 🧠 Clean UI with responsive design

---

## 🗂️ Pages & Functionality

### 🏠 Home Page (`HomePage.jsx`)
- Displays users based on selected status (Availability or Pending)
- Search users by name or skills (offered/wanted)
- Pagination for user list
- `UserCard` component used for user display

### 🔐 Login Page (`LoginPage.jsx`)
- Allows user to login using email and password
- Displays error messages for invalid credentials
- Social login UI for Google and Facebook
- Navigates to Sign Up if user not found

### 📝 Sign Up Page (`SignUp.jsx`)
- New user registration form
- File upload for profile picture
- Select multiple skills offered and wanted from a predefined list
- Field validation (e.g., required fields, matching passwords)
- Sends data to backend (`/odoo/create_user`)

### 👤 Profile Page (`ProfilePage.jsx`)
- Displays current user's profile data
  - Name, Location, Skills, Rating, Availability
- Includes **Request Statistics Bar Chart** using `recharts`
- Edit & Remove buttons for profile image
- Displays offered and wanted skills in styled badges

### 🛠️ Edit Profile Page (`ProfileEdit.jsx`)
- Modify name, location, skills, availability, and visibility
- Modal for selecting offered/wanted skills
- Save and discard buttons
- Live preview of profile picture with update/delete buttons

### 📩 Send Request Page (`RequestPage.jsx`)
- Displays another user's profile
- Showcasing skills offered and wanted
- Feedback and rating section
- Button to send a swap request

### 📃 Request Info Page (`RequestInfo.jsx`)
- View sent or received request details
- Accept/reject/request more info

---

## 🧰 Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Charts**: Recharts
- **HTTP Client**: Axios
- **Backend API**: Express

---

## 📂 Folder Structure

src/
├── assets/ # Static data and assets (e.g., users.js, images)
├── components/ # Reusable UI components (Navbar, UserCard, Pagination, etc.)
├── pages/ # Main page components
│ ├── HomePage.jsx
│ ├── LoginPage.jsx
│ ├── SignUp.jsx
│ ├── ProfilePage.jsx
│ ├── ProfileEdit.jsx
│ ├── RequestPage.jsx
│ └── RequestInfo.jsx
├── App.jsx # Main app component with routing
├── main.jsx # Application entry point

🎯 Future Enhancements
✅ Skill-based recommendations

🔜 Real-time messaging

🔜 Notification system

🔜 OAuth integration (Google/Facebook)

🔜 Profile verification

🔜 Dark mode toggle



