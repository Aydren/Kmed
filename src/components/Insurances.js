import insuranceImg from "../assets/images/imgInsurance.jpg";

function Insurances() {
  return (
    <div className="p-4 d-flex flex-row justify-content-evenly align-items-center">
      <img
        className="img-insurance"
        src={insuranceImg}
        alt="insurance accepted"
      />
      <div>
        <h2>Insurnace's we accept!</h2>
        <ul>
          <li>Medicare</li>
          <li>Medicaid</li>
          <li>Most Medicare PPO Advantage plans</li>
          <li>Allwell</li>
          <li>Ambetter</li>
          <li>Siera Health</li>
        </ul>
      </div>
    </div>
  );
}

export default Insurances;
