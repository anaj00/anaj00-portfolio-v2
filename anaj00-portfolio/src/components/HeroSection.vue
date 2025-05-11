<template>
  <v-container height="95dvh">
    <v-row class="pa-4">
      <v-col class="justify-end d-flex mb-7">
        <CallingCard />
      </v-col>
      <v-col cols="12">
        <div class="">
          <div class="d-flex align-start">
            <h1
              class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 font-weight-bold"
            >
              Hello, I'm Jana
            </h1>
          </div>

          <div class="text-container">
            <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">
              <span class="typed-text">{{ typedText }}</span>
            </h1>
          </div>

          <h1 class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">
            based in Metro Manila
          </h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div class="d-flex align-start">
          <p class="text-h6 text-sm-h5 font-weight-light ml-5">
            I am a Computer Science major at
            <strong>De La Salle University </strong><br />
            with a love for UI/UX, a knack for data science, and a passion for
            software development.
          </p>
        </div>
      </v-col>

      
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from "vue";

const texts = [
  "a frontend dev",
  "a data enthusiast",
  "a UI/UX designer",
  "a curious mind",
  "a cat lover",
];

const currentIndex = ref(0);
const typedText = ref("");
const typingSpeed = 120; // Speed of typing in ms
const changeSpeed = 3000; // Time before switching text

function typeText(text) {
  typedText.value = "";

  let i = 0;
  const typingInterval = setInterval(() => {
    typedText.value += text[i];
    i++;

    if (i === text.length) {
      clearInterval(typingInterval);
    }
  }, typingSpeed);
}

onMounted(() => {
  typeText(texts[currentIndex.value]); // Initial type

  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % texts.length; // advance index first
    typeText(texts[currentIndex.value]); // then type next one
  }, changeSpeed + texts[currentIndex.value].length * typingSpeed);
});
</script>

<style scoped>
.text-container {
  display: flex;
  font-size: 2rem;
}

.text-h1 {
  white-space: nowrap;
  font-size: 2rem;
  overflow: hidden;
}

.typed-text {
  display: inline-block;
  animation: blink 1s step-end infinite;
}

/* Optional: Simulate cursor blinking */
@keyframes blink {
  50% {
    border-right: 4px solid var(--accent);
  }

  100% {
    border-right: 4px solid transparent;
  }
}



</style>
