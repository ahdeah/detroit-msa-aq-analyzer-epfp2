// AppNavbar.jsx - Navigation component for your application

/*
 * THE NAVBAR'S ROLE IN A SINGLE PAGE APPLICATION (SPA)
 * --------------------------------------------------
 * 
 * In a Single Page Application:
 * - The navigation bar is a persistent element that stays present
 * - Only the main content area changes as users navigate
 * 
 * The navbar in an SPA is special because:
 * 1. It remains visible throughout the entire user session
 * 2. It doesn't trigger page reloads when users click navigation links
 * 3. It updates the URL and browser history for bookmarking
 * 4. It can highlight the active section to show users where they are
 */

/*
 * UNDERSTANDING LINK VS NAVLINK
 * ----------------------------
 * 
 * React Router provides two main components for navigation:
 * 
 * 1. <Link> - Basic navigation component
 *    - Changes the URL when clicked
 *    - Prevents default page reload
 *    - Example: <Link to="/about">About</Link>
 * 
 * 2. <NavLink> - Enhanced navigation with active state
 *    - Does everything Link does
 *    - PLUS: Automatically adds an "active" CSS class when the current URL matches its "to" prop
 *    - Useful for highlighting the current section in navigation
 *    - Example: <NavLink to="/about">About</NavLink>
 */

/*
 * THE CONNECTION BETWEEN NAVBAR LINKS AND APP.JS ROUTES
 * ---------------------------------------------------
 * 
 * How a navigation link connects to a route:
 * 
 * 1. In this navbar:
 *    <Nav.Link as={NavLink} to="/site-comparison">Site Comparison</Nav.Link>
 *    
 *    This creates a link that navigates to "/site-comparison" when clicked
 * 
 * 2. In App.js:
 *    <Route path="/site-comparison" element={<SiteComparison />} />
 *    
 *    This defines what component should show when the URL is "/site-comparison"
 * 
 * 3. The connection flow:
 *    - User clicks the "Site Comparison" link
 *    - React Router changes the URL to "/site-comparison"
 *    - React Router finds the matching Route in App.js
 *    - It renders the <SiteComparison /> component
 *    - The NavLink gets highlighted with the "active" class
 */

import React from 'react';
// Import Link and NavLink from react-router-dom for navigation
import { Link, NavLink } from 'react-router-dom';
// Import Bootstrap components
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4">
      <Container>
        {/* 
          Navbar.Brand - App title/logo
          "as={Link}" tells Bootstrap to use React Router's Link component
          "to='/'" sets the destination URL to the home route
        */}
        <Navbar.Brand as={Link} to="/">
          Detroit MSA AQ Analyzer
        </Navbar.Brand>
        
        {/* Hamburger menu toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Main navigation menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* 
              NavLink is used here to get the "active" class when this route is current
              This will connect to the "/summary" route in App.js
            */}
            <Nav.Link as={NavLink} to="/summary">
              Analysis Summary
            </Nav.Link>
            
            {/* Dropdown menu */}
            <NavDropdown title="Analysis" id="basic-nav-dropdown">
              {/* 
                Each dropdown item connects to a specific route in App.js
                When clicked, React Router will find and render the matching component
              */}
              <NavDropdown.Item as={Link} to="/site-comparison">
                Site Comparison
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/time-trends">
                Time Trends
              </NavDropdown.Item>
              
              <NavDropdown.Item as={Link} to="/geographic-map">
                Geographic Map
              </NavDropdown.Item>
            </NavDropdown>
            
            {/* This links to the "/about" route in App.js */}
            <Nav.Link as={NavLink} to="/about">
              About Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;