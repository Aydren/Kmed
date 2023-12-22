import ContactInfo from './ContactInfo'

function Footer() {
  return (
    <div className="footer text-footer d-flex flex-column justify-content-center align-items-center text-center m-auto p-4">
      <section>
        <div className="fs-3">
          <span className="span-red">K</span>eeping
          <span className="span-red">M</span>edical
          <span className="span-red">E</span>xperiences
          <span className="span-red">D</span>ignified
        </div>
        <p>
          We at K-Med Health Services, presue to be the best providers of
          quality house call health care services. Providing the perfect balance
          between health and care in the comfort of your home.
        </p>
      </section>
      <section className="mt-4">
        <ContactInfo />
      </section>
    </div>
  );
}

export default Footer;
