<template>
    <div>
        <div class="sicaklik-degeri">
            {{ city }}: {{ temperature }}
        </div>
        <b-button
            variant="outline-primary"
            class="mt-3"
            @click="changeUrl">
            Go To Details
        </b-button>
    </div>
</template>

<script>
export default {
    name: "CityInformation",
    props: {
        city: {
            type: String,
            required: true
        },
        temperature: {
            type: String,
            required: true
        }
    },
    methods: {
        changeUrl() {
            this.$router.push({ path: this.city })
        }
    }
}
</script>

<style scoped>

</style>