import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches({toggleTheme}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    toggleTheme();

  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled', color:"#9c27b0" }}    
      sx={{        
        '& .Mui-checked .MuiSwitch-thumb': {
          color: '#9c27b0', 
        },
        '& .Mui-checked + .MuiSwitch-track': {
          backgroundColor: '#9c27b0', 
        },  
        '& .Mui-checked +MuiTouchRipple-root MuiSwitch-track css-1yjjitx-MuiSwitch-track MuiButtonBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked PrivateSwitchBase-root MuiSwitch-switchBase MuiSwitch-colorPrimary Mui-checked Mui-checked css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase': {
          backgroundColor: '#9F39EB', 
        },
      }}
    />
  );
}