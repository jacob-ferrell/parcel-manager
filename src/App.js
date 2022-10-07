import { getAllByPlaceholderText } from '@testing-library/react';
import { useState } from 'react';
import Input from './components/Input';
function App() {

  const [input, setInput] = useState('');

  const [todaysDate, setTodaysDate] = useState('');

  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const handleChange = e => setInput(e.target.value);

  const handleCountClick = e => {
    getDate();
  }

  function getDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = (today.getMonth() + 1).toString().padStart(2, '0');
    let dd = (today.getDate()).toString().padStart(2, '0');
    const date = mm + '/' + dd + '/' + yyyy;
    setTodaysDate(date);
}
  return (
    <div className="App">
      <Input handleChange={handleChange}/>
    </div>
  );
}

export default App;
