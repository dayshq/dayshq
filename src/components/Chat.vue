<template>
    <div class="chat">
      <div class="messages">
        <Message/>
        <Message/>
      </div>
      <div class="new-message">
        <textarea class="new-message-input"></textarea>
        <button class="btn">Submit</button>
      </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Message from '@/components/Message.vue';

@Component({
  components: {
    Message
  }
})
export default class Feed extends Vue {}
</script>
<style lang="scss">
    .chat {
        background: whitesmoke;
        width: 60vw;
        height: 45vw;
        position: relative;
        .messages {
          overflow-y:scroll;
        }
        .new-message {
          display: flex;
          flex-direction: row;
          overflow: auto;
          margin: 10px;
          position: fixed;
          bottom: 0px;
          textarea {
            width: 600px;
            height: 40px;
            padding: 10px;
          }
        }
    }
</style>
