<script setup lang="ts">
import { useGithubProfile } from '@/composables/useGithubProfile.ts'

type Prop = {
  username: string
}

const { username = 'railsstudent' } = defineProps<Prop>()

const { username: name, profile, error } = useGithubProfile()

name.value = username
</script>

<template>
  <div class="card card-side bg-base-100 shadow-sm" v-if="profile">
    <figure class="basis-[50%] grow shrink">
      <img :src="profile.avatar_url" :alt="profile.name" />
    </figure>
    <div class="card-body basis-[50%] grow shrink">
      <h2 class="card-title">{{ profile.login }}</h2>
      <p>Name: {{ profile.name }}</p>
      <p>Bio: {{ profile.bio || 'N/A' }}</p>
      <p>Followers: {{ profile.followers }}</p>
      <p>Following: {{ profile.following }}</p>
      <p>Public Repos: {{ profile.public_repos }}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">
          <a :href="profile.html_url" target="_blank" rel="noopener noreferrer">
            <span class="text-white">View Profile</span>
          </a>
        </button>
      </div>
    </div>
  </div>
  <div v-else-if="error">Error: {{ error }}</div>
</template>
