<template>
  <div class="container">
    <h1>All Order</h1>
    <v-row>
      <v-col cols="12" class="mt-5">
        <v-simple-table white>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left" width="10%">Code</th>
                <th class="text-left" width="20%">Date Buy</th>
                <th class="text-left" width="10%">Total</th>
                <th class="text-left" width="10%">More Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in orderdata" :key="item._id" height="50px">
                <td>{{ item.receipt_number }}</td>
                <td>{{ formatDate(item.createdAt) }}</td>
                <td>{{ item.total }}</td>
                <td>
                  <v-btn color="info" @click="showOrderDetail(item._id)"
                    >more details</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogdetail" max-width="500">
      <v-card>
        <v-card-title v-if="selectedOrder">Order Details #{{ selectedOrder.receipt_number }}</v-card-title>
        <v-card-text v-if="selectedOrder">
          <p>
            <strong>Date Buy:</strong>
            {{ formatDate(selectedOrder.createdAt) }}
          </p>
          <p><strong>Total:</strong> {{ selectedOrder.total }}</p>
          <p><strong>Products:</strong></p>
          <ul>
            <li v-for="product in selectedOrder.products" :key="product._id">
              {{ product.quantity }} x {{ product.product_id.prod_name }} ({{ product.product_id.price }})
            </li>
          </ul>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="closeDialog()">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderdata: [],
      dialogdetail: false,
      selectedOrder: null,
    };
  },
  methods: {
    async getData() {
      try {
        const response = await this.axios.get("http://localhost:3000/orders");
        console.log("data from api", response.data);
        this.orderdata = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      return date.toLocaleDateString(); // Adjust the format as needed
    },
    async showOrderDetail(orderId) {
      try {
        const response = await this.axios.get(
          `http://localhost:3000/orders/${orderId}`
        );
        console.log("order detail:", response.data);
        this.selectedOrder = response.data;
        this.dialogdetail = true;
      } catch (error) {
        console.error("Error fetching order detail:", error);
      }
    },
    closeDialog() {
      this.dialogdetail = false;
      this.selectedOrder = null;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
