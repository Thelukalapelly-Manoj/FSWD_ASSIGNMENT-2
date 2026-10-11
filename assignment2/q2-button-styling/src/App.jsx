
import './App.css';

function Button({ variant = 'primary', children = 'Click Me' }) {
  const styles = {
    padding: '12px 22px',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    cursor: 'pointer',
    margin: '10px'
  };

  return (
    <button
      className={`custom-button ${variant}`}
      style={styles}
    >
      {children}
    </button>
  );
}

function App() {
  return (
    <div className="container">
      <h1>Button Styling</h1>
      <Button variant="primary">Primary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
    </div>
  );
}

export default App;
