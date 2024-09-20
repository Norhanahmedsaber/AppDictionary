import loggoIcon from "../assets/images/logo.png";
import ComboBox from "./ComboBox";
import Divider from '@mui/material/Divider';
import moonIcon from '../assets/images/greyMoon.png'
import darkMoonIcon from '../assets/images/purpleMoon.png'
import ControlledSwitches from "./Switch";
function Header({ setSelectedFont , selectedFont,isDarkMode,toggleTheme}) {
  return (
    <div className="flex justify-between items-start ">
      <img src={loggoIcon} className=" w-[50px] h-[50px] p-2" />
      <div className="flex justify-center items-center content-center" >      
        <ComboBox selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
        <Divider orientation="vertical" variant="middle" flexItem  />
        <ControlledSwitches isDarkMode={isDarkMode}  toggleTheme={toggleTheme}/>
        <div> {isDarkMode?        <img src={darkMoonIcon} className=" w-[45px] h-[45px] p-2" />
        :        <img src={moonIcon} className=" w-[45px] h-[45px] p-2" />
        }  </div>
     </div>
    </div>
  );
}

export default Header;
