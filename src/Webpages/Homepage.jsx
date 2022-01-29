import { Grid } from "@mui/material";
import UserDetails from "../Components/UserDetails";
import Health from "../Components/Health";
import Location from "../Components/LocationSection";
import ParameterInfoSection from "../Components/ParameterInfoSection";
import TyrePressureSection from "../Components/TyrePressureSection";
import TempSection from "../Components/TempSection";
const Homepage = () => {
  return (
    <Grid container spacing={1} sx={{padding : '10px'}}>
      <Grid item xs={12} md={3}>
        <UserDetails />
      </Grid>
      <Grid item xs={12} md={6}>
       
      </Grid>
      <Grid item xs={12} md={3}>
        <Health />
      </Grid>
      <Grid item xs={12} md={3}>
        <Location />
      </Grid>
      <Grid item xs={12} md={3}>
        <TyrePressureSection />
      </Grid>
      <Grid item xs={12} md={3}>
        <ParameterInfoSection />
      </Grid>
      <Grid item xs={12} md={3}>
        <TempSection />
      </Grid>
    </Grid>
  );
};

export default Homepage;
