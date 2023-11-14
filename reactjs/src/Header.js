    
    const Header = ({onAdd}) => {
      return (
    <header>
      <h1>Task Tracker</h1>
      <button className="btn" onClick={onAdd}>Add</button>
    </header>
      )
    }

    export default Header 