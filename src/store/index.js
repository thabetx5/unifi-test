import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [
      {
        id: 1,
        name: "name",
        description: "description",
        image: "",
      },
    ],
  },
  mutations: {
    addRecipes(state, recipe) {
      // console.log(recipe.image);
      state.recipes.push(recipe);
    },
    editRecipes(state, id, recipe) {
      state.deleteRecipes(state, id);
      console.log("id", id, "recipe", recipe);
      state.addRecipes(recipe);
    },
    deleteRecipes(state, id) {
      state.recipes.splice(
        state.recipes.findIndex(function (i) {
          return i.id === id;
        }),
        1
      );
    },
  },
  actions: {},
  modules: {},
});
