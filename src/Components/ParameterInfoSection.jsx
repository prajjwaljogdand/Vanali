import { Grid } from "@mui/material";
import AirQuality from "./AirQuality";
import Battery from "./Battery";
import CoolentLevel from "./CoolentLevel";
import Fuel from "./Fuel";
import { Paper } from "@mui/material";

const ParameterInfoSection = (props) => {
  
  return (
    <>
      <Paper elevation={6} className="container" sx={{ height: 300 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Battery battery={props.battery} percentage={(props.battery/props.factoryBatteryLevel)*100}/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fuel fuel={props.fuel} percentage={(props.fuel/props.factoryFuelLevel)*100} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CoolentLevel coolant ={props.coolant} percentage={(props.coolant/props.factoryCoolantLevel)*100}/>
          </Grid>
          <Grid item xs={12} sm={12}>
            <AirQuality airQuality={props.airQuality} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ParameterInfoSection;
