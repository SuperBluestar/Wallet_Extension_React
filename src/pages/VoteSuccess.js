import { useNavigate } from 'react-router-dom';
import { topbarHeight, paddingLg, marginLg } from '../constants/dimentions';
import TextLg from '../styled-components/TextLg';
import TextMd from '../styled-components/TextMd';
import ButtonGreen from '../styled-components/ButtonGreen';

import ProgressBar from '../components/ProgressBar';

const Vote = () => {
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - ${topbarHeight}px)`,
            justifyContent: "center",
            padding: `${paddingLg}px`,
            boxSizing: "border-box",
        }}>
            <TextLg style={{
                paddingTop: paddingLg,
                paddingBottom: paddingLg
            }}>Thank you for voting.</TextLg>
            <TextMd>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </TextMd>
            <div style={{
                paddingTop: paddingLg,
                paddingBottom: paddingLg,
                width: "80%",
                marginLeft: "auto",
                marginRight: "auto",
            }}>
                <TextMd style={{
                    textAlign: 'right'
                }}>70%</TextMd>
                <div style={{
                    display: "flex",
                }}>
                    <TextMd style={{
                        paddingRight: `${paddingLg}px`,
                    }}>YES</TextMd>
                    <ProgressBar percent={70} style={{
                        width: "100%",
                        height: "16px",
                    }}/>
                </div>
                <TextMd style={{
                    textAlign: 'right',
                    marginTop: `${marginLg}px`,
                }}>30%</TextMd>
                <div style={{
                    display: "flex",
                }}>
                    <TextMd style={{
                        paddingRight: `${paddingLg}px`,
                    }}>NO</TextMd>
                    <ProgressBar percent={30} style={{
                        width: "100%",
                        height: "16px",
                    }}/>
                </div>
            </div>
            <div style={{
                paddingTop: `${paddingLg}px`,
                textAlign: 'center'
            }}>
                <ButtonGreen onClick={() => navigate("/main")}>Return to main view</ButtonGreen>
            </div>
        </div>
    )
}

export default Vote;
