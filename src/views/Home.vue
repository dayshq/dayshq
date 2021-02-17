<template>
    <div class="home">
        <TitleNav></TitleNav>
        <div class="inline-container">
            <Feed/>
            <Recommended/>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Feed from '@/components/Feed.vue';
import TitleNav from '@/components/TitleNav.vue';
import Recommended from '@/components/Recommended.vue';

@Component({
  components: {
    TitleNav,
    Feed,
    Recommended,
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
    .inline-container {
        display: inline-flex;
    }
</style>
