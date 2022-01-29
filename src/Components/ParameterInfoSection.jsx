import { Grid } from "@mui/material";
import AirQuality from "./AirQuality";
import Battery from "./Battery";
import CoolentLevel from "./CoolentLevel";
import Fuel from "./Fuel";
import { Paper } from "@mui/material";

const ParameterInfoSection = () => {
  return (
    <>
      <Paper elevation={6} className="container" sx={{ height: 300 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Battery />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Fuel />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CoolentLevel />
          </Grid>
          <Grid item xs={12} sm={12}>
            <AirQuality />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ParameterInfoSection;
