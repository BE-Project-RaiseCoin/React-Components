import React from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export const LoginForm = () => {
	return (
		<div className="wrapper">
			<form action="">
				<h1>Login</h1>

				<div className="input-box">
                    <FaUser className="icon" />
					<input type="text" name="username" placeholder="Username" required />
				</div>

				<div className="input-box">
                    <RiLockPasswordFill className="icon" />
					<input type="password" name="password" placeholder="Password" required />
				</div>

				<div className="remember-forgot">
					<label>
						<input type="checkbox" />
						Remember me
					</label>
					<a href="#">Forgot Password?</a>
				</div>

				<button type="submit" className="submit-btn">
                    Login
                </button>

                <div className="register-link">
                    <p>Don't have an account? <a href="#">Register</a></p>
                </div>
			</form>
		</div>
	);
};
