<template>
  <div class="d-flex">
    <v-card
      class="pa-6 mr-10 doodle-card d-flex flex-row align-center justify-center"
      height="250"
      width="550"
      rounded="lg"
    >
      <div>
        <v-img src="/pfp.png" height="200" width="200"></v-img>
      </div>

      <div class="d-flex flex-column ml-8">
        <h1 class="text-h6 text-sm-h5 font-weight-light">
          Jana Marie Bantolino
        </h1>
        <h2 class="text-subtitle-2 font-weight-light mt-n1">
          <a href="mailto:bantolino.jana@gmail.com" class="email-link">
            bantolino.jana@gmail.com
          </a>
        </h2>

        <div class="d-flex flex-row align-center mt-3">
          <p class="text-h7 text-sm-h6 font-weight-light mr-1">@</p>
          <a
            class="d-inline-block social-link"
            href="https://github.com/anaj00"
            title="GitHub"
          >
            <v-icon icon="mdi-github" :size="32" />
          </a>
          <a
            class="d-inline-block social-link"
            href="https://www.linkedin.com/in/jana-marie-bantolino/"
            title="GitHub"
          >
            <v-icon icon="mdi-linkedin" :size="32" />
          </a>
        </div>
      </div>
    </v-card>
  </div>
</template>

<style scoped>
.doodle-card {
  border: 2.3px dashed #3f3f3f;
  background-color: var(--v-theme-background);
  box-sizing: border-box;
}

.social-link :deep(.v-icon) {
  color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  text-decoration: none;
  transition: 0.2s ease-in-out;
}

.social-link :deep(.v-icon):hover {
  color: var(--accent);
}

.email-link {
  text-decoration: none;
  color: inherit;
  transition: color 0.2s ease;
}

.email-link:hover {
  color: var(--accent); /* or any custom color like #1976D2 */
}

</style>
