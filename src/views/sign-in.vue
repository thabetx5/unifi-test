<template>
  <div class="pa-10">
    <h1>Login</h1>
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
      // eslint-disable-next-line no-prototype-builtins
      if (localStorage.hasOwnProperty("users")) {
        let users = JSON.parse(localStorage.getItem("users"));
        users.find(
          (user) =>
            user.name === this.user.name && user.password === this.user.password
        ) !== undefined
          ? window.open("./recipes", "_self")
          : alert("authentication error");
      } else {
        alert("no users found");
      }
    },
  },
};
</script>
