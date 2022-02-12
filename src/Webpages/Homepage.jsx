import { CircularProgress, Grid } from "@mui/material";
import UserDetails from "../Components/UserDetails";
import Health from "../Components/Health";
import Location from "../Components/LocationSection";
import ParameterInfoSection from "../Components/ParameterInfoSection";
import TyrePressureSection from "../Components/TyrePressureSection";
import TempSection from "../Components/TempSection";
import { useEffect, useState } from "react";



const Homepage = () => {
  const [vehicleData, setVehicleData] = useState({ "owner_name" : "shashank srivastav" , "registration_no.":"MH12EQ2304","chassis_no":"ME4KC202FF8008973","engine_no":"ME4KC202FF8008973","vehicle_class":"SUV","maker_model":'Hyundai Creta'});
  const [isVehicleLoading,setIsVehicleLoading] = useState(false)
  const [isSensorLoading,setIsSensorLoading] = useState(false)
  const [sensorData, setSensorData] = useState({
    "vehicle_id":'61fd73799ce5916ad8e2102f',
    "pressure_data":{
        "front_tyre_right":32,
        "front_tyre_left":28,
        "back_tyre_right":20,
        "back_tyre_left":32
    },
    "temp_data":{
        "ambient_temp":40,
        "engine_temp":25,
        "env_temp":24
    },
    "coolant_level":12,
    "air_quality":40,
    "battery_voltage":79,
    "fuel_level":10   
});
  // let vehicleUrl="http://127.0.0.1:8000/vehicle_details/ME4KC202FF8008973"
  // let sensorUrl="http://127.0.0.1:8000/sensor_details/ME4KC202FF8008973"
  // useEffect(() => {
  //   let fetchVehicleData = async () =>{
      
  //     await fetch(vehicleUrl).then((response) =>{
  //       if(response.ok) return response.json();
  //       else if(response.status === 404){
  //         return {}
  //       }
  //     }).catch((error) =>{
  //       console.log(error);
  //     }).then((responsejson)=>{
  //       setVehicleData(responsejson)
  //       console.log(responsejson)
  //     }).catch((error) => {
  //       console.log(error);
  //     }).finally(()=>{
  //       setIsVehicleLoading(false);
  //     })
  //   }
  //   fetchVehicleData();
  //   ;
  // },[vehicleUrl]);
  // useEffect(() => {
  // let fetchSensorData = async () =>{
  //     await fetch(sensorUrl).then((response) =>{
  //       if(response.ok) return response.json();
  //       else if(response.status === 404){
  //         return {}
  //       }
  //     }).catch((error) =>{
  //       console.log(error);
  //     }).then((responsejson)=>{
  //       setSensorData(responsejson)
  //       console.log(responsejson)
  //     }).catch((error) => {
  //       console.log(error);
  //     }).finally(()=>{
  //       setIsSensorLoading(false);
  //     })
  //   }
  //   fetchSensorData()
  // }, [sensorUrl]);


  //  <iframe allowfullscreen="true" mozallowfullscreen="true" src="https://demos.evox.com/SquareSpaceWeb/13227/13227_ex1024.html?wmode=opaque" webkitallowfullscreen="true" title="AudiQ5" marginwidth="0" scrolling="no" name="Object" data-embed="true" style={{width : "100%" , height : "100%" ,float: "left", marginLeft:"0px"}} marginheight="0"  frameborder="0"></iframe>
  //  <iframe height="630" width="100%" frameborder="0" allowfullscreen="" class="youtubeVideos" id="0" data-gsll-srcd="https://stimg.cardekho.com/images/feelthecar360view/Interior/Maruti/Maruti-Swift/Interior.html?hotSpotNonApp=yes" src="https://stimg.cardekho.com/images/feelthecar360view/Interior/Maruti/Maruti-Swift/Interior.html?hotSpotNonApp=yes"></iframe>
  //  <iframe height="100%" width="100%" frameborder="0" allowfullscreen="false"  id="car" src="https://cardekho.adloid.in/carConfigurator/cardekho.html?hotSpotNonApp=yes"></iframe>

  
  return (
    <Grid container spacing={1} sx={{padding : '10px'}}>
      <Grid item xs={12} md={3}>
        {!isVehicleLoading ? <UserDetails registrationNo = {vehicleData['registration_no.']} ownerName = {vehicleData.owner_name} chassisNo = {vehicleData.chassis_no} engineNo = {vehicleData.engine_no} vehicleClass = {vehicleData.vehicle_class} makerModel = {vehicleData.maker_model} /> : <CircularProgress/> }
        {/* <UserDetails /> */}
      </Grid>
      <Grid item xs={12} md={6}>
      <div style={{width : "100%", height : "100%" ,minHeight: 300}} >
      <iframe height="100%" width="100%" frameborder="0" allowfullscreen="" class="youtubeVideos" id="1" data-gsll-srcd="https://stimg.cardekho.com/images/feelthecar360view/Exterior/Maruti/Maruti-Swift/1622112037/Exterior.html?hotSpotNonApp=yes" src="https://stimg.cardekho.com/images/feelthecar360view/Exterior/Maruti/Maruti-Swift/1622112037/Exterior.html?hotSpotNonApp=yes"></iframe>
     </div>
      </Grid>
      <Grid item xs={12} md={3}>
        <Health />
      </Grid>

      <Grid item xs={12}  sm={6} lg={3} >
        <Location />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        {!isSensorLoading ?  <TyrePressureSection pressureData = {sensorData.pressure_data} factoryPressure={vehicleData.factory_tyre_pressure}  /> : <CircularProgress/>}
       
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <ParameterInfoSection factoryBatteryLevel={vehicleData.factory_battery_level}  battery={sensorData.battery_voltage} factoryFuelLevel={vehicleData.factory_fuel_level} fuel={sensorData.fuel_level} factoryCoolantLevel={vehicleData.factory_coolant_level} coolant={sensorData.coolant_level} airQuality={sensorData.air_quality} /> 
        {/* <ParameterInfoSection/> */}
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <TempSection tempData={sensorData.temp_data} />
      </Grid>
    </Grid>
  );
};

export default Homepage;
