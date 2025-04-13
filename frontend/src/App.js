// App.js - The main entry point of your React application

/*
 * WHAT IS A SINGLE PAGE APPLICATION (SPA)?
 * ---------------------------------------
 * 
 * A Single Page Application (SPA) is a web application that loads a single HTML page
 * and dynamically updates the content as the user interacts with the app, without
 * requiring full page reloads.
 * 
 * Traditional websites:
 * - Each link click requests a new HTML page from the server
 * - The browser loads and renders an entirely new page
 * 
 * Single Page Applications:
 * - Only the initial request loads a complete HTML page
 * - Subsequent interactions update just portions of the page
 * - The page never fully reloads after the initial load
 */

/*
 * HOW ROUTES WORK IN REACT ROUTER
 * -----------------------------
 * 
 * At its core, routing in React Router is about:
 * 1. Defining which components should appear at which URLs
 * 2. Rendering the correct component when the URL changes
 * 
 * The main routing components:
 * 
 * - <BrowserRouter>
 *   Provides routing functionality to your entire app
 *   (Should wrap everything that needs routing)
 * 
 * - <Routes>
 *   A container for all your route definitions
 *   (Manages which route matches the current URL)
 * 
 * - <Route>
 *   Defines a single route mapping between:
 *   - A URL path (the "path" prop)
 *   - A React component (the "element" prop)
 * 
 * Example:
 *   <Route path="/about" element={<AboutPage />} />
 * 
 * This tells React Router:
 * "When the URL is '/about', render the AboutPage component"
 */

/*
 * THE CONNECTION BETWEEN ROUTES AND NAVIGATION LINKS
 * ------------------------------------------------
 * 
 * How routes in App.js connect to navbar links:
 * 
 * 1. In App.js:
 *    <Route path="/site-comparison" element={<SiteComparison />} />
 *    
 *    This defines what component should show when the URL is "/site-comparison"
 * 
 * 2. In your navbar (AppNavbar.jsx):
 *    <Nav.Link as={NavLink} to="/site-comparison">Site Comparison</Nav.Link>
 *    
 *    This creates a link that navigates to "/site-comparison" when clicked
 * 
 * 3. The connection flow:
 *    - User clicks the navbar link
 *    - React Router changes the URL to "/site-comparison"
 *    - React Router looks through all <Route> definitions in App.js
 *    - It finds the Route where path="/site-comparison"
 *    - It renders the <SiteComparison /> component into the page
 * 
 * The URL is the common thread that connects navigation links to routes.
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import AnalysisSummary from './features/analysis/components/AnalysisSummary';
import SiteComparison from './features/analysis/components/SiteComparison';
import TimeTrends from './features/analysis/components/TimeTrends';
import GeographicMap from './features/analysis/components/GeographicMap';
import AboutMe from './features/about-me/components/AboutMe';

function App() {
  return (
    // BrowserRouter wraps everything that needs routing functionality
    <BrowserRouter>
      {/* AppNavbar is outside Routes, so it appears on every page */}
      <AppNavbar />
      
      {/* Container for the main content */}
      <div className="container mt-4">
        {/* 
          Routes component contains all possible routes
          Only one Route will match and render at a time
        */}
        <Routes>
          {/* 
            Each Route maps a URL path to a component:
            - path="/" matches the root URL
            - element={<Component />} specifies what to render
          */}
          
          {/* Home route - when URL is exactly "/" */}
          <Route path="/" element={<AnalysisSummary />} />
          
          {/* These routes render when their paths match the URL */}
          <Route path="/summary" element={<AnalysisSummary />} />
          <Route path="/site-comparison" element={<SiteComparison />} />
          <Route path="/time-trends" element={<TimeTrends />} />
          <Route path="/geographic-map" element={<GeographicMap />} />
          <Route path="/about" element={<AboutMe />} />
          
          {/* 
            When a user clicks a link in the navbar, React Router:
            1. Changes the URL (e.g., to "/site-comparison")
            2. Finds the matching Route above
            3. Renders the specified component (e.g., <SiteComparison />)
          */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;