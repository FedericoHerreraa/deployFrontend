import { useState } from "react"
// const res = await axios.get('https://backendmongodeploy.onrender.com/getData')

function App() {
  const [content, setContent] = useState('');

  const sendWhatsAppMessage = () => {
    try {
      console.log(content)
      const whatsappLink = `whatsapp://send?phone=+54-9-11-6296-4493&text=${encodeURIComponent(content)}`;
      window.open(whatsappLink, '_blank');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <h1>Enviar Mensaje por WhatsApp</h1>
      <br />
      <label>Contenido del Mensaje:</label>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <br />
      <button onClick={sendWhatsAppMessage}>Enviar por WhatsApp</button>
    </div>
  )
}

export default App