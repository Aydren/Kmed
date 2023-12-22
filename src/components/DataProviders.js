function DataProviders() {
  const providersData = [
    {
      name: "Bernard Addo-Quaye, MD",
      title: "Medical Director",
      accepting: "Not Accepting New Patients",
      info: "hello world",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Jingle Kavinta, APRN, FNP-C",
      title: "Primary Care Provider",
      accepting: "Accepting New Patients",
      info: "hello world",
      photo: "https://via.placeholder.com/150",
    },
    {
      name: "Richardo Asuncion, APRN, FNP-C",
      title: "Primary Care Provider",
      accepting: "Not Accepting New Patients",
      info: "hello world",
      photo: "https://via.placeholder.com/150",
    },
  ];

  let providerMap = providersData.map(provider => {
    return (
      <div
        key={provider.name}
        className="provider-list d-flex flex-column text-white text-center pt-2"
      >
        <section>
          <div>
            <img src="https://via.placeholder.com/200" alt="Provider" />
          </div>
          <div className="px-2">
            <h2>{provider.name}</h2>
            <h3>{provider.title}</h3>
            <p>{provider.accepting}</p>
            {/* <p>{provider.info}</p> removed until we get a description from our providers */}
          </div>
        </section>
      </div>
    );
  });
  return (
    <div className="d-flex justify-content-evenly flex-wrap">{providerMap}</div>
  );
}

export default DataProviders;
