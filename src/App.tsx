import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');

  return (
    <div className="App">
      <form>
        <label form="res-date">Choose date</label>
   <input type="date" id="res-date" />
   <label form="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   <br/><label form="guests">Number of guests</label>
   <input type="number" placeholder="1" min="1" max="10" id="guests" />
   <label form="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
   </select>
   <br/><input type="submit" value="Make Your reservation" />
      </form>
    </div>
  );
}

export default App;