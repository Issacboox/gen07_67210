<template>
  <div>
    <v-app-bar app color="white" :elevation="0" >
      <div class="d-flex align-center">
      </div>
      <h4 class="text-nav">Nura S.</h4>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {};
</script>

<style>
.text-nav{
  text-transform: uppercase;
  font-style: italic;
  font-size: larger;
  font-weight: 400;
  margin-left: 20px;
}
</style>
