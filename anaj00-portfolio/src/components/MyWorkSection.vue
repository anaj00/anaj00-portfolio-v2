<template>
  <v-container>
    <h2 class="text-h3 mb-6">My Work</h2>

    <v-row>
      <v-col cols="12" md="6" v-for="(card, i) in cards" :key="i">
        <WorkCard :title="card.title" :description="card.description" :long-description="card.longDescription"
          :image="card.image" :tech="card.tech" :links="card.links" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import WorkCard from '@/components/WorkCard.vue'

  const cards = [
    {
      title: 'FurMate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      longDescription: 'Detailed info about FurMate project...',
      image:
        'https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=2070&auto=format&fit=crop',
      tech: [
        { label: 'Vue', icon: 'mdi-vuejs' },
        { label: 'Firebase', icon: 'mdi-firebase' },
        { label: 'Vuetify', icon: 'mdi-vuetify' }
      ],
      links: [
        {
          title: 'GitHub',
          icon: 'mdi-github',
          href: 'https://github.com/anaj00'
        },
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/jana-marie-bantolino/'
        }
      ]
    },
    {
      title: 'FurMate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      longDescription: 'Detailed info about FurMate project...',
      image:
        'https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=2070&auto=format&fit=crop',
      tech: [
        { label: 'Vue', icon: 'mdi-vuejs' },
        { label: 'Firebase', icon: 'mdi-firebase' },
        { label: 'Vuetify', icon: 'mdi-vuetify' }
      ],
      links: [
        {
          title: 'GitHub',
          icon: 'mdi-github',
          href: 'https://github.com/anaj00'
        },
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/jana-marie-bantolino/'
        }
      ]
    },
    {
      title: 'FurMate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      longDescription: 'Detailed info about FurMate project...',
      image:
        'https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=2070&auto=format&fit=crop',
      tech: [
        { label: 'Vue', icon: 'mdi-vuejs' },
        { label: 'Firebase', icon: 'mdi-firebase' },
        { label: 'Vuetify', icon: 'mdi-vuetify' }
      ],
      links: [
        {
          title: 'GitHub',
          icon: 'mdi-github',
          href: 'https://github.com/anaj00'
        },
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/jana-marie-bantolino/'
        }
      ]
    },
    {
      title: 'FurMate',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      longDescription: 'Detailed info about FurMate project...',
      image:
        'https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=2070&auto=format&fit=crop',
      tech: [
        { label: 'Vue', icon: 'mdi-vuejs' },
        { label: 'Firebase', icon: 'mdi-firebase' },
        { label: 'Vuetify', icon: 'mdi-vuetify' }
      ],
      links: [
        {
          title: 'GitHub',
          icon: 'mdi-github',
          href: 'https://github.com/anaj00'
        },
        {
          title: 'LinkedIn',
          icon: 'mdi-linkedin',
          href: 'https://www.linkedin.com/in/jana-marie-bantolino/'
        }
      ]
    },
  ]
</script>
