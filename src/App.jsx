import { useState } from "react"
import { products } from "./products/products"

function App() {
  const [nombre, setNombre] = useState('')
  const [direccion, setDireccion] = useState('')
  const [telefono, setTelefono] = useState('')

  let mensaje = '\n'
  products.map(prod => {
    let nombre = prod.nombre
    let precio = prod.precio
    let cantidad = prod.cantidad
    let tamaño = prod.tamaño
    mensaje += `\n- Una ${nombre} a un precio de ${precio}.\nLa cantidad es ${cantidad} y el tamaño es ${tamaño}.\n`
  })
  
  const sendWhatsAppMessage = () => {
    try {
      const phone = '+5491162964493'
      const message = `Hola! ${nombre} acaba de realizar un pedido desde la pagina web.\nSu direccion es ${direccion} y el telefono es ${telefono}.\n${nombre} hizo un pedido de:${mensaje}`
  
      const whatsappLink = `whatsapp://send?phone=${encodeURIComponent(phone)}&text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, '_blank');

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <form>
        <h1>Enviar Mensaje por WhatsApp</h1>
        <div>
          <label htmlFor="">Nombre</label>
          <input onChange={(e) => setNombre(e.target.value)} type="text" required/>
        </div>
        <div>
          <label htmlFor="">Direccion</label>
          <input onChange={(e) => setDireccion(e.target.value)} type="text" required/>
        </div>
        <div>
          <label htmlFor="">Telefono</label>
          <input onChange={(e) => setTelefono(e.target.value)} type="number" required/>
        </div>
        <p>Acordate que si estas en una computadora debes abrir tu aplicacion de whatsapp antes de realizar la compra!</p>
        <button onClick={sendWhatsAppMessage}>Enviar por WhatsApp</button>
      </form>
    </div>
  )
}

export default App