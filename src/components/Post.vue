<template>
    <div class="post">
        <p class="text">Lorem Ipsum Lorem Ipsum</p>
        <div class="social">
            <button class="like">Like</button>
            <button class="follow">Follow</button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Post extends Vue {}
</script>
<style scoped lang="scss">
    .post {
        margin: 10px;
        box-shadow: 0px 1px 1px 2px lightgrey;
        border-radius: 5px;
        padding:10px;
        width: 300px;
        height: fit-content;
        display:flex;
        flex-direction: column;
        .social {
            float: right;
            @mixin social-buttons {
                background: silver;
                width: fit-content;
                height: 30px;
                margin-right: 10px;
                border-radius: 5px;
                box-shadow: 0px 1px 1px 2px lightgrey;
                border:none;
            }

            .like, .follow {
                @include social-buttons;
            }
        }
    }
</style>
