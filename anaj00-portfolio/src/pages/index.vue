<template>
  <v-container fluid>
    <v-row>
      <HeroSection />
    </v-row>
    <v-row class="margin-top-section">
      <TechStack />
    </v-row>
    <v-row class="margin-top-section">
      <MyWorkSection />
    </v-row>
  </v-container>


</template>

<script setup>
import TechStack from '@/components/TechStack.vue';

  
</script>

<style scoped>
  .margin-top-section {
    margin-top: 10%;
  }
</style>
