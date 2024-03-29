import Safety from "./Safety";
import Mission from "./Mission";
import Telemed from "./Telemed";

function Home() {
  return (
    <div className="home-page">
      <section className="section-title d-flex align-items-center ps-4">
        <h1>Home page</h1>
      </section>
      <div>
        <Mission />
      </div>
      <div>
        <Safety />
      </div>
      <div>
        <Telemed />
      </div>
    </div>
  );
}

export default Home;
