import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./components/Navi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navi />
      <h1>Hello World</h1>
      <p>Bye World</p>
      <Footer />
    </div>
  );
}

export default App;
