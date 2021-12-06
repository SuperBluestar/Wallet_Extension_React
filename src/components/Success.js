import SuccessImg from '../assets/success.png';

export default ({style, ...props}) => (
    <img src={SuccessImg} alt="Success" style={{...style}} {...props}/>
)