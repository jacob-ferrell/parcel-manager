import './styles/App.css'
import { useState } from 'react';
import Input from './components/Input';
import MainTable from './components/MainTable';
import CountsTable from './components/CountsTable';
import {getTodaysDate, getCounts} from './modules/DateFunctions';

function App() {

  const [input, setInput] = useState('');

  const [todaysDate, setTodaysDate] = useState(getTodaysDate);

  const [counts, setCounts] = useState([]);

  const [currentStore, setCurrentStore] = useState('');

  const [stores, setStores] = useState(
    {
      'WEST PALM BEACH': { number: 550 },
      'BOYNTON BEACH': { number: 808 },
      'WELLINGTON': { number: 1168 },
      'BOCA RATON': { number: 554},
      'MARGATE': { number: 1424},
      'CORAL SPRINGS': { number: 1136},
      'SAWGRASS': { number: 551},
      'FORT LAUDERDALE': { number: 543 },
      'DAVIE': { number: 1258 },
      'PEMBROKE PINES': { number: 559},
      'AVENTURA': { number: 558},
      'MIAMI BEACH': { number: 1498},
      'HIALEAH': { number: 555},
      'DORAL': { number: 1502},
      'PINECREST': { number: 1503},
      'DADELAND': { number: 557},
      'WEST KENDALL': { number: 552},
      'TROPICAIRE': { number: 553},
      'FORT MYERS': { number: 431}
  }
  )

  const handleChange = e => {
    const data = e.target.value;
    setInput(data);
    setTodaysDate(getTodaysDate());
    setCounts(getCounts(data));
    setCurrentStore(getStore(data));

  }

  const handleCountClick = e => {
    if (!currentStore) return;
    setStores(oldStores => {
      let newVal = {...oldStores};
      newVal[currentStore].counts = counts;
      return newVal;
    })
  }

  function getStore(input) {
    if (!input.includes('|') || !input.includes(' FL')) return '';
    let match = input.slice(input.indexOf('|') + 2, input.indexOf(' FL'));
    return match;
}

{/*   function getTodaysDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = (today.getMonth() + 1).toString().padStart(2, '0');
    let dd = (today.getDate()).toString().padStart(2, '0');
    const date = mm + '/' + dd + '/' + yyyy;
    return date;
}

  function getCounts() {
    let totalPackages = getTotalPackages();
    let [pastDue, dueToday, future] = [0, 0, 0];
    let dates = getInHandDates();
    let noInHand = totalPackages - dates.length;
    const todayParsed = Date.parse(todaysDate);
    dates.forEach(date => {
        const parsed = Date.parse(date);
        if (parsed == todayParsed) dueToday++;
        else if (todayParsed > parsed) pastDue++;
        else if (todayParsed < parsed) future++;
    });
    setCounts([pastDue, dueToday, future, noInHand]);
  }

  function getInHandDates() {
    return input.match(/\d{2}[/]\d{2}[/]\d{4}/g) || [];
  }
  function getTotalPackages() {
    return (input.match(/In-Hand\sDate\:/g) || []).length;
  } */}

  return (
    <div className="App">
      <Input handleChange={handleChange} counts={counts}
      handleClick={handleCountClick}/>
      <CountsTable counts={counts}></CountsTable>
      <MainTable stores={stores}/>
    </div>
  );
}

export default App;
