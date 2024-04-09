<template>
<div class="container">
<div class="d-flex justify-center align-center">
    <div class="mr-6">
        <cardpic />
    </div>
    <div>
       <aboutme/>
    </div>
</div>
<v-divider class="mt-8"></v-divider>
<!-- Another content -->

</div>
</template>

<script>
import cardpic from "../components/MePage/PictureCard.vue";
import aboutme from "../components/MePage/AboutMe.vue";

export default {
    components: {
        cardpic,
        aboutme
    }
};
</script>

<style></style>
