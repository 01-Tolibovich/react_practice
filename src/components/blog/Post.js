const Post = (props) => {
  const { id, userId, title, body } = props;

  return (
    <div>
      <br />
      <h1>{title}</h1>
      <p>{body}</p>
      <span>{userId}</span>
      <small>{id}</small>
      <br />
    </div>
  );
};

export default Post;
