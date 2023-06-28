const ErrorExample = () => {
  let count = 0;

  return (
    <>
      <h2>{count}</h2>
      <button
        className="btn"
        type="button"
        onClick={() => {
          count++;
          console.log(count);
        }}
      >
        Increase count
      </button>
    </>
  );
};

export default ErrorExample;
