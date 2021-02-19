<template>
    <div class="just-subscribe">
        <p>Lets Start</p>
        <form>
            <label>Type your Email</label>
            <input type="text">
            <button>Start</button>
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
        background: lightslategrey;
        width:800px;
        height:46.5vw;
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
                height:30px;
            }
            select {
                @include inpt;
            }

            button {
                @include inpt
                height: 45px;
            }
        }
        padding:0px;
    }

    p{
        margin: 0px;
    }
</style>
