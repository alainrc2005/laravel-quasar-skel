<template>
    <q-page>
        <div class="doc_note">
            {{owner}}
        </div>
    </q-page>
</template>

<script>
    export default {
        name: "users",
        data() {
            return {
                owner: 'Jose'
            }
        },
    }
</script>

<style scoped>

</style>
