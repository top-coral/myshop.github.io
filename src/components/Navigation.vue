<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mt-5">
      <img class="logo" src="@/assets/logo.png" />
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
        class="navbar-toggler"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div id="navbarColor01" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">
            <li class="nav-item">
              <a
                @click="toggleActive(routes.id)"
                v-bind:class="{ active: links[routes.id].isActive }"
                :href="routes.page"
                class="nav-link"
              >{{routes.text}}</a>
            </li>
          </router-link>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input type="text" placeholder="Поиск" class="form-control mr-sm-2" />
          <button type="submit" class="btn btn-secondary my-2 my-sm-0">Поиск</button>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      links: [
        {
          id: 0,
          text: "Главная",
          page: "/",
          isActive: true
        },
        {
          id: 1,
          text: "Товары",
          page: "/Goods",
          isActive: false
        },
        {
          id: 2,
          text: "Контакты",
          page: "/contacts",
          isActive: false
        }
      ]
    };
  },
  methods: {
    toggleActive: function(id) {
      // toggle class Active in the link
      for (let i = 0; i < this.links.length; i++) {
        this.links[i].isActive = false;
      }
      console.log((this.links[id].isActive = !this.links[id].isActive));
    }
  }
};
</script>