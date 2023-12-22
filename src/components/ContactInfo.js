export function ContactInfo() {
  return (
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
      <span className="span-red">Fax: </span>725-266-7366
      <br />
      <span className="span-red">Address: </span>
      2625 S Rainbow Blvd STE C102, Las Vegas, NV 89146
      {/* 
      Commenting out code for email
      <br /> 
      <span className="span-red">Email: </span>info@kmedhealthservices.com 
      */}
      <br />
      <span className="span-red">Hours: </span>Mon-Fri: 8am-5pm, Sat-Sun: Closed
    </div>
  );
}

export default ContactInfo;
