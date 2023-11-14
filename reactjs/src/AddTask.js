import { useState } from "react"

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState('false');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Please add a Task')
    }

    onAdd({ text, day, reminder })

    setText('')
    setDay('')
    setReminder(false)
  }
  
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control add-task" >
         <label>Task</label>
         <br />
         <input type="text"
          required
          placeholder="Add Task"
          value={text}
          onChange={(e) =>setText(e.target.value)}
        />
      </div>
      <div className="form-control day-time">
         <label>Day & Time</label>
         <br />
         <input type="text"
          placeholder="Add Day & Time"
          required
          value={day}
          onChange={(e) =>setDay(e.target.value)}
        />
      </div>
      
      <div className="form-control" id="check">
         <label>Set Reminder</label>
         <input type="checkbox"
         checked={reminder}
          value={reminder}
          onChange={(e) =>setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value='Save Task' className="button" />
    </form>
  )
}

export default AddTask
