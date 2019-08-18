<template>
<div>
<span v-if="loaded">
<span>{{name}}</span>
<span>{{price}}</span>
</span>
<span v-else>
<h1>

ЗАГРУЗКА СУКА!!!

</h1>
</span>
</div>
</template>

<script>
	import db from "@/db";
export default {

  name: 'ProductPage',
  data(){
	  return{
		  name:'',
		  price:'',
		  loaded: false
	  }
  },
  beforeCreate(){
	  	db.collection("Products")
		.where("product_id", "==", this.$route.params.product_id)
		.get()
		.then(querySnapshot => {
		querySnapshot.forEach(doc => {
			const {name, price} = doc.data()
			this.name = name;
			this.price = price;
			this.loaded = true;
		});
		});

  }

}
</script>

<style>

</style>
