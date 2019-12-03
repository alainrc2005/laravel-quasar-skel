<template>
    <q-page padding>
        <div class="row q-gutter-lg justify-center">
            <div class="col-xs-12 col-sm-6 col-md-3">
                <carddashv1 classes="bg-blue-5" icon="mdi-cards" stitle="Codificador" :txtnumber="counters.codes"
                            prgcolor="white" txtcolor="white" txttext="esto es una prueba" link="/codes" :progress="50.0" snumber="50%"/>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <carddashv2 classes="bg-brown-5" icon="mdi-cards" :number="counters.codes"
                            txtdesc="Descripción"/>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <carddashv3 classes="bg-primary" icon="mdi-map" iconcolor="bg-info" stat="1234"
                            heading="Heading" subtitle="subtítulo"/>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-3">
                <carddashv4 classes="bg-light-green-6" icon="mdi-coin" caption="Monedas" :count="counters.coins" link="/coins"/>
            </div>
        </div>
    </q-page>
</template>

<script>
    import {mapActions, mapMutations} from 'vuex'
    import carddashv1 from './dashboard-stats-v1'
    import carddashv2 from './dashboard-stats-v2'
    import carddashv3 from './dashboard-stats-v3'
    import carddashv4 from './dashboard-stats-v4'

    export default {
        name: "home",
        components: {
            carddashv1,
            carddashv2,
            carddashv3,
            carddashv4
        },
        data(){
            return {
                counters: {
                    codes: "123",
                    coins: 145
                }
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
