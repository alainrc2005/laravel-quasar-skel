export async function Login() {
    return await this.$axios.post("/login").then(r => {
        return r.data;
    }).catch(() => {
        return false;
    });
}


export function Logout() {
    console.log('Me fui');
    return true;
}
