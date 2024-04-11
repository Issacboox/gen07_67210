<template>
  <div class="p-5" style="padding: 20px 0px 0px 50px">
    <!-- <h2 class="mb-4"></h2> -->
    <v-row>
      <v-col cols="12">
        <v-btn color="success" @click="newItem()">NewItem</v-btn>
      </v-col>
      <v-col
        cols="6"
        sm="6"
        lg="2"
        md="4"
        v-for="(items, index) in apidata"
        :key="index"
      >
        <v-card width="400">
          <v-img src="../assets//gojo.jpg" height="300" />
          <v-card-title>
            Username : {{ items.username }}
            <br />
            First Name : {{ items.firstName }}
            <br />
            Last Name : {{ items.lastName }}
            <br />
            Email : {{ items.email }}
            <br />
            Role : {{ items.role }}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mb-4 me-4" color="warning" @click="editItem(items)"
              >Edit</v-btn
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
                name="username"
                label="Username"
                v-model="postdata.username"
              ></v-text-field>
              <v-text-field
                name="password"
                label="Password"
                v-model="postdata.password"
              ></v-text-field>
              <v-text-field
                name="firstName"
                label="First Name"
                v-model="postdata.firstName"
              ></v-text-field>
              <v-text-field
                name="lastName"
                label="Last Name"
                v-model="postdata.lastName"
              ></v-text-field>
              <v-text-field
                name="email"
                label="Email"
                v-model="postdata.email"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="error" @click="closeDialog()">cancel</v-btn>
          <v-btn text color="info" @click="saveSelect()">save</v-btn>
          <v-btn color="error" @click="saveDelData(item._id)">delete</v-btn>
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
      apidata: [],
      postdata: {
        // use to post data
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
      },
      postdefault: {
        // clear post data after submit
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
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
      this.id = "";
      this.postdata = {
        ...this.postdefault,
      };
      this.dialogedit = true;
    },
    editItem(item) {
      this.id = item.id;
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
      this.axios.get("http://localhost:3000/users").then((response) => {
        console.log("data from api", response.data);
        this.apidata = response.data.data;
      });
    },
    async savePostData(){
      try {
        const { data } = await this.axios.post("http://localhost:3000/register", this.postdata)
        console.log(data)
        alert("success")
        this.getData()
        this.closeDialog()
      } catch (error) {
        console.log(error)
        alert('err!!')
      }
    },
    async savePutData(){
      try {
        const { data } = await this.axios.put("http://localhost:3000/users", this.postdata)
        console.log(data)
        alert("update success")
        this.getData()
        this.closeDialog()
      } catch (error) {
        console.log(error)
        alert('err!!')
      }
    },
  },
  async saveDelData(item){
    if(confirm("Delete?")){
    try {
      const { data } = await this.axios.delete("http://localhost:3000/users/"+item)
        console.log(data)
        alert("delete success")
        this.getData()
        this.closeDialog()
    } catch (error) {
      console.log(error)
        alert('err!!')
    }
  }
}
};
</script>

<style></style>
