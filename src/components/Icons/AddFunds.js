import AddFunds from '../../assets/addfunds.png';

export default ({style, width = 9, height = 9, ...props}) => (
    <img style={{
        width: width,
        height: height,
        ...style
    }} src={AddFunds} alt="AddFunds" {...props}/>
)