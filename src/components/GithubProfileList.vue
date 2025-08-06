<script setup lang="ts">
import GithubProfileCard from './GithubProfileCard.vue'

const { usernames } = defineProps<{ usernames: string[] }>()
</script>

<template>
  <div class="header p-[0.75rem] col-span-full">
    <h1 class="text-3xl text-center">Github Profile List (Vue 3 Ver.)</h1>
  </div>
  <GithubProfileCard v-for="username in usernames" :key="username" :username="username" />
</template>
