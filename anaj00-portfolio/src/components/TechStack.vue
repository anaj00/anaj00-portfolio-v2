<template>
  <v-container>
    <h2 class="text-h3 mb-6">My Tech Stack</h2>
    <v-row>
      <!-- AI/DS -->
      <v-col cols="12" md="4">
        <v-card class="pa-4 mt-4 border fun-card" flat>
          <v-card-title class="font-weight-regular">
            <div
              class="text-wrap text-justify"
              style="
                white-space: normal;
                word-break: break-word;
                line-height: 1.2;
              "
            >
              Data Science / Machine Learning
            </div>
          </v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip v-for="techItem in tech_ds" :key="techItem.label">
                <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
                {{ techItem.label }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Frontend -->
      <v-col cols="12" md="4">
        <v-card class="pa-4 mt-4 border fun-card" flat>
          <v-card-title class="font-weight-regular">
            <div
              class="text-wrap text-justify"
              style="
                white-space: normal;
                word-break: break-word;
                line-height: 1.2;
              "
            >
              Frontend Development
            </div>
          </v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip v-for="techItem in tech_frontend" :key="techItem.label">
                <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
                {{ techItem.label }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Backend -->
      <v-col cols="12" md="4">
        <v-card class="pa-4 mt-4 border fun-card" flat>
          <v-card-title class="font-weight-regular">
            <div
              class="text-wrap text-justify"
              style="
                white-space: normal;
                word-break: break-word;
                line-height: 1.2;
              "
            >
              Backend Development
            </div>
          </v-card-title>
          <v-card-text>
            <v-chip-group column>
              <v-chip v-for="techItem in tech_backend" :key="techItem.label">
                <v-icon class="mr-2" size="20">{{ techItem.icon }}</v-icon>
                {{ techItem.label }}
              </v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tech_ds: [
        { label: "Python", icon: "mdi-language-python" },
        { label: "Scikit-learn", icon: "mdi-robot" },
        { label: "PyTorch", icon: "mdi-pytorch" },
        { label: "OpenCV", icon: "mdi-camera" },
        { label: "Matplotlib", icon: "mdi-chart-line" },
        { label: "Pandas", icon: "mdi-database" },
        { label: "Numpy", icon: "mdi-numeric" },
        { label: "Jupyter", icon: "mdi-laptop" },
      ],
      tech_frontend: [
        { label: "Vue.js", icon: "mdi-vuejs" },
        { label: "Vuetify", icon: "mdi-vuetify" },
        { label: "Kotlin", icon: "mdi-language-kotlin" },
        { label: "Android Studio", icon: "mdi-android" },
        { label: "XML", icon: "mdi-xml" },
        { label: "JavaScript", icon: "mdi-language-javascript" },
        { label: "HTML5", icon: "mdi-language-html5" },
        { label: "CSS3", icon: "mdi-language-css3" },
        { label: "Tailwind CSS", icon: "mdi-wind-turbine" },
        { label: "Figma", icon: "mdi-figma" },
        { label: "Git", icon: "mdi-git" },
        { label: "GitHub", icon: "mdi-github" },
      ],
      tech_backend: [
        { label: "Node.js", icon: "mdi-nodejs" },
        { label: "Express.js", icon: "mdi-nodejs" },
        { label: "MongoDB", icon: "mdi-database" },
        { label: "Mongo Realm", icon: "mdi-database" },
        { label: "JWT", icon: "mdi-lock" },
        { label: "REST APIs", icon: "mdi-api" },
        { label: "Gradle", icon: "mdi-android-studio" },
        { label: "Java", icon: "mdi-language-java" },
      ],
    };
  },
};
</script>
