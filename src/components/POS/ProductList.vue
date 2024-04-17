<template>
  <div class="d-flex flex-wrap justify-content-center align-items-center">
    <v-col
      cols="6"
      sm="6"
      lg="3"
      md="6"
      class="d-flex"
      style="gap: 20px"
      v-for="(product, index) in products"
      :key="index"
    >
      <v-card class="rounded-xl">
        <v-img :src="product.img_url" height="170" />

        <v-card-title>{{ product.prod_name }}</v-card-title>
        <v-card-subtitle class="d-flex justify-space-between">
          <span class="me-1 font-italic">In Stock : {{ product.stock }}</span>
          <span class="">$ {{ product.price }}</span>
        </v-card-subtitle>

        <v-divider class="mx-4 mb-1"></v-divider>
        <v-card-actions>
          <v-btn
            style="background-color: #ededed"
            block
            border
            @click="addToCart(product)"
          >
            Add To Cart 🛒
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(product) {
      this.$emit("add-to-cart", product);
    },
  },
};
</script>

<style></style>
