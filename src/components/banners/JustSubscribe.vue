<template>
    <div class="just-subscribe">
        <p>Just Subscribe</p>
        <form>
            <label>Type your Email</label>
            <input type="text">
            <button>Start Following</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class JustSubscribe extends Vue {}
</script>

<style scoped lang="scss">
    .just-subscribe {
        background: olivedrab;
        width:500px;
        height:500px;
        p {
            font-size:36px;
            padding:20px;
        }
        form {
            display:flex;
            flex-direction: column;
            padding: 15px;
            font-size: 24px;
            @mixin inpt {
                border:1px solid lightgrey;
                border-radius:5px;
                margin-top: 10px;
                height:24px;
            }
            input[type="text"] {
                @include inpt;
            }
            select {
                @include inpt;
            }

            button {
                @include inpt
            }
        }
        padding:0px;
    }

    p{
        margin: 0px;
    }
</style>
