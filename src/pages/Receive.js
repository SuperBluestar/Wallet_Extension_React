import styled from 'styled-components';
import { paddingSm, topbarHeight } from '../constants/dimentions';
import { Outlet } from 'react-router-dom';

const ReceiveLayout = styled.div`
    padding: ${paddingSm}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - ${topbarHeight}px - ${paddingSm * 2}px);
`;

const Receive = () => {
    return (
        <ReceiveLayout>
            <Outlet />
        </ReceiveLayout>
    )
}

export default Receive;