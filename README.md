<div align="center">
  <img src="frontend/public/logo-vertical.png" alt="Traveloop Logo" width="200" />

  # 🌍 TRAVELOOP
  ### *The Intelligent, Collaborative Travel Planning Engine*

  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  [![Postman](https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/50839472/2sBXqNmdii)
  [![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://travel-loop-eta.vercel.app/)

  **Empowering modern travelers to dream, design, and conquer the world with structured itineraries and real-time financial intelligence.**

  [**Live Demo**](https://travel-loop-iota.vercel.app/) • [**API Docs**](https://documenter.getpostman.com/view/50839472/2sBXqNmdii) • [**YouTube Walkthrough**](https://youtube.com/watch?v=your-video-link)
</div>

---

## 📖 Table of Contents
1. [Core Vision](#-core-vision)
2. [Deep-Dive Feature Set](#-deep-dive-feature-set)
3. [Technical Architecture](#-technical-architecture)
4. [The massive Project Structure](#-project-structure)
5. [API Ecosystem](#-api-ecosystem)
6. [Database Intelligence](#-database-intelligence)
7. [Team & Contributions](#-team--contributions)
8. [Setup & Installation](#-setup--installation)

---

## 🚀 Core Vision
Traveloop isn't just a trip planner; it's a **travel-operating-system**. Developed in a high-intensity 8-hour sprint, it addresses the chaotic nature of planning multi-city global expeditions. By combining high-fidelity destination data with granular financial tracking, Traveloop ensures that your only concern is the journey, not the logistics.

---

## ✨ Deep-Dive Feature Set

### 🔐 Ironclad Security & User Lifecycle
*   **JWT-Driven Auth:** Stateful session management using JSON Web Tokens with a 30-day persistence.
*   **Encrypted Identities:** Industry-standard `bcryptjs` hashing for all sensitive credentials.
*   **Ownership Isolation:** Every API request is verified against a trip-ownership matrix, preventing unauthorized data access.
*   **Admin Command Center:** Exclusive analytics suite for platform administrators to monitor global travel trends.

### 📍 Intelligent Discovery
*   **Massive Seed Dataset:** Access a curated database of **30+ iconic cities** and **150+ activities** (optimized for Indian and International travelers).
*   **Fuzzy Search Engine:** Real-time search across cities, countries, and activity descriptions with high-performance SQL indexing.
*   **Regional curation:** Discover trips based on region (Asia, Europe, etc.) or cost-index popularity.

### 🗺️ Precision Itinerary Builder
*   **Logical Partitioning:** Break trips into logical segments: **Hotels, Transport, Food, and Activities.**
*   **Temporal Logic:** Date-aware sections that automatically align with your trip's start and end boundaries.
*   **Visual Timelines:** A day-wise layout that separates "What to do" from "What to spend."

### 💰 Financial Intelligence
*   **Real-time Aggregation:** Backend-calculated summaries showing `Total Planned Budget` vs `Actual Spending`.
*   **Itemized Invoicing:** Generate a professional-grade audit trail of every dollar (or rupee) spent during the trip.
*   **Budget Guardrails:** Visual indicators of remaining balances to keep your expedition on track.

### 📋 Smart Utilities
*   **Categorized Checklist:** Pre-defined categories (Documents, Electronics, Health) to automate your packing routine.
*   **Trip Journaling:** A dedicated space for day-specific reminders, local contacts, and fleeting memories.
*   **Social Connectivity:** Toggle `is_public` to share your masterpiece with the global Traveloop community.

---

## 🛠 Technical Architecture

### **The PERN Stack**
- **P**ostgreSQL: Relational database with complex join-based aggregations and foreign-key integrity.
- **E**xpress.js: Modular middleware-first REST API architecture.
- **R**eact: Component-based UI with Context API for stateful authentication.
- **N**ode.js: High-performance asynchronous runtime.

### **Production Infrastructure**
- **Frontend Hosting:** Vercel (Edge optimized).
- **Backend Hosting:** Render (Singapore Region).
- **Database:** Render Managed PostgreSQL (SSL Secure).
- **Security:** Helmet.js, Express-Rate-Limit, CORS (Restricted to production origins).

---

## 🏗 Project Structure

```text
travelLoop/
├── frontend/                     # High-Fidelity React Client
│   ├── src/
│   │   ├── api/                  # Axios orchestration layer
│   │   ├── components/           # Atomic Design System (Cards, Nav, Modals)
│   │   ├── context/              # Centralized Auth & Trip State
│   │   ├── pages/                # Screen-level implementations (14+ Screens)
│   │   ├── utils/                # Date formatters & Numeric precision helpers
│   │   └── App.jsx               # Route definitions (React Router v6)
│   ├── tailwind.config.js        # Custom design tokens & theme
│   └── vite.config.js            # Build optimization engine
│
└── server/                       # Enterprise-Ready Express API
    ├── config/
    │   └── db.js                 # PG Pool with SSL & production fallback
    ├── controllers/
    │   ├── auth.controller.js    # Auth logic & 'GetMe' lifecycle
    │   ├── trip.controller.js    # Trip CRUD & Aggregated List queries
    │   ├── expense.controller.js # Math-heavy budget & invoice logic
    │   └── ...                   # Modular logic for all 8 entities
    ├── middleware/
    │   ├── auth.middleware.js    # Strict JWT verification
    │   ├── optionalAuth.js       # Guest-access logic for public trips
    │   ├── admin.middleware.js   # Escalated privilege validation
    │   └── error.middleware.js   # Global error interceptor
    ├── routes/                   # Disambiguated API end-points
    ├── utils/                    # Shared logic (Token gen, Ownership checks)
    └── index.js                  # Main entry (Security & Rate limits)
```

---

## 🔌 API Ecosystem

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/login` | Session creation & JWT issue | No |
| `GET` | `/api/trips` | User's trips with budget aggregates | Yes |
| `GET` | `/api/trips/community` | Public trip discovery feed | No |
| `GET` | `/api/expenses/trip/:id/invoice` | Itemized billing breakdown | Owner |
| `GET` | `/api/cities?q=Delhi` | Fuzzy search for destinations | No |

---

## 🗄 Database Intelligence

The system utilizes 8 core tables with a Star-Schema relationship:
- **`users`**: Root entity with admin escalation.
- **`trips`**: Central pivot for all user plans.
- **`trip_sections`**: Temporal segments of a trip.
- **`expenses`**: Individual financial records.
- **`cities` & `activities`**: Master data for discovery.

*All foreign keys are indexed for sub-100ms query performance.*

---

## 👥 Team & Contributions

| Member | Role | Key Contributions |
|---|---|---|
| **Rituraj** | **Backend Lead** | Engineered the SQL aggregation engine, JWT/Bcrypt security layer, massive 150-row seed dataset, and production Render infrastructure. |
| **Rishab** | **Frontend Lead** | Architected the React UI, established the design system, implemented complex auth state, and managed Vercel deployments. |
| **Swaraj** | **Full-Stack / Integration** | Developed the Itinerary Builder, Search Logic, and end-to-end Axios wiring across 30+ endpoints. |

---


## 🛠 Setup & Installation

### 1. Prerequisites
- **Node.js** (v18+)
- **pnpm** (Recommended)
- **PostgreSQL** instance

### 2. Backend Config
```bash
cd server
pnpm install
# Create .env file
PORT=5000
DATABASE_URL=your_postgres_uri
JWT_SECRET=your_secret
pnpm start
```

### 3. Frontend Config
```bash
cd frontend
pnpm install
# Create .env file
VITE_API_URL=http://localhost:5000
pnpm run dev
```

---

<div align="center">
  <b>Built with ❤️ at the Odoo × Parul Hackathon.</b>
</div>
