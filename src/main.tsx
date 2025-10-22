import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "devicon/devicon.min.css"
import App from './App.tsx';
import Home from './pages/Home.tsx';
import Projects from './pages/Projects.tsx'
import Profile from './pages/Profile.tsx'
import Contact from './pages/Contact.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/profile", element: <Profile /> },
      { path: "/contact", element: <Contact /> }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
