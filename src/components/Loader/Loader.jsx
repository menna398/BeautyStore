import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <button className="loader-btn" disabled>
        <span
          className="spinner-grow spinner-grow-sm me-2"
          role="status"
          aria-hidden="true"
        ></span>

        Loading Products...
      </button>
    </div>
  );
}

export default Loader;