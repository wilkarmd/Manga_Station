import './App.css';
import Card from './components/Card';
import comics from "./data/comicPortrait.js";
import Navbar from "./components/Navbar.jsx"

function App() {
  const comicList = comics.map((v) => {
    return <Card title={v.name} description={v.description} image={v.image} />;
  });
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <Navbar />
        </nav>
      </header>
      <body>
        <div className='container'>
          <div className='container_cards'>
            <div><h2>Mas Populares de la Semana</h2></div>
            <div className='cards'>
              {comicList}
            </div>
            <div><h2>Capitulos Agregados Recientemente</h2></div>
            <div className='cards'>
              {comicList}
              {comicList}
            </div>
          </div>
          <div className='aside'><h3>Anuncio</h3><h3>Recomendados</h3><h3>Capitulos Pendientes</h3></div>
        </div>
      </body>
    </div>
  );
}


export default App;
