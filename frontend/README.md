# Voyage - Travel Planner Frontend

This is the frontend portion of the **Voyage** travel planning application, built with React and Vite.

## 📁 Project Structure

```text
src/
├── api/              # Axios configuration and API service modules
├── components/       # Reusable UI components
│   ├── checklist/    # Checklist-specific components
│   ├── common/       # Global components (Navbar, Loader, etc.)
│   ├── itinerary/    # Itinerary-specific components
│   └── trips/        # Trip management components
├── context/          # React Context providers (Auth, etc.)
├── pages/            # Main view components/routes
├── styles/           # Global CSS and design variables
├── App.jsx           # Main application routing
└── main.jsx          # Entry point and provider setup
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Start the development server:
```bash
npm run dev
```

### Build
Create a production build:
```bash
npm run build
```

## 🛠️ Tech Stack
- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Forms**: Formik + Yup
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Utilities**: Axios, date-fns, react-hot-toast, jsPDF

## 🔐 Environment Variables
Create a `.env` file in the root of the `frontend` directory:
```env
VITE_API_URL=http://localhost:5000/api
```
