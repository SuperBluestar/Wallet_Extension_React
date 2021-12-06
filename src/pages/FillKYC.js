import UpIcon from "../components/Icons/Up";
import Text from "../styled-components/Text";
import styled from "styled-components";
import Input from "../styled-components/Input";
import { borderRadiusSm, paddingLg, marginSm, paddingMd, paddingSm, marginLg, marginMd, topbarHeight } from "../constants/dimentions";
import Button from '../styled-components/Button';
import { gray } from '../constants/colors';
// import ScrollContainer from "react-indiana-drag-scroll";
import PerfectScrollbar from 'react-perfect-scrollbar';

const BillingHighLight = styled(Input)`
    border-radius: ${borderRadiusSm}px;
    width: 100%;
    padding: ${paddingMd}px ${paddingSm}px;
    box-sizing: border-box;
    margin: ${marginSm}px;
    text-align: center;
`;

const TextUnderline = styled(Text)`
    text-decoration: underline;
    cursor: pointer;
`;

const FillKYC = () => {
    return (
        <PerfectScrollbar style={{
            height: `calc(100vh - ${topbarHeight}px)`,
        }}>
        {/* <ScrollContainer style={{
            height: `calc(100vh - ${topbarHeight}px)`,
        }} vertical={true} horizontal={false} hideScrollbars={true}> */}
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                alignItems: "center",
            }}>
                <Text style={{
                    margin: `${marginLg}px 0`
                }}>Valo.id.logo</Text>
                <Text style={{
                    margin: `${marginLg}px 0`
                }}>Establish your credibility:</Text>
            </div>
            <div style={{
                padding: `${paddingMd}px`,
            }}>
                <div style={{
                    boxShadow: "3px 0 5px gray",
                    borderRadius: `${borderRadiusSm}px`,
                    padding: `${paddingSm}px ${paddingLg}px`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <Text style={{
                        padding: `${paddingLg}px 0`
                    }}>Fill your KYC</Text>

                    <Text>Tire 2</Text>
                    <BillingHighLight placeholder="Full name"/>
                    <BillingHighLight placeholder="Address"/>
                    <BillingHighLight placeholder="Phone"/>
                    <BillingHighLight placeholder="Backup e-mail"/>
                    <Text style={{
                        margin: `${marginLg}px 0`
                    }}>Tire 3</Text>
                    <Text style={{
                        width: "60%",
                        textAlign: "center",
                    }}>Upload photo of drivers license of passport</Text>
                    <Button style={{
                        margin: `${marginSm}px`
                    }}>
                        <UpIcon  />
                    </Button>
                    <Text style={{
                        width: "60%",
                        textAlign: "center",
                    }}>Upload an invoice with your address showing</Text>
                    <Button style={{
                        margin: `${marginSm}px`
                    }}>
                        <UpIcon  />
                    </Button>
                    <Button onClick={() => {}} style={{marginTop:`${marginLg}px`}}>Next</Button>
                    <TextUnderline>Later(use only tier 1 KYC)</TextUnderline>
                    <Text style={{
                        margin: `${marginMd}px`
                    }}>2/2</Text>
                </div>
            </div>
        {/* </ScrollContainer> */}
        </PerfectScrollbar>
    )
}

export default FillKYC;