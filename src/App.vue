<template>
    <Header></Header>
    <RouterView></RouterView>
    <Footer></Footer>
</template>

<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/views/common/Header.vue';
import Footer from '@/views/common/Footer.vue';
</script>

<style lang="scss" scoped>

</style>
