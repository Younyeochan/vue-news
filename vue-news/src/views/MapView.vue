<template>
   <div style="height: 880px; width: 100%">
    <l-map
      @click="onCustomClick"
      @update:zoom="updateZoom"
      @update:center="updateCenter"
      :zoom="zoom"
      :center="center"
      style="height: 100%"
    >
      <l-circle :lat-lng="circle.center" fillOpacity="0.1" fillColor="blue" color="red" :radius="90" />
      <l-tile-layer
        :url="url"
        :attribution="attribution"
      />
      <l-marker :draggable="true" @update:latlng="onDrag" @click="onLogMarker(item)" :lat-lng="getCoord(item.lat,item.long)" v-for="item in coordArray" :key="item.id">
        <l-icon :icon-url="icon" :icon-size="iconSize" />
        <l-popup>
            {{item.name}}
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { latLng, Icon } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup, LTooltip,LIcon, LCircle } from "vue2-leaflet";
import marker from '../assets/marker.png'

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
    LTooltip,
    LIcon,
    LCircle,
  },
  methods: {
    getCoord(a,b) {
      return latLng(a,b)
    },
    updateZoom(zoom) {
      console.log('zoom', zoom)
    },
    updateCenter(center) {
      console.log('center', center)
    },
    onLogMarker(item) {
      console.log('item', item)
    },
    onDrag({lat,lng}){
      console.log('younyc', lat,lng)
    },
    onCustomClick(item) {
      const {latLng}=item;
      console.log('yo',latLng)
    }
  },
  data() {
    return {
      zoom: 16.7,
      center: latLng( 37.373626, -233.054960),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '이지트래픽',
      coordArray:[{id:1,lat:37.374857,long:-233.052315,name:'이지트래픽'},{id:2,lat:37.372239,long:-233.056607,name:'금정역'}],
      icon: marker,
      iconSize:[50, 50],
      circle: {
        center: latLng( 37.374857, -233.052315 ),
        radius: 5000
      }
    };
  },
}
</script>

<style>

</style>