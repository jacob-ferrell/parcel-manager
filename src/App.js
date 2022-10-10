import './styles/App.css'
import { useState } from 'react';
import Input from './components/Input';
import MainTable from './components/MainTable';
import CountsTable from './components/CountsTable';
import DuplicatesTable from './components/DuplicatesTable';
import CopyTable from './components/CopyTable';
import {getTodaysDate, getCounts} from './modules/DateFunctions';
import {getOrderData, getDuplicates} from './modules/OrderDataFunctions';

function App() {

  const [input, setInput] = useState('');

  const [todaysDate, setTodaysDate] = useState(getTodaysDate);

  const [counts, setCounts] = useState([]);

  const [currentStore, setCurrentStore] = useState('');

  const [duplicates, setDuplicates] = useState([]);

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
    getOrderData(data);
    setDuplicates(getDuplicates(data));
  }

  const handleCountClick = e => {
    if (!currentStore) return;
    setStores(oldStores => {
      let newVal = {...oldStores};
      newVal[currentStore].counts = counts;
      return newVal;
    })
  }

  const handleCopyClick = e => {
    copyTable();
  }

  const copyTable = () => {
    if (!document.createRange || !window.getSelection) return;
    const table = document.querySelector('#copy-table');
    let range = document.createRange();
    let sel = window.getSelection();
    sel.removeAllRanges();

    try {
      range.selectNodeContents(table);
      sel.addRange(range);
    } catch (e) {
      range.selectNode(table);
      sel.addRange(range);
    }    
    document.execCommand('copy');
    sel.removeAllRanges();
    console.log('copied', table);
  }


  const fillRow = e => {
    const store = e.target.dataset.store;
    const fill = e.target.dataset.fill;
    setStores(oldStores => {
      let newVal = {...oldStores};
      let counts = newVal[store].counts
      if (fill == '') {
        delete newVal[store].counts;
        return newVal;
      }
      newVal[store].counts = Array(6).fill(fill);
      return newVal;
    })
  }

  const tableIsFilled = () => {
    const isFilled =  Object.keys(stores).every(store => {
      return stores[store].hasOwnProperty('counts');
    })
    return isFilled;
  }

  function getStore(input) {
    if (!input.includes('|') || !input.includes(' FL')) return '';
    return input.slice(input.indexOf('|') + 2, input.indexOf(' FL'));
}

  return (
    <div className="App">
      <Input handleChange={handleChange} counts={counts}
      currentStore={currentStore} handleClick={handleCountClick}/>
      <div className='row'>
        <div className='col-md-6'>
          <CountsTable counts={counts} />
        </div>
        <div className='col-md-6'>
          <DuplicatesTable duplicates={duplicates}/>
        </div>
      </div>
      {tableIsFilled() &&
        <button className={'btn btn-info w-100'}
        onClick={handleCopyClick}>Copy Table</button>
      }
      <MainTable stores={stores} fillRow={fillRow}/>
        <CopyTable stores={stores} tableIsFilled={tableIsFilled}/>
    </div>
  );
}

export default App;
