<template>
  <nav class="titlenav">
    <p>DaysHQ</p>
    <div class="search">
      <input type="search" placeholder="search here">
    </div>
    <div class="author-info">
            <img width="30" height="30" id="avatar">
            <p class="author">Krishna</p>
      </div>
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
    height:50px;
    margin:0px;
    padding:0px;
    padding-top: 10px;
    display: inline-flex;
    width: 100%;
    color:white;
    p {
      margin: 0px;
      margin-top: 10px;
      padding-left: 10px;
      padding-right: 10px;
    }
    input[type="search"] {
      border-radius: 10px;
      width: 30vw;
      height: 40px;
      margin-left: 10vw;
      margin-right: 40vw;
    }
    .author-info {
      display: inline-flex;
      #avatar {
        margin-left: 15px;
        margin-right: 5px;
        border-radius: 15px;
        background-color: lightgray;
      }
    }
  }
</style>
