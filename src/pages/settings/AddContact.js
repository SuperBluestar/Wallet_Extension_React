import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { topbarHeight, paddingLg, contactItemHeight, marginSm, footerHeight, marginLg } from "../../constants/dimentions";
import Title from "../../components/Title";
import Text from "../../styled-components/Text";
import Button from "../../styled-components/Button";
import TrashIcon from '../../components/Icons/Trash';
import InputWhite from "../../styled-components/InputWhite";

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

const AddContact = () => {
    return (
        <>
            <div style={{
                height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px - ${footerHeight}px)`,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>Name</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "23px"
                }}>
                    <InputBox placeholder={"Mark Doe"}/ >
                </div>
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>Address</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "19px"
                }}>
                    <InputBox placeholder={"Public address (0x) or ENS"}/ >
                </div>
                <Text style={{
                    textAlign: "center",
                    marginBottom: "8px"
                }}>Memo</Text>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "34px",
                }}>
                    <InputBox placeholder={"Memo"}/ >
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <Button style={{
                        backgroundColor: "#15EA37",
                        width: "157px",
                        height: "39px"
                    }}>Add contact</Button>
                </div>
            </div>
        </>
    )
}

export default AddContact;