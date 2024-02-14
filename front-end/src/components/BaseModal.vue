<template>
    <section class="vue-modal" v-show="open">
        <transition name="slide">
          <section class="veu-modal-inner">
            <section class="vue-modal-content">
          
              <button type="button" @click="$emit('close')">Close</button>
            </section>
          </section>
        </transition>
      </section>
  </template>
  
  <script>
  export default {
    props: {
      open: {
        type: Boolean,
        default: true,
      },
    },
  };
  </script>