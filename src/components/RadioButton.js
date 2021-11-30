import { iconWidth, marginSm } from "../constants/dimentions"
import { black, green } from "../constants/colors";
import TextMd from "../styled-components/TextMd";

const RadioButton = ({ text = "", active = false, style, ...props}) => {
    return (<div style={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        ...style,
    }} {...props}>
        <div style={{
            width: `${iconWidth}px`,
            height: `${iconWidth}px`,
            borderRadius: "1000px",
            borderColor: `${black}`,
            borderWidth: "1px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderStyle: "solid",
        }}>
            {active ? 
            <div style={{
                width: `${iconWidth - 6}px`,
                height: `${iconWidth - 6}px`,
                border: "none",
                borderRadius: "1000px",
                backgroundColor: `${green}`,
            }}></div> : 
            <></>}
        </div>
        <TextMd style={{
            marginLeft: `${marginSm}px`,
            minWidth: "80px",
        }}>{text}</TextMd>
    </div>)
}

export default RadioButton;