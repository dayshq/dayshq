<template>
  <div class="home">
    <TitleNav msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class="start">
      <GoSocial/>
      <JustSubscribe/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleNav from '@/components/TitleNav.vue'; // @ is an alias to /src
import GoSocial from '@/components/banners/GoSocial.vue';
import JustSubscribe from '@/components/banners/JustSubscribe.vue';

@Component({
  components: {
    TitleNav,
    GoSocial,
    JustSubscribe,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
  .start {
    display: flex;
    flex-direction: row;
    background: white;
  }
</style>
