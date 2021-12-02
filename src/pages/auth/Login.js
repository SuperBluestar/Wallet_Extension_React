import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import ButtonGreen from '../../styled-components/ButtonGreen';
import Spinner from '../../components/Spinner';
import Success from '../../components/Success';
import { Logo, Title, FullInput, Center, TextUnderline } from "./Common";

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    let navigate = useNavigate();
    const loginHandler = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                navigate("/main");
            }, 1000);
        }, 2000);
    }
    return (
        <>
            <Logo>Valo.id logo</Logo>
            { loading ? <Spinner/> : (
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
                    <ButtonGreen onClick={loginHandler}>Sign In</ButtonGreen>
                </Center>
            </>) }
        </>
    )
}

export default Login;
