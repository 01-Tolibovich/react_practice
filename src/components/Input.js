import { useState } from "react";

const Input = () => {
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<h1>Form</h1>
			<label for="user-name">User name</label>
			<input type="text" id="user-name" name="user-name" value={userName} onChange={e => setUserName(e.target.value)} placeholder="First name" />
      <label for="password">Password</label>
      <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
		</>
	);
};

export default Input;