<template>
  <div>
    <h1>Simple Child</h1>
    <h2>{{ name }}</h2>
    <v-btn color="warning" @click="callMain()">call main</v-btn>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods:{
    callMain(){
      this.$emit('displayAlert')
    }
  }
};
</script>

<style></style>
