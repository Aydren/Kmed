import Email from "./Email";

function Contact() {
  return (
    <div className="contact-page">
      <section className="section-title d-flex align-items-center ps-4">
        <h1>Contact Us</h1>
      </section>
      <Email />
      <div className="text-center my-4">
        <h2>KMED Health Services</h2>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.0075050160503!2d-115.24561574140189!3d36.14203053282894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c0dbec40478b%3A0xe44cf505e9228faa!2s2625%20S%20Rainbow%20Blvd%20STE%20C102%2C%20Las%20Vegas%2C%20NV%20891465181!5e0!3m2!1sen!2sus!4v1698099587401!5m2!1sen!2sus"
            width={"90%"}
            height={"250px"}
            loading={"lazy"}
            referrerPolicy={"no-referrer-when-downgrade"}
            title={"KMED google maps location"}
          ></iframe>
        </div>
        <div>
          PHONE{" "}
          <a href="tel:702-600-3721" className="anchor-contact">
            702-600-3721
          </a>
          <span className="divider">|</span>
          FAX{" "}
          <a href="tel:725-266-7366" className="anchor-contact">
            725-266-7366
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
