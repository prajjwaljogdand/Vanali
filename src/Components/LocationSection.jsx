import { Paper, Grid } from "@mui/material";
import Info from "./Info";
import SimpleMap from "./Map";

const Location = (props) => {
  return (
    <Paper
      elevation={6}
      className="container"
      sx={{  }}
    >
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Info text="23.795399" label="Latitude" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Info text="86.427040" label="Longitude" />
        </Grid>
        <Grid item xs={12} sm={12}>
          <SimpleMap />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default Location;
