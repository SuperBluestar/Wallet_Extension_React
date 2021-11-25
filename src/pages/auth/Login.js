import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../styled-components/Logo';
import Title from '../../styled-components/Title';
import FullInput from '../../styled-components/FullInput';
import TextUnderline from '../../styled-components/TextUnderline';
import GreenButton from '../../styled-components/GreenButton';
import Center from '../../styled-components/Center';
import Spinner from '../../components/Spinner';
import Success from '../../components/Success';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const loginHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
            }, 1000);
        }, 2000);
    }
    return (
        <>
            <Logo>Valo.id logo</Logo>
            { loading ? <Spinner src={require('../../assets/loading.png')} alt="Loading"/> : (
                success ? <>
                    <Success />
                </> :
            <>
                <Title>Sign In</Title>
                <FullInput placeholder="Profile id" />
                <FullInput placeholder="Password or other" />
                <Center>
                    <Link to="/verify">
                        <TextUnderline style={{
                            marginTop: "50px",
                            marginBottom: "50px",
                        }}>Register</TextUnderline>
                    </Link>
                </Center>
                <Center>
                    <GreenButton onClick={loginHandler}>Sign In</GreenButton>
                </Center>
            </>) }
        </>
    )
}

export default Login;
