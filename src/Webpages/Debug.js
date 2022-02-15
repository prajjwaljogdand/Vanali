import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import TyrePressureSection from "../Components/TyrePressureSection";
class Debug extends React.Component {
  state = { data: {}, engineTemp: [], envTemp: [], ambientTemp: [], count: 0 };
  componentDidMount() {
    const ws = new WebSocket("ws://localhost:8000/ws");
    ws.onmessage = this.onMessage;

    this.setState({
      ws: ws,
      // Create an interval to send echo messages to the server
      interval: setInterval(() => ws.send("echo"), 5000),
    });
  }

  componentWillUnmount() {
    const { ws, interval } = this.state;
    ws.close();
    clearInterval(interval);
  }

  onMessage = (ev) => {
    const recv = JSON.parse(ev.data);
    const { count, engineTemp, envTemp, ambientTemp } = this.state;
    let engineTempData = [...engineTemp];
    let envTempData = [...envTemp];
    let ambientTempData = [...ambientTemp];
    if (count > 20) {
      engineTempData = engineTempData.slice(1);
      envTempData = envTempData.slice(1);
      ambientTempData = ambientTempData.slice(1);
    }
    engineTempData.push({ value: recv.temp_data.engine_temp, index: count });
    envTempData.push({ value: recv.temp_data.env_temp, index: count });
    ambientTempData.push({ value: recv.temp_data.ambient_temp, index: count });
    this.setState({
      data: recv,
      count: count + 1,
      engineTemp: engineTempData,
      envTemp: envTempData,
      ambientTemp: ambientTempData,
    });
  };
  render() {
    return (
      <Box>
        <header>
          <Typography variant="h2" textAlign={"center"}>
            Debug Mode
          </Typography>
          <Box paddingLeft={"15%"} display={"flex"} flexWrap={"wrap"}>
            {this.state.data.temp_data ? (
              <>
                {" "}
                <Paper
                  elevation={6}
                  className="container"
                  sx={{
                    height: 300,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                >
                  <Typography textAlign={"center"} width={500}>
                    Ambient Temperature {this.state.data.temp_data.ambient_temp}
                  </Typography>
                  <AreaChart
                    width={500}
                    height={200}
                    data={this.state.ambientTemp}
                  >
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#33ff33"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#33ff33"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="index" />
                    <YAxis />
                    <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#33ff33"
                      fill="url(#colorValue)"
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </Paper>
                <Paper
                  elevation={6}
                  className="container"
                  sx={{
                    height: 300,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                >
                  <Typography textAlign={"center"} width={500}>
                    {" "}
                    Env Temperature {this.state.data.temp_data.env_temp}
                  </Typography>
                  <AreaChart width={500} height={200} data={this.state.envTemp}>
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#33ff33"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#33ff33"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="index" />
                    <YAxis />
                    <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#33ff33"
                      fill="url(#colorValue)"
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </Paper>
                <Paper
                  elevation={6}
                  className="container"
                  sx={{
                    height: 300,
                    marginLeft: 5,
                    marginRight: 5,
                    marginTop: 5,
                    marginBottom: 5,
                  }}
                >
                  <Typography textAlign={"center"} width={500}>
                    Engine Temperature {this.state.data.temp_data.engine_temp}
                  </Typography>
                  <AreaChart
                    width={500}
                    height={200}
                    data={this.state.engineTemp}
                  >
                    <defs>
                      <linearGradient
                        id="colorValue"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#33ff33"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="#33ff33"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="index" />
                    <YAxis />
                    <CartesianGrid stroke="#666" strokeDasharray="5 5" />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#33ff33"
                      fill="url(#colorValue)"
                      isAnimationActive={false}
                    />
                  </AreaChart>
                </Paper>
              </>
            ) : (
              <CircularProgress />
            )}
          </Box>
          <Box paddingLeft={"15%"} paddingRight={"15%"}>
            {this.state.data.pressure_data ? (
              <TyrePressureSection
                pressureData={this.state.data.pressure_data}
              />
            ) : (
              <CircularProgress />
            )}
          </Box>
        </header>
      </Box>
    );
  }
}

export default Debug;
