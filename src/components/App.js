import '../styles/app.css';
import Header from "../components/Header"
// import Accordian from './accordian';
// import RandomColor from './random-color';
import StarRating from './star-rating';


function App() {
  return (
    <div className="App">
      <Header />
      {/* accordian component */}
      {/* <Accordian /> */}

      {/* random color component */}
      {/* <RandomColor /> */}

      {/* start rating component */}
      <StarRating noOfStarts={11} />
    </div>
  );
}

export default App;
