<script setup lang="ts">
import GithubProfileList from './components/GithubProfileList.vue'

const usernames = [
  'johnsoncodehk',
  'antfu',
  'railsstudent',
  'danielkellyio',
  'hootlex',
  'MooseSaeed',
]
</script>

<template>
  <GithubProfileList :usernames="usernames" />
</template>
