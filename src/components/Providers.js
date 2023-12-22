import DataProviders from "./DataProviders";

function Providers() {
  return (
    <div className="providers-section">
      {/* Providers section */}
      <main className="dark-bg">
        <h2 className="text-white align-items-center ps-4 pt-2">Meet our Providers</h2>
        <DataProviders />
      </main>
    </div>
  );
}

export default Providers;
