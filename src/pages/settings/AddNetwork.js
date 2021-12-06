// import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { topbarHeight, paddingLg, marginSm, paddingSm, marginLg, footerHeight } from "../../constants/dimentions";
import Text from "../../styled-components/Text";
import Button from "../../styled-components/Button";
import InputWhite from "../../styled-components/InputWhite";
import PerfectScrollbar from 'react-perfect-scrollbar';

const InputBox = styled(InputWhite)`
    border: none;
    width: 187px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.25);
    text-align: center;
    &:focus {
        border: none;
        outline: none;
    }
    &::placeholder {
        color: black;
    }
`;

const AddNetwork = () => {
    return (
        <>
            <PerfectScrollbar style={{
                height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px - ${footerHeight}px)`,
                paddingRight: `${paddingSm}px`
            }}>
            {/* <ScrollContainer style={{
                height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px - ${footerHeight}px)`,
            }} vertical={true} horizontal={false} hideScrollbars={true}> */}
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>Network Name</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "23px"
                }}>
                    <InputBox placeholder={"Name"}/ >
                </div>
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>RPC Url</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "23px"
                }}>
                    <InputBox placeholder={"New RPC Network"}/ >
                </div>
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>Chain Id</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "23px"
                }}>
                    <InputBox placeholder={"Chain id"}/ >
                </div>
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>Symbol</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "23px"
                }}>
                    <InputBox placeholder={"Symbol (optional)"}/ >
                </div>
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>Block explorer url</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "23px"
                }}>
                    <InputBox placeholder={"Url"}/ >
                </div>
            {/* </ScrollContainer> */}
            </PerfectScrollbar>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: `${marginLg}px`,
            }}>
                <Button style={{
                    backgroundColor: "#15EA37",
                    width: "157px",
                    height: "39px"
                }}>Add Network</Button>
            </div>
        </>
    )
}

export default AddNetwork;