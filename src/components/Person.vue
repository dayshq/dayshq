<template>
    <div class="person">
        <div class="person-box">
            <div class="person-info">
                <img width="80" height="80" id="avatar">
                <p class="author">Author</p>
            </div>
            <div class="person-buttons">
                <button class="btn">Add Friend</button>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Person extends Vue {}
</script>
<style lang="scss">
.person {
    background:whitesmoke;
    width:60vw;
    display: flex;
    flex-direction: column;
    .person-box {
        padding-left: 15px;
        background: lightgray;
    }
    .person-info {
        margin: 10px;
        font-size: 28px;
        display: inline-flex;
        #avatar {
            margin-left: 5px;
            margin-right: 10px;
            border-radius: 40px;
            background-color: lightgray;
        }

    }
    border-bottom: 1px solid black;
}
</style>
