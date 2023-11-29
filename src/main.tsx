import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './components/routes/routes.tsx'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/routes/scrollTop.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  </React.StrictMode>,
)
