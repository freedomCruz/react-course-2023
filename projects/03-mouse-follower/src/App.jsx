import { useEffect, useState } from "react"

function App() {

  const [enabled, setEnabled] = useState(false) 
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    console.log("Efecto", {enabled})
    
    const handMove = (event) => {
      const {clientX, clientY} = event
      console.log('handMove', {clientX, clientY})
      setPosition({x: clientX, y: clientY})
    }

    if(enabled) {
      window.addEventListener("mousemove", handMove)
    }
    return () => {
      window.removeEventListener("mousemove", handMove)
    }
  
  },[enabled])

  return (
    
    <main>
      <div style={{
        position: "absolute",
        backgroundColor: 'rgba(180, 243, 12, 0.4)',
        borderRadius: "50%",
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`

      }}/>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? "Desactivar" : "Activar"} seguir puntero</button>
    </main>
  )
}

export default App
