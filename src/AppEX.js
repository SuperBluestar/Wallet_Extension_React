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
import Vote from './pages/Vote';
import VoteSuccess from './pages/VoteSuccess';
import Login from './pages/auth/Login';
import Verify from './pages/auth/Verify';
import MainLayout from './layouts/MainLayout';

import styled from "styled-components";
import { appWidth, appHeight } from "./constants/dimentions";
const App = styled.div`
  width: ${appWidth}px;
  height: ${appHeight}px;
`;

function AppEX() {
  return (
    <App>
      <Router>
        <Routes>
          {/* <Route path="/" element={<div>Hello</div>}></Route> */}
          <Route path="/" element={<Auth />}>
            <Route path="" element={<Login />}></Route>
            <Route path="verify" element={<Verify />}></Route>
          </Route>
          <Route path="/doc" element={<Doc />}></Route>
          <Route path="/main" element={<MainLayout />}>
            <Route path="" element={<Main />}></Route>
            <Route path="vote/:id" element={<Vote />}></Route>
            <Route path="vote-success" element={<VoteSuccess />}></Route>
          </Route>
        </Routes>
      </Router>
    </App>
  );
}

export default AppEX;
