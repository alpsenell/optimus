<template>
    <div class="hello">
        <cities @changeCity="changeCity"></cities>
        <h1>Hava Durumu</h1>
        <div>Sicaklik Degerleri</div>
        <city-information
            :city="selectedCity"
            :temperature="temperature">
        </city-information>
    </div>
</template>

<script>
import CityInformation from './CityInformation';
import Cities from './Cities';

const ENDPOINT = 'http://api.weatherapi.com/v1/current.json?key=0c4a819b394e409285373748222402';

export default {
    components: {
        CityInformation,
        Cities
    },

    data() {
        return {
            selectedCity: 'istanbul',
            temperature: '26 C'
        };
    },

    watch: {
        selectedCity() {
            this.sendRequest();
        }
    },

    methods: {
        changeCity(city) {
            this.selectedCity = city;
        },
        sendRequest() {
            this.axios
                .get(`${ENDPOINT}&q=${this.selectedCity}`)
                .then(response => this.handleRequest(response))
        },
        handleRequest(request) {
            const {data: {current: {temp_c}}} = request;

            this.temperature = `${temp_c} C`;
        }
    }
}
</script>

<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
