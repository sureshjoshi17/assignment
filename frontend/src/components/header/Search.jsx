import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'

const SearchContainer = styled(Box)`
    background: #fff;
    width: 35%;
    border-radius: 5px;
    margin-left: 20px;
    display: flex
`

const InputSearchBase = styled(InputBase)`
    width: 100%;
    padding-left: 20px;
    font-size: unset
`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px
`


const Search = () => {
    return (
        <SearchContainer>
            <InputSearchBase 
                placeholder='Search for Products, brands and more'
            />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchContainer>
    )
}

export default Search;