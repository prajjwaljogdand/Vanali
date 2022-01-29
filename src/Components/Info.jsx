import { Paper, Typography } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';

 const Info = (props)=>{

  return(
    <>
    <InputLabel sx={{fontSize: '12px', paddingLeft : '0px', margin: '8px', marginBottom: '2px',}} >{props.label}</InputLabel>
    <Paper elevation={1} className="text-box" >
    <Typography className="" >
      {props.text}
    </Typography>
    </Paper>
    </>
  );
}

export default Info;


