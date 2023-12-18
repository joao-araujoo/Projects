import { Link } from "react-router-dom";
import "../login.css";

export default function Login() {
  return (
    <>
      <main className="container">
        <div className="form-container">
          <h1>Login</h1>
          <form>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
            <button type="submit">Login</button>
          </form>
          <p>
            Don&apos;t have an account?
            <Link to="/register">Register</Link>
          </p>
        </div>
      </main>
    </>
  );
}
