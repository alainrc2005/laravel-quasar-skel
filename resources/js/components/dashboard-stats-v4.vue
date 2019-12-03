<template>
    <q-card inline class="text-white" :class="classes">
        <q-card-section class="q-py-xs">
            <div class="row">
                <div class="col">
                    <q-icon class="shadow-24 icon-font" :name="icon"/>
                </div>
                <div class="col text-right">
                    <div class="count-font">{{ count }}</div>
                    {{ caption }}
                </div>
            </div>
        </q-card-section>
        <q-separator/>
        <q-card-actions class="q-py-none">
            <q-btn flat @click="$router.push(link,_=>{})">Ampliar</q-btn>
            <q-space/>
            <q-btn round flat icon="arrow_forward" @click="$router.push(link,_=>{})"/>
        </q-card-actions>
    </q-card>

</template>

<script>
    export default {
        name: "dashboard-stats-v4",
        props: ['classes', 'icon', 'count', 'caption', 'link']
    }
</script>

<style scoped>
    .icon-font {
        font-size: 4.4em
    }

    .count-font {
        font-size: 2.5em
    }
</style>
