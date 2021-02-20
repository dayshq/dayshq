<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  background:lightgrey;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.btn {
    background: ghostwhite;
    font-size: 22px;
    border: 1px solid lightgrey;
    border-radius:5px;
}

.form {
  box-shadow: 0px 0px 3px 1px grey;
  width:400px;
  height:300px;
  border-radius: 5px;
  background:white;
  @mixin inpt {
    border:1px solid lightgrey;
    border-radius:5px;
    margin-top: 10px;
    height:45px;
  }
  p {
    font-size: 28px;
    text-align:center;
  }
  form {
    display:flex;
    flex-direction: column;
    padding: 15px;
    font-size: 24px;
    justify-content: space-between;

    input, button {
      @include inpt
    }

    input {
      font-size: 22px;
      padding: 10px;
    }
  }
}
.center {
  position: relative;
  left: 100%;
  top: 50px;
}

</style>
