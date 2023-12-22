import Insurances from "./Insurances";
import Providers from "./Providers";
import Services from "./Services";

function About() {
  return (
    <div className="about-page">
      <section className="section-title d-flex align-items-center ps-4 c-white">
        <h1>About page</h1>
      </section>
      <Insurances />
      <Services />
      <Providers />
    </div>
  );
}

export default About;
