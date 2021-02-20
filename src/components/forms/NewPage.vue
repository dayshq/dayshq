<template>
    <div class="form center">
        <p>Create a page</p>
        <form>
            <label>Type Page Name</label>
            <input type="text" v-model="name">
            <button type="button" v-on:click="create">Create</button>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewPage extends Vue {
  name = '';

  create() {
    this.$router.push(`/page/${this.name}`);
  }
}
</script>
