import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { paddingLg, topbarHeight } from "../constants/dimentions";

const AddFundsLayout = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${paddingLg}px;
    justify-content: center;
    align-items: center;
    height: calc(100vh - ${topbarHeight}px);
    box-sizing: border-box;
`;

const AddFunds = () => {
    return (
        <AddFundsLayout>
            <Outlet />
        </AddFundsLayout>
    )
}

export default AddFunds;