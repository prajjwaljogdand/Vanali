import { Box } from "@mui/material";
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Zoom,
  Inject,
  Marker,
  MarkersDirective,
  MarkerDirective,
} from "@syncfusion/ej2-react-maps";


const SimpleMap = (props) => {
  return (
    <Box>
     <MapsComponent
        id="maps"
        theme="FabricDark"
        centerPosition={{ latitude: 18.516726, longitude: 73.856255 }}
        zoomSettings={{
          enable: true,
          zoomFactor: 12,
          toolbars: ["Zoom", "ZoomIn", "ZoomOut", "Pan", "Reset"],
        }}
      >
        <Inject services={[Marker,Zoom]} />
        <LayersDirective>
          <LayerDirective layerType="OSM" >
          <MarkersDirective>
                            <MarkerDirective visible={true} height={20} width={15} dataSource={[
    {
        latitude: 18.516726,
        longitude: 73.856255,
    },
   ]}>
                            </MarkerDirective>
                        </MarkersDirective>
         </LayerDirective>  
        </LayersDirective>
      </MapsComponent>
    </Box>
       
  );
};

export default SimpleMap;
