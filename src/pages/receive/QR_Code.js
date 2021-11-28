import styled from 'styled-components';
import { paddingSm, qrcodeBoardHeight, qrcodeBoardWidth, qrcodeHeight, qrcodeWidth, borderRadiusMd, marginLg, topbarHeight } from '../../constants/dimentions';
import TextLg from '../../styled-components/TextLg';
import QRCode from 'qrcode';
import { useRef, useState } from 'react';
import useEffectOnce from '../../hooks/useEffectOnce';
import { lightgray } from '../../constants/colors';
import TextMd from '../../styled-components/TextMd';
import ButtonBlue from '../../styled-components/ButtonBlue';
import ButtonGray from '../../styled-components/ButtonGray';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const QRCodeBoard = styled.div`
width: ${qrcodeBoardWidth}px;
height: ${qrcodeBoardHeight}px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: ${borderRadiusMd}px;
box-shadow: 0 0 10px ${lightgray};
position: relative;
& canvas {
    width: ${qrcodeWidth}px !important;
    height: ${qrcodeHeight}px !important;
}
& ${ButtonBlue} {
    position: absolute;
    width: ${qrcodeWidth}px;
    top: 100%;
    transform: translateY(-50%);
}
`;

const QR_Code = () => {
    const [searchParams] = useSearchParams();
    const CanvasRef = useRef(null);
    const dataOfQRCode = {
        name: "SuperBluestar",
        location: "Yokohama",
        amount: searchParams.get('amount')
    }
    const [qrcodeURL, setQrcodeURL] = useState("");
    useEffectOnce(() => {
        QRCode.toCanvas(CanvasRef.current, dataOfQRCode.toString(), (err1) => {
            if (err1) {
                console.error(err1)
            }
        })
        QRCode.toDataURL(dataOfQRCode.toString(), (err2, url) => {
            if (err2) {
                setQrcodeURL("Failed to generate url");
            } else {
                setQrcodeURL(url);
            }
        })
    }, []);
    return (<>
        <TextLg style={{
            margin: `${marginLg}px 0`,
        }}>Receive</TextLg>
        <QRCodeBoard>
            <canvas ref={CanvasRef}/>
            <a href={qrcodeURL} target="_blank"><TextMd>{qrcodeURL.slice(0, Math.min(10, qrcodeURL.length))} ...</TextMd></a>
            <ButtonBlue>Copy address</ButtonBlue>
        </QRCodeBoard>
        <div style={{ 
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
        }}>
            <ButtonGray>Request payment</ButtonGray>
        </div>
    </>)
}

export default QR_Code;