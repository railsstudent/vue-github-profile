<script setup lang="ts">
import GithubProfile from './components/GithubProfile.vue'

const usernames = ['railsstudent', 'danielkellyio', 'hootlex', 'MooseSaeed'];

</script>

<template>
  <GithubProfile v-for="username in usernames" :key="username"  :username="username"/>
</template>
