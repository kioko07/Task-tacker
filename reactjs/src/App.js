import { useState } from "react";
import Header from './Header';
import AddTask from "./AddTask";
import Tasks from './Tasks';
import Footer from './Footer';


function App() {
   const [showAdd, setShowAdd] = useState(false)
   const [tasks, setTasks] = useState([
  {
  id: 1,
  text: 'Doctors Appointment',
  day: 'Dec 12th 2023 at 3:00pm',
  reminder: true,

  },
  {
    id: 2,
    text: 'School Meeting',
    day: 'Jan 12th 2024 at 12:00pm',
    reminder: false,
  },
  {
    id: 3,
    text: 'Shopping',
    day: 'Dec 20th 2023 at 3:00pm',
    reminder: true,
  },
  {
    id: 4,
    text: 'Trip',
    day: 'Dec 27th 2023 at 6:00am',
    reminder: false,
  },
  {
    id: 5,
    text: 'Vacation',
    day: 'Dec 30th 2023 at 8:00am',
    reminder: true,
  }
])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Tasks

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !==id))
  }

    //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? {...task, reminder: !task.reminder } : task
      )
    )
  }
  
  return (
    <div className="App">
      <Header onAdd={() => setShowAdd(!showAdd)}/>
     {showAdd && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ?<Tasks tasks={tasks} onDelete={deleteTask} 
      onToggle={toggleReminder} /> : <h2>'No Records To Show'</h2> }
      <Footer/>
      
     
    </div>
  );
}

export default App;
