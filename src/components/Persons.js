const Persons = (props) => {
  const { firstName, lastName, email, image } = props;

  return (
    <div>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
      <p>{email}</p>
      <img src={image} alt="" />
    </div>
  );
};

export default Persons;
