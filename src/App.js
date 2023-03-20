import "./styles.css";
import Header from "./components/header/Headers";
import Filter from "./components/filter/Filter";
import Cards from "./components/cards/Cards";
import { hotelsData } from "./statics/data";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Cards hotelsData={hotelsData} />
    </div>
  );
}
