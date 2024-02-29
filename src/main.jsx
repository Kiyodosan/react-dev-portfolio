// import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './assets/css/style.css'
import './assets/css/nav.css'

import App from './App.jsx'
// import Error from './pages/Error'
import About_Me from './pages/About_Me'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import Resume from './pages/Resume'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About_Me />,
      },
      // Setup "About Me" page if new home page is added
/*       {
        path: '/About_Me',
        element: <About_Me />,
      }, */
      {
        // path: '/Portfolio',  // Does not route properly
        path: 'portfolio',
        element: <Portfolio />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'resume',
        element: <Resume />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
/*   <React.StrictMode>
    <App />
  </React.StrictMode>, */
)