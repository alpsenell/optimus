<template>
    <div class="hello">
        <cities @changeCity="changeCity"></cities>
        <h1>Hava Durumu</h1>
        <div>Sicaklik Degerleri</div>
        <city-information
            :city="name"
            :temperature="temperature"
            @click="goToCityUrl">
        </city-information>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import CityInformation from './CityInformation';
import Cities from './Cities';

const ENDPOINT = 'http://api.weatherapi.com/v1/current.json?key=0c4a819b394e409285373748222402';

export default {
    components: {
        CityInformation,
        Cities
    },

    mounted() {
        this.sendRequest();
    },

    computed: {
      ...mapState([
          'name',
          'temperature'
      ])
    },

    watch: {
        name() {
            this.sendRequest();
        }
    },

    methods: {
        ...mapMutations([
            'changeCity',
            'setCityInformation'
        ]),
        sendRequest() {
            this.axios
                .get(`${ENDPOINT}&q=${this.name}`)
                .then(response => this.handleRequest(response))
        },
        handleRequest(request) {
            const {data: { current }} = request;

            this.setCityInformation(current);
        },
        goToCityUrl() {
            this.$router.push({ path: this.name });
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
