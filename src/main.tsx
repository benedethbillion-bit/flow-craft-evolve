import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element with id 'root' was not found in index.html");
}

createRoot(rootElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);
