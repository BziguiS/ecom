import './App.css';
import Header from './Components/Header';
import Filter from './Components/Filter';
import Shop from './Components/Shop';

function App() {
  return (
    <div className="App">
      <main className='container'>
        <Header></Header>
        <Filter></Filter>
        <Shop></Shop>
      </main>
    </div>
  );
}

export default App;
