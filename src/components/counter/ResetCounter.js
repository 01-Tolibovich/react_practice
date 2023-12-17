const ResetCounter = (props) => {
  const { resetCounter, text } = props;
  return (
    <div>
      <button onClick={resetCounter}>{text}</button>
    </div>
  );
};

export default ResetCounter;
