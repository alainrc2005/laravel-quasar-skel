<template>
    <div class="dashboard-stat dashboard-stat-v2" :class="classes">
        <div class="visual">
            <q-icon :name="icon"/>
        </div>
        <div class="details">
            <div class="number">
                <span>{{number}}</span>
            </div>
            <div class="desc">{{txtdesc}}</div>
        </div>
        <q-separator/>
        <q-card-actions class="q-py-none text-left">
            <q-btn flat label="Ampliar"/>
            <q-space/>
            <q-btn round flat icon="arrow_forward"/>
        </q-card-actions>
    </div>
</template>

<script>
    export default {
        name: "dashboard-stats-v2",
        props: {
            classes: String,
            icon: String,
            number: String,
            txtdesc: String
        }
    }
</script>

<style scoped>
    .dashboard-stat {
        display: block;
        overflow: hidden;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        -o-border-radius: 4px;
        border-radius: 4px;
        padding: 5px;
    }

    .dashboard-stat:before, .dashboard-stat:after {
        content: " ";
        display: table;
    }

    .dashboard-stat:after {
        clear: both;
    }

    .dashboard-stat .visual {
        width: 80px;
        height: 80px;
        display: block;
        float: left;
        padding-top: 10px;
        padding-left: 15px;
        margin-bottom: 15px;
        font-size: 35px;
        line-height: 35px;
    }

    .dashboard-stat .visual > i {
        margin-left: -35px;
        font-size: 110px;
        line-height: 110px;
        color: #fff;
        opacity: .1;
    }

    .dashboard-stat .details {
        right: 15px;
        padding-right: 15px;
    }

    .dashboard-stat .details .number {
        padding-top: 25px;
        text-align: right;
        font-size: 34px;
        line-height: 36px;
        letter-spacing: -1px;
        margin-bottom: 0px;
        font-weight: 300;
    }

    .dashboard-stat .details .desc {
        text-align: right;
        font-size: 16px;
        letter-spacing: 0px;
        font-weight: 300;
    }

    .dashboard-stat.dashboard-stat-v2 .visual {
        padding-top: 35px;
        margin-bottom: 40px;
    }
</style>
