<template>
  <div>
    <Task :tasks="tasks" />
  </div>
</template>

<script>
import Task from "./Task.vue";
import axios from "axios";
import { mapGetters } from 'vuex';


export default {
  components: {
    Task,
  },
  data() {
    return {
      //   token: null,
    };
  },
  computed: {
    ...mapGetters(['getToken']),
  },

  mounted() {
    if (this.getToken == null) {
      this.$router.push({ name: "LogIn" });
    }
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: `Bearer ${this.getToken}`,
        },
      })
      .then((response) => {
        console.log(response);
        this.tasks = response.data.data;
      })
      .catch((error) => {
        console.log(error.response.data.error.message);
      });
  },
  data() {
    return {
      tasks: [],
    };
  },
};
</script>
