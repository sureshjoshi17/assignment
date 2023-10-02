import { Dialog, Box, TextField, Button, styled } from '@mui/material'
import { useState } from 'react';
import axios from 'axios';

const Component = styled(Box)`
    // background: grey;
    height: 70vh;
    width: 50vh;
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;

    & > div {
        margin-top: 20px;
    }

    & > button {
        margin-top: 50px;
    }
`

const SignupButton = styled(Button)`
    text-transform: none;
    background: blue;
    color: #fff;
    height: 45px;
    
    &:hover {
        background: blue;
    }
`

const SignupDialog = ({ openSignup, setOpenSignupDialog }) => {
    const handleClose = () => {
        setOpenSignupDialog(false)
    }
    const userObj = {
        name: '',
        email: '',
        password: '',
    }
    const [formData, setFormData] = useState(userObj);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.name && formData.email && formData.password){
            axios.post("http://localhost:5001/api/v1/auth/signup", formData)
                .then((response) => {
                    console.log(response);
                    setOpenSignupDialog(false)
                })
                .catch(error => console.log('error',error));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <Dialog open={openSignup} onClose={handleClose}>
            {/* <form onSubmit={handleSubmit}> */}
                <Component>
                    <Wrapper>
                        <TextField
                            variant='filled'
                            label='Enter full name'
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <TextField
                            variant='filled'
                            label='Enter email/mobile number'
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField
                            variant='filled'
                            label='Enter Password'
                            required
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {/* <TextField variant='filled' label='Confirm Password'/> */}
                        <SignupButton onClick={handleSubmit}>
                            Signup
                        </SignupButton>
                    </Wrapper>
                </Component>
            {/* </form> */}

        </Dialog>
    )
}

export default SignupDialog;