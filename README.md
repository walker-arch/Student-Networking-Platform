<div align="center">

# 🎓 Student Networking Platform

### Connect with Like-minded Students Worldwide

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

*A smart platform that uses interest-based matching to connect students for projects, hackathons, research, and startups.*

[🚀 Demo](#demo) • [✨ Features](#features) • [🛠️ Installation](#installation) • [📖 API Docs](#api-endpoints) • [🤝 Contributing](#contributing)

</div>

---

## 📸 Screenshots

<div align="center">
  <img src="docs/screenshots/landing-page.png" alt="Landing Page" width="80%">
  <p><em>Modern landing page with hero section</em></p>
</div>

---

## 🎯 Problem Statement

Students often struggle to find:
- 🔍 Project teammates with similar interests
- 🏆 Hackathon partners with complementary skills
- 📚 Research collaborators in their field
- 🚀 Co-founders for startup ideas

**StudentNet** solves this by intelligently matching students based on their interests, skills, and goals.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔐 **Secure Auth** | JWT-based authentication with encrypted passwords |
| 👤 **Rich Profiles** | Showcase skills, interests, and academic background |
| 🎯 **Smart Matching** | Jaccard similarity algorithm for accurate recommendations |
| 🔍 **Discovery** | Browse and filter students by interests, skills, college |
| 🤝 **Connections** | Send, accept, or decline connection requests |
| 💬 **Messaging** | Real-time chat with your connections |
| 🌙 **Dark Mode** | Toggle between light and dark themes |
| 📱 **Responsive** | Works seamlessly on desktop and mobile |

---

## 🧮 Recommendation Algorithm

The platform uses **Jaccard Similarity** with weighted scoring:

```
Match Score = (Interests × 40%) + (Skills × 30%) + (Career Goals × 20%) + (College × 10%)
```

```javascript
Jaccard(A, B) = |A ∩ B| / |A ∪ B|
```

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React 18** with Vite
- 🎨 **Tailwind CSS** for styling
- 🧭 **React Router** for navigation
- 🎯 **Lucide React** for icons
- 📡 **Axios** for API calls

### Backend
- 🟢 **Node.js** with Express
- 🍃 **MongoDB** with Mongoose
- 🔑 **JWT** for authentication
- 🔒 **bcrypt** for password hashing

---

## 📁 Project Structure

```
Student-Networking-Platform/
├── client/                     # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/         # Navbar, Layout
│   │   ├── context/            # Auth, Theme providers
│   │   ├── pages/              # All page components
│   │   ├── services/           # API service layer
│   │   └── index.css           # Global styles
│   └── package.json
├── server/                     # Backend (Express + MongoDB)
│   ├── src/
│   │   ├── models/             # User, Connection, Message
│   │   ├── routes/             # API routes
│   │   ├── middleware/         # Auth middleware
│   │   └── index.js            # Server entry
│   ├── .env                    # Environment config
│   └── package.json
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- Node.js 18+ 
- MongoDB (local or Atlas)
- npm or yarn

### Quick Start

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/Student-Networking-Platform.git
cd Student-Networking-Platform
```

2. **Install dependencies**
```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

3. **Configure environment**
```bash
# Edit server/.env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/studentnet
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
```

4. **Start the application**
```bash
# Terminal 1 - Start backend
cd server && npm run dev

# Terminal 2 - Start frontend
cd client && npm run dev
```

5. **Open in browser**
```
http://localhost:5173
```

---

## 📖 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Create new account |
| POST | `/api/auth/login` | Login & get token |
| POST | `/api/auth/logout` | Logout user |

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users/profile` | Get current user |
| PUT | `/api/users/profile` | Update profile |
| GET | `/api/users/search` | Search users |
| GET | `/api/users/:id` | Get user by ID |

### Recommendations
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/recommendations` | Get personalized matches |
| GET | `/api/recommendations/similar/:id` | Find similar users |

### Connections
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/connections` | Get all connections |
| POST | `/api/connections/request/:id` | Send request |
| PUT | `/api/connections/accept/:id` | Accept request |
| PUT | `/api/connections/reject/:id` | Reject request |
| DELETE | `/api/connections/:id` | Remove connection |

### Messages
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/messages/conversations` | Get conversations |
| GET | `/api/messages/:userId` | Get messages |
| POST | `/api/messages/:userId` | Send message |

---

## 📱 Pages

| Route | Page | Access |
|-------|------|--------|
| `/` | Home/Dashboard | Public/Private |
| `/login` | Login | Guest only |
| `/signup` | Multi-step Registration | Guest only |
| `/discover` | Browse Students | Private |
| `/profile` | View/Edit Profile | Private |
| `/connections` | Manage Network | Private |
| `/messages` | Chat Interface | Private |

---

## 🔒 Security

- ✅ Password hashing with bcrypt (10 rounds)
- ✅ JWT tokens with expiration
- ✅ Protected API routes
- ✅ CORS configuration
- ✅ Input validation

---

## 🚧 Future Roadmap

- [ ] Real-time notifications (WebSocket)
- [ ] Profile photo upload
- [ ] Group creation
- [ ] Event/Hackathon listings
- [ ] Mentor-student matching
- [ ] Mobile app (React Native)
- [ ] AI-powered recommendations

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for students, by students**

⭐ Star this repo if you found it helpful!

</div>
