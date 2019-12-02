<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>QOPSIA - Vue - Quasar</title>
    <link type="text/css" href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div id="app" v-cloak></div>
<script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
</body>
</html>
