import { CircularProgress, Grid } from "@mui/material";
import UserDetails from "../Components/UserDetails";
import Health from "../Components/Health";
import Location from "../Components/LocationSection";
import ParameterInfoSection from "../Components/ParameterInfoSection";
import TyrePressureSection from "../Components/TyrePressureSection";
import TempSection from "../Components/TempSection";
import { useEffect, useState } from "react";
const Homepage = () => {
  const [vehicleData, setVehicleData] = useState({});
  const [isVehicleLoading,setIsVehicleLoading] = useState(true)
  const [isSensorLoading,setIsSensorLoading] = useState(true)
  const [sensorData, setSensorData] = useState({});
  let vehicleUrl="http://127.0.0.1:8000/vehicle_details/ME4KC202FF8008973"
  let sensorUrl="http://127.0.0.1:8000/sensor_details/ME4KC202FF8008973"
  useEffect(() => {
    let fetchVehicleData = async () =>{
      
      await fetch(vehicleUrl).then((response) =>{
        if(response.ok) return response.json();
        else if(response.status === 404){
          return {}
        }
      }).catch((error) =>{
        console.log(error);
      }).then((responsejson)=>{
        setVehicleData(responsejson)
        console.log(responsejson)
      }).catch((error) => {
        console.log(error);
      }).finally(()=>{
        setIsVehicleLoading(false);
      })
    }
    fetchVehicleData();
    ;
  },[vehicleUrl]);
  useEffect(() => {
  let fetchSensorData = async () =>{
      await fetch(sensorUrl).then((response) =>{
        if(response.ok) return response.json();
        else if(response.status === 404){
          return {}
        }
      }).catch((error) =>{
        console.log(error);
      }).then((responsejson)=>{
        setSensorData(responsejson)
        console.log(responsejson)
      }).catch((error) => {
        console.log(error);
      }).finally(()=>{
        setIsSensorLoading(false);
      })
    }
    fetchSensorData()
  }, [sensorUrl]);
  
  return (
    <Grid container spacing={1} sx={{padding : '10px'}}>
      <Grid item xs={12} md={3}>
        {!isVehicleLoading ? <UserDetails registrationNo = {vehicleData['registration_no.']} ownerName = {vehicleData.owner_name} chassisNo = {vehicleData.chassis_no} engineNo = {vehicleData.engine_no} vehicleClass = {vehicleData.vehicle_class} makerModel = {vehicleData.maker_model} /> : <CircularProgress/> }
        {/* <UserDetails /> */}
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
        {!isSensorLoading ?  <TyrePressureSection pressureData = {sensorData.pressure_data} factoryPressure={vehicleData.factory_tyre_pressure}  /> : <CircularProgress/>}
       
      </Grid>
      <Grid item xs={12} md={3}>
        <ParameterInfoSection factoryBatteryLevel={vehicleData.factory_battery_level}  battery={sensorData.battery_voltage} factoryFuelLevel={vehicleData.factory_fuel_level} fuel={sensorData.fuel_level} factoryCoolantLevel={vehicleData.factory_coolant_level} coolant={sensorData.coolant_level} airQuality={sensorData.air_quality} /> 
        {/* <ParameterInfoSection/> */}
      </Grid>
      <Grid item xs={12} md={3}>
        <TempSection tempData={sensorData.temp_data} />
      </Grid>
    </Grid>
  );
};

export default Homepage;
