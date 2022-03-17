<template>
    <div>
        <h3>{{ name }}</h3>
        <div>Temperature is: {{ temperature }}</div>
        <div>Feels like: {{ feelsLike }}</div>
        <div>Humidity is: {{ humidity }}</div>
        <div>Weather condition is: {{ condition }}</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'temperature',
            'feelsLike',
            'humidity',
            'condition',
            'name'
        ])
    },

    mounted() {
        console.log(this.$route.params)
    }
}
</script>

<style scoped>

</style>