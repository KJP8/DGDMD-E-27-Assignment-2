// Copied from Refills - Maps
var bittersMap = (function () {
  var myLatlng = new google.maps.LatLng(43.5140121, -70.3736115),
      myLatlng2 = new google.maps.LatLng(41.3804981, -70.64547299999998),
      myLatlng3 = new google.maps.LatLng(42.88788234322137, -77.28152275085449),
      myLatlng4 = new google.maps.LatLng(41.4901024, -71.31282850000002),
      myLatlng5 = new google.maps.LatLng(41.6250077, -70.63969159999999),
      mapCenter = new google.maps.LatLng(42.6525793, -73.7562317),
      mapCanvas = document.getElementById('map_canvas'),
      mapOptions = {
        center: mapCenter,
        zoom: 7,
        scrollwheel: true,
        draggable: true,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(mapCanvas, mapOptions),
      contentString =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Old Orchard Beach, ME</h1>'+
        '<div id="bodyContent"'+
        '</div>'+
        '</div>',
      infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 300
      }),
      marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Old Orchard Beach, ME'
      }),
      contentString2 =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h1 id='firstHeading' class='firstHeading'>Martha's Vineyard, Cape Cod, MA</h1>"+
        '<div id="bodyContent"'+
        '</div>'+
        '</div>',
      infowindow2 = new google.maps.InfoWindow({
        content: contentString2,
        maxWidth: 300
      }),
      marker2 = new google.maps.Marker({
        position: myLatlng2,
        map: map,
        title: "Martha's Vineyard, Cape Cod, MA"
      }),
      contentString3 =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h1 id='firstHeading' class='firstHeading'>Canandaigua, NY</h1>"+
        '<div id="bodyContent"'+
        '</div>'+
        '</div>',
      infowindow3 = new google.maps.InfoWindow({
        content: contentString3,
        maxWidth: 300
      }),
      marker3 = new google.maps.Marker({
        position: myLatlng3,
        map: map,
        title: "Canandaigua, NY"
      }),
      contentString4 =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h1 id='firstHeading' class='firstHeading'>Newport, RI</h1>"+
        '<div id="bodyContent"'+
        '</div>'+
        '</div>',
      infowindow4 = new google.maps.InfoWindow({
        content: contentString4,
        maxWidth: 300
      }),
      marker4 = new google.maps.Marker({
        position: myLatlng4,
        map: map,
        title: "Newport, RI"
      }),
      contentString5 =
        '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        "<h1 id='firstHeading' class='firstHeading'>Newport, RI</h1>"+
        '<div id="bodyContent"'+
        '</div>'+
        '</div>',
      infowindow5 = new google.maps.InfoWindow({
        content: contentString5,
        maxWidth: 300
      }),
      marker5 = new google.maps.Marker({
        position: myLatlng5,
        map: map,
        title: "Newport, RI"
      });

  return {
    init: function () {
      map.set('styles', [{
        featureType: 'landscape',
        elementType: 'geometry',
        stylers: [
          { hue: '#ffff00' },
          { saturation: 30 },
          { lightness: 10}
        ]}
      ]);

      google.maps.event.addListener(marker, 'mouseover', function () {
        infowindow.open(map,marker);
      });
      
      google.maps.event.addListener(marker, 'mouseout', function () {
        infowindow.close(map,marker);
      });
      
      google.maps.event.addListener(marker2, 'mouseover', function () {
        infowindow2.open(map,marker2);
      });
      
      google.maps.event.addListener(marker2, 'mouseout', function () {
        infowindow2.close(map,marker2);
      });
      
      google.maps.event.addListener(marker3, 'mouseover', function () {
        infowindow3.open(map,marker3);
      });
      
      google.maps.event.addListener(marker3, 'mouseout', function () {
        infowindow3.close(map,marker3);
      });
      
      google.maps.event.addListener(marker4, 'mouseover', function () {
        infowindow4.open(map,marker4);
      });
      
      google.maps.event.addListener(marker4, 'mouseout', function () {
        infowindow4.close(map,marker4);
      });
      
      google.maps.event.addListener(marker5, 'mouseover', function () {
        infowindow5.open(map,marker5);
      });
      
      google.maps.event.addListener(marker5, 'mouseout', function () {
        infowindow5.close(map,marker5);
      });
      
    }
  };
}());

bittersMap.init();