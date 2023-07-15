import Email from "./Email";

function Contact() {
  return (
    <div className="contact-page">
      <section className="section-title d-flex align-items-center ps-4">
        <h1>Contact Us</h1>
      </section>
      <Email />
      <div className="text-center my-4">
        <h1>KMED Health Services</h1>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3227.4840920787055!2d-115.11377392330805!3d36.008470372483515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8ce115c99ca8d%3A0x19be5ac8fd9ca851!2s2831%20St%20Rose%20Pkwy%20%23200%2C%20Henderson%2C%20NV%2089052!5e0!3m2!1sen!2sus!4v1689377888931!5m2!1sen!2sus"
            width={"90%"}
            height={"200px"}
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
