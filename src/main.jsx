import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.jsx';
import Crypto from './components/crypto.jsx';
import News from './components/news.jsx';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './store/store.js';
import useFetchNews from './services/useFetchNews.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home />},
      { path: "/crypto-currency", element: <Crypto /> },
      { path: "/news", element: <News  /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
    
  </React.StrictMode>,
)
