import TextField from "@mui/material/TextField";
import  searchIcon from '../assets/images/seaarchIcon.png'
function SearchBar() {
    return (
        <div className="flex relative p-4 ">
        <TextField fullWidth variant='outlined' placeholder='Search for any word ...' color="secondary" sx={{      '& .MuiOutlinedInput-root': {
            borderRadius: 5,                
            backgroundColor: '#f4f4f4',     
            '& fieldset': {
              borderColor: 'transparent',  
            },
            '&:hover fieldset': {
              borderColor: 'transparent',   
            },
            '&.Mui-focused fieldset': {
              borderColor: 'secondary.main', 
            },
          }, }} />
        <img src={searchIcon} className=" absolute right-2 bottom-6  w-[40px] h-[40px] p-2"/>
        </div>
    )
}

export default SearchBar
