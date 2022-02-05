import { Paper, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";


const Info = (props) => {
  return (
    <>
      <InputLabel
        sx={{
          fontSize: "12px",
          paddingLeft: "0px",
          margin: "8px",
          marginBottom: "2px",
        }}
      >
        {props.label}
      </InputLabel>
      <Paper elevation={1} className="text-box">
        <Typography className="">{props.text}</Typography>
      </Paper>
    </>
  );
};

const UserDetails = (props) => {
  return (
    <Paper elevation={6} className="container" sx={{ maxWidth: 400 }}>
      <Info text={props.ownerName} label="Owner Name"></Info>
      <Info text={props.registrationNo} label="Registration No."></Info>
      <Info text={props.chassisNo} label="Chasi No."></Info>
      <Info text={props.engineNo} label="Engine No."></Info>
      <Info text={props.vehicleClass} label="Vehicle Class"></Info>
      <Info text={props.makerModel} label="Maker Model "></Info>
    </Paper>
  );
};
export default UserDetails;
