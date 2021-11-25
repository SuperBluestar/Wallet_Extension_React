import { Link } from 'react-router-dom';
import { useState } from 'react';

import Logo from '../../styled-components/Logo';
import Title from '../../styled-components/Title';
import FullInput from '../../styled-components/FullInput';
import TextUnderline from '../../styled-components/TextUnderline';
import GreenButton from '../../styled-components/GreenButton';
import Center from '../../styled-components/Center';
import Spinner from '../../styled-components/Spinner';

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
                    <GreenButton>Verify with app</GreenButton>
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
