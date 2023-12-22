import doctorImg from "../assets/images/doctor.jpg";

function Services() {
  return (
    <div className="p-4 d-flex flex-row justify-content-evenly align-items-center">
      <div>
        <h2>Services we provide!</h2>
        <ul>
          <li>Provide preventive care and teach healthy lifestyle choices</li>
          <li>Identify and treat medical conditions</li>
          <li>
            Assess the urgency of your medical problems and direct you to the
            best place for that care
          </li>
          <li>Make referrals to medical specialists when necessary</li>
          <li>Management of chronic (long-lasting) conditions</li>
          <li>Labs and imaging ordering</li>
        </ul>
      </div>
      <img
        className="img-insurance"
        src={doctorImg}
        alt="doctor crossing arms"
      />
    </div>
  );
}

export default Services;
