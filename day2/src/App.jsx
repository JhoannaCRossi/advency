import './App.css'
import backgroundImage from "./assets/backgroundImage.png"

function App() {
    return (
      <div  className="container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>Regalos:</h1>
        <ul>
          <li>Medias</li>
          <li>Gorras</li>
          <li>Tuki</li>
        </ul>
      </div>

      </div>
    );
  }

export default App
