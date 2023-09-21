import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import AddressDisplay from './components/AddressDisplay';

function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name='Public IPv4 Address'>
        <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name='Public IPv6 Address'>
        <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>
    </div>
  );
}

export default App;
