import { useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
// layouts
import Auth from './layouts/Auth';
// pages
import Main from './pages/Main';
import Doc from './pages/Doc';
import Settings from './pages/Settings';
import SettingsIndex from './pages/settings/Index';
import SettingsGeneral from './pages/settings/General';
import SettingsSecurity from './pages/settings/Security';
import SettingsAdvanced from './pages/settings/Advanced';
import SettingsContacts from './pages/settings/Contacts';
import SettingsAddContact from './pages/settings/AddContact';
import SettingsNetworks from './pages/settings/Networks';
import SettingsAddNetwork from './pages/settings/AddNetwork';
import AddFunds from "./pages/AddFunds";
import AddFundsIndex from "./pages/add-funds/Index";
import AddFundsCreditDetail from "./pages/add-funds/CreditDetail";
import Receive from './pages/Receive';
import ReceiveIndex from './pages/receive/Index';
import ReceiveDetail from './pages/receive/Detail';
import ReceiveQR_Code from './pages/receive/QR_Code';
import Send from './pages/Send';
import SendIndex from './pages/send/Index';
import SendDetail from './pages/send/Detail';
import SendConfirm from './pages/send/Confirm';
import Swap from './pages/Swap';
import SwapIndex from './pages/swap/Index';
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
        <Routes >
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
            <Route path="settings" element={<Settings />}>
              <Route path="" element={<SettingsIndex />}></Route>
              <Route path="general" element={<SettingsGeneral />}></Route>
              <Route path="security" element={<SettingsSecurity />}></Route>
              <Route path="advanced" element={<SettingsAdvanced />}></Route>
              <Route path="contacts" element={<SettingsContacts />}></Route>
              <Route path="add-contact" element={<SettingsAddContact />}></Route>
              <Route path="networks" element={<SettingsNetworks />}></Route>
              <Route path="add-network" element={<SettingsAddNetwork />}></Route>
            </Route>
            <Route path="add-funds" element={<AddFunds />}>
              <Route path="" element={<AddFundsIndex />}></Route>
              <Route path="credit-detail" element={<AddFundsCreditDetail />}></Route>
            </Route>
            <Route path="receive" element={<Receive />}>
              <Route path="" element={<ReceiveIndex />} ></Route>
              <Route path="detail/:method" element={<ReceiveDetail />} ></Route>
              <Route path="qr-code" element={<ReceiveQR_Code />} ></Route>
            </Route>
            <Route path="send" element={<Send />}>
              <Route path="" element={<SendIndex />} ></Route>
              <Route path="detail" element={<SendDetail />} ></Route>
              <Route path="confirm" element={<SendConfirm />} ></Route>
            </Route>
            <Route path="swap" element={<Swap />}>
              <Route path="" element={<SwapIndex />}></Route>
            </Route>
          </Route>
        </Routes>
      </Router>
    </App>
  );
}

export default AppEX;
