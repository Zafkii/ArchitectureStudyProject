import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import Header from "./Components/Header.tsx"
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Header />
  </StrictMode>
)
