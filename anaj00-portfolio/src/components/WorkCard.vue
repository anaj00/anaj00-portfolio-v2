<template>
  <v-card class="pa-4 mt-4 border fun-card" flat @click="showDialog = true">
    <v-card-title class="font-weight-regular">{{ title }}</v-card-title>
    <v-card-text>
      {{ description }}
      <v-img :src="image" class="mt-3" rounded="lg" cover />

      <div class="d-flex flex-row justify-space-between align-center mt-1">
        <v-chip-group class="mt-1" column>
          <v-chip v-for="techItem in tech" :key="techItem.label" variant="outlined">
            <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
            {{ techItem.label }}
          </v-chip>
        </v-chip-group>

        <a class="icon-hover" variant="plain" flat icon @click.stop="showDialog = true">
          <v-icon>mdi-arrow-right</v-icon>
        </a>
      </div>
    </v-card-text>
  </v-card>

  <!-- Dialog -->
  <v-dialog v-model="showDialog" max-width="70vw" max-height="80vh" height="80vh" width="70vw">
    <v-card class="pa-4 bg-background">
      <v-card-title class="d-flex justify-space-between align-center">
        <h1 class="text-h4 font-weight-light">{{ title }}</h1>
        <a icon @click="showDialog = false" flat class="icon-hover">
          <v-icon>mdi-close</v-icon>
        </a>
      </v-card-title>

      <v-container class="fill-height mt-n6 text-body-2" fluid>
        <v-row class="fill-height">
          <v-col cols="12" md="6" class="fill-height d-flex flex-column">
            <v-img class="fill-height" :src="image" cover rounded="lg" />
          </v-col>

          <v-col cols="12" md="6" class="fill-height">
            <v-container class="mr-4">
              <div class="mt-n5">
                <a v-for="item in links" :key="item.title" class="d-inline-block social-link" :href="item.href"
                  rel="noopener noreferrer" target="_blank" :title="item.title">
                  <v-icon :icon="item.icon" :size="32" />
                </a>
              </div>

              <p class="mt-3">{{ longDescription }}</p>

              <p class="mt-4 text-h6">Technologies</p>
              <v-chip-group class="mt-n2" column>
                <v-chip v-for="techItem in tech" :key="techItem.label" variant="outlined">
                  <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
                  {{ techItem.label }}
                </v-chip>
              </v-chip-group>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const showDialog = ref(false)

defineProps({
  title: String,
  description: String,
  longDescription: String,
  image: String,
  tech: Array,
  links: Array
})
</script>


<style scoped>
.social-link :deep(.v-icon) {
  height: 1em;
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  text-decoration: none;
  transition: 0.2s ease-in-out;
}

.social-link :deep(.v-icon):hover {
  color: var(--accent);
}

.icon-hover :deep(.v-icon) {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  transition: 0.2s ease-in-out;
}

.icon-hover:hover :deep(.v-icon) {
  color: var(--accent);
  cursor: pointer;
}
</style>
