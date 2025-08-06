<script setup lang="ts">
import GithubProfileCard from './GithubProfileCard.vue'

const { usernames } = defineProps<{ usernames: string[] }>()
</script>

<template>
  <div class="header">
    <h1>Github Profile List (Vue 3 Ver.)</h1>
  </div>
  <GithubProfileCard v-for="username in usernames" :key="username" :username="username" />
</template>

<style>
div.header {
  grid-column: 1/3;
  padding: 0.75rem;
}

div > h1 {
  text-align: center;
}
</style>
