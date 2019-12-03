<template>
    <div class="dashboard-stat2" :class="classes">
        <div class="display">
            <div class="number">
                <h3>
                    <span>{{txtnumber}}</span>
                </h3>
                <small>{{txttext}}</small>
            </div>
            <q-icon :name="icon" class="icon"/>
        </div>
        <div class="progress-info">
            <div class="progress">
                <q-linear-progress stripe rounded :value="progress" class="q-mt-sm"/>
            </div>
            <div class="status">
                <div class="status-title">{{stitle}}</div>
                <div class="status-number">{{snumber}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dashboard-stats-v1",
        props: {
            classes: String,
            txtnumber: String,
            txttext: String,
            icon: String,
            progress: Number,
            prgcolor: String,
            stitle: String,
            snumber: String
        }
    }
</script>

<style scoped>
    .dashboard-stat2 {
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        background: #fff;
        padding: 15px 15px 30px 15px;
        margin-bottom: 20px;
    }

    .dashboard-stat2.bordered {
        border: 1px solid #e7ecf1;
    }

    .dashboard-stat2 .display {
        margin-bottom: 20px;
    }

    .dashboard-stat2 .display:before, .dashboard-stat2 .display:after {
        content: " ";
        display: table;
    }

    .dashboard-stat2 .display:after {
        clear: both;
    }

    .dashboard-stat2 .display .number {
        float: left;
        display: inline-block;
    }

    .dashboard-stat2 .display .number h3 {
        margin: 0 0 2px 0;
        padding: 0;
        font-size: 50px;
        font-weight: 400;
    }

    .dashboard-stat2 .display .number h3 > small {
        font-size: 56px;
    }

    .dashboard-stat2 .display .number small {
        font-size: 14px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .dashboard-stat2 .display .icon {
        display: inline-block;
        float: right;
        padding: 0;
        font-size: 56px;
    }

    .dashboard-stat2 .progress-info {
        clear: both;
    }

    .dashboard-stat2 .progress-info .progress {
        margin: 0;
    }

    .dashboard-stat2 .progress-info .status {
        margin-top: 5px;
        font-size: 11px;
        font-weight: 600;
        text-transform: uppercase;
    }

    .dashboard-stat2 .progress-info .status .status-title {
        float: left;
        display: inline-block;
    }

    .dashboard-stat2 .progress-info .status .status-number {
        float: right;
        display: inline-block;
    }
</style>
