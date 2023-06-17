import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import { Auth0Provider } from '@auth0/auth0-react';

import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-5uotlqqhuew6ajod.us.auth0.com"
    clientId="KzWc8v8WE5SVPv15oO5UJGb5UC26tkoF"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
>

  
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </AppProvider>
  </Auth0Provider>
);

