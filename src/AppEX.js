import App from './styled-components/App';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Navigate } from 'react-router'
// layouts
import Auth from './layouts/Auth';
// pages
import Main from './pages/Main';
import Doc from './pages/Doc';
import Login from './pages/auth/Login';
import Verify from './pages/auth/Verify';

function AppEX() {
  return (
    <App>
      <Router>
        <Routes>
          {/* <Route path="/" element={<div>Hello</div>}></Route> */}
          <Route path="/" element={<Auth />}>
            <Route path="/" element={<Login />}></Route>
            <Route path="/verify" element={<Verify />}></Route>
          </Route>
          <Route path="/doc" element={<Doc />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </Router>
    </App>
  );
}

export default AppEX;
