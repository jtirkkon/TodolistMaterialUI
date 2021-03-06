import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import './App.css';

function App() {
  const [description, setDescription] = useState('');
  const [date, setDate] = useState(new Date());
  const [todos, setTodos] = useState([]);
  
  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, {description: description, date: date}]);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  } 

  const handleDateChange = (date) => {
    setDate(date);
  }

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker value={date} onChange={date => handleDateChange(date)}/>
      </MuiPickersUtilsProvider>
      <TextField name="description" label="Description" onChange={handleDescriptionChange} value={description} 
      style={{marginLeft: 50, marginRight: 50}}/>
      <Button onClick={addTodo} variant="contained" color="primary">Add</Button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date.toString().slice(0, 15)}</td>
          <td>{todo.description}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;
