import { createRoot } from 'react-dom/client'
import App from './components/App'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  createRoot(document.getElementById('app') as HTMLElement).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
