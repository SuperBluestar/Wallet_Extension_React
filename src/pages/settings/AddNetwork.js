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

const AddNetwork = () => {
    return (
        <>
            <ScrollContainer style={{
                height: `calc(100vh - ${topbarHeight}px - 39px - ${paddingLg * 2}px - ${footerHeight}px)`,
            }} vertical={true} horizontal={false} hideScrollbars={true}>
                <TextMd style={{
                    textAlign: "center",
                }}>Network Name</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"Name"}/ >
                </div>
                <TextMd style={{
                    textAlign: "center",
                }}>RPC Url</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"New RPC Network"}/ >
                </div>
                <TextMd style={{
                    textAlign: "center",
                }}>Chain Id</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"Chain id"}/ >
                </div>
                <TextMd style={{
                    textAlign: "center",
                }}>Symbol</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"Symbol (optional)"}/ >
                </div>
                <TextMd style={{
                    textAlign: "center",
                }}>Block explorer url</TextMd>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                    <InputBox placeholder={"Url"}/ >
                </div>
            </ScrollContainer>
            <div style={{
                display: "flex",
                justifyContent: "center",
                marginTop: `${marginLg}px`,
            }}>
                <ButtonGreen style={{
                    width: "80%",
                }}>Add contact</ButtonGreen>
            </div>
        </>
    )
}

export default AddNetwork;