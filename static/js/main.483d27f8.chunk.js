(this["webpackJsonpwheather-app"]=this["webpackJsonpwheather-app"]||[]).push([[0],{24:function(e,t,a){e.exports=a(51)},30:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(21),c=a.n(r),s=(a(7),a(23)),l=a(3),o=a(4),u=a(2),m=a(6),p=a(5),d=a(8),h=a(10),v=a.n(h),y=a(11),f=a(22),b=(a(30),a(9)),E=a.n(b),g=a(53),w=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={city:"",cityName:"",cityId:"",country:"",lat:"",long:"",region:"",temperature:"",realFeel:"",humidity:"",pressure:"",uvIndex:"",uvIndexText:"",windSpeed:"",windDirection:"",visibility:"",cloudCover:"",icon:"",text:""},i.getData=i.getData.bind(Object(u.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(u.a)(i)),i.handleChange=i.handleChange.bind(Object(u.a)(i)),i}return Object(o.a)(a,[{key:"getData",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,a,i,n,r,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.a.get("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=".concat(this.props.apiKey,"&q=").concat(this.state.city));case 3:return t=e.sent,a=t.data[0],this.setState({cityName:a.LocalizedName,cityId:a.Key,country:a.Country.LocalizedName,lat:a.GeoPosition.Latitude,long:a.GeoPosition.Longitude,region:a.Region.EnglishName}),e.next=8,E.a.get("http://dataservice.accuweather.com/currentconditions/v1/".concat(this.state.cityId,"?apikey=").concat(this.props.apiKey,"&details=true"));case 8:return i=e.sent,n=i.data[0],this.setState({temperature:n.Temperature.Metric.Value,realFeel:n.RealFeelTemperature.Metric.Value,pressure:n.Pressure.Metric.Value,uvIndex:n.UVIndex,uvIndexText:n.UVIndexText,humidity:n.RelativeHumidity,windSpeed:n.Wind.Speed.Metric.Value,windDirection:n.Wind.Direction.Localized,visibility:n.Visibility.Metric.Value,cloudCover:n.CloudCover,icon:n.WeatherIcon,text:n.WeatherText}),e.next=13,E.a.get("http://api.timezonedb.com/v2.1/get-time-zone?key=".concat(this.props.timeApiKey,"&format=json&by=position&lat=").concat(this.state.lat,"&lng=").concat(this.state.long));case 13:r=e.sent,this.setState({epochTime:r.data.formatted}),c=Object(y.a)(Object(y.a)({},this.state),{},{id:Object(g.a)()}),this.props.create(c),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),console.log(e.t0),alert("Sorry, we couldn't find what you searched for! Try again!");case 23:case"end":return e.stop()}}),e,this,[[0,19]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(e){e.preventDefault(),this.getData(),this.setState({city:""})}},{key:"handleChange",value:function(e){this.setState(Object(d.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return n.a.createElement("form",{className:"Input",onSubmit:this.handleSubmit},n.a.createElement("div",null,n.a.createElement("label",{className:"Input-label",htmlFor:"city"},"City:"),n.a.createElement("input",{name:"city",type:"text",id:"city",value:this.state.city,onChange:this.handleChange,placeholder:"Search city",required:!0})),n.a.createElement("button",{className:"Input-btn"},"Get Weather!"),n.a.createElement("h6",{className:"Input-link"},"View more on"," ",n.a.createElement("a",{href:"https://www.accuweather.com/"},"AccuWeather.com")))}}]),a}(i.Component);w.defaultProps={apiKey:"irtFAaS7MxuaQq70RX4v0TEpoPdOYDfA",timeApiKey:"GXML41NJ38XX"};a(48);var N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).removeCity=i.removeCity.bind(Object(u.a)(i)),i}return Object(o.a)(a,[{key:"removeCity",value:function(){this.props.remove(this.props.id)}},{key:"render",value:function(){var e;return e=this.props.icon<10?"https://developer.accuweather.com/sites/default/files/0".concat(this.props.icon,"-s.png"):"https://developer.accuweather.com/sites/default/files/".concat(this.props.icon,"-s.png"),n.a.createElement("div",{className:"city"},n.a.createElement("h2",{className:"city-title"},this.props.city),n.a.createElement("div",{className:"main-weather"},n.a.createElement("div",{className:"city-wheather-img"},n.a.createElement("img",{src:e,alt:"weather"})),n.a.createElement("div",{className:"city-info-temp"},n.a.createElement("h4",{className:"description"},this.props.text),n.a.createElement("h3",{className:"temperature"},n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-temperature-low"}))," ",this.props.temperature,"\xb0 C"),n.a.createElement("p",null,"Feels like: ",this.props.feels,"\xb0 C"))),n.a.createElement("div",{className:"city-info"},n.a.createElement("div",{className:"city-location"},n.a.createElement("div",{className:"city-country"},"Country: ",this.props.country),n.a.createElement("div",{className:"city-region"},"Region: ",this.props.region),n.a.createElement("div",{className:"geo"},"Lat: ",this.props.lat,"\xb0 Long: ",this.props.long,"\xb0"," ",n.a.createElement("i",{className:"fas fa-map-marker-alt"})),n.a.createElement("div",{className:"city-time"},"Local time: ",this.props.date)),n.a.createElement("div",null)),n.a.createElement("div",{className:"city-wheather"},n.a.createElement("div",{className:"container"},n.a.createElement("div",null,"Cloud cover: ",this.props.cloudCover,"%"," ",n.a.createElement("i",{className:"fas fa-cloud"})),n.a.createElement("div",null,"Air pressure: ",this.props.pressure," mb"),n.a.createElement("div",null,"UV index: ",this.props.UV," - ",this.props.UVText)),n.a.createElement("div",{className:"container"},n.a.createElement("div",null,"Humidity: ",this.props.humidity," %"," ",n.a.createElement("span",null,n.a.createElement("i",{className:"fas fa-tint"}))),n.a.createElement("div",null,"Wind: ",this.props.windSpeed," km/h,"," ",n.a.createElement("span",null,n.a.createElement("i",{className:"far fa-compass"}))," ",this.props.windDirection),n.a.createElement("div",null,"Visibility: ",this.props.visibility," km"," ",n.a.createElement("i",{className:"fas fa-binoculars"})))),n.a.createElement("button",{className:"city-btn",onClick:this.removeCity},"Delete City Info ",n.a.createElement("i",{className:"far fa-trash-alt"})))}}]),a}(i.Component),C=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={cities:[]},i.createCity=i.createCity.bind(Object(u.a)(i)),i.handleRemove=i.handleRemove.bind(Object(u.a)(i)),i}return Object(o.a)(a,[{key:"createCity",value:function(e){this.setState({cities:[].concat(Object(s.a)(this.state.cities),[e])})}},{key:"handleRemove",value:function(e){this.setState({cities:this.state.cities.filter((function(t){return t.id!==e}))})}},{key:"render",value:function(){var e=this,t=this.state.cities.map((function(t){return n.a.createElement(N,{key:t.id,id:t.id,city:t.cityName,region:t.region,country:t.country,date:t.epochTime,lat:t.lat,long:t.long,text:t.text,pressure:t.pressure,UV:t.uvIndex,UVText:t.uvIndexText,icon:t.icon,temperature:t.temperature,feels:t.realFeel,humidity:t.humidity,windSpeed:t.windSpeed,windDirection:t.windDirection,visibility:t.visibility,cloudCover:t.cloudCover,remove:e.handleRemove})}));return n.a.createElement("div",null,n.a.createElement(w,{create:this.createCity}),t)}}]),a}(i.Component);C.defaultProps={apiKey:"irtFAaS7MxuaQq70RX4v0TEpoPdOYDfA"};a(49),a(50);var x=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"Footer"},n.a.createElement("h6",null,"Made by Marian Barbieru \xa9 2020"))}}]),a}(i.Component);var O=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Weather Now"),n.a.createElement(C,null),n.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){}},[[24,1,2]]]);
//# sourceMappingURL=main.483d27f8.chunk.js.map