<template>
    <div class="recommended">
      <p>Recommended</p>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Recommended extends Vue {}
</script>
<style lang="scss">
    .recommended {
        margin: 10px;
    }
</style>
