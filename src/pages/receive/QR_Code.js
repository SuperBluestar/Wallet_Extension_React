import styled from 'styled-components';
import { paddingSm, qrcodeBoardHeight, qrcodeBoardWidth, qrcodeHeight, qrcodeWidth, borderRadiusMd, marginLg, topbarHeight } from '../../constants/dimentions';
import Text from '../../styled-components/Text';
import QRCode from 'qrcode';
import { useRef, useState } from 'react';
import useEffectOnce from '../../hooks/useEffectOnce';
import { lightgray } from '../../constants/colors';
import Button from '../../styled-components/Button';
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
& ${Button} {
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
        <Text style={{
            margin: `${marginLg}px 0`,
        }}>Receive</Text>
        <QRCodeBoard>
            <canvas ref={CanvasRef}/>
            <a href={qrcodeURL} target="_blank"><Text>{qrcodeURL.slice(0, Math.min(10, qrcodeURL.length))} ...</Text></a>
            <Button style={{
                backgroundColor: "#7EC8DF",
                width: "215px",
                height: "45px"
            }}>Copy address</Button>
        </QRCodeBoard>
        <div style={{ 
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
        }}>
            <Button style={{
                width: "215px",
                height: "45px"
            }}>Request payment</Button>
        </div>
    </>)
}

export default QR_Code;