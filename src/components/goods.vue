<template>
<div class="hello">
	<h1 class="mt-10">Товары</h1>

	<div class="card-header">
	<div>
		<input
		class="form-control is-valid"
		v-model="addproductData.product_id"
		placeholder="ID"
		type="text"
		/>
	</div>
	<div>
		<input
		class="form-control is-valid"
		v-model="addproductData.name"
		placeholder="Имя"
		type="text"
		/>
	</div>
	<div>
		<input
		class="form-control is-valid"
		v-model="addproductData.price"
		placeholder="Цена"
		type="text"
		/>
	</div>
	<button type="button" @click="addProduct" class="btn btn-primary addproductBtn">Добавить</button>
	</div>

	<ul class="list-group"
	v-for="(product, index) in sortedProduct"
		:key="product.index">
<li v-if="editId == product.product_id" class="card-header text-white bg-dark mt-3" >
		<span>{{product.product_id}}</span>
		<span><input
		class="form-control is-valid"
		v-model="editproductData.name"
		placeholder="Имя"
		type="text"
		/>
		</span>
		<span><input
		class="form-control is-valid"
		v-model="editproductData.price"
		placeholder="Цена"
		type="text"
		/>
		</span>
		<span>
			<button
			@click="confermProduct(product.product_id)"
			 type="button" class="btn btn-success">Подтвердить</button>
			<button
			@click="canselProduct"
			 type="button" class="btn btn-warning">Отменить</button>
		</span>
	</li>
	<li v-else
		class="list-group-item mt-3"

	>
		<span>{{product.product_id}}</span>
		<span>{{product.name}}</span>
		<span>{{product.price}} грн.</span>
		<span>
			<router-link :to="{
				name:'ProductPage',
				params:{
					product_id:product.product_id
				}
			}">
			<i class="fas fa-binoculars mr-2"></i></router-link>
		<button type="button"
		@click="editProduct(product)"
		 class="btn btn-info">Редактировать</button>
		<button
		type="button"
		@click="remuveProduct(product.product_id)"
		class="btn btn-danger"
		>Удалить</button></span>
	</li>
	</ul>
</div>
</template>

<script>
import db from "@/db";
export default {
name: "goods",
data() {
	return {
	products: [],
	addproductData: {
		product_id: "",
		name: "",
		price: ""
	},
	editId : '',
	editproductData: {
		product_id: "",
		name: "",
		price: ""
	},
	};
},
methods: {
	getProducts() {
	const products = [];
	db.collection("Products")
		.get()
		.then(querySnapshot => {
		querySnapshot.forEach(doc => {
			products.push(doc.data());
		});
		});
	this.products = products;
	},
	remuveProduct(product_id) {
	db.collection("Products")
		.where("product_id", "==", product_id)
		.get()
		.then(querySnapshot => {
		querySnapshot.forEach(doc => {
			doc.ref.delete().then(this.getProducts());
		});
		});
	},
	confermProduct(product_id){
	db.collection("Products")
		.where("product_id", "==", product_id)
		.get()
		.then(querySnapshot => {
		querySnapshot.forEach(doc => {
			doc.ref.set({
				product_id : this.editId,
				name: this.editproductData.name,
				price: this.editproductData.price
			}).then(this.getProducts());
		});
		this.canselProduct();
		}

		);
	},
	canselProduct(){
		this.editId = '';
		this.editproductData.name = '';
		this.editproductData.price = '';
	},
	editProduct(product){
		this.editId = product.product_id;
		this.editproductData.name = product.name;
		this.editproductData.price = product.price;
	},
	addProduct() {
	db.collection("Products")
		.add(this.addproductData)
		.then(this.getProducts());
	}
},
computed: {
	sortedProduct() {
	return this.products.slice().sort((a, b) => {
		return a.product_id - b.product_id;
	});
	}
},
created() {
	this.getProducts();
}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.fa-binoculars:hover{color: purple;}
.hello {
display: flex;
flex-direction: column;
}
.card-header {
display: flex;
justify-content: space-between;
}
.addproductBtn {
}
.list-group-item {
background-color: #3f51b57a;
color: #fff;
font-size: 20px;
display: flex;
justify-content: space-between;
}
</style>
