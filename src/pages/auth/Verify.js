import { Link } from 'react-router-dom';
import { useState } from 'react';

import ButtonGreen from '../../styled-components/ButtonGreen';
import Spinner from '../../styled-components/Spinner';

import { Logo, Title, FullInput, Center, TextUnderline } from "./Common";

const Verify = () => {
    const [loading, setLoading] = useState(false);
    return (
        <>
            <Logo>Valo.id logo</Logo>
            { loading ? <Spinner /> :
            <>
                <Title>Sign In</Title>
                <FullInput placeholder="Password or other" />
                <Title>Or</Title>
                <Center>
                    <ButtonGreen>Verify with app</ButtonGreen>
                </Center>
                <Center>
                    <Link to="/verify">
                        <TextUnderline style={{
                            marginTop: "50px",
                            marginBottom: "50px",
                        }}>Register</TextUnderline>
                    </Link>
                </Center>
            </> }
        </>
    )
}

export default Verify;
