<template>
    <div class="message">
        <p class="text">Lorem Ipsum Lorem Ipsum</p>
        <div class="author-info">
            <img width="30" height="30" id="avatar">
            <p class="author">Author</p>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {}
</script>
<style scoped lang="scss">
    .message {
        background: white;
        margin: 10px;
        border-bottom: 1px solid lightgrey;
        border-radius: 5px;
        padding:10px;
        width: fit-content;
        height: fit-content;
        display:flex;
        flex-direction: column;
        .author-info {
            display: inline-flex;
            p {
                margin: 0px;
                margin-top: 5px;
            }
            #avatar {
                margin-left: 5px;
                margin-right: 10px;
                border-radius: 15px;
                background-color: lightgray;
            }
        }
    }
</style>
