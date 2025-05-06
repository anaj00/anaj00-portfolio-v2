<template>
  <v-container height="95dvh">
    <v-row>
      <v-col cols="12">
        <div class="pa-4">
          <div class="d-flex align-start">
            <h1 class="text-h1 font-weight-medium">Hello, I'm Jana</h1>
            <v-img
              class="ml-4 mt-n4"
              height="7em"
              max-width="7em"
              src="/pfp.png"
            ></v-img>
          </div>

          <div class="text-container">
            <h1 class="text-h1">
              <span class="typed-text">{{ typedText }}</span>
            </h1>
          </div>

          <h1 class="text-h1">based in Metro Manila</h1>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card
          class="pa-6 border"
          density="comfortable"
          rounded="md"
          flat
          height="500"
        >
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { ref, onMounted } from "vue";

  const texts = [
    "a frontend dev",
    "a data enthusiast",
    "obsessed with clean UI,
    "building cool things",
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
  min-height: 2.5em; /* Prevents layout shift */
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
