<template>
    <div class="form just-subscribe">
        <p>Lets Start</p>
        <form>
            <label>Type your Email</label>
            <input type="text" v-model="email">
            <button type="button" v-on:click="signIn">Start</button>
        </form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class JustSubscribe extends Vue {
  email = '';

  signIn(event: any) {
    console.log(`${this.email} email`);
    this.$router.push('verify');
  }
}
</script>

<style scoped lang="scss">
    .just-subscribe {
        margin: 15px;
        margin-top: 40px;
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
