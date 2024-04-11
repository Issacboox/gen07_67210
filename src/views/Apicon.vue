<template>
  <div>
    <h1>API Connect Page</h1>
    <h1>{{ apidata }}</h1>
    <v-btn color="success" @click="getData()">call api</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apidata: [],
    };
  },
  methods: {
    getData() {
      this.axios.get("http://localhost:3000/orders").then((response) => {
        console.log("data from api", response.data);
        this.apidata = response.data;
      });
    },
  },
};
</script>

<style></style>
