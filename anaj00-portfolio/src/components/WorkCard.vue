<template>
  <v-card class="pa-4 mt-4 border fun-card" flat @click="showDialog = true">
    <v-chip class="ml-2 mb-2" color="accent" small>
      <v-icon class="mr-2" size="20">{{ getIconForTag(tag) }}</v-icon>
      {{ tag }}
    </v-chip>
    <v-card-title class="font-weight-regular">
      <div
        class="text-wrap text-justify"
        style="white-space: normal; word-break: break-word; line-height: 1.2"
      >
        {{ title }}
      </div>
    </v-card-title>
    <v-card-text>
      <v-img :src="cardImage" class="mt-1" rounded="lg" cover />
      <div class="mt-2 text-body-2 text-justify">
        {{ description }}
      </div>

      <v-row class="mt-1">
        <v-col cols="10">
          <v-chip-group column>
            <v-chip v-for="techItem in tech" :key="techItem.label">
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
  <v-dialog
    v-model="showDialog"
    :fullscreen="$vuetify.display.smAndDown"
    max-width="1200px"
    scrollable
  >
    <v-card class="pa-md-4 bg-background" flat>
      <!-- Title -->
      <v-card-title class="d-flex justify-space-between mb-3">
        <div style="white-space: normal; word-break: break-word">
          {{ title }}
        </div>
        <a icon @click="showDialog = false" flat class="icon-hover">
          <v-icon>mdi-close</v-icon>
        </a>
      </v-card-title>

      <!-- Content -->
      <v-card-text style="max-height: 80vh" class="text-body-2">
        <!-- Carousel -->
        <div v-if="hasImages" class="mb-4">
          <Splide
            :options="{
              arrows: images.length > 1,
              pagination: true,
              height: 'auto',
              autoHeight: true,
              fixedWidth: '100%',
              breakpoints: {
                600: {
                  autoHeight: true,
                },
              },
            }"
            class="rounded-lg mb-4"
          >
            <SplideSlide
              v-for="(img, index) in images"
              :key="index"
              class="flex justify-center items-center"
            >
              <img
                :src="img"
                class="max-w-full max-h-[500px] object-contain"
                style="width: 100%; height: auto"
              />
            </SplideSlide>
          </Splide>
        </div>

        <!-- Technologies -->
        <div v-if="tech?.length">
          <p class="text-h6">Technologies</p>
          <v-chip-group column>
            <v-chip v-for="techItem in tech" :key="techItem.label" class="ma-1">
              <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
              {{ techItem.label }}
            </v-chip>
          </v-chip-group>
        </div>

        <!-- Links -->
        <div v-if="links?.length" class="mt-4">
          <p class="text-h6">Links</p>
          <div>
            <a
              v-for="item in links"
              :key="item.title"
              class="d-inline-block social-link mr-2"
              :href="item.href"
              rel="noopener noreferrer"
              target="_blank"
              :title="item.title"
            >
              <v-icon :icon="item.icon" :size="30" class="mt-n1" />
            </a>
          </div>
        </div>

        <!-- Long Description -->
        <div class="text-body-2 text-justify mt-4" v-html="longDescription" />

        <!-- Highlights -->
        <div v-if="highlights?.length" class="mt-6">
          <p class="text-h6">Key Highlights</p>
          <ul class="mt-2 ml-4 text-justify" style="list-style-type: disc">
            <li v-for="(point, index) in highlights" :key="index">
              {{ point }}
            </li>
          </ul>
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, computed } from "vue";
import "@splidejs/vue-splide/css";
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const showDialog = ref(false);

const props = defineProps({
  tag: String,
  title: String,
  description: String,
  longDescription: String,
  cardImage: String,
  images: Array,
  tech: Array,
  links: Array,
  highlights: Array,
});

const hasImages = computed(() => {
  return props.images && props.images.length > 0;
});

const tags = ["Software Engineering", "UI/UX Design", "Data Science"];

const getIconForTag = (tag) => {
  const iconMap = {
    "Software Development": "mdi-code-tags",
    "UI/UX Design": "mdi-palette-swatch",
    "Data Science / AI": "mdi-brain",
  };
  return iconMap[tag] || "mdi-tag";
};
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
