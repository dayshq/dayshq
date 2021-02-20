<template>
    <div class="form center">
        <p>Verification</p>
        <form>
            <label>Type your Phone Number</label>
            <input type="text">
            <button class="btn">Verify</button>
        </form>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Verification extends Vue {}
</script>
