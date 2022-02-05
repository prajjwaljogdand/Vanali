import { Paper, Typography } from "@mui/material";
import ProgressBarLinear from './Progress'
import BoltIcon from '@mui/icons-material/Bolt';


const Battery = (props)=>{

  return(
    <Paper elevation={1}  >
    
    <Typography variant="h6" component="h6" sx={{paddingLeft: '15px'}} ><BoltIcon  sx={{ fontSize: '2rem', color : '#F5D779', position : 'relative', top : '0.5rem' }}/> {props.battery} V</Typography>
     <ProgressBarLinear color="secondary" percent={props.percentage} />
     <Typography variant="body2"  className="parameter-label" >Main Battery</Typography>
    </Paper>
  );
}
export default Battery;