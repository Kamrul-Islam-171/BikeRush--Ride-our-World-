# BikeRush 🚴‍♂️

> A comprehensive role-based e-commerce platform for bike enthusiasts

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://bikerushdotcom.web.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-blue)](https://github.com/Kamrul-Islam-171/blog-backend)


## 🌟 Overview

BikeRush is a modern, secure, and feature-rich e-commerce platform designed specifically for the cycling community. Built with a robust role-based access control system, it delivers tailored experiences for both administrators and customers while maintaining high performance and security standards.

**🔗 Live Application:** [https://bikerushdotcom.web.app/](https://bikerushdotcom.web.app/)

## ✨ Key Features

### 👑 Admin Dashboard
- **Product Management** - Complete CRUD operations for bikes and accessories
- **User Management** - Block/unblock users with role-based permissions
- **Order Management** - Process and track customer orders efficiently
- **Analytics & Reports** - Comprehensive sales data and performance metrics
- **Inventory Control** - Real-time stock management and notifications

### 🛒 Customer Experience
- **Product Catalog** - Browse extensive collection of bikes and accessories
- **Advanced Search & Filters** - Find products by category, price, brand, and specifications
- **Secure Shopping Cart** - Persistent cart with real-time updates
- **Order Tracking** - Complete order history and status monitoring
- **User Authentication** - Secure JWT-based login system
- **Payment Integration** - Seamless checkout with SSLCommerz gateway

## 🏗️ Technical Architecture

### Frontend Stack
```
React 18+ (Vite)
├── TypeScript - Type-safe development
├── Tailwind CSS - Utility-first styling
├── Ant Design - Professional UI components
├── Redux Toolkit - State management
├── React Router - Client-side routing
└── Axios - HTTP client
```

### Backend & Database
```
Node.js + Express.js
├── MongoDB - Document database
├── Mongoose - ODM for MongoDB
├── JWT - Authentication tokens
├── bcryptjs - Password hashing
└── SSLCommerz - Payment processing
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kamrul-Islam-171/BikeRush--Ride-our-World-.git
   cd BikeRush--Ride-our-World-
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Access the application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000` (if running locally)

## 📁 Project Structure

```
bikerush/
├── .firebase/                 # Firebase deployment config
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, icons, fonts
│   ├── components/           # Reusable UI components
│   ├── layouts/              # Page layout components
│   ├── pages/                # Route-based page components
│   ├── redux/                # State management
│   ├── routes/               # Application routing
│   ├── types/                # TypeScript type definitions
│   ├── utils/                # Helper functions
│   ├── App.tsx               # Main App component
│   ├── index.css             # Global styles
│   ├── main.tsx              # Application entry point
│   └── vite-env.d.ts         # Vite type declarations
├── .firebaserc               # Firebase project config
├── .gitignore               # Git ignore rules
├── README.md                # Project documentation
├── eslint.config.js         # ESLint configuration
├── firebase.json            # Firebase hosting config
├── index.html               # HTML template
├── package-lock.json        # Dependency lock file
├── package.json             # Project dependencies
├── postcss.config.js        # PostCSS configuration
└── vite.config.ts           # Vite build configuration
```

## 🔐 Authentication & Authorization

BikeRush implements a comprehensive role-based access control system:

- **JWT-based Authentication** - Secure token-based user sessions
- **Role Management** - Distinct permissions for Admin and Customer roles
- **Protected Routes** - Route guards based on user authentication status
- **Persistent Sessions** - Automatic token refresh and session management

## 💳 Payment Integration

Integrated with **SSLCommerz** for secure payment processing:
- Multiple payment methods support
- Real-time transaction status
- Secure payment gateway integration
- Order confirmation and receipt generation

## 🚀 Deployment

The application is deployed on **Firebase Hosting** with automatic CI/CD:

```bash
# Build for production
npm run build

# Deploy to Firebase
firebase deploy
```



## 👨‍💻 Author

**Kamrul Islam**
- GitHub: [@Kamrul-Islam-171](https://github.com/Kamrul-Islam-171)
- LinkedIn: [https://www.linkedin.com/in/md-kamrul-islam-bappy]
- Email: [kamrul.ruet.171@gmail.com]

## 🙏 Acknowledgments

- Thanks to the React and Node.js communities
- Ant Design for beautiful UI components
- Firebase for reliable hosting
- SSLCommerz for secure payment processing

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
</div>

---

**Built with ❤️ by [Kamrul Islam](https://github.com/Kamrul-Islam-171)**
