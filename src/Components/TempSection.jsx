import { Paper } from "@mui/material";
import TempLoader from "./TempLoader";


const TempSection = ({tempData})=>{
  tempData = tempData ? tempData:{} 
  return(
    <Paper elevation={6} className="container container-2" sx={{height:300}}>
    <TempLoader className="progress-temp right" percent={tempData.ambient_temp} id="Ambient" type="Ambient Temp" ></TempLoader>
    <TempLoader className="progress-temp left" percent={tempData.engine_temp} id="Engine" type="Engine Temp"></TempLoader>
    <TempLoader className="progress-temp-mini right" percent={tempData.env_temp}  id="Env" type="Env Temp"></TempLoader>
    </Paper>
  );
}
export default TempSection;


