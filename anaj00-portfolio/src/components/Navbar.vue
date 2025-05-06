<template>
  <v-app-bar :elevation="0" color="transparent" rounded>
    <template v-slot:prepend>
      <v-img class="ml-4 mr-n2" src="/pfp.png" width="2.5em"></v-img>
    </template>
    <v-app-bar-title class="font-weight-bold">anaj00</v-app-bar-title>

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

const drawer = ref(false); // State to control the mobile drawer visibility

// Toggle the drawer on mobile view
function toggleDrawer() {
  drawer.value = !drawer.value;
}

const isScrolled = ref(false);

function handleScroll() {
  isScrolled.value = window.scrollY > 20;
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onBeforeUnmount(() => window.removeEventListener("scroll", handleScroll));
</script>
