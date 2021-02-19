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
        background: whitesmoke;
        width:800px;
        height:46.5vw;
        text-align: center;
        vertical-align: center;
        p {
            padding-top: 100px;
            font-size:36px;
            padding:20px;
        }
    }

    p{
        margin: 0px;
    }
</style>
