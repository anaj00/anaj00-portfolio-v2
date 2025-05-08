<template>
  <v-card class="pa-4 mt-4 border fun-card" flat @click="showDialog = true">
    <v-card-title class="font-weight-regular">
      <div class="text-wrap text-justify" style="white-space: normal; word-break: break-word; line-height: 1.2;">
        {{ title }}
      </div>
    </v-card-title>
    <v-card-text>
      {{ description }}
      <v-img :src="image" class="mt-3" rounded="lg" cover />

      <v-row class="">
        <v-col cols="10">
          <v-chip-group column>
            <v-chip v-for="techItem in tech" :key="techItem.label" variant="outlined">
              <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
              {{ techItem.label }}
            </v-chip>
          </v-chip-group>
        </v-col>

        <v-col cols="2" class="d-flex align-end justify-end">
          <a class="icon-hover mb-3" @click.stop="showDialog = true">
            <v-icon>mdi-arrow-right</v-icon>
          </a>
        </v-col>
      </v-row>

    </v-card-text>
  </v-card>

  <!-- Dialog -->
  <v-dialog v-model="showDialog" max-width="70vw" max-height="80vh" height="80vh" width="70vw">
    <v-card class="pa-4 bg-background">
      <v-card-title class="d-flex justify-space-between align-center">
        <div class="text-wrap" style="white-space: normal; word-break: break-word;">
          {{ title }}
        </div>
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
              <!-- Long Description -->
              <div class="mt-2 text-body-2 text-justify" v-html="formattedLongDescription" />

              <!-- Key Highlights -->
              <p class="mt-4 text-h6">Key Highlights</p>
              <ul class="mt-2 ml-4 text-justify" style="list-style-type: disc;">
                <li v-for="(point, index) in highlights" :key="index">{{ point }}</li>
              </ul>

              <!-- Technologies -->
              <p class="mt-4 text-h6">Technologies</p>
              <v-chip-group class="" column>
                <v-chip v-for="techItem in tech" :key="techItem.label" variant="outlined">
                  <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
                  {{ techItem.label }}
                </v-chip>
              </v-chip-group>

              <!-- Links -->
              <div class="d-flex flex-row mt-2">
                <p class="text-h6">Links</p>
                <div class="">
                  <a v-for="item in links" :key="item.title" class="d-inline-block social-link ml-2" :href="item.href"
                    rel="noopener noreferrer" target="_blank" :title="item.title">
                    <v-icon :icon="item.icon" :size="30" />
                  </a>
                </div>
              </div>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from 'vue'

const showDialog = ref(false)

const props = defineProps({
  title: String,
  description: String,
  longDescription: String,
  image: String,
  tech: Array,
  links: Array,
  highlights: Array
})

const formattedLongDescription = computed(() =>
  props.longDescription?.replace(/- (.*?)(\n|$)/g, '<li>$1</li>').replace(/\n/g, '<br>')
)
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
