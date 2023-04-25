import { useContext, useState } from 'react';
import { BsGoogle } from 'react-icons/bs';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import "./login.scss"

const Login = () => {

  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({type:"LOGIN", payload:user})
        navigate('/');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
    })
    
  }

  return (
    <>
        <div class="header-logo">
          <img src={Logo} alt="img" />
        </div>
        <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={handleLogin}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="form-group mt-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control mt-1"
                placeholder="Enter email"
                onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="form-group mt-3">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>
              <div className="f-flex column justify-content-between mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <button type="submit" className="btn btn-primary">
                  Sign in with Google
                  <BsGoogle />
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                Forgot <a href="#">password?</a>
              </p>
            </div>
          </form>
      </div>
    </>
  )
}

export default Login