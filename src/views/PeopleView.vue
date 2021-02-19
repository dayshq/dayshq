<template>
    <div class="detail">
        <TitleNav/>
        <div class="container">
            <SideNav/>
            <Person/>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TitleNav from '@/components/TitleNav.vue';
import Person from '@/components/Person.vue';
import SideNav from '@/components/SideNav.vue';

@Component({
  components: {
    TitleNav,
    Person,
    SideNav
  }
})
export default class PeopleView extends Vue {}
</script>
<style lang="scss">
.container {
    display: inline-flex;
}
</style>
