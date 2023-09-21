import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name='Exhibit 1'></Exhibit>
      <Exhibit name='Exhibit 2'></Exhibit>
      <Exhibit name='Exhibit 3'></Exhibit>
    </div>
  );
}

export default App;
