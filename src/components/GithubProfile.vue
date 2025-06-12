<script setup lang="ts">
import { useGithubProfile } from '@/composables/useGithubProfile.ts';

const props = defineProps<{
  username: string;
}>();

const { username: name, profile, error } = useGithubProfile()

name.value = props.username

</script>

<template>
    <div v-if="profile">
        <img :src="profile.avatar_url" :alt="profile.name" class="avatar" />
        <p>{{ profile.name }}</p>
        <p>Bio: {{ profile.bio || 'N/A' }}</p>
        <p>Followers: {{ profile.followers }}</p>
        <p>Following: {{ profile.following }}</p>
        <p>Public Repos: {{ profile.public_repos }}</p>
        <a :href="profile.html_url" target="_blank" rel="noopener noreferrer">
            View Profile
        </a>
    </div>
    <div v-else-if="error">
        Error: {{ error }}
    </div>
</template>