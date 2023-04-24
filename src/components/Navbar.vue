<template>
        <nav style="borderRadius:20px">
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/register">Sign Up</router-link></li>
              <li><router-link to="/signin">Sign In</router-link></li>
            </ul>
          </nav>
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
