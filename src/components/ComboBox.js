import { useState } from "react";
import styled from "styled-components";
import { borderRadiusSm, paddingSm, paddingMd, selectHeight } from '../constants/dimentions';
import { lightgray } from '../constants/colors';
import { zIndex05 } from '../constants/zIndexs';
import Down from './Icons/Down';
import TextMd from "../styled-components/TextMd";

const Item = styled.div`
`;

const ListGroup = styled.div`
`

const Selected = styled.div`
`;

const SelectedGroup = styled.div`
    width: 200px;
    position: relative;
    & > ${Selected} {
        border-radius: ${borderRadiusSm}px;
        background-color: ${lightgray};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: ${paddingSm}px ${paddingMd}px;
        box-sizing: border-box;
        width: 100%;
        height: ${selectHeight}px;
        & img {
            transition: all 0.5s;
        }
    }
    & > ${ListGroup} {
        display: none;
    }
    &.open ${Selected} {
        & img {
            transform: rotate(180deg);
        }
    }
    &.open > ${ListGroup} {
        z-index: ${zIndex05};
        display: block;
        position: absolute;
        top: ${selectHeight}px;
        margin-top: 5px;
        width: 100%;
        border-radius: ${borderRadiusSm}px;
        background-color: ${lightgray};
        & ${Item} {
            height: ${selectHeight}px;
            display: flex;
            align-items: center;
            width: 100%;
            padding: ${paddingSm}px ${paddingMd}px;
            box-sizing: border-box;
        }
    }
`;

const defaultList = [{
    text: "AAA1"
},{
    text: "AAA2"
},];

const ComboBox = ({list = defaultList, onChange = () => {}, selected = 0}) => {
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(selected);
    return (
        <SelectedGroup className={`${open ? "open" : ""}`} onClick={() => setOpen(oldVal => !oldVal)}>
            <Selected>
                <TextMd>{list[selectedItem].text}</TextMd>
                <Down />
            </Selected>
            <ListGroup>
            {list.map((item, id) => (
                <Item key={id} onClick={() => setSelectedItem(id)}>{item.text}</Item>
            ))}
            </ListGroup>
        </SelectedGroup>
    )
}

export default ComboBox;