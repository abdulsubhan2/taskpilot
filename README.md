# 📝 Task Pilot

A **mobile-first, single-page Task Management App** built using **React.js**.  
This app allows users to **log in**, **create and manage tasks**, and **track progress**, all using **Local Storage** and **cookies** — no backend required.

---

## 🚀 Features

### 🔐 Authentication
- Login once per browser session  
- Session stored using cookies  
- Redirects to the Dashboard after successful login  
- Logout functionality that redirects users back to the Login page  

### 🧭 Dashboard
The Dashboard supports two main states:
1. **No Tasks State** — Displays an empty dashboard layout  
2. **With Tasks State** — Displays:
   - 3 info cards:
     - **Tasks Completed**
     - **Latest Created Tasks**
     - **Completion Progress Chart**
   - Task list with:
     - ✅ Mark as completed  
     - ✏️ Edit task  
     - 🗑️ Delete task  
     - 🔍 Search tasks by name  

### 🗂️ Task Management
- Create new tasks  
- Edit existing tasks  
- Delete tasks  
- Mark tasks as completed  
- Persist data using **Local Storage**  

---

## 🧩 Tech Stack

- **Framework:** React.js (SPA)  
- **State Management:** React Hooks (`useState`, `useEffect`)  
- **Styling:** CSS-in-JS (or standard CSS)  
- **Storage:** Local Storage + Cookies  
- **Routing:** React Router DOM

---

## 🎨 Design References

- **Desktop Mockup:** [Adobe XD Link](https://xd.adobe.com/view/8d09c308-2421-4ff0-5c45-0de43783fcd1-fb38/)  
- **Mobile Mockup:** [Adobe XD Link](https://xd.adobe.com/view/8d09c308-2421-4ff0-5c45-0de43783fcd1-fb38/screen/4a94dc75-0fb6-49b2-bfa5-2141bfe3f8f6/M-Login)

Built to be **pixel-perfect** and **mobile-first**, matching the provided design mockups.

---

## ⚙️ Installation & Setup

Follow the steps below to run the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/abdulsubhan2/taskpilot.git

2. **Navigate to repository**
   cd taskpilot
   
3. **Install the dependencies**
   npm install
   
4. **Start the dev server**
   npm start
   
5. **Navigate to browser and paste the below local dev server url in the search bar**
   http://localhost:3000


   
