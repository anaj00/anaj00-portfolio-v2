<template>
  <v-footer app height="40">
    <a
      v-for="item in items"
      :key="item.title"
      class="d-inline-block mx-2 social-link"
      :href="item.href"
      rel="noopener noreferrer"
      target="_blank"
      :title="item.title"
    >
      <v-icon :icon="item.icon" :size="item.icon === '$vuetify' ? 24 : 16" />
    </a>

    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px"
    >
      &copy; 2025
      <span class="d-none d-sm-inline-block">anaj00</span>
    </div>
  </v-footer>
</template>

<script setup>
const items = [
  {
    title: "GitHub",
    icon: `mdi-github`,
    href: "https://github.com/anaj00",
  },
  {
    title: "LinkedIn",
    icon: `mdi-linkedin`,
    href: "https://www.linkedin.com/in/jana-marie-bantolino/",
  },
  {
    title: "Mail",
    icon: `mdi-email`,
    href: "mailto:bantolino.jana@gmail.com"
  },
];
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
  text-decoration: none
  transition: .2s ease-in-out

  &:hover
    color: var(--accent);
</style>
