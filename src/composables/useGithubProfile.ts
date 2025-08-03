import { watch, ref } from 'vue';

export type GithubProfile = {
    login: string;
    name: string;
    followers: number;
    following: number;
    html_url: string;
    avatar_url: string;
    bio: string | null;
    public_repos: number;
}

export function useGithubProfile() {
    const username = ref('')
    const profile = ref<GithubProfile | null>(null)
    const error = ref('');

    watch(username, async (newUserName) => {
        if (!newUserName) {
            profile.value = null;
            error.value = '';
            return;
        }

        profile.value = null;
        error.value = '';
        fetch(`https://api.github.com/users/${newUserName}`, {
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
            }
        })
            .then( async response => {
                if (!response.ok) {
                    error.value = 'Network response was not ok.'
                }
                profile.value = await response.json() as GithubProfile;
            })
            .catch(err => {
                console.error('There has been a problem with your fetch operation:', err);
                if (err instanceof Error) {
                    error.value = err.message
                }
                error.value = 'Failed to fetch profile.'
            });
    });

    return {
        username,
        profile,
        error,
    }
}