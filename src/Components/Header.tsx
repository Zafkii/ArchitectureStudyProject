import { useEffect, useState } from "react"
import "./Header.css"

const Header = () => {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer")
      if (!footer) return
      const footerTop = footer.getBoundingClientRect().top
      setHide(footerTop < window.innerHeight)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`header ${hide ? "hide" : ""}`}>
      <div className="title">Estudio de Arquitectura</div>
    </header>
  )
}

export default Header
