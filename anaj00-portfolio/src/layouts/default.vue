<template>
  <Navbar />
  <v-main>
    <router-view />
  </v-main>

  <AppFooter />
</template>

<style>
.fun-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.fun-card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
