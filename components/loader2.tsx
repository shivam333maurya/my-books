const Loader = () => {
  return (
    <div className="loader">
      {Array.from({ length: 26 }).map(
        (_, id) => id !== 0 && <div key={id + 1} className="dot"></div>
      )}
    </div>
  );
};

export default Loader;
