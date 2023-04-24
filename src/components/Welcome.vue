<template>
    <Navbar/>        
      <h1>Home</h1>
      <p>Welcome to the home page!</p>
  </template>
  <style>
  nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
  }
  
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-left: 1rem;
  }
  
  li:first-child {
    margin-left: 0;
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
</style>
<script>
import Navbar from './Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>
  