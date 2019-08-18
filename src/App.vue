<template>
  <div id="app" class="container mt-5">

	<Navigation></Navigation>
	<router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'App',
  components:{
	  Navigation
  }
}
</script>

<style>
.logo{
	width: 60px;
	height: 60px;
}
</style>
