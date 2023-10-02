import {AppBar, Toolbar, Box, Typography, Button, styled} from '@mui/material';
import Search from './Search';
import {ShoppingCart} from '@mui/icons-material';
import LoginDialog from '../login/LoginDialog';
import SignupDialog from '../signup/SignupDialog';

import { useState } from 'react';
// import CustomButton from './CustomButton';


const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 2
})

const CustomButtonWrapper = styled(Box)`
    display: flex;
    justify-content: space-between;
    width: 20%;
    // margin: 0 15% 0 auto;
    // margin-left: 10%;
    // background: red;
    padding-left: 30%
`
const CustomButton = styled(Button)`
    color: #2874f0;
    width: 50px;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-redius: 2px;
    box-shadow: none;
    font-weight: 600;
    heigth: 32px;
`

const Container = styled(Box)`
    display: flex;
`

const Header = () => {
    const userAuth = JSON.parse(localStorage.getItem('userAuth'));
    const [openLogin,  setOpenLoginDialog] = useState(false);
    const [openSignup,  setOpenSignupDialog] = useState(false);


    const openLoginDialog = () => {
        // alert('login')
        setOpenLoginDialog(true)
    }

    const openSignupDialog = () => {
        // alert('login')
        setOpenSignupDialog(true)
    }

    const handleLogout = () => {
        // alert(token)
        localStorage.removeItem('userAuth');
        window.location.reload(true);
    }
    

    const logoUrl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subUrl = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
       <StyledHeader>
            <Toolbar style={{minHeight: 55}}>
                <Component>
                    <img src={logoUrl} alt="logo" style={{width:75}} />
                    <Box style={{display: 'flex'}}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>Plus</Box>
                        </SubHeading>
                        <PlusImage src={subUrl} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    {
                        !userAuth?.auth ? 
                        (<>
                            <CustomButton 
                                variant='contained'
                                onClick={openLoginDialog}
                            >Login</CustomButton>
                            <CustomButton 
                                variant='contained'
                                onClick={openSignupDialog}
                            >Signup</CustomButton>
                        </>) : 
                        <CustomButton 
                            variant='contained'
                            onClick={handleLogout}
                        >Logout</CustomButton>
                    }
                   
                    <Container>
                        <ShoppingCart />
                        <Typography>Cart</Typography>

                    </Container>
                </CustomButtonWrapper>
                
                {/* <CustomButtonWrapper>
                    <CustomButton />
                </CustomButtonWrapper> */}
            </Toolbar>
            <LoginDialog openLogin={openLogin} setOpenLoginDialog={setOpenLoginDialog}/>
            <SignupDialog openSignup={openSignup} setOpenSignupDialog={setOpenSignupDialog}/>

       </StyledHeader>
    )
}

export default Header;

// const Header = () => {
//     return (
//         <div>Header</div>
//     )
// }

// export default Header;