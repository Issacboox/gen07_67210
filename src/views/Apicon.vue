<template>
  <div class="container" >
    <!-- <h2 class="mb-4"></h2> -->
    <v-row>
      <v-col cols="12" class="d-flex" style="gap: 20px;">
        <v-btn color="info" href="/pos">Back</v-btn>
        <v-btn color="success" @click="newItem()">NewItem</v-btn>
      </v-col>
      <v-col
        cols="4"
        sm="6"
        lg="2"
        md="3"
        v-for="(items, index) in apidata"
        :key="index"
      >
        <v-card width="350" class="rounded-xl">
          <v-img :src="items.img_url" height="220" />
          <v-card-title>
            {{ items.prod_name }}
            <br />
            Price : {{ items.price }}
            <br />
            Stock : {{ items.stock }}
            <br />
          </v-card-title>
          <v-card-actions class="d-flex items-center justify-center me-7">
            <v-spacer></v-spacer>
            <v-btn width="40%" color="warning" @click="editItem(items)"
              >Edit</v-btn
            >
            <v-btn width="40%" color="error" @click="saveDelData(items._id)"
              >delete</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialogedit" max-width="500">
      <v-card>
        <v-card-title> {{ savemode }} </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                name="prod_name"
                label="Product Name"
                v-model="postdata.prod_name"
              ></v-text-field>
              <v-text-field
                name="price"
                label="Price"
                v-model="postdata.price"
              ></v-text-field>
              <v-text-field
                name="Oldstock"
                :disabled="isOldStockDisabled"
                label="Current Stock"
                v-model="postdata.stock"
              ></v-text-field>

              <v-text-field
                name="stock"
                label="Add Stock"
                v-model="postdata.stock"
              ></v-text-field>
              <v-text-field
                name="img_url"
                label="Image URL"
                v-model="postdata.img_url"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="closeDialog()">cancel</v-btn>
          <v-btn text color="info" @click="savePutData()">save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogadd" max-width="500">
      <v-card>
        <v-card-title> Add Product </v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                name="prod_name"
                label="Product Name"
                v-model="postdata.prod_name"
              ></v-text-field>
              <v-text-field
                name="price"
                label="Price"
                v-model="postdata.price"
              ></v-text-field>
              <v-text-field
                name="Oldstock"
                :disabled="isOldStockDisabled"
                label="Current Stock"
                v-model="postdata.stock"
              ></v-text-field>

              <v-text-field
                name="stock"
                label="Add Stock"
                v-model="postdata.stock"
              ></v-text-field>
              <v-text-field
                name="img_url"
                label="Image URL"
                v-model="postdata.img_url"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="closeDialog()">cancel</v-btn>
          <v-btn text color="info" @click="savePostData()">Create</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <p>{{ apidata }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      dialogedit: false,
      dialogadd:false,
      isOldStockDisabled: true,
      apidata: [],
      postdata: {
        // use to post data
        prod_name: "",
        price: "",
        stock: "",
        img_url: "",
      },
      postdefault: {
        // clear post data after submit
        prod_name: "",
        price: "",
        stock: "",
        img_url: "",
      },
    };
  },
  computed: {
    savemode() {
      return this.id == "" ? "NewItem" : "EditItem";
    },
  },
  created() {
    this.getData();
  },
  methods: {
    newItem() {
      this.id = ""; // Clear the id
      this.postdata = { ...this.postdefault }; // Reset postdata to default values
      this.dialogadd = true; // Show the dialog
    },

    editItem(item) {
      this.id = item._id; // Assuming your item object has an _id property
      this.postdata = {
        ...item,
      };
      this.dialogedit = true;
    },
    closeDialog(item) {
      this.id = "";
      this.postdata = {
        ...item,
      };
      this.dialogedit = false;
    },
    saveSelect() {
      if (this.id != "") {
        alert("update");
      } else alert("new item");
    },
    getData() {
      this.axios.get("http://localhost:3000/products").then((response) => {
        console.log("data from api", response.data);
        this.apidata = response.data;
      });
    },
    async savePostData() {
      try {
        const { data } = await this.axios.post(
          "http://localhost:3000/products",
          this.postdata
        );
        console.log(data);
        alert("success");
        this.getData();
        this.closeDialog();
      } catch (error) {
        console.log(error);
        alert("err!!");
      }
    },
    async savePutData() {
      try {
        const { data } = await this.axios.put(
          "http://localhost:3000/products/" + this.id,
          this.postdata // send the updated data
        );
        console.log(data);
        alert("update success");
        this.getData();
        this.closeDialog();
      } catch (error) {
        console.log(error);
        alert("err!!");
      }
    },
    async saveDelData(id) {
      if (confirm("Delete?")) {
        try {
          const { data } = await this.axios.delete(
            "http://localhost:3000/products/" + id
          );
          console.log(data);
          alert("delete success");
          this.getData();
          this.closeDialog();
        } catch (error) {
          console.log(error);
          alert("err!!");
        }
      }
    },
  },
};
</script>

<style></style>
