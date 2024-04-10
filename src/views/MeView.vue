<template>
  <div class="container">
    <div class="d-flex justify-center align-center">
      <div class="mr-6">
        <cardpic />
      </div>
      <div>
        <aboutme />
      </div>
    </div>

    <!-- Another content -->
    <div class="secondbox">
      <h2 class="text-left mt-4 font-italic font-weight-light">History 📌</h2>
      <div class="d-flex justify-center align-center mt-8 mb-8">
        <tabme />
      </div>
      <h2 class="text-left mt-4 font-italic font-weight-light">Hobby 🪴</h2>
      <div class="d-flex justify-center align-center mt-8 mb-10">
        <hobby />
      </div>
      <h2 class="text-left mt-4 font-italic font-weight-light">What is my strengths and weaknesses ?</h2>
      <div class=" mt-3 mb-5">
       <strengthandweak/>
      </div>
      <h2 class="text-left mt-4 font-italic font-weight-light">Also Interested...</h2>
      <div class=" mt-3 mb-5">
       <interest/>
      </div>
    </div>
  </div>
</template>

<script>
import cardpic from "../components/MePage/PictureCard.vue";
import aboutme from "../components/MePage/AboutMe.vue";
import tabme from "../components/MePage/TabMe.vue";
import hobby from "../components/MePage/Hobby.vue";
import interest from "../components/MePage/Interest.vue";
import strengthandweak from '../components/MePage/StWn'
export default {
  components: {
    cardpic,
    aboutme,
    tabme,
    hobby,
    interest,
    strengthandweak
  },
};
</script>

<style>
.secondbox {
  margin-left: 400px;
  margin-right: 400px;
}
</style>
