<template>
    <div>
        <TitleNav/>
        <div class="inline-container">
            <component :is="this.name"/>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import TitleNav from '@/components/TitleNav.vue';
import NewPage from '@/components/forms/NewPage.vue';
import NewGroup from '@/components/forms/NewGroup.vue';
import Verification from '@/components/forms/Verification.vue';
import GroupInvite from '@/components/forms/GroupInvite.vue';

@Component({
  components: {
    TitleNav,
    NewPage,
    NewGroup,
    Verification,
    GroupInvite
  }
})
export default class Form extends Vue {
    @Prop() private name!: string;
}
</script>
<style lang="scss">
    .inline-container {
        display: inline-flex;
    }
</style>
