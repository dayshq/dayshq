<template>
    <div>
        <TitleNav/>
        <div class="inline-container">
            <SideNav/>
            <Page/>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleNav from '@/components/TitleNav.vue';
import SideNav from '@/components/SideNav.vue';
import Page from '@/components/Page.vue';

@Component({
  components: {
    TitleNav,
    SideNav,
    Page
  }
})
export default class PageView extends Vue {}
</script>
<style lang="scss">
    .inline-container {
        display: inline-flex;
    }
</style>
