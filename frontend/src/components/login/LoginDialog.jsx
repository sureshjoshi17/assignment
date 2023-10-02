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
        margin-top: 50px;
    }

    & > button, & > p {
        margin-top: 50px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    background: blue;
    color: #fff;
    height: 45px;
    
    &:hover {
        background: blue;
    }
`

const LoginDialog = ({ openLogin, setOpenLoginDialog }) => {
    
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.email && formData.password){
            axios.post("http://localhost:5001/api/v1/auth/login", formData)
                .then((response) => {
                    console.log(response);
                    let userAuth = {
                        auth: true,
                        token: response.data?.responseData?.token,
                        user: response.data?.responseData?.data
                    }
                    localStorage.setItem('userAuth', JSON.stringify(userAuth));

                    window.location.reload(true);

                })
                .catch(error => console.log('error',error));
        }
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClose = () => {
        setOpenLoginDialog(false)
    }
    return (
        <Dialog open={openLogin} onClose={handleClose}>
             <form onSubmit={handleSubmit}>
                <Component>
                    <Wrapper>
                        <TextField 
                            variant='filled' 
                            label='Enter email' 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <TextField 
                            variant='filled' 
                            label='Enter Password' 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <LoginButton onClick={handleSubmit}>
                            Login
                        </LoginButton>
                    </Wrapper>
                </Component>
             </form>
        </Dialog>
    )
}

export default LoginDialog;