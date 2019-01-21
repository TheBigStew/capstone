//jshint esversion: 6

<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <button @click="goHome">Go Home</button>
    {{ test }}
    <button @click="changeValue">change store value</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
        title: 'Users',
        value: 'changed'
        }
    },
    methods: {
        goHome() {
            this.$router.push('/');
        },
        changeValue () {
            this.$store.commit('changeValue', this.value);
        }
    },
    computed: {
        test () {
            return this.$store.state.test
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
