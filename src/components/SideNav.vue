<template>
    <div class="sidenav">
      <div class="list">
        <p>Home</p>
        <p>Friends</p>
      </div>
      <div class="list">
        <p class="title">Groups</p>
        <p>School Group</p>
        <p>Cricket Group</p>
        <p>Cricket Group</p>
       </div>
       <div class="list">
        <p class="title">Direct Message</p>
        <p>Krishna Satya</p>
        <p>Person</p>
        <p>Person</p>
       </div>
    </div>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SideNav extends Vue {}
</script>
<style lang="scss">

    .sidenav {
        padding: 20px;
        padding-right: 30px;
        background: lightslategrey;
        width:15vw;
        height:calc(45vw);
        .title {
            color: #bcbcbc;
        }
    }
</style>
