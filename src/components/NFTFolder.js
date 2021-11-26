import styled from 'styled-components';
import { borderRadiusSm, nftFolderSize, marginSm } from '../constants/dimentions';
import { gray } from '../constants/colors';

const NFTFolder = styled.div`
    border-radius: ${borderRadiusSm}px;
    width: ${nftFolderSize}px;
    height: ${nftFolderSize}px;
    background-color: ${gray};
    margin-right: ${marginSm}px;
`;

export default NFTFolder;