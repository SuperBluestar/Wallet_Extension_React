import { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import styled from "styled-components";
import { topbarHeight, paddingLg, contactItemHeight, marginSm, footerHeight, marginLg } from "../../constants/dimentions";
import Title from "../../components/Title";
import TextMd from "../../styled-components/TextMd";
import ButtonGreen from "../../styled-components/ButtonGreen";
import TrashIcon from '../../components/Icons/Trash';
import InputWhite from "../../styled-components/InputWhite";

const InputBox = styled(InputWhite)`
    border: none;
    box-shadow: 0px 2px 10px grey;
    margin: ${marginSm}px 0;
    text-align: center;
    &:focus {
        border: none;
        outline: none;
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
                <TextMd style={{
                    textAlign: "center",
                }}>Name</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"Mark Doe"}/ >
                </div>
                <TextMd style={{
                    textAlign: "center",
                }}>Address</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"Public address (0x) or ENS"}/ >
                </div>
                <TextMd style={{
                    textAlign: "center",
                }}>Memo</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"Memo"}/ >
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: `${marginLg}px`,
                }}>
                    <ButtonGreen style={{
                        width: "80%",
                    }}>Add contact</ButtonGreen>
                </div>
            </div>
        </>
    )
}

export default AddContact;