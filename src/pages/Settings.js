import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { topbarHeight, paddingLg, paddingSm } from '../constants/dimentions';
import LeftIcon from "../components/Icons/Left";
import TextLg from '../styled-components/TextLg';

const Settings = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            height: `calc(100% - ${topbarHeight}px)`,
            padding: `${paddingLg}px`,
            boxSizing: "border-box",
        }}>
            <div style={{
                display: "flex",
                cursor: "pointer",
                alignItems: "center",
                height: `39px`,
            }} onClick={() => navigate(-1)}>
                <LeftIcon />
                <TextLg style={{
                    paddingLeft: paddingSm,
                    textTransform: "capitalize",
                }}>{ location.pathname.slice("/main/settings/".length) }</TextLg>
            </div>
            <Outlet />
        </div>
    )
}

export default Settings;
