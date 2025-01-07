<script setup>
import { ref, onMounted } from 'vue'

const showSecondImage = ref(false)
const showMagicCircle = ref(false)
const showFireworks = ref(false)

onMounted(() => {
  const animations = [
    { ref: showMagicCircle, delay: 2000 },
    { ref: showFireworks, delay: 1000 },
    {
      action: () => {
        showSecondImage.value = true
        showMagicCircle.value = false
      },
      delay: 500
    }
  ]

  let totalDelay = 0
  animations.forEach(({ ref, action, delay }) => {
    totalDelay += delay
    setTimeout(() => {
      if (ref) ref.value = true
      if (action) action()
    }, totalDelay)
  })
})
</script>

<template>
  <div id="profile-avatar" class="w-48 h-48 md:w-72 md:h-72 shrink-0 relative">
    <div class="w-full h-full relative">
      <div class="absolute -inset-2 z-20">
        <div class="w-full h-full rounded-full border-4 border-loading"></div>
      </div>

      <div
        class="magic-effect absolute inset-0 z-30 opacity-0 transition-opacity duration-300"
        :class="{ 'opacity-100': showMagicCircle }"
      >
        <div class="magic-circle"></div>
        <div class="magic-glow"></div>
      </div>

      <div
        class="fireworks absolute -inset-4 z-30 opacity-0 transition-opacity duration-300 grid grid-cols-3 grid-rows-3"
        :class="{ 'opacity-100': showFireworks }"
      >
        <template v-for="n in 8" :key="n">
          <div class="firework-particle"></div>
        </template>
      </div>

      <div class="relative z-10">
        <img
          src="/jonn.png"
          alt="Profile"
          class="rounded-full w-full h-full object-cover transition-opacity duration-500"
          :class="{ 'opacity-0': showSecondImage }"
        />
        <img
          src="/jonn-wizard.png"
          alt="Profile"
          class="rounded-full w-full h-full object-cover transition-opacity duration-500 absolute inset-0"
          :class="{ 'opacity-100': showSecondImage, 'opacity-0': !showSecondImage }"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Variables
$primary-blue: #3b82f6;
$animation-timing: 0.3s;

// Mixins
@mixin absolute-fill {
  position: absolute;
  inset: 0;
}

@mixin circle {
  @include absolute-fill;
  border-radius: 50%;
}

#profile-avatar {
  --primary-blue: #{$primary-blue};

  .border-loading {
    border-color: transparent;
    border-top-color: $primary-blue;
    animation: border-rotate 2s linear forwards;
  }

  .magic {
    &-circle,
    &-glow {
      @include circle;
    }

    &-circle {
      border: 2px solid $primary-blue;
      animation: rotateCircle 4s linear infinite;
    }

    &-glow {
      background: radial-gradient(circle, rgba($primary-blue, 0.2) 0%, transparent 70%);
      animation: pulse 2s ease-in-out infinite;
    }
  }

  .firework-particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: $primary-blue;
    border-radius: 50%;
    animation: explode 1.5s ease-out infinite;

    @for $i from 0 through 7 {
      $angle: $i * 45deg;
      &:nth-child(#{$i + 1}) {
        top: calc(50% + sin($angle) * 20%);
        left: calc(50% + cos($angle) * 20%);
        animation-delay: #{$i * 0.2}s;
      }
    }
  }
}

// Animations
@keyframes border-rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    border-color: $primary-blue;
  }
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
}

@keyframes explode {
  0% {
    transform: scale(0) translate(0, 0);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(2) translate(20px, -20px);
    opacity: 0;
  }
}
</style>
