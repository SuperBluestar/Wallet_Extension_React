import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import TextLg from "../../styled-components/TextLg";
import TextMd from "../../styled-components/TextMd";
import RightIcon from "../../components/Icons/Right";
import { marginSm } from "../../constants/dimentions";

const SettingListGroup = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const SettingList = styled.li`
    display: flex;
    width: 100%;
    margin-bottom: ${marginSm}px;
`;

const SettingListTitle = styled(TextLg)`
    font-weight: 600;
    margin-top: ${marginSm}px;
    margin-bottom: ${marginSm}px;
`;

const SettingListDescription = styled(TextMd)`
    font-weight: 400;
`;

const settingList = [{
    title: "General",
    description: "Currency conversion, primary currency, language, and search engine",
    url: "/general"
},{
    title: "Security & Privacy",
    description: "Privacy settings, Meta Metrics, private key and wallet secret recovery phrase",
    url: "/security"
},{
    title: "Advanced",
    description: "Access developer features, reset account, setup testnets, sync with extension, state logs, IPFS gateway and custom RPC",
    url: "/advanced"
},{
    title: "Contacts",
    description: "Add, edit, remove and manage your accounts",
    url: "/contacts"
},{
    title: "Networks",
    description: "Add, and edit custom RPC networks",
    url: "/networks"
},];

const SettingsIndex = () => {
    const navigate = useNavigate();
    return (
        <SettingListGroup>
            {settingList.map((setting, id) => (
                <SettingList key={id}>
                    <div style={{
                        flexGrow: 1,
                        marginRight: marginSm,
                    }}>
                        <SettingListTitle>{setting.title}</SettingListTitle>
                        <SettingListDescription>{setting.description}</SettingListDescription>
                    </div>
                    <div style={{
                        flexGrow: 0,
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer"
                    }} onClick={() => navigate(`/main/settings${setting.url}`)}>
                        <RightIcon />
                    </div>
                </SettingList>
            ))}
        </SettingListGroup>
    )
}

export default SettingsIndex;