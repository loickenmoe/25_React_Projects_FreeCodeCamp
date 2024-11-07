import "../styles/app.css";
import Header from "../components/Header";
import TabTest from "./custom-tabs/tab-test";
// import LightDarkMode from "./light-dark-mode";
// import ScrollIndicator from "./scroll-indicator";
// import LoadMoreData from "./load-more-data";

// import TreeView from "./tree-view";
// import menus from "./tree-view/data";

// import QrCodeGenerator from "./qr-code-generator";
// import ImageSlider from "./image-slider";
// import Accordian from './accordian';
// import RandomColor from './random-color';
// import StarRating from './star-rating';

function App() {
  return (
    <div className="App">
      <Header />
      {/* accordian component */}
      {/* <Accordian /> */}

      {/* random color component */}
      {/* <RandomColor /> */}

      {/* start rating component */}
      {/* <StarRating noOfStarts={11} /> */}

      {/* image slider component */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} /> */}

      {/* load more products components */}
      {/* <LoadMoreData /> */}

      {/* tree view component/ menu ui component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* qr code generator */}
      {/* <QrCodeGenerator /> */}

      {/* light and dark mode component */}
      {/* <LightDarkMode /> */}

      {/* scroll indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* custom tabs component */}
      <TabTest />
      
    </div>
  );
}

export default App;
