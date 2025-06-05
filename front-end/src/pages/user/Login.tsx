// style
import './loginStyles.scss';

// store
import useUserStore from "./useUserStore";

const Login = () => {
  const userStore = useUserStore();
  userStore.fetchListIfNeeded();
  if (userStore.loggedInUser) {
    window.location.replace('/user');
  }

  return (
    <div className="main-layout">
      <div>
        <div className="wrapper">
            <div className="form-content">
                <h2 className="form-head"> Sign In </h2>
                <div className="form-body">
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                    <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                    <button onClick={() => useUserStore.getState().login()}>Login</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Login;