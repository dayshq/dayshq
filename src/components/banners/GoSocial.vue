<template>
    <div class="go-social">
        <p>Go Social</p>
        <div class="info">
            <p>Instant Messaging with Direct messaging and Groups</p>
            <p>Create a page to follow topics</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoSocial extends Vue {}
</script>

<style scoped lang="scss">
    .go-social {
        width:800px;
        height:46.5vw;
        text-align: center;
        vertical-align: center;
        padding-top: 100px;
        .info {
            padding:20px;
        }
    }
    p {
        font-size:36px;
        margin: 0px;
    }
</style>
