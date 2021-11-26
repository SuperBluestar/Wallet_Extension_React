import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { paddingSm } from "../constants/dimentions";

const CenterView = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${paddingSm}px 22px;
    flex-direction: column;
    height: 100%;
`;

const Auth = () => {
    return (
        <CenterView>
            <Outlet />
        </CenterView>
    )
}

export default Auth;