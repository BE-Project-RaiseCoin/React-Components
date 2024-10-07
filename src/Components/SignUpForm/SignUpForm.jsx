import React from "react";
import "./SignUpForm.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const SignUpForm = () => {
	return (
		<div className="wrapper">
			<form action="">
				<h1>Sign Up</h1>

				<div className="input-box">
					<FaUser className="icon" />
					<input type="text" name="username" placeholder="Username" required />
				</div>

				<div className="input-box">
					<RiLockPasswordFill className="icon" />
					<input
						type="password"
						name="password"
						placeholder="Password"
						required
					/>
				</div>

				<div className="input-box">
					<RiLockPasswordFill className="icon" />
					<input
						type="password"
						name="confirm-password"
						placeholder="Confirm Password"
						required
					/>
				</div>

				<button type="submit" className="submit-btn">
					Sign Up
				</button>

				<div className="login-link">
					<p>
						Already have an account? <a href="#">Login</a>
					</p>
				</div>
			</form>
		</div>
	);
};
