import { Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import TyrePressure from "./TyrePressure";

const TyrePressureSection = () => {
  return (
    <>
      <Paper elevation={6} className="container" sx={{ height: 300 }}>
        <Typography variant="h6" sx={{ padding: 2 }}>
          Tyre Pressure
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={90} number={1} value={32} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={90} number={2} value={28} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={90} number={3} value={20} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TyrePressure percent={90} number={4} value={32} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default TyrePressureSection;
