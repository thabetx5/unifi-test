<template>
  <div class="about">
    <div class="text-center">
      <v-btn
        dark
        @click="
          openDialog({
            name: '',
            description: '',
            image: '',
          })
        "
        color="primary"
        class="mt-10 mx-auto"
      >
        Add New Item
      </v-btn>
    </div>

    <div class="container d-flex flex-wrap">
      <v-card
        :key="rec.id"
        class="mx-auto my-12"
        max-width="374"
        v-for="rec in recipes"
      >
        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        />
        <v-card-title>{{ rec.name }}</v-card-title>
        <v-card-text>
          <div>
            {{ rec.description }}
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            @click="
              openEditDialog(
                {
                  name: rec.name,
                  description: rec.description,
                  image: rec.image,
                },
                rec.id
              )
            "
            color="deep-purple lighten-2"
            text
          >
            Edit
          </v-btn>
          <v-btn @click="deleteRecipes(rec.id)" color="red lighten-2" text>
            Delete
          </v-btn>
          <v-btn
            @click="
              openDialog({
                name: '',
                description: '',
                image: '',
              })
            "
            color="green lighten-2"
            text
          >
            Add New Item
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>

    <template>
      <div class="text-center">
        <v-dialog v-model="dialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2"
              >Add New Recipe</v-card-title
            >

            <v-card-text>
              <v-text-field v-model="dialogData.name" label="Name" />
              <v-textarea
                v-model="dialogData.description"
                label="Description"
              />
              <v-file-input v-model="dialogData.image" label="Image" />
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                @click="
                  dialog = false;
                  addRecipes();
                "
                color="primary"
                text
              >
                Save</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
    <template>
      <div class="text-center">
        <v-dialog v-model="dialogEdit" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Edit Recipe
            </v-card-title>

            <v-card-text>
              <v-text-field v-model="dialogEditData.name" label="Name" />
              <v-textarea
                v-model="dialogEditData.description"
                label="Description"
              />
              <v-file-input v-model="dialogEditData.image" label="Image" />
            </v-card-text>

            <v-divider />

            <v-card-actions>
              <v-spacer />
              <v-btn
                @click="
                  editRecipes();
                  dialogEdit = false;
                "
                color="primary"
                text
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data: () => ({
    recipes: [],
    dialog: false,
    dialogEdit: false,
    dialogData: {
      name: "name",
      description: "description",
      image: "",
    },
    dialogEditId: 0,
    dialogEditData: {
      name: "name",
      description: "description",
      image: "",
    },
  }),

  beforeMount() {
    this.getRecipes();
  },
  methods: {
    openDialog(data) {
      this.dialogData = data;
      this.dialog = true;
    },
    openEditDialog(data, id) {
      this.dialogEditId = id;
      this.dialogEditData = data;
      this.dialogEdit = true;
    },
    getRecipes() {
      this.recipes = this.$store.state.recipes;
    },
    addRecipes() {
      this.$store.commit("addRecipes", this.dialogData);
      this.getRecipes();
    },
    editRecipes() {
      this.$store.commit("editRecipes", this.dialogEditId, this.dialogEditData);
      this.getRecipes();
    },
    deleteRecipes(id) {
      this.$store.commit("deleteRecipes", id);
      this.getRecipes();
    },
  },
};
</script>
