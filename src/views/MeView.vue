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

<!-- Another content -->
<div class="d-flex justify-center align-center mt-8">
<tabme/>
</div>
</div>
</template>

<script>
import cardpic from "../components/MePage/PictureCard.vue";
import aboutme from "../components/MePage/AboutMe.vue";
import tabme from "../components/MePage/TabMe.vue";


export default {
    components: {
        cardpic,
        aboutme,
        tabme
    }
};
</script>

<style></style>
