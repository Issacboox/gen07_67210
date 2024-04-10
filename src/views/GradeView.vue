<template>
  <div class="design-box">
    <h2
      class="font-weight-light text-center text-decoration-underline mb-2 mt-4"
    >
      Calculate Grade 🧮
    </h2>
    <v-sheet
      class="mx-auto"
      width="300"
      style="background-color: rgb(244, 252, 237)"
    >
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="subjectName"
          :rules="subjectNames"
          label="Subject"
          required
        ></v-text-field>

        <v-text-field v-model="score" label="Score" required></v-text-field>

        <v-btn
          class="mt-2"
          type="submit"
          block
          @click="displayAlertGrade(subjectName, score)"
          >Grading</v-btn
        >
      </v-form>
    </v-sheet>
  </div>
</template>

<script>
// import { useToast } from "vue-toastification";

// const toast = useToast();
export default {
  data: () => ({
    subjectName: "",
    subjectNames: [
      (value) => {
        if (value?.length > 3) return true;
        return "First name must be at least 3 characters.";
      },
    ],
    score: "",
  }),
  methods: {
    displayAlertGrade(subject, score) {
      if (score >= 80 && score <= 100) {
        this.$toast.success(
          "In " + subject + " you get: >> A << Good Job!! 😍",
          {
            position: "top-right",
            timeout: 5000,
            icon: true,
            rtl: false,
          }
        );
      } else if (score >= 70 && score <= 79) {
        this.$toast.success("In " + subject + " you get: B Well done!! 👍🏻", {
          position: "top-right",
          timeout: 5000,
          icon: true,
          rtl: false,
        });
      } else if (score >= 60 && score <= 69) {
        this.$toast.success("In " + subject + " you get: C Keep Fighting 🙂", {
          position: "top-right",
          timeout: 5000,
          icon: true,
          rtl: false,
        });
      } else if (score >= 50 && score <= 59) {
        this.$toast.warning(
          " You get: D Better try harder next time but good job 😺",
          {
            position: "top-right",
            timeout: 5000,
            icon: true,
            rtl: false,
          }
        );
      } else if (score?.length == 0 && subject?.length == 0) {
        this.$toast.error("Please Fill Form ⌨️", {
          position: "top-right",
          timeout: 5000,
          icon: true,
          rtl: false,
        });
      } else if (score >= 0 && score <= 49) {
        this.$toast.warning(
          "In " + subject + " you get: F PLease try again next term! 💪🏻",
          {
            position: "top-right",
            timeout: 5000,
            icon: true,
            rtl: false,
          }
        );
      } else {
        this.$toast.error("Score must be between 0 and 100", {
          position: "top-right",
          timeout: 5000,
          icon: true,
          rtl: false,
        });
      }
      this.subjectName = "";
      this.score = "";
    },
  },
};
</script>

<style>
.design-box {
  background-color: rgb(244, 252, 237);
  padding: 20px;
  width: fit-content;
  margin: auto; /* Center horizontally */
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center; /* Center text inside box */
}
</style>
