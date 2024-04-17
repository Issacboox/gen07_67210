<template>
  <div class="">
    <v-row class="">
      <v-col
        cols="12"
        v-for="(product, index) in selectedProducts"
        :key="index"
        class="d-flex justify-center items-center"
        style="min-height: 80px; border-bottom: 1px solid #ccc; padding: 10px"
      >
        <v-col
          cols="4"
          md="3"
          class="d-flex me-2 justify-center items-center"
          style="gap: 10px"
        >
          <img
            :src="product.img_url"
            alt="pic-cart"
            height="50px"
            class="rounded-xl"
          />
          <span class="mt-3">{{ product.prod_name }}</span>
        </v-col>
        <v-col
          cols="5"
          md="5"
          class="d-flex text-center justify-center items-center mt-2"
          style="gap: 10px"
        >
          <v-btn color="white" @click="adjustQuantity(index, -1)"> ➖ </v-btn>
          <span class="mt-2 font-weight-bold"> {{ product.quantity }} </span>
          <v-btn
            color="white"
            @click="adjustQuantity(index, 1)"
            class=""
            style="width: fit-content"
          >
            ➕
          </v-btn>
        </v-col>
        <v-col cols="3" md="2" class="mt-4"
          >{{ product.price * product.quantity }}<b>$</b></v-col
        >
      </v-col>
      <!-- Total Price -->
      <v-col
        cols="12"
        class="d-flex justify-space-between"
        style="padding: 20px; background-color: #f5f5f5"
      >
        <h3>Total</h3>
        <h3>{{ totalPrice }}$</h3>
      </v-col>
      <!-- Actions -->
      <v-col cols="12">
        <v-btn
          class="rounded-xl"
          color="success"
          style="width: 100%"
          @click="checkout"
          >Checkout</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    selectedProducts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    totalPrice() {
      return this.selectedProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
    },
  },
  methods: {
    adjustQuantity(index, amount) {
      const product = this.selectedProducts[index];
      const newQuantity = product.quantity + amount;

      if (newQuantity >= 1) {
        product.quantity = newQuantity;
        this.$emit("adjust - quantity", { index, amount });
      } else if (newQuantity < 1) {
        this.$emit("remove-from-cart", index);
      }
    },
    checkout() {
      this.$emit("checkout");
    },
  },
};
</script>

<style></style>
