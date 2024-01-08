import { useState } from "react"
// const res = await axios.get('https://backendmongodeploy.onrender.com/getData')

function App() {
  const [content, setContent] = useState('');

  const sendWhatsAppMessage = () => {
    try {
      console.log(content)
      const whatsappLink = `https://api.whatsapp.com/send?phone=+5491162964493&text=${encodeURIComponent(content)}`;
      window.open(whatsappLink, '_blank');
      setContent('')
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