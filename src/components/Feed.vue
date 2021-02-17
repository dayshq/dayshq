<template>
    <div class="feed">
        <Post/>
        <Post/>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Post from '@/components/Post.vue';

@Component({
  components: {
    Post
  }
})
export default class Feed extends Vue {}
</script>
<style lang="scss">
    .feed {
        background: white;
        width: 700px;
        height: 700px;
    }
</style>
