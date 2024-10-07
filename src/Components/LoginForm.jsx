import React from "react";
import "./LoginForm.css";

export const LoginForm = () => {
	return (
		<div className="wrapper">
			<form action="">
				<h1>Login</h1>

				<div className="input-box">
					<input type="text" name="username" placeholder="Username" required />
				</div>

				<div className="input-box">
					<input type="text" name="username" placeholder="Username" required />
				</div>

				<div className="remember-forgot">
					<label>
						<input type="checkbox" />
						Remember me
					</label>
					<a href="#">Forgot Password</a>
				</div>

				<div className="submit-button">
					<input type="submit" value="Login" />
				</div>
			</form>
		</div>
	);
};
