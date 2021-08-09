import './App.css';
import './components/components.sass'
import './components/layout.sass'
import PortfolioPage from "./pages/portfolioPage";
import Homepage from "./pages/homepage";
import React, { useState } from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AboutPage from "./pages/about";
import ResumePage from "./pages/resumePage";
import ContactPage from "./pages/contactPage";
import NavBar from './components/navbar';

function App() {
  const [displayNav, setDisplayNav] = useState(true);
  const [navAtTop, setNavAtTop] = useState(true);
  const handleNav = (display, top) => {
    setDisplayNav(display);
    setNavAtTop(top);
    console.log(`Display Nav: ${displayNav}, Nav at Top: ${navAtTop}`)
  };
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <NavBar className='Navbar' top={navAtTop} display={displayNav}/>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage onNavChange={handleNav}/>
          </Route>          
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/resume">
            <ResumePage />
          </Route>
        </Switch>
      </BrowserRouter>                        
      </header>
    </div>
  );
}

export default App;
