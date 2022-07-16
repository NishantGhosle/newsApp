import "./App.css";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

function App() {
  return (
    <>
      <Navbar />
      <News pageSize= {5}/>
    </>
  );
}

export default App;
