import './App.css';

function App() {
  const getDate = () => {
    const today = new Date()
    const dateFormat = []
    dateFormat.push(today.toLocaleDateString("en-US", { year: 'numeric' }));
    today.toLocaleDateString("en-US", { month: 'numeric' }) > 10 ? 
    dateFormat.push(today.toLocaleDateString("en-US", { month: 'numeric' })) :
    dateFormat.push(0 + today.toLocaleDateString("en-US", { month: 'numeric' }));
    dateFormat.push(today.toLocaleDateString("en-US", { day: 'numeric' }));
    return dateFormat.join('-')
  }
  console.log(getDate())
  
  return (
    <div className="App">
      <h1> hello! </h1>
    </div>
  );
}

export default App;
