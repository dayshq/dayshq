<template>
    <div class="go-social">
        <p>Go Social</p>
        <form>
            <label>Get your ID</label>
            <input type="text">
            <label>Verification</label>
            <select>
                <option>Phone Number</option>
            </select>
            <button>Submit</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GoSocial extends Vue {}
</script>

<style scoped lang="scss">
    .go-social {
        background: sandybrown;
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
