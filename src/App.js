import React, { Component } from 'react';
import AmCharts from "@amcharts/amcharts3-react";
import './App.css';
import mapData from './mapData';
// import mapMobile from './mapMobile';
import 'ammap3/ammap/ammap';
import 'ammap3/ammap/maps/js/continentsLow.js';
import 'ammap3/ammap/maps/js/worldLow.js';
import 'ammap3/ammap/maps/js/vietnamLow.js';
// import {NORTH_AMERICA, SOUTH_AMERICA, RUSSIA, EUROPE, AFRICA, INDIA, CHINA, OCEANIA} from './constants';
// import rangeDots from './checkpixel';
import _ from 'lodash';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.createCustomImage = this.createCustom.bind();
  }
  componentDidMount() {
    let data = mapData.map(e=>{
      if(e.groupId === "VN"){
        e.alpha = 1;
        e.value = 10;
      } else {
        e.alpha = 0.5;
      }
      return e;
    });
    
    this.setState({
      data,
    })
  }

  componentWillUnmount() {

  }
  renderConfig(mapData = []){
    let imageData = [];
    if(mapData.length) {
      imageData = mapData.map( e=> {
        if(!e.value){
          e.color = "#256AA9";
          // e.customData = <div style={{
          //   background: "radial-gradient(50% 50% at 50% 50%, #E8F9FF 0%, #A5E4FF 29.17%, rgba(64, 186, 255, 0) 100%)",
          //   width:"8px",
          //   height: "8px",
          //   borderRadius:"4px",
          //   }}></div>
        } else {
          e.color = "rgba(64, 186, 255)";
        }
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
      "backgroundColor": "#0A2A51",
      "allowClickOnSelectedObject": false,
      "dataProvider": {
        "map": "continentsLow",
        "getAreasFromMap": false,
        "images": imageData,
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
      "listeners": [{
        "event": "descriptionClosed",
        "method": function(ev) {
          ev.chart.selectObject();
        }
      },
      {
        "event": "positionChanged",
        "method": function(ev) {
          var map = ev.chart;
          for( var x in map.dataProvider.images) {
            var image = map.dataProvider.images[x];
            if (!image.externalElement && image.value){
              var holder = document.createElement('div');
              holder.className = 'map-marker';
              holder.title = image.title;
              holder.style.position = 'absolute';
              
              // create dot
              // var dot = document.createElement('div');
              // dot.className = 'dot';
              // holder.appendChild(dot);
              
              // create pulse
              var pulse = document.createElement('div');
              pulse.className = 'pulse';
              holder.appendChild(pulse);
              
              // append the marker to the map container
              image.chart.chartDiv.appendChild(holder);
              image.externalElement = holder;
              image.externalElement.style.top = map.latitudeToY(image.latitude) + 'px';
              image.externalElement.style.left = map.longitudeToX(image.longitude) + 'px';
            }
          }
        }
      }
    ]
    }
    return config;
  }
  createCustom (image){
    var holder = document.createElement('div');
    holder.className = 'map-marker';
    holder.title = image.title;
    holder.style.position = 'absolute';
    
    // create dot
    var dot = document.createElement('div');
    dot.className = 'dot';
    holder.appendChild(dot);
    
    // create pulse
    var pulse = document.createElement('div');
    pulse.className = 'pulse';
    holder.appendChild(pulse);
    
    // append the marker to the map container
    image.chart.chartDiv.appendChild(holder);
    console.log(holder);
    return holder;
  }
  render() {
    const{data } = this.state;
    return (
      <div className="App">
        <AmCharts.React style={{ width: "100%", height: window.innerHeight}} options={this.renderConfig(data)} />
        {/* <div style={{
          background: "radial-gradient(50% 50% at 50% 50%, #E8F9FF 0%, #A5E4FF 29.17%, rgba(64, 186, 255, 0) 100%)",
          width:"8px",
          height: "8px",
          borderRadius:"4px",
          }}></div> */}
      </div>
    );
  }
}

export default App;