function App() {

  function handleNameChange() {
    const names = ["Earn","Grow","Give"];
    const int = Math.floor(Math.random()*3);
    return names(int)
  }
  return (
    <div>
      Subscribe to vino
      <p>Let's {handleNameChange()}Money</p>
    </div>
  );
        
  
  }
export default App;
