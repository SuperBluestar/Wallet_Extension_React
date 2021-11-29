import { useState } from 'react';
import ComboBox from '../../components/ComboBox';
import TextMd from '../../styled-components/TextMd';
import AmountInput from "../../components/AmountInput";
import ButtonGreen from '../../styled-components/ButtonGreen';
import { marginMd, marginSm, marginLg } from '../../constants/dimentions';
import styled from 'styled-components';
import { lightgray, red } from '../../constants/colors';
import ReactModal from 'react-modal';
import Success from '../../components/Success';
import Spinner from '../../components/Spinner';
import TextSm from '../../styled-components/TextSm';
import { useNavigate } from 'react-router';

const AmountWarning = styled.div`
    color: ${red};
`;

const AmountWrapper = styled.div`
    position: relative;
    width: 100vw;
    display: flex;
    justify-content: center;
    & ${AmountWarning} {
        position: absolute;
        top: 0;
    }
`

const Index = () => {
    const navigate = useNavigate();
    const [amountSwap, setAmountSwap] = useState(0);
    const [loadingStep, setLoadingStep] = useState(0);
    const getQuateHandler = () => {
        setLoadingStep(1);
        setTimeout(() => {
            setLoadingStep(2);
            setTimeout(() => {
                navigate("/main/swap/confirm");
            }, 1000)
        }, 2000);
    }
    return (<>
        <div style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <ComboBox 
                style={{
                    margin: `${marginMd}px 0`,
                }}
                list={[{text: "Choose asset"},{text: "Asset 01"},{text: "Asset 02"},]}
                onChange={() => {}}
            />
            <TextMd style={{
                margin: `${marginSm}px 0`,
            }}>Amount</TextMd>
            <AmountWrapper>
                <AmountWarning>{amountSwap >= 10 ? "Not enough *token here* to complete this swap." : ""}</AmountWarning>
                <AmountInput style={{
                    margin: `${marginLg}px 0 ${marginSm}px 0`,
                }} onChange={e => setAmountSwap(e.target.value)} value={amountSwap}/>
            </AmountWrapper>
            <TextMd style={{
                marginTop: "12px",
            }}>Available</TextMd>
            <ComboBox 
                style={{
                    margin: `${marginMd}px 0`,
                }}
                list={[{text: "Select token"},{text: "Token 01"},{text: "Token 02"},]}
                onChange={() => {}}
            />
            { loadingStep === 1 ? (
            <div style={{
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: `rgba(255, 255, 255, 0.75)`,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Spinner />
            </div>) : ""}
        </div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            flexGrow: 0
        }}>
            <TextMd style={{
                marginRight: `${marginSm}px`,
            }}>Max Slippage 3%</TextMd>
            <ButtonGreen onClick={() => getQuateHandler()}>Get quotes</ButtonGreen>
        </div>
        <ReactModal 
            isOpen={loadingStep === 2}
            contentLabel="Minimal Modal Example"
            onRequestClose={() => setLoadingStep(0)}
            style={{
                overlay: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                },
                content: {
                    position: 'relative',
                    width: "calc(100% - 120px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "fit-content",
                    inset: 0,
                }
            }}
        >
            <Success />
            <TextSm>Transaction completed.</TextSm>
            <button style={{
                position: 'absolute',
                right: `${marginMd}px`,
                top: `${marginMd}px`,
                background: 'transparent',
                border: "none",
                outline: "none",
                cursor: "pointer",
            }} onClick={() => setLoadingStep(0)}>X</button>
        </ReactModal>
    </>)
}

export default Index;
