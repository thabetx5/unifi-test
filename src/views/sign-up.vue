<template>
  <div class="pa-10">
    <h1>Signup</h1>
    <form @submit.prevent="submit">
      <v-text-field :counter="10" label="Name" required v-model="user.name" />
      <v-text-field label="password" required v-model="user.password" />
      <v-btn class="mr-4" type="submit"> submit</v-btn>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    user: {
      name: "",
      password: "",
    },
  }),

  methods: {
    submit() {
      // console.log(this.user);
      // eslint-disable-next-line no-prototype-builtins
      if (localStorage.hasOwnProperty("users")) {
        let users = JSON.parse(localStorage.getItem("users"));
        users.push(this.user);
        localStorage.setItem("users", JSON.stringify(users));
        window.open("./login", "_self");
      } else {
        localStorage.setItem("users", JSON.stringify([this.user]));
      }
    },
  },
};
</script>
