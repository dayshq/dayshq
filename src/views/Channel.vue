<template>
    <div class="channel">
        <TitleNav></TitleNav>
        <div class="inline-container">
            <SideNav/>
            <div class="chat">
                <p class="channel-title">Home</p>
                <Chat/>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Chat from '@/components/Chat.vue';
import TitleNav from '@/components/TitleNav.vue';
import SideNav from '@/components/SideNav.vue';

@Component({
  components: {
    TitleNav,
    Chat,
    SideNav,
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss">
    .inline-container {
        display: inline-flex;
    }

    .channel-title {
        margin: 0px;
        padding: 15px;
        padding-left: 10px;
    }
</style>
