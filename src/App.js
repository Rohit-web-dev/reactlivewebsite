import "./App.css";
import { Header } from "./components/header/Header";
import "antd/dist/antd.css";
import { Home } from "./components/home/Home";

function App() {
  return (
    <div className="grand">
      <div className="App">
        <Header />
        <Home />
      </div>
    </div>
  );
}

export default App;
