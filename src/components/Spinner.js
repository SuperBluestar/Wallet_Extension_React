import Spinner from '../styled-components/Spinner';
import LoadingImg from '../assets/loading.png';

export default ({...props}) => (
    <Spinner src={LoadingImg} alt="Loading" {...props}/>
)