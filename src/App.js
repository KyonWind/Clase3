import './css/style.css';
import NavBar from './components/Navbar';
import SugarSintax from './components/SugarSintax';


function App() {
  return (
    <div className="App">
      <header className="">
       <NavBar/>
      </header>
      <main className='flex jc flow-c'>
        <h2>SUGAR SYNTAX</h2>
        "<SugarSintax/>
      </main>
    </div>
  );
}

export default App;
