const SimpleComponent = (props) => {
  const { animal, age } = props;
  return (
    <div>
      <h1>
        May {animal} is {age} yars old
      </h1>
    </div>
  );
};

export default SimpleComponent;
