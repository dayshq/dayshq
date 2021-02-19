<template>
    <div class="page-container">
        <div class="page-box">
            <p class="page-title">Page Name</p>
            <div class="page-buttons">
              <button class="btn">Subscribe</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Page extends Vue {}
</script>
<style lang="scss">
    .page-container {
        background: whitesmoke;
        width: 60vw;
        height: 45vw;

        .page-box {
            background: lightgray;
            padding: 15px;
        }
        .page-title {
            font-size: 28px;
        }
    }
</style>
