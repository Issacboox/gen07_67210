<template>
  <div class="container">
    <h1 class="text-center font-weight-light">POS 🧮</h1>
    <div class="d-flex mt-3" style="gap: 10px">
      <v-btn color="success" href="/apicon">Manage Product</v-btn>
      <v-btn color="info" href="/orderAll">All Order</v-btn>
    </div>
    <v-row class="d-flex mt-3" style="gap: 10px; padding: 10px">
      <v-col cols="12" sm="12" lg="8" md="7" class="rounded-xl">
        <h3 class="font-weight-light">Product List</h3>
        <ProductList
          :products="apidata"
          :selectedProducts="selectedProducts"
          @add-to-cart="addToCart"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="3"
        md="4"
        style="border: 0.5px solid; border-color: aliceblue"
        class="rounded-xl"
      >
        <div class="d-flex justify-space-between">
          <h3 class="font-weight-light mt-1 ms-1">Cart</h3>
          <div>
            <v-btn width="20px" class="rounded-xl">🗑️</v-btn>
          </div>
        </div>
        <br />
        <Cart
          :selectedProducts="selectedProducts"
          @adjust-quantity="adjustQuantity"
          @checkout="checkout"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductList from "@/components/POS/ProductList";
import Cart from "@/components/POS/Cart";
// import AddToCart from "@/components/POS/AddToCart";
export default {
  components: {
    ProductList,
    Cart,
    // AddToCart,
  },
  data() {
    return {
      id: "",
      apidata: [],
      selectedProducts: [],
    };
  },
  methods: {
    removeFromCart(index) {
      this.selectedProducts.splice(index, 1);
    },
    async getData() {
      try {
        const response = await this.axios.get("http://localhost:3000/products");
        console.log("data from api", response.data);
        // Assuming response.data is an array of products with a 'stock' property
        this.apidata = response.data.map((product) => ({
          ...product,
          stock: product.stock, // Assuming 'stock' is a property in each product object
        }));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },

    toggleSelection(product) {
      const index = this.selectedProducts.findIndex((p) => p.id === product.id);
      if (index !== -1) {
        this.selectedProducts.splice(index, 1);
      } else {
        this.selectedProducts.push({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        });
      }
    },
    adjustQuantity({ index, amount }) {
      const newQuantity = this.selectedProducts[index].quantity + amount;
      if (newQuantity >= 1) {
        this.selectedProducts[index].quantity = newQuantity;
      }
    },
    async checkout() {
      try {
        const response = await this.axios.post("http://localhost:3000/orders", {
          products: this.selectedProducts,
        });
        console.log("Order created:", response.data);
        // Clear the cart after successful checkout
        this.selectedProducts = [];
      } catch (error) {
        console.error("Error creating order:", error);
      }
    },

    addToCart(product) {
      const existingProductIndex = this.selectedProducts.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex !== -1) {
        // Increase quantity if product already exists
        this.selectedProducts[existingProductIndex].quantity++;
      } else {
        // Add new product to the cart with quantity 1
        this.selectedProducts.push({ ...product, quantity: 1 });
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
