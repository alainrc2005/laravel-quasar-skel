<template>
    <q-page>
        <div class="fit row wrap justify-center items-center content-center q-mt-md">
            <q-btn color="primary" label="IR A LA SIGUIENTE VISTA" @click="goview"/>
            {{owner}}
        </div>
    </q-page>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'

    export default {
        name: "home",
        data(){
            return {
                owner: 'Pepe'
            }
        },
        computed: {
            drawer: {
                get() {
                    return this.$store.state.main.drawer;
                },
                set(v) {
                    this.setMain({drawer: v});
                }
            },
            logged: {
                get() {
                    return this.$store.state.main.logged;
                },
                set(v) {
                    this.setMain({logged: v});
                }
            },
        },
        methods: {
            ...mapActions("main", ['Login', 'Logout']),
            ...mapMutations("main", ['setMain']),
            goview(){
                this.$router.push('/users');
            }
        },
        async mounted(){
            console.log(await this.Login());
            this.logged = true;
        }
    }
</script>

<style scoped>

</style>
