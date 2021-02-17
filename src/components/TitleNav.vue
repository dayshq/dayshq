<template>
  <nav class="titlenav">
    <p>DaysHQ</p>
  </nav>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TitleNav extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .titlenav {
    background:black;
    max-height:40px;
    margin:0px;
    padding:0px;
  }

  p {
    color:white;
    padding:10px;
    margin:0px;
  }
</style>
