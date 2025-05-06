<template>
  <v-container>
    <!-- Card Component -->
    <v-card class="pa-4 mt-4 border fun-card" flat @click="showDialog = true">
      <v-card-title class="font-weight-regular">FurMate</v-card-title>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        risus...
      </v-card-text>
    </v-card>

    <!-- Dialog Component -->
    <v-dialog
      v-model="showDialog"
      max-width="70vw"
      max-height="80vh"
      height="80vh"
      width="70vw"
    >
      <v-card class="pa-4 bg-background">
        <v-card-title class="d-flex justify-space-between align-center">
          <h1 class="text-h4 font-weight-light">FurMate</h1>
          <v-btn icon @click="showDialog = false" flat>
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        
        <v-container height="100%">
          <v-row  class="border">
            <v-col cols="12" md="6">
              <v-img
                src="https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                height="300"
                width="400"
                class="mb-4"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <p class="mt-4 text-h6">Technologies</p>
              <p>Vue, Vuetify, Firebase...</p>
              <p class="mt-4 text-h6">Technologies</p>
              <p>Vue, Vuetify, Firebase...</p>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const showDialog = ref(false);
</script>
