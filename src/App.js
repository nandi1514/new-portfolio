import './App.css';
import Navbar from './components/Navbar/Navbar';
import SocialMediaIcons from './components/SocialMediaIcons/SocialMediaIcons';
import About from './pages/About/About';
import ContactPage from './pages/Contact/ContactPage';
import HomePage from './pages/HomePage/HomePage';
import Project from './pages/Projects/Project';

function App() {
  return (
    <div className="app">
      <SocialMediaIcons />
      <Navbar />
      <HomePage />
      <About />
      <Project />
      <ContactPage />
    </div>
  );
}

export default App;
