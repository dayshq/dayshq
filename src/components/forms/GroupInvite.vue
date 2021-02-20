<template>
    <div class="form center">
        <p>Invite to Group</p>
        <form>
            <label>Invite a Person to group</label>
            <input type="text">
            <button type="button" v-on:click="redirect">invite</button>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class GroupInvite extends Vue {
  redirect() 
    this.$router.push(`/group/${this.$route.params.name}`);
  }
}
</script>
