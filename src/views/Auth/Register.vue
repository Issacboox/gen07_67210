<template>
  <v-container
    fluid
    class="d-flex flex-column justify-center align-center mt-15"
  >
    <v-row>
      <v-col>
        <v-card class="pa-10 rounded-xl" width="450">
          <h1 class="text-center font-weight-semibold">Register</h1>
          <v-form v-model="valid">
            <v-container>
              <v-row class="">
                <v-col cols="12">
                  <img
                    src="https://www.icegif.com/wp-content/uploads/2023/08/icegif-470.gif"
                    class="pic-login"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="employee_id"
                    label="Employee ID"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="password"
                    label="Password"
                    hide-details
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn color="black" style="color: white" width="100%"
                    >Login</v-btn
                  >
                  <p class="mt-2 font-weight-light font-italic">
                    don't have account yet ? sign up
                    <a href="/register">here</a>
                  </p>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
    <Footer />
  </v-container>
</template>

<script>
import Footer from "../../components/Footer";
export default {
  components: {
    Footer,
  },
};
</script>

<style>
.pic-login {
  position: fixed;
  /* top: 30px; */
  margin-bottom: 300px;
  margin-left: 235px;
  width: 140px;
  bottom: 133px;
  /* opacity: 0.6; */
}
</style>
