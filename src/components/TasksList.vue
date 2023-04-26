<template>
  <div>
    <Task :tasks="tasks" />
  </div>
</template>

<script>
import Task from "./Task.vue";
import axios from "axios";

export default {
  components: {
    Task,
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/tasks/", {
        headers: {
          Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjgyNTE1MTE4LCJleHAiOjE2ODI1MTg3MTgsIm5iZiI6MTY4MjUxNTExOCwianRpIjoiWFh2RDNRaWpvcXJtbVBCNCIsInN1YiI6IjQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.M8_dgXjxGMOmQGPmzJAFm3cTzPJFa-U9BhXQW-4fEcs`,
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
