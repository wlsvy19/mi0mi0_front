<template>
  <div>
    <AppHeader />
    <nuxt></nuxt>
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
</style>