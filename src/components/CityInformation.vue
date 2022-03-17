<template>
    <div>
        <div class="sicaklik-degeri">
            {{ city }}: {{ temperature }}
        </div>
        <b-button
            variant="outline-primary"
            class="mt-3"
            @click="$emit('click')">
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
            type: Number,
            required: true
        }
    }
}
</script>

<style scoped>

</style>