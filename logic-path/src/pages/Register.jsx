// import { Link } from "react-router-dom";

// export default function Register() {
//   return (
//     <div className="auth-container">
//       <h2>Register</h2>

//       <form>
//         <input type="text" placeholder="Name" required /><br />
//         <input type="email" placeholder="Email" required /><br />
//         <input type="password" placeholder="Password" required /><br />
//         <input type="password" placeholder="Confirm Password" required /><br />
//         <button type="submit">Create Account</button>
//       </form>

//       <p>
//         Already have an account? <Link to="/login">Login</Link>
//       </p>
//     </div>
//   );
// }
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create Account</h2>

        <div className="input-group">
          <label>Name</label>
          <div className="input-field">
            <input type="text" placeholder="Enter your name" />
            <span className="icon">👤</span>
          </div>
        </div>

        <div className="input-group">
          <label>Email</label>
          <div className="input-field">
            <input type="email" placeholder="Enter your email" />
            <span className="icon">📧</span>
          </div>
        </div>

        <div className="input-group">
          <label>Password</label>
          <div className="input-field">
            <input type="password" placeholder="Create a password" />
            <span className="icon">🔒</span>
          </div>
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <div className="input-field">
            <input type="password" placeholder="Confirm your password" />
            <span className="icon">🔒</span>
          </div>
        </div>

        <button className="register-btn">Register</button>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}