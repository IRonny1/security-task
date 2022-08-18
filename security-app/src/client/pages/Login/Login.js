import { Link } from "react-router-dom";

import { MuiButton, MuiInput } from "../../components";

import "./Login.scss";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <MuiInput label="Email" variant="outlined" />
        <MuiInput label="Password" type="password" variant="outlined" />
        <span className="login-buttons">
          <MuiButton variant="contained">
            <Link to="/signup">Sign Up</Link>
          </MuiButton>
          <MuiButton variant="contained">Sign In</MuiButton>
        </span>
      </div>
    </div>
  );
};

export default Login;
