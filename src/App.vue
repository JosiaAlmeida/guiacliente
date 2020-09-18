<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <router-link to="/" class="btn btn-link">Home</router-link>
          <router-link to="/kanbam" class="btn btn-link">Kanbam</router-link>
        </section>

        <!--<section class="navbar-center">
          <img src="@/assets/logo.png" alt="Logo" class="responsive logo">
        </section>-->
        <section class="navbar-section">
          <a href="" class="btn btn-link">Twitter</a>
          <a href="" class="btn btn-link">Twitter</a>
        </section>
      </header>
      <router-view />
    </div>  
  </div>
  
</template>

<script>

</script>

<style scoped>
 .logo{
   max-widows: 100px;
 }
</style>