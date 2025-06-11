// src/components/Header.tsx
import { useEffect, useState } from "react"
import "./Header.css"

const Header = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const footer = document.getElementById("footer")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(!entry.isIntersecting) // Oculta si el footer entra en pantalla
        })
      },
      {
        root: null,
        threshold: 0.1,
      }
    )

    if (footer) observer.observe(footer)

    return () => {
      if (footer) observer.unobserve(footer)
    }
  }, [])

  return (
    <header className={`main-header ${isVisible ? "visible" : "hidden"}`}>
      <h1>Mis proyectos de Arquitectura</h1>
    </header>
  )
}

export default Header
