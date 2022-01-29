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
      <Paper  elevation={1} className="text-box">
        <Typography className="">{props.text}</Typography>
      </Paper>
    </>
  );
};

const UserDetails = (props) => {
  return (
    <Paper elevation={6} className="container" sx={{ maxWidth: 400 }}>
      <Info text="JESSICA MARK" label="Owner Name"></Info>
      <Info text="MH12EQ2304" label="Registration No."></Info>
      <Info text="ME4KC202FF8008973" label="Chasi No."></Info>
      <Info text="ME4KC202FF8008973" label="Engine No."></Info>
      <Info text="SUV" label="Vehicle Class"></Info>
      <Info text="Hyundai Creta" label="Maker Model "></Info>
    </Paper>
  );
};
export default UserDetails;
