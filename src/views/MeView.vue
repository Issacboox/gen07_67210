<template>
<div class="container">
<div class="d-flex justify-center align-center">
    <div class="mr-6">
        <cardpic />
    </div>
    <div>
        <v-skeleton-loader type="article">
            <h1>Hi 👋🏻 <br /><span class="font-weight-light">I'am Nurarat Sangreuang</span></h1>
            <span class="font-weight-bold">About me</span><br />
            <span class="" style="color: grey;text-transform:lowercase">Hi I'm Bam Graguated from Burapa University with a Bachelor Degree <br />of Science in Information Techbology</span>
        </v-skeleton-loader>
    </div>
</div>
<v-divider class="mt-8"></v-divider>
<!-- Another content -->

</div>
</template>

<script>
import cardpic from "../components/PictureCard.vue";
export default {
    components: {
        cardpic
    }
};
</script>

<style></style>
