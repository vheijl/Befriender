import React,{useEffect} from 'react';
import '../../App.css';
import L from 'leaflet';


function Map(props) {

    useEffect(()=>{

        let container = L.DomUtil.get('mapid');
        if(container !== null){
            container._leaflet_id = null;
        }

        var mymap = L.map('mapid').setView([props.friend.longitude, props.friend.latitude], 14);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', 
        {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox.streets',
            accessToken: 'pk.eyJ1IjoiZWRpc2VlIiwiYSI6ImNrMmVyajdhZzAxcXIzYmwxODNwd2I5bWYifQ.LsnQirxtYHsBAn-8nchAwQ'
        }).addTo(mymap);

        var marker = L.marker([props.friend.longitude,props.friend.latitude]).addTo(mymap);
    });

    
    return (
        <>
            <p>{props.friend.username}</p>
            <p>{props.friend.description}</p>
            <div id="mapid"> </div>
        </>
    );
  }
  
  export default Map;

  