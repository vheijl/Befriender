import React,{useEffect} from 'react';
import '../../App.css';
import L from 'leaflet';


function Map(event) {

    useEffect(()=>{

        var mymap = L.map('mapid').setView([60, 15], 7);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZWRpc2VlIiwiYSI6ImNrMmVyajdhZzAxcXIzYmwxODNwd2I5bWYifQ.LsnQirxtYHsBAn-8nchAwQ'
        }).addTo(mymap);

        var marker = L.marker([60,15]).addTo(mymap);
    });

    
    return (
        <div id="mapid"> </div>
    );
  }
  
  export default Map;

  