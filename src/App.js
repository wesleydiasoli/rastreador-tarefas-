import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


const App = () => {
    
  const[tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at Home',
        day: 'Feb 6th at 3:30pm',
        reminder: true,
    },
    {
        id: 1,
        text: 'Make food',
        day: 'Feb 5th at :30pm',
        reminder: false,
    },
])

//delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== 
  id))
}

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDele={deleteTask} />
    </div>
  )
}


export default App
