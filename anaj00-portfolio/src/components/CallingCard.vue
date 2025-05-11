<template>
  <v-container fluid>
    <v-row class="d-flex justify-center" align="center" no-gutters>
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card
          class="pa-4 pa-sm-6 doodle-card d-flex flex-column flex-sm-row align-center hover-accent"
          rounded="lg"
        >
          <!-- Profile Picture: stacks on top for xs, left for sm+ -->
          <v-img
            src="/pfp.png"
            height="160"
            width="160"
            class="mx-auto mb-4 mb-sm-0 mr-sm-6"
            contain
          ></v-img>

          <!-- Text Content -->
          <div class="d-flex flex-column text-center text-sm-left">
            <h1 class="text-h6 text-sm-h5 font-weight-light">
              Jana Marie Bantolino
            </h1>
            <h2 class="text-subtitle-2 font-weight-light mt-n1">
              <a href="mailto:bantolino.jana@gmail.com" class="email-link">
                bantolino.jana@gmail.com
              </a>
            </h2>

            <div class="d-flex justify-center justify-sm-start align-center mt-3">
              <a
                class="social-link"
                href="https://github.com/anaj00"
                title="GitHub"
              >
                <v-icon icon="mdi-github" size="28" />
              </a>
              <a
                class="social-link ml-3"
                href="https://www.linkedin.com/in/jana-marie-bantolino/"
                title="LinkedIn"
              >
                <v-icon icon="mdi-linkedin" size="28" />
              </a>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<style scoped>
.hover-accent {
  transition: color 1s ease;
}

.hover-accent:hover {
  background-color: var(--primary);
}

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
