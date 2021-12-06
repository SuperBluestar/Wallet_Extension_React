import styled from "styled-components";
import { switchHeight, switchWidth } from "../constants/dimentions";
import { gray, green, black } from "../constants/colors";

const Container = styled.div`
    width: ${switchWidth}px;
    height: ${switchHeight}px;
    border-radius: 1000px;
    display: flex;
    align-items: center;
    background-color: ${gray};
    & > div {
        border: 1px solid black;
        width: ${switchHeight - 2}px;
        height: ${switchHeight - 2}px;
        border-radius: 1000px;
        box-sizing: border-box;
        margin-left: 0;
        transition: all 0.5s;
    }
    &.open {
        background-color: #15EA37;
    }
    &.open > div {
        margin-left: calc(100% - 14px);
        border: none;
        background-color: #4BB78F;
    }
`;

const Switch = ({on = false, ...props}) => {
    return (
        <Container className={`${on ? "open" : ""}`} {...props}>
            <div></div>
        </Container>
    )
}

export default Switch;
