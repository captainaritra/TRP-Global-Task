import "./App.css";
import ApplicationChart from "./components/ApplicationChart";
import CurrentOpeningTable from "./components/CurrentOpeningTable";
import Header from "./components/Header";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <Header />
      <Overview />
      <ApplicationChart/>
      <CurrentOpeningTable/>
    </>
  );
}

export default App;
