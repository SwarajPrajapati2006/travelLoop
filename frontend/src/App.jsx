import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import ProtectedRoute from './components/common/ProtectedRoute'

// Pages
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import MyTripsPage from './pages/MyTripsPage'
import CreateTripPage from './pages/CreateTripPage'
import BuildItineraryPage from './pages/BuildItineraryPage'
import ItineraryViewPage from './pages/ItineraryViewPage'
import SearchPage from './pages/SearchPage'
import ProfilePage from './pages/ProfilePage'
import ChecklistPage from './pages/ChecklistPage'
import NotesPage from './pages/NotesPage'
import CommunityPage from './pages/CommunityPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/my-trips" element={<MyTripsPage />} />
          <Route path="/create-trip" element={<CreateTripPage />} />
          <Route path="/build-itinerary/:id" element={<BuildItineraryPage />} />
          <Route path="/itinerary/:id" element={<ItineraryViewPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checklist/:id" element={<ChecklistPage />} />
          <Route path="/notes/:id" element={<NotesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
