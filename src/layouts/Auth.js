import { Outlet } from 'react-router-dom';
import Center from '../styled-components/Center';

const Auth = () => {
    return (
        <Center style={{
            padding: "10px 22px",
            flexDirection: "column",
            height: "100%",
        }}>
            <Outlet />
        </Center>
    )
}

export default Auth;