function updatemap()
{console.log('updating realtime corona data');
  fetch("data.json")
  .then(response=>response.json())
  .then(rsp=>{
      rsp.data.forEach(element => {
          latitude=element.latitude;
        longitude=element.longitude;
        cases=element.infected;
        if(cases>200)
        {
            color='rgb(233,13,10)';
        }
        else if(cases>150&&cases<=200)
        {
            color='rgb(227,233,10)';
        }
        else if(cases<150)
        {
            color='rgb(28,233,10)';
        }
        var marker = new mapboxgl.Marker({
            draggable: false,
            color:color
            })
            .setLngLat([longitude,latitude])
            .addTo(map);
            var popup = new mapboxgl.Popup({ offset: 25 }).setText(
                'Construction on the Washington Monument began in 1848.'
                );
                var el = document.createElement('div');
el.id = 'marker';
 
// create the marker
new mapboxgl.Marker(el)
.setLngLat([longitude,latitude])
.setPopup(popup) // sets a popup on this marker
.addTo(map);
          
      });
  })
}
let interval=2000
setInterval(updatemap, interval);
