<template>
    <div class="widget-thumb bordered text-uppercase" :class="classes">
        <h4 class="widget-thumb-heading">{{heading}}</h4>
        <div class="widget-thumb-wrap">
            <q-icon :name="icon" class="widget-thumb-icon" :class="iconcolor"/>
            <div class="widget-thumb-body">
                <span class="widget-thumb-subtitle">{{subtitle}}</span>
                <span class="widget-thumb-body-stat">{{stat}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard-stats-v3",
        props: {
            classes: String,
            heading: String,
            icon: String,
            iconcolor: String,
            subtitle: String,
            stat: String
        }
    }
</script>

<style scoped>
    .widget-thumb {
        padding: 20px;
        border-radius: 4px;
        margin-bottom: 20px;
    }
    .widget-thumb.bordered {
        border: 1px solid #e7ecf1; }
    .widget-thumb .widget-thumb-heading {
        font-size: 14px;
        font-weight: bold;
        margin: 0 0 0 0; }
    .widget-thumb .widget-thumb-wrap {
        overflow: hidden; }
    .widget-thumb .widget-thumb-wrap .widget-thumb-icon {
        float: left;
        width: 60px;
        height: 60px;
        display: inline-block;
        font-size: 20px;
        line-height: 41px;
        text-align: center;
        padding: 10px;
        margin-right: 15px; }
    .widget-thumb .widget-thumb-body {
        overflow: hidden; }
    .widget-thumb .widget-thumb-body .widget-thumb-subtitle {
        padding-top: 2px;
        display: block;
        font-size: 14px;
        font-weight: 600;}
    .widget-thumb .widget-thumb-body .widget-thumb-body-stat {
        display: block;
        font-size: 30px;
        font-weight: 600;}
</style>