<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

header {
    background: #efefef;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 60px;
    a {
        margin: 10px;
    }
}
</style>
