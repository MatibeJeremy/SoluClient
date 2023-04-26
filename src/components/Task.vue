<template>
    <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
  <div class="task-container" v-for="task in tasks" :key="task.id">
    <div class="task-header">
      <h4>{{ task.id }}</h4>
      <p>{{ task.name }}</p>
      <p>{{ task.description }}</p>
    </div>
    <div class="task-body">
      <div class="row">
        <div class="col-6">
          <p class="task-label">From:</p>
          <p class="task-value">{{ task.createdAt }}</p>
        </div>
        <div class="col-6">
          <p class="task-label">To:</p>
          <p class="task-value">{{ task.due_date }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <p class="task-label">Status:</p>
          <p class="task-value">{{ task.status }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  
.task-container {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
  margin-top: 20px;
  @media screen and (min-width: 768px) {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-left: 120px;
    margin-bottom: 20px;
    padding: 10px;
    width: 900px;
  }
}

.task-header {
  border-bottom: 1px solid #ccc;
  margin-bottom: 10px;
  padding-bottom: 10px;
}

.task-header h4 {
  margin: 0;
}

.task-body {
  margin-bottom: 10px;
}

.task-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.task-value {
  margin: 0;
}

.task-footer {
  text-align: right;
}
</style>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>
