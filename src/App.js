import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navi from "./components/Navi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <section id="header-bg">
        <div id="header-img"></div>
      </section>
      <Navi />
      <Footer />
    </div>
  );
}

export default App;
