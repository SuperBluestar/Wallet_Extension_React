import { Outlet } from "react-router";
import styled from "styled-components";
import { topbarHeight, paddingSm, paddingLg } from "../constants/dimentions";

const SwapLayout = styled.div`
    padding: ${paddingLg}px ${paddingSm}px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - ${topbarHeight}px - ${paddingLg * 2}px);
`;

const Swap = () => {
    return (<SwapLayout>
        <Outlet />
    </SwapLayout>)
}

export default Swap;