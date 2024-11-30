import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthedUser } from '../redux/actions/authedUser';

const Login = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    dispatch(setAuthedUser(e.target.value));
  };

  return (
    <div className="card question-panel">
      <div className="card-header">
        <p className="card-header-title">Login</p>
      </div>
      <div className="card-content">
        <img className="is-rounded" alt="Login-icon" src="/path-to-icon.png" />
        <select onChange={handleLogin}>
          <option value="">Select User</option>
          {Object.values(users).map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Login;
