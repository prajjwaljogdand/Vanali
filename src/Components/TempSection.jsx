import { Paper } from "@mui/material";
import TempLoader from "./TempLoader";


const TempSection = (props)=>{

  return(
    <Paper elevation={6} className="container" sx={{maxWidth : 400, height : 300,}}>
    <TempLoader className="progress-temp right" percent={25} id="Engine" type="Engine Temp" ></TempLoader>
    <TempLoader className="progress-temp left" percent={40} id="Ambient" type="Ambient Temp"></TempLoader>
    <TempLoader className="progress-temp-mini right" percent={24}  id="Env" type="Env Temp"></TempLoader>
    </Paper>
  );
}
export default TempSection;


