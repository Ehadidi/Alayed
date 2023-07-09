<template>
    <section class="M_top_50 M_bottom_50">
        <div class="container">
            <GMapMap :center="center" :zoom="16" map-type-id="terrain" style="width: 100%; height: 400px">
                <GMapMarker :key="marker.id" v-for="marker in markers" :position="marker.position" />
            </GMapMap>
        </div>
    </section>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            center: { lat: 24.774265, lng: 46.738586 },
            markers: [
                {
                    id: 'dfsldjl3r',
                    position: {
                        lat: 24.774265, lng: 46.738586
                    },
                }
            ]
        }
    }
}
</script>