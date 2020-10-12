import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import './App.css';
import mapData from './mapData';
// import mapMobile from './mapMobile';
import 'ammap3/ammap/ammap';
import 'ammap3/ammap/maps/js/continentsLow.js';
import 'ammap3/ammap/maps/js/worldLow.js';
import 'ammap3/ammap/maps/js/vietnamLow.js';
import {MAX_FAN, BIG_FAN, MEDIUM_FAN, MIN_FAN} from './constants';
import rangeDots from './checkpixel';
import FAN_DATA from './FanData';
import DUMMY_DATA from './dummyData';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      zone: {},
      isMobile: false
    };
  }
  componentDidMount() {
    // let data = mapData.filter(e => e.groupId === "BR");
    // const point = {latitude: -19.920800, longitude: -43.937800 };
    // const min=rangeDots(data, point);
    // const index = min.findIndex(e => e=== Math.min.apply(Math,min));
    // data[index].value = 10000000;
    // console.log(data[index]);
    let isMobile = window.innerHeight/window.innerWidth >= 1 ? true : false;
    let data = this.applyData(DUMMY_DATA, isMobile);
    this.setState({
      data,
      total: FAN_DATA.total,
      zone: FAN_DATA.zone,
      isMobile,
    })
  }
  applyData(data, isMobile) {
    let result = [];
    mapData.some(e=>{
      data.map(sub => {
        if(e.groupId === sub.idCountry){
          let idCity = e.idCity ? e.idCity.split('-') : [];
          if(idCity.indexOf(sub.idCity) !== -1) {
            e.value = e.value ? (parseInt(e.value)+ parseInt(sub.number)) : parseInt(sub.number);
            e.title = e.value ? e.value : "";
          }
        }
      })
      result.push(e);
    })
    return result;
  }
  componentWillUnmount() {

  }
  renderConfig(mapData = []){
    let imageData = [];
    const {total, zone, isMobile} = this.state;
    if(mapData.length) {
      imageData = mapData.map( e=> {
          e.color = "#256AA9";
        return e;
      })
    }
    const config = {
      "type": "map",
      "theme": "light",
      "fontSize": 15,
      "color": "#FFFFFF",
      "projection": "mercator",
      "backgroundAlpha": 1,
      "dragMap": false,
      "backgroundColor": "#0A2A51",
      "allowClickOnSelectedObject": false,
      "titles": [
        {
          "text": `${this.renderLabelText(total)}`,
          "size": 25,
          "color": "#37EDF9"
        },
        {
          "text": "Fans",
          "size": 25,
          "color": "#37EDF9"
        },
      ],
      "allLabels": [
        // {
        //   "x": (window.innerWidth/2),
        //   "y": 20,
        //   "text": `${this.renderLabelText(total)}`,
        //   "align": "left",
        //   "size": 50,
        //   "color": "#37EDF9",
        //   "alpha": 1,
        //   "rotation": 0,
        //   "bold": true,
        //   "backgroundColor": "white"
        // },
        {
          "x": (isMobile ? window.innerWidth*0.045 : window.innerWidth*0.15),
          "y": (isMobile ? window.innerHeight*0.5 : window.innerHeight*0.45),
          "text": `${zone.NA ? this.renderLabelText(zone.NA): ""}`,
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        },
        {
          "x": (isMobile ? window.innerWidth*0.15 : window.innerWidth*0.15),
          "y": (isMobile ? window.innerHeight*0.7 : window.innerHeight*0.45),
          "text": `${zone.SA ? this.renderLabelText(zone.SA): ""}`,
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        },
        {
          "x": ( isMobile ? window.innerWidth*0.9 : window.innerWidth*0.75),
          "y": ( isMobile ? window.innerHeight*0.7 : window.innerHeight*0.8),
          "text": `${zone.OC ? this.renderLabelText(zone.OC): ""}`,
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        },
        {
          "x": (isMobile ? window.innerWidth*0.43 : window.innerWidth*0.5),
          "y": (isMobile ? window.innerHeight*0.63 : window.innerHeight*0.65),
          "text": `${zone.AF ? this.renderLabelText(zone.AF): ""}`,
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "background":"rgba(0, 0, 0, 0.6)",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        },
        {
          "x": (isMobile ? window.innerWidth*0.44 : window.innerWidth*0.52),
          "y": (isMobile ? window.innerHeight*0.38 : window.innerHeight*0.35),
          "text": `${zone.EU ? this.renderLabelText(zone.EU): ""}`,
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        },
        {
          "x": (window.innerWidth*0.7),
          "y": (window.innerHeight*0.3),
          "text": !isMobile ? `${zone.RU ? this.renderLabelText(zone.RU): ""}` : "",
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        },
        {
          "x": (isMobile ? window.innerWidth*0.87 : window.innerWidth*0.7),
          "y": (isMobile ? window.innerHeight*0.5 : window.innerHeight*0.5),
          "text": `${zone.CN ? this.renderLabelText(zone.CN): ""}`,
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        },
        {
          "x": (isMobile ? window.innerWidth*0.63 : window.innerWidth*0.6),
          "y": (isMobile ? window.innerHeight*0.58 : window.innerHeight*0.55),
          "text": !isMobile ? `${zone.ID ? this.renderLabelText(zone.ID): ""}` : "" ,
          "align": "left",
          "size": isMobile ? 10 : 18,
          "color": "#37EDF9",
          "alpha": 1,
          "rotation": 0,
          "bold": true
        }
      ],
      "dataProvider": {
        "map": "continentsLow",
        "getAreasFromMap": false,
        "images": imageData.map(e => {
          if(isMobile){
            e.width = 2;
            e.height = 2;
          }
          return e;
        }),
        // "lines": [
        //   {
        //     "latitudes": [38.5139, 38.5139],
        //     "longitudes": [-101.8799, -139],
        //     "stroke": "#37EDF9",
        //   },
        //   {
        //     "latitudes": [-12.9351, -12.9351],
        //     "longitudes": [-61.6017, -139],
        //     "stroke": "#37EDF9",
        //     "arrow": "start"
        //   }
        // ]
      },
      "areasSettings": {
        "color": "rgba(129,129,129,1)",
        "outlineColor": "rgba(80,80,80,1)",
        "rollOverOutlineColor": "rgba(80,80,80,1)",
        // "rollOverBrightness": 20,
        // "selectedBrightness": 20,
        "selectable": true,
        "unlistedAreasAlpha": 0,
        "unlistedAreasOutlineAlpha": 0,
        "alpha": 0,
        "outlineAlpha": 0
      },
      "imagesSettings": {
        "alpha": 1,
        "color": "rgba(129,129,129,1)",
        // "outlineAlpha": 0,
        // "rollOverOutlineAlpha": 0,
        // "outlineColor": "rgba(80,80,80,1)",
        // "rollOverBrightness": 20,
        // "selectedBrightness": 20,
        "selectable": true
      },
      "zoomControl": {
        "zoomControlEnabled": false,
        "homeButtonEnabled": false,
        "panControlEnabled": false,
      },
      "linesSettings": {
        "alpha": 1,
        "color": "#37EDF9",
        // "rollOverBrightness": 20,
        // "selectedBrightness": 20,
      },
      "listeners": [
        {
          "event": "positionChanged",
          "method": function(ev) {
            const map = ev.chart;
            for( let x in map.dataProvider.images) {
              let image = map.dataProvider.images[x];
              if (!image.externalElement && image.value){

                var holder = document.createElement('div');
                holder.title = image.title;
                holder.style.position = 'absolute';
                var pulse = document.createElement('div');
                if (image.value >= MAX_FAN ) {
                  holder.className = 'map-marker';
                  pulse.className = 'pulse';
                  var pulse2 = document.createElement('div');
                  pulse2.className = 'pulse2';
                  holder.appendChild(pulse2);
                  
                } else if(image.value >= BIG_FAN) {
                  holder.className = 'map-marker-big';
                  pulse.className = 'semi-final';
                } else if (image.value >= MEDIUM_FAN) {
                  holder.className = 'map-marker-medium';
                  pulse.className = 'medium';

                } else if (image.value >= MIN_FAN) {
                  holder.className = 'map-marker-small';
                  pulse.className = 'small';
                  // var small = document.createElement('div');
                  // small.className = 'small2';
                  // holder.appendChild(small);
                } else {
                  holder.className = 'map-marker-min';
                  pulse.className = 'dot';
                }
                holder.appendChild(pulse);

                
                // append the marker to the map container
                image.chart.chartDiv.appendChild(holder);
                image.externalElement = holder;
                 
                console.log(map.latitudeToY(83.3467));
                console.log(map.longitudeToX(-29.9545));
                image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
                image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
              }
            }
          }
        },{

        }
      ]
    }
    return config;
  }
  renderLabelText(number) {
    let total = Math.floor(number/1000);
    return `${total>999 ?Math.floor(total/1000) : total}${total>999 ? "M": "K"}`;
  }
  render() {
    const{data } = this.state;
    return (
      <div className="App">
        <AmCharts.React style={{ width: window.innerWidth, height: window.innerHeight}} options={this.renderConfig(data)} />
      </div>
    );
  }
}

export default App;