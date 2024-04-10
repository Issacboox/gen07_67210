<template>
<div class="container mt-8">
    <h1 v-if="showDisplay">Hi {{ name }}</h1>
    <v-btn color="success" @click="displayAlert">Switch</v-btn>
    <div class="img-adjust">
        <v-row>
            <v-col cols="3" v-for="(item, index) in imgst" :key="index" style="object-fit: cover;">
                <v-img :src="item.img" width="350" height="350" class="rounded-circle" />
                <h4>{{ item.message }}</h4>
            </v-col>
            <div class="d-flex">
                <v-col cols="11">
                <v-text-field name="message_alert"
                label="กรอกข้อความแจ้งเตือน"
                id="message_alert"
                v-model="message_alert"
                ></v-text-field>
            </v-col>
            <v-col cols="1">
                <v-btn color="success" small class="mt-4" @click="displayAlertParams(message_alert)">alert msg</v-btn>
            </v-col> 
            </div>

            <v-col cols="12">
                <simchild @displayAlert="displayAlert" :name="message_alert"/>
            </v-col>
        </v-row>
        <h1>{{ message_alert }}</h1>
    </div>

</div>
</template>

<script>
import simchild from '../components/Simple/SimpleChild.vue';

export default {
    components:{
        simchild
    },
    data() {
        return {
            message_alert: '',
            name: "Nurarat Sangreuang",
            showDisplay: false,
            imgst: [{
                message: 'Foo',
                img: require('../assets/gojo.jpg')
            }, {
                message: 'Bar',
                img: require('../assets/tama.jpg')
            }, {
                message: 'Bar',
                img: require('../assets/logo.png')
            }, {
                message: 'Bar',
                img: require('../assets/beans.png')
            }]
        }
    },
    methods: {
        displayAlert() {
            alert('Hello')
        },
        displayAlertParams(item) {
            alert('Name : ' + item)
        }
    }
}
</script>

<style>

</style>
