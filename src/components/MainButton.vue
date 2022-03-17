<template>
    <div>
        <button
            class="main-button"
            @click="changeCity">
            {{ name }}
        </button>
    </div>
</template>

<script>
export default {
    name: "MainButton",

    props: {
        name: {
            type: String,
            default: 'Simple Button'
        }
    },

    methods: {
        changeCity(event) {
            this.$emit('clickedMainButton', event);
        }
    }
}
</script>

<style scoped>
.main-button {
    padding: 10px 15px;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>