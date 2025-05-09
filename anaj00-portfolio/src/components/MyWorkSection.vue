<template>
  <v-container>
    <h2 class="text-h3 mb-6">My Work</h2>

    <v-row>
      <v-col cols="12" md="6" v-for="(card, i) in cards" :key="i">
        <WorkCard :tag="card.tag" :title="card.title" :description="card.description" :long-description="card.longDescription" :highlights="card.highlights"
          :image="card.image" :tech="card.tech" :links="card.links" :card-image="card.cardImage" :images="card.images"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import WorkCard from '@/components/WorkCard.vue'
  import cards from '@/data/cards.js'
</script>
