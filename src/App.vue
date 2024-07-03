<template>
    <Header></Header>
    <RouterView></RouterView>
    <Footer></Footer>
</template>

<script lang="ts" setup>
    import { RouterLink, RouterView } from 'vue-router';
    import Header from '@/components/Common/Header.vue';
    import Footer from '@/components/Common/Footer.vue';
</script>

<style lang="scss" scoped>

</style>
