import { useState } from "react";
import supabase from "@/data/supabaseClient.js";

function SignInForm() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function handleSubmit(event) {
		event.preventDefault();
		const { user, session, error } = await supabase.auth.signIn({
			email,
			password,
		});

		if (error) {
			// Sign in Failed
			alert(error.message);
		} else {
			// Sign in Sucess
			alert("Signed in!");
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Email"
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Password"
			/>
			<button type="submit">Sign in</button>
		</form>
	);
}

export default SignInForm;
