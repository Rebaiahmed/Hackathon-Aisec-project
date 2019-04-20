import React, { Component } from "react";
// react components used to create a google map
/*import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";*/

import Leaflet from 'leaflet'
import L from 'leaflet';
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
import { Map, TileLayer ,Circle,
  CircleMarker,
  Polygon,
  Polyline,
  Popup,
  Rectangle,
  Tooltip,
  Marker,
FeatureGroup } from 'react-leaflet'


import { EditControl } from "react-leaflet-draw"






export const suitcasePoint = new L.Icon({
  iconUrl: require('./restaurant.png'),
  iconRetinaUrl: require('./restaurant.png'),
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
  iconSize: [45, 45],
  shadowUrl: '../../assets/img/moving.svg',
  shadowSize: [29, 40],
  shadowAnchor: [7, 40],
})



export const monumentPoint = new L.Icon({
    iconUrl: require('./monument.png'),
    iconRetinaUrl: require('./monument.png'),
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [45, 45],
    shadowUrl: '../../assets/img/moving.svg',
    shadowSize: [29, 40],
    shadowAnchor: [7, 40],
  })



class  Tracking extends Component {

  constructor (props) {
		super(props);
		this.state = {
      animate: false,

      selectedDrug : '',
      hasLocation: false,
      drugs :[],
      clicked: 0,
      latitude: 36.849101999999995,
      lang: 10.1815426,

      temperatureData : [
        {x: 1, y: 24},
        {x: 1.15, y: 24.5},
        {x: 1.25, y: 25},
        {x: 1.30, y: 22},
        {x: 1.45, y: 24},
        {x: 1.6, y: 24.83}
      ],
      latlng: {
        //lat: 51.505,
        //lng: -0.09,
        lat: 36.849101999999995,
       lng: 10.1815426,
        selectedDrug : '',
        hasLocation: false,
        drugs :[],
        clicked: 0,
},
     
    }
    
    //___________________//
   //this._increase();
    }





//_________________________//

componentDidMount() {

}



     //_____________Function getDrugs______________/:

  


    componentWillMount() {
      navigator.geolocation.getCurrentPosition(
        position => {
            console.log('poiton is' + JSON.stringify(position));
          this.setState({ lat: position.coords.latitude, lng: position.coords.longitude,
          hasLocation:false});
        },
        error => console.log(error)
      );

     // this.getDrugs();

    
  }



  





 





  handleClick = (e) => {
        this.setState({
          latlng: e.latlng,
        })
        this.setState({ clicked: this.state.clicked + 1 })
      }
    
      toggleAnimate = () => {
        this.setState({
          animate: !this.state.animate,
        })
      }

    
    
  handleLocationFound = (e) => {
        this.setState({
          hasLocation: true,
          latlng: e.latlng,
        })
    }
 
      

      render() {

        const { subwayLinesFilter } = this.state;
        let { lang , latitude ,temperatureData} = this.state ;

      
        const position = [this.state.lat, this.state.lng]
        const position2 = [36.849101999999995, 10.1815426]
        const position3 = [36.884960, 10.305420]

        console.log('longttude' + lang + 'latit' + latitude + '' + JSON.stringify(position3)) ;
        const marker = this.state.hasLocation ? (
            <Marker position={position2}>
              <Popup>You are here</Popup>
            </Marker>
    ) : null



        return (

          <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>


          <div className="container" style={{ width: "600px", height: "500px",  float: "right" }}>
          
           

            <Map
              animate={this.state.animate}
              center={this.state.latlng}
              length={4}
              onClick={this.handleClick}
              zoom={12}>
              <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />


       

        <Marker position={position2} icon={suitcasePoint}>
          <Popup>
            restaurant <br /> 
            <Tooltip>Mékla Bnina <br /></Tooltip>
          </Popup>
        </Marker>



        <Marker position={position3} icon={monumentPoint}>
          <Popup>
            Mahrken cartaghe 100 <br /> 
            <Tooltip> Temperature : 36° <br /></Tooltip>
          </Popup>
        </Marker>




       
            </Map>


         
          
        
          
          
          </div>
          </div>
          
        )
    }



}



export default Tracking;