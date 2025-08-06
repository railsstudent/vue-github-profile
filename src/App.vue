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
  <div class="grid grid-cols-2 pt-0 pb-0 pl-[2rem] pr-[2rem]">
    <GithubProfileList :usernames="usernames" />
  </div>
</template>
