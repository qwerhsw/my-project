<template>
  <div class="hello">
    home
    <!-- <button @click="btnAction('home')">home</button>
    <button @click="btnAction('setting')">setting</button> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    console.log(process.env.NODE_ENV)
  },
  methods: {
    btnAction (name) {
      this.$router.push({name})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
