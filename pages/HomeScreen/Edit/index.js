// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';

// export default function ContinuousSlider({intensity,setIntensity}) {
//   const [value, setValue] = React.useState(30);
//   const handleChange = (event, newValue) => {
//     console.log({newValue});
//     setValue(newValue);
//     setIntensity(newValue)

//   };

//   return (
//     <Box sx={{ width: 200 }}>
//         <div>Intensity light: {intensity} %</div>
//         <br/>
//       <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
//         {/* <VolumeDown /> */}
//         {
//             intensity >0 && <Slider defaultValue={intensity} aria-label="Volume" value={intensity} onChange={handleChange} />
//         }
        
//         {/* <VolumeUp /> */}
//       </Stack>
//       {/* <Slider disabled defaultValue={30}  aria-   label="Disabled slider" /> */}
//     </Box>
//   );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';

export default function ContinuousSlider({intensity,setIntensity}) {
  const [value, setValue] = React.useState(1);
  React.useEffect (() =>{

  },[intensity])
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setIntensity(newValue)
  };

  return (
    <Box sx={{ width: 200 }}>
        <br/>
        <div>Intensity light: {intensity} %</div>
        <br/>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        {/* <VolumeDown /> */}
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        {/* <VolumeUp /> */}
      </Stack>
      {/* <Slider disabled defaultValue={30} aria-label="Disabled slider" /> */}
    </Box>
  );
}