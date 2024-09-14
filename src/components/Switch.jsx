import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
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
        '& .Mui-checked + css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track ': {
          backgroundColor: '#9c27b0', 
        },
      }}
    />
  );
}