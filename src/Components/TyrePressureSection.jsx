import { Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import TyrePressure from "./TyrePressure";

const TyrePressureSection = (props) => {
  let pressureData = props.pressureData
  let factoryPressure = props.factoryPressure || 40
  return (
    <>
      <Paper elevation={6} className="container" sx={{ height: 300 }}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Tyre Pressure
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={(pressureData.front_tyre_right/factoryPressure)*100} number={1} value={pressureData.front_tyre_right} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={(pressureData.front_tyre_left/factoryPressure)*100} number={2} value={pressureData.front_tyre_left} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={(pressureData.back_tyre_right/factoryPressure)*100} number={3} value={pressureData.back_tyre_right} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={(pressureData.back_tyre_left/factoryPressure)*100} number={4} value={pressureData.back_tyre_left} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TyrePressureSection;
