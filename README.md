# ROOM BOOKING SYSTEM

## 📌 Project Overview
The **ROOM BOOKING SYSTEM** is a web-based application designed to streamline the process of reserving rooms. This project was developed as a part of my B.Tech final year completion. The system allows users to check room availability, make reservations, and manage bookings efficiently.

## 🚀 Features
- 🔑 **User Authentication:** Secure login and signup system.
- 📅 **Room Availability Check:** View available rooms in real-time.
- 🏨 **Room Booking:** Book a room based on user preferences.
- 📋 **Booking Management:** Users can modify or cancel bookings.
- 📊 **Admin Dashboard:** Admins can add, remove, and manage rooms and reservations.
- 📧 **Email Notifications:** Confirmation emails for successful bookings.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript (React.js/Vanilla JS)
- **Backend:** Node.js with Express.js
- **Database:** MongoDB/MySQL
- **Authentication:** JWT-based authentication
- **Hosting:** Deployed on AWS/Heroku/Vercel (if applicable)

## 📂 Project Structure
```
room-booking-system/
│── backend/             # Backend API using Express.js
│── frontend/            # Frontend application (React/HTML+JS)
│── database/            # Database schema and migrations
│── public/              # Static assets
│── config/              # Configuration files
│── .env                 # Environment variables (not included in repo)
│── package.json         # Project dependencies
│── README.md            # Project documentation
```

## 🔧 Setup & Installation
### Prerequisites
Ensure you have the following installed on your system:
- Node.js (v16+ recommended)
- MongoDB/MySQL (for database storage)

### Steps to Run the Project
1. **Clone the Repository**
   ```bash
   git clone https://github.com/Prince-rj/ROOM-BOOKING-SYSTEM.git
   cd ROOM-BOOKING-SYSTEM
   ```
2. **Backend Setup**
   ```bash
   cd backend
   npm install  # Install dependencies
   npm start    # Start backend server
   ```
3. **Frontend Setup**
   ```bash
   cd frontend
   npm install  # Install frontend dependencies
   npm start    # Start frontend server
   ```
4. **Database Setup**
   - Configure MongoDB/MySQL connection in the `.env` file.
   - Run database migrations if required.

5. **Access the Application**
   - Open `http://localhost:3000` in your browser (default frontend port).
   - Backend runs on `http://localhost:5000` (default backend port).

## 📌 Usage Guide
1. **User Registration/Login**
2. **Browse Available Rooms**
3. **Make a Booking**
4. **Manage Reservations (Modify/Cancel)**
5. **Admin Dashboard Access (For Admins)**

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author
**Prince Raj**  
📧 [Email](mailto:your-email@example.com)  
🌍 [GitHub](https://github.com/Prince-rj)

## 🤝 Contributing
Contributions are welcome! Feel free to fork the repository and create a pull request.

## ⭐ Acknowledgments
- Special thanks to mentors and peers for their guidance.
- Open-source libraries and frameworks that made this project possible.
