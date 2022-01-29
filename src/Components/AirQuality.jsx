import { Paper, Typography } from "@mui/material";
import ProgressBarLinear from './Progress'
import AirIcon from '@mui/icons-material/Air';

const AirQuality = (props)=>{
  return(
    
    <Paper elevation={1} >
    <Typography variant="h6" component="h6" sx={{paddingLeft: '15px'}} ><AirIcon sx={{  fontSize: '2rem', color : '#00A3FF', position : 'relative', top : '0.5rem' }}/> 40aiq</Typography>
     <ProgressBarLinear percent={70} color="secondary"  />
     <Typography variant="body2"  className="parameter-label" >Air Quality</Typography>
    </Paper>
   
  );
}
export default AirQuality;