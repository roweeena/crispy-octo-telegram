<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 60px;
}

button {
  height: 2.5em;
  background-color: #64BDB1;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  padding:0 1em ;
}
button:hover{
  cursor:pointer;
  filter:opacity(0.9);
}
button:active{ transform:translateY(1px) }
</style>
