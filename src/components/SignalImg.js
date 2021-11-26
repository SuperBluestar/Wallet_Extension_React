import LedGreen from '../assets/led-green.png';
import LedRed from '../assets/led-red.png';
import { signalIconHeight, signalIconWidth } from '../constants/dimentions';

export default ({signal = true}) => (
    <img style={{
        width: signalIconWidth,
        height: signalIconHeight
    }} src={signal ? LedGreen : LedRed} alt="True"/>
)