import { Container, Paper, Typography } from "@mui/material";
import banner from '../../assets/fashionsale.jpg';

const Home = () => {
    return (
        <div>
            <Container style={{height:'100%', marginTop: '100px'}}>
                <Paper elevation={3} style={{ marginTop: '16px', padding: '16px' }}>
                    <img
                        src={banner} // Replace with the path to your banner image
                        alt="Banner"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <Typography variant="h4" style={{ marginTop: '16px' }}>
                        Welcome to My Website
                    </Typography>
                    <Typography variant="body1">
                        This is the content of your home page. You can replace this with your own content.
                    </Typography>
                </Paper>
            </Container>
        </div>
    )
}

export default Home;