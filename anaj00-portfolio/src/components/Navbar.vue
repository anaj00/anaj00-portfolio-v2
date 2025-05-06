<template>
  <v-app-bar color="transparent" :elevation="0" rounded>
    <v-app-bar-title class="font-weight-bold hover-accent"> anaj00 </v-app-bar-title>

    <v-spacer></v-spacer>

    <span class="hidden-sm-and-down pr-2">
      <v-btn variant="plain" class="text-capitalize">About me</v-btn>
      <v-btn variant="plain" class="text-capitalize">My Work</v-btn>
      <v-btn variant="plain" class="text-capitalize">Portfolio</v-btn>
    </span>

    <template v-slot:append>
      <span class="hidden-md-and-up">
        <v-app-bar-nav-icon class="text-h4 mr-1 mb-2" @click="toggleDrawer">✿</v-app-bar-nav-icon>
      </span>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="right" temporary>
    <v-list>
      <v-list-item link to="/products">
        <v-list-item-title>About Me</v-list-item-title>
      </v-list-item>
      <v-list-item link to="/claims">
        <v-list-item-title>My Work</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/about-us">
        <v-list-item-title>Portfolio</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
  import { onBeforeUnmount, onMounted, ref } from "vue";

  const hover = ref(false);
  const drawer = ref(false);

  function toggleDrawer() {
    drawer.value = !drawer.value;
  }
</script>

<style scoped>
.hover-accent {
  transition: color 0.3s ease;
}

.hover-accent:hover {
  color: var(--accent);
  cursor: pointer;
}

</style>