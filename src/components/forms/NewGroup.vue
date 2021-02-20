<template>
    <div class="form center">
        <p>Create a Group</p>
        <form>
            <label>Type Group Name</label>
            <input type="text" v-model="name">
            <button type="button" v-on:click="create">Create</button>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NewGroup extends Vue {
  name = '';

  create() {
    this.$router.push(`/group/${this.name}/invite`);
  }
}
</script>
