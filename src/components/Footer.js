function Footer() {
  return (
    <div className="footer text-footer d-flex flex-column justify-content-center align-items-center text-center m-auto p-4">
      <section>
        <div className="fs-3">
          <span className="span-red">K</span>eeping
          <span className="span-red">M</span>edical
          <span className="span-red">E</span>xperiences
          <span className="span-red">D</span>ignified at all times!
        </div>
        <p>
          We at K-Med Health Services, presue to be the best providers of
          quality house call health care services. Providing the perfect balance
          between health and care in the comfort of your home.
        </p>
      </section>
      <section className="mt-4">
        <div>
          K-MED Health Services
          <div>
            <span className="span-red"> Phone (General inquiries):</span>{" "}
            <a href="tel:702-600-3721" className="anchor-footer">
              702-600-3721
            </a>{" "}
            ext.1
            <span className="divider">|</span>
            <span className="span-red">Phone (Appointments):</span>{" "}
            <a href="tel:702-600-3721" className="anchor-footer">
              702-600-3721
            </a>{" "}
            ext.2
          </div>
          <span className="span-red">Fax:</span> 725-266-7366
          <br />
          <span className="span-red">Address:</span> 7455 Arroyo Crossing Pkwy,
          Ste 220, Las Vegas, NV 89113
          <br />
          <span className="span-red">Email:</span> info@kmedhealthservices.com
          <br />
          <span className="span-red">Hours:</span> Mon-Fri: 8am-5pm, Sat-Sun:
          Closed
        </div>
      </section>
    </div>
  );
}

export default Footer;
