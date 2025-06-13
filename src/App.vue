<script setup lang="ts">
import GithubProfileCard from './components/GithubProfileCard.vue'

const usernames = ['railsstudent', 'danielkellyio', 'hootlex', 'MooseSaeed'];

</script>

<template>
  <GithubProfileCard v-for="username in usernames" :key="username"  :username="username"/>
</template>
