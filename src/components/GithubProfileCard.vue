<script setup lang="ts">
import { useGithubProfile } from '@/composables/useGithubProfile.ts';

type Prop = {
    username: string;
}

const { username = 'railsstudent' } = defineProps<Prop>();

const { username: name, profile, error } = useGithubProfile()

name.value = username

</script>

<template>
    <div v-if="profile">
        <img :src="profile.avatar_url" :alt="profile.name" class="avatar" />
        <p>Username: {{ username }}</p>
        <p>Name: {{ profile.name }}</p>
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