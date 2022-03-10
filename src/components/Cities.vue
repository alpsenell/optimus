<template>
    <div>
        <b-dropdown id="dropdown-1" text="Sehir Seciniz" class="m-md-2">
            <b-dropdown-item
                v-for="city in availableCities"
                :key="city"
                @click="selectCity(city)">
                <span class="extra-text" v-if="city === userLocatedCity">Suan buradasiniz !</span>
                <span class="extra-text" v-else-if="city === 'ankara'">Suan ankarradasin !</span>
                <span class="extra-text" v-else>konumun bilinmiyor</span>
                {{ city }}
            </b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script>
export default {
    name: "Cities",

    data() {
        return {
            availableCities: ['istanbul', 'izmir', 'ankara', 'sirnak', 'hatay', 'antalya'],
            userLocatedCity: 'istanbul'
        }
    },

    methods: {
        selectCity(city) {
            this.$emit('changeCity', city)
        }
    }
}
</script>

<style scoped>
    .extra-text {
        font-size: 10px;
    }
</style>