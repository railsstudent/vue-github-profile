export function useGithubProfile() {
    function getGithubProfile(username: string): Promise<any> {
        return fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error);
                throw error;
            });
    }

    return {
        getGithubProfile
    }
}