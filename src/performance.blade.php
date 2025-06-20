@if (session()->has('username'))
<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>FR-CRM - All Appointments</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="NOINDEX,NOFOLLOW">
    <link rel="icon" type="image/x-icon" href="favicon.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap"
        rel="stylesheet" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">


    @include('component/head')
    <link rel="stylesheet" href="https://cdn.datatables.net/2.1.3/css/dataTables.dataTables.css" />



    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fjalla+One&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <!-- Chart.js -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        /* body{
                background-color: #5d5d5d;
            }
            table {
                width: 100%;
                border-collapse: collapse;
            }

            th,
            td {
                padding: 8px 12px;
                border: 1px solid #ddd;
                text-align: left;
            }

            th {
                background-color: #f4f4f4;
            }
            .top-performerce{
                border-radius: 1.5em;
                box-shadow: 0.6em 0.6em 0.6em #f1f1f1;
                padding: 2em;
            } */

        /* Updated Styles - 08 August 2024 */
        * {
            font-family: "Poppins", sans-serif;
        }

        th {
            white-space: nowrap;
        }

        th.sorting-padding::after {
            position: absolute;
            right: 0px;
        }

        .top-bar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2em;
        }

        .custom_date_filter {
            display: flex;
            align-items: end;
        }

        .top-bar .sub-head {
            font-size: 15px;
        }

        #submit-button {
            height: 2.5em;
            font-size: 15px !important;
            width: 10em !important;
            border-radius: 2em;
            box-shadow: none !important;
            background-color: black !important;
            color: white !important;
        }

        .custom_date_fillter {
            width: 80%;
            display: flex;
            justify-content: end;
            align-items: end;
        }

        .form-indivisual-div {
            margin-left: 1em;
        }

        .form-select {
            height: 2.5em !important;

            margin-right: 10em;
            font-size: 15px !important;
            border-radius: 2em;
            padding: 0em 1em;
        }

        .w-0 {
            width: 0;
        }

        .transition-fast {
            transition: 2s ease-in-out;
        }

        .transition-normal {
            transition: 2s ease-in-out;
        }

        .transition-slowed {
            transition: all 10s ease-in-out;
        }

        .main-tracker-renderer {
            margin: 0;
            width: 100%;
            min-height: calc(100vh - 57px);
            padding: 2em;
            padding-top: 0em;
            background-color: rgba(245, 246, 250, 1);
        }

        .analytical-area-first {
            width: 30%;
        }

        .analytical-area-second {
            width: 70%;
            margin-left: 2em;
            margin-top: -3em;
        }

        .top-5-agents-card {
            position: relative;
            /* height: 24em; */
            /* overflow-y: auto; */
            background-color: white;
            /* height: 45em; */
            border-radius: 1em;
            margin-top: 2em;
            padding: 1.8em;
        }

        .info-grid-card {
            width: 100%;
            margin-bottom: 2em;
            border-radius: 1em;
        }

        .info-grid-card .info-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            padding: 1.2em 1.6em;
            border-radius: 1em;
            background-color: #FBF6FE;
            margin-bottom: 1em;
        }

        .info-grid-card .info-card .heading {
            font-size: 16px;
            font-weight: 600;
        }

        .info-grid-card .info-card .data {
            width: 10em;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            padding: 0.5em 1em;
            border-radius: 0.5em;
            background-color: #F3E3FC;
        }

        /*
            .info-grid-card-element{
                width: 50%;
                padding: 1em;
                margin-right: 1em;
                height: 100%;
                background-color: #FFF9FF;
                border: 1px solid #FFE4FD;
                border-radius: 1em;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .info-grid-card-element .heading{
                text-align: center;
                margin-bottom: 0.4em;
                font-weight: 600;
                font-size: 16px;
            }

            .info-grid-card-element .wrapper-div{
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }
            
            .info-grid-card-element .data{
                width: 50%;
                padding: 0.5em;
                font-size: 16px;
                background: #F3E3FC;
                border-radius: 50px;
                text-align: center;
            } */

        .top-5-agents-card-2 {
            margin-top: 5em;
            /* min-height: 40em; */
        }

        .performer-main-heading {
            font-size: 2.5em;
            font-weight: bold;
        }

        .top-performerce-heading {
            margin-bottom: 0.6em;
            font-weight: 700;
        }

        .individual-agent-list {
            height: 5em;
            display: flex;
            align-items: center;
            padding: 1.3em;
            background-color: #FBF6FE;
            border-radius: 1em;
            margin-bottom: 1em;
            position: relative;
        }

        .indivisual-dynamic-pers {
            width: 100%;
            height: 100%;
            padding: 0 1em;
        }

        .agent-score {
            position: absolute;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            right: 0em;
            top: 0em;
            height: 100%;
            width: 3em;
            border-bottom-left-radius: 2em;
            border-bottom-right-radius: 2em;
            font-size: 10px;
            color: #fff;
            background-color: #A143F6;
            font-weight: bold;
            border: 1px solid #A143F6;
        }

        /* .agent-avator {
                position: absolute;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                left: 1em;
                top: 1em;
                width: 3em;
                border-radius: 2em;
                font-size: 10px;
                color: gray;
                font-weight: bold;
            } */
        .user-avator {
            width: 2.5em;
            color: black;
        }

        .user-score {
            margin-left: 1.5em;
            height: 2.5em;
            width: 2.5em;
            border-radius: 100px;
            font-size: 10px;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: #A143F6;
            border: 1px solid #A143F6;
        }

        .user-name {
            background-color: transparent;
            width: 4.5em;
            margin-right: 1em;
            overflow: hidden;
            box-shadow: inset -1em 0em 0.7em #FBF6FE;
        }

        .performance-bar {
            width: calc(100% - 11em);
            border-radius: 1em;
            height: 1em;
            background-color: #F3E3FC;
        }

        .performance-bar-status {
            /* transform: translateY(-1em); */
            background-color: #AF24F1;
            border-radius: 30px;
            position: relative;
            height: 100%;
        }

        .progress-number-absolute {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: -2em;
            bottom: -1.1em;
            height: 4em;
            width: 3em;
            font-size: 10px;
            padding: 0.3em;
            border-radius: 10px;
            background-color: #3A0080;
            color: white;
        }

        .agent-name {
            font-weight: bolder;
            padding: 0.5em 0em;
            font-size: 15px;
            transform: translateY(-4px);
        }

        .performance-numric-holders {
            position: absolute;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            right: -1em;
            top: -2.3em;
            z-index: 1;
        }

        .performance-numric-holders-nums {
            z-index: 3;
            color: white;
            height: 7px;
            width: 52px;
            padding-left: 1.8em;
            font-size: 11px;
            text-align: center;
        }

        .performance-bar-container {
            margin-top: -1.2em;
        }

        /* indicators */
        .analytical-area {
            display: flex;
        }

        .indicator-grid {
            padding: 0em;
            display: flex;
            justify-content: space-between;
        }

        .indicator-card {
            padding: 2em;
            width: 33%;
            /* min-height: 25em; */
            height: 100%;
            background-color: #FFF9FF;
            /* max-height: 35em; */
            border-radius: 1em;
            border: 1px solid #FFE4FD;
        }

        .indicator-card:nth-child(2) {
            margin: 0em 2em;
        }

        .indicator-card-metere-element {
            width: 100%;
            display: flex;
            justify-content: center;
        }

        .indicator-card-metere-arrow {
            margin-top: -95%;
            /* rotate: -10deg; */
            animation: rotate 5s ease-in-out infinite;
        }

        .indicator-card-metere-element-1 {
            /* margin-top: 1.6em; */
        }

        .indicator-card-metere-arrow-1 {
            margin-top: -93%;
            /* rotate: -10deg; */
            animation: rotate 5s ease-in-out infinite;
        }

        .idigator-title {
            width: 100%;
            text-align: center;
            margin-top: -25%;
            font-size: 18px;
        }

        .idigator-score {
            width: 100%;
            text-align: center;
        }

        .idigator-score span {
            display: inline-block;
            padding: 0.4em 3em;
            background-color: #F6ECFF;
            border: 1px solid #D8ADFF;
            border-radius: 50px;
            margin-top: 0.4em;
            font-size: 17px;
            font-weight: bold;
        }




        /* Data Table */
        .dt-input {
            border: 1px solid #d1d1d1 !important;
        }

        /* #dt-length-0::-ms-expand {
                display: none;
            } */

        #dt-length-0 {
            width: 8em !important;
            padding: 0.7em !important;
            text-align: center;
            border-radius: 1em;

            /* Webkit */
            /* -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none; */
        }

        #dt-search-0 {
            padding: 0.7em 1.5em !important;
            width: 30em;
            border-radius: 1em;
        }

        #dt-search-0::before {
            content: "";
            display: inline-block;
            min-height: 30px;
            min-width: 30px;
            background-color: black;
        }

        .dt-search label {
            display: none;
        }

        .table-grid {
            margin-top: 2em;
            width: 100%;
            padding: 2.4em;
            padding-top: 1.5em !important;
            background-color: white;
            border-radius: 1.3em;
        }

        .table-grid-heads {
            margin-top: 1.5em !important;
            border: none !important;
            background-color: rgba(241, 244, 249, 1);
            padding: 1.2em !important;
            font-weight: bold;
            font-size: 15px;
            text-align: left !important;
            margin-right: 0.3em;
            /* width: calc(1005 - 0.3em); */
        }

        .table-grid-heads-group-2 {
            background-color: #E9D0FF;
        }

        .table-grid-heads-group-3 {
            background-color: #CAB0FF;
        }

        .table-data-group-1 {
            text-align: left !important;
            background-color: #F9F3FF;
        }

        .dt-type-numeric {
            text-align: left !important;
        }

        .table-data-group-2 {
            text-align: left !important;
            background-color: #F0E9FF;
        }

        #myTable td {
            padding: 0.9em !important;
            /* border: none !important; */
            text-align: left !important;
            border-right: 1px solid #f1f1f1;
        }

        .dt-paging-button {
            background-color: #F3E3FC !important;
            border: none !important;
            border-radius: 1em !important;
            margin-left: 0.5em !important;
            color: white !important;
        }


        /* Graph */
        .graph-card-heading h4 {
            font-size: 1.5rem;
            font-weight: 700;
            margin-top: 2em;
        }

        .graph-card-main {
            margin-top: 2em;
        }


        @media (max-width: 1024px) {
            .analytical-area {
                flex-wrap: wrap;
            }

            .analytical-area-first {
                width: 100%;
            }

            .analytical-area-second {
                margin-left: 0;
            }

            .analytical-area {
                flex-wrap: wrap;
            }
        }
    </style>

</head>

<body x-data="main"
    class="relative overflow-x-hidden font-nunito text-sm font-normal antialiased collapsible-vertical full ltr" :class="[$store.app.sidebar ? 'toggle-sidebar' : '', $store.app.theme === 'dark' || $store.app.isDarkMode ? 'dark' :
            '', $store.app.menu, $store.app.layout, $store.app.rtlClass
        ]">
    <!-- sidebar menu overlay -->
    <div x-cloak class="fixed inset-0 z-50 bg-[black]/60 lg:hidden" :class="{ 'hidden': !$store.app.sidebar }"
        @click="$store.app.toggleSidebar()"></div>

    <!-- screen loader -->
    <div
        class="screen_loader animate__animated fixed inset-0 z-[60] grid place-content-center bg-[#fafafa] dark:bg-[#060818]">
        <svg width="64" height="64" viewBox="0 0 135 135" xmlns="http://www.w3.org/2000/svg" fill="#4361ee">
            <path
                d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
                <animateTransform attributeName="transform" type="rotate" from="0 67 67" to="-360 67 67" dur="2.5s"
                    repeatCount="indefinite" />
            </path>
            <path
                d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
                <animateTransform attributeName="transform" type="rotate" from="0 67 67" to="360 67 67" dur="8s"
                    repeatCount="indefinite" />
            </path>
        </svg>
    </div>

    <!-- scroll to top button -->
    <div class="fixed bottom-6 z-50 ltr:right-6 rtl:left-6" x-data="scrollToTop">
        <template x-if="showTopButton">
            <button type="button"
                class="btn btn-outline-primary animate-pulse rounded-full bg-[#fafafa] p-2 dark:bg-[#060818] dark:hover:bg-primary"
                @click="goToTop">
                <svg width="24" height="24" class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 20.75C12.4142 20.75 12.75 20.4142 12.75 20L12.75 10.75L11.25 10.75L11.25 20C11.25 20.4142 11.5858 20.75 12 20.75Z"
                        fill="currentColor" />
                    <path
                        d="M6.00002 10.75C5.69667 10.75 5.4232 10.5673 5.30711 10.287C5.19103 10.0068 5.25519 9.68417 5.46969 9.46967L11.4697 3.46967C11.6103 3.32902 11.8011 3.25 12 3.25C12.1989 3.25 12.3897 3.32902 12.5304 3.46967L18.5304 9.46967C18.7449 9.68417 18.809 10.0068 18.6929 10.287C18.5768 10.5673 18.3034 10.75 18 10.75L6.00002 10.75Z"
                        fill="currentColor" />
                </svg>
            </button>
        </template>
    </div>

    <!-- start theme customizer section -->
    @include('component/navbar')
    <!-- end theme customizer section -->

    <div class="main-container min-h-screen text-black dark:text-white-dark" :class="[$store.app.navbar]">
        <!-- start sidebar section -->
        @include('component/sidebar')
        <!-- end sidebar section -->

        <div class="main-content flex min-h-screen flex-col p-0">
            <!-- start header section -->
            @include('component/header')
            <div class="dvanimation animate__animated" :class="[$store.app.animation]">

                <div class="box-card">
                    <div class="grid grid-cols-1 gap-6 lg:grid-cols-1">
                        <div class="panels">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="back-arrow">
                                        {{-- <a href="{{ route('sales') }}">
                                            <button onclick="javascript:;"><span><i
                                                        class="fa-solid fa-arrow-left"></i></span></button>
                                        </a> --}}
                                    </div>
                                </div>
                            </div>

                            {{-- <div class="top-bar">
                                <div class="">
                                    <h2 class="font-bold">
                                        <div>Lead Generation</div>
                                        <div class="sub-head">Performance Tracker - By Fast Ranking</div>
                                    </h2>
                                </div>
                                <!--------------------start date fillter form-------------------->
                                <form class="custom_date_fillter" action="{{ route('performance-tracker') }}"
                                    method="POST" id="customForm" onsubmit="getCustomData(event)">
                                    @csrf
                                    <div class="form-indivisual-div" id="from-date-box" style="display: none;">
                                        <label for="from-date" class="form-label">From Date</label>
                                        <input type="date" id="from-date" name="fromDate" class="form-control">
                                    </div>

                                    <div class="form-indivisual-div" id="to-date-box" style="display: none;">
                                        <label for="to-date" class="form-label">To Date</label>
                                        <input type="date" id="to-date" name="toDate" class="form-control">
                                    </div>
                                    <div class="form-indivisual-div">
                                        <label for="dataRange" class="form-label">Customize Data</label>
                                        <select name="selectRange" id="dataRange" class="form-select">
                                            @if (isset($rageDropDown))
                                            <option value="{{ $rageDropDown }}" style="display: none" selected>{{
                                                $rageDropDown }}</option>
                                            @else
                                            <option value="This Month" selected>This Month</option>
                                            @endif
                                            <option value="Today" selected>Today</option>
                                            <option value="This Week">This Week</option>
                                            <option value="Custom">Custom</option>
                                            <option value="overall">Overall</option>
                                        </select>
                                    </div>


                                    <div class="form-indivisual-div" style="align-items: flex-end;">
                                        <button type="submit" class="btn dark_blue-btn"
                                            id="submit-button">Apply</button>
                                    </div>

                                </form>
                                <script>
                                    document.addEventListener('DOMContentLoaded', function() {
                                            const fromDateBox = document.getElementById('from-date-box');
                                            const toDateBox = document.getElementById('to-date-box');
                                            const range = document.getElementById('dataRange');

                                            range.addEventListener('change', function() {
                                                if (range.value === 'Custom') {
                                                    fromDateBox.style.display = 'block';
                                                    toDateBox.style.display = 'block';
                                                    document.getElementById('from-date').setAttribute('required', 'required');
                                                    document.getElementById('to-date').setAttribute('required', 'required');
                                                } else {
                                                    fromDateBox.style.display = 'none';
                                                    toDateBox.style.display = 'none';
                                                    document.getElementById('from-date').removeAttribute('required');
                                                    document.getElementById('to-date').removeAttribute('required');
                                                }
                                            });

                                            // Trigger the change event to set the initial state
                                            range.dispatchEvent(new Event('change'));
                                        });
                                </script>
                            </div> --}}

                            <div class="top-bar">
                                <div>
                                    <h2 class="font-bold">
                                        <div>Lead Generation</div>
                                        <div class="sub-head">Performance Tracker - By Fast Ranking</div>
                                    </h2>
                                </div>
                                <!--------------------start date filter form-------------------->
                                <form class="custom_date_filter" action="{{ route('performance-tracker') }}"
                                    method="POST" id="customForm" onsubmit="getCustomData(event)">
                                    @csrf
                                    <div class="form-indivisual-div" id="from-date-box" style="display: none;">
                                        <label for="from-date" class="form-label">From Date</label>
                                        <input type="date" id="from-date" name="fromDate" class="form-control"
                                            value="{{ isset($from) ? $from : '' }}">
                                    </div>

                                    <div class="form-indivisual-div" id="to-date-box" style="display: none;">
                                        <label for="to-date" class="form-label">To Date</label>
                                        <input type="date" id="to-date" name="toDate" class="form-control"
                                            value="{{ isset($to) ? $to : '' }}">
                                    </div>

                                    <div class="form-indivisual-div">
                                        <label for="dataRange" class="form-label">Customize Data</label>
                                        <select name="selectRange" id="dataRange" class="form-select">
                                            <option value="This Month" {{ $rageDropDown=='This Month' ? 'selected' : ''
                                                }}>This Month
                                            </option>
                                            <option value="Today" {{ $rageDropDown=='Today' ? 'selected' : '' }}>Today
                                            </option>
                                            <option value="This Week" {{ $rageDropDown=='This Week' ? 'selected' : ''
                                                }}>This Week
                                            </option>
                                            <option value="overall" {{ $rageDropDown=='overall' ? 'selected' : '' }}>
                                                Overall</option>
                                            <option value="Custom" {{ $rageDropDown=='Custom' ? 'selected' : '' }}>
                                                Custom</option>
                                        </select>
                                    </div>


                                    <div class="form-indivisual-div" style="align-items: flex-end;">
                                        <button type="submit" class="btn dark_blue-btn"
                                            id="submit-button">Apply</button>
                                    </div>
                                </form>

                                <script>
                                    document.addEventListener('DOMContentLoaded', function() {
                                            const fromDateBox = document.getElementById('from-date-box');
                                            const toDateBox = document.getElementById('to-date-box');
                                            const range = document.getElementById('dataRange');

                                            range.addEventListener('change', function() {
                                                if (range.value === 'Custom') {
                                                    fromDateBox.style.display = 'block';
                                                    toDateBox.style.display = 'block';
                                                    document.getElementById('from-date').setAttribute('required', 'required');
                                                    document.getElementById('to-date').setAttribute('required', 'required');
                                                } else {
                                                    fromDateBox.style.display = 'none';
                                                    toDateBox.style.display = 'none';
                                                    document.getElementById('from-date').removeAttribute('required');
                                                    document.getElementById('to-date').removeAttribute('required');
                                                }
                                            });

                                            // Trigger the change event to set the initial state
                                            range.dispatchEvent(new Event('change'));
                                        });
                                </script>
                            </div>



                            @php
                            // Initialize the variables to 0
                            $totalAppointments = 0;
                            $totalQualityApproved = 0;
                            $totalQualityPending = 0;
                            $totalQualityRejected = 0;
                            $totalReworkRequired = 0;
                            $totalConducted = 0;
                            $totalScheduled = 0;
                            $totalNotConducted = 0;
                            $closed_won = 0;
                            $closed_lost = 0;
                            $in_process = 0;


                            @endphp

                            @foreach ($performanceData as $tabData)
                            @php
                            // Accumulate the values from each tabData
                            $totalAppointments += $tabData['totalAppointmentsBooked'];
                            $totalQualityApproved += $tabData['totalQualityApproved'];
                            $totalQualityPending += $tabData['overallQualityPending'];
                            $totalQualityRejected += $tabData['totalQualityRejected'];
                            $totalReworkRequired += $tabData['totalReworkRequired'];
                            $totalConducted += $tabData['totalConducted'];
                            $totalScheduled += $tabData['currentScheduled'];
                            $totalNotConducted += $tabData['totalNotConducted'];
                            $closed_won += $tabData['closedWonCount'];
                            $closed_lost += $tabData['closedLostCount'];
                            $in_process += $tabData['inProcessCount'];
                            @endphp
                            @endforeach

                            {{-- @foreach ($totalAppointmentsBookedTodayID as $tabData)
                            {{ $tabData }}
                            @endforeach --}}

                            <section class="main-tracker-renderer">
                                <div class="analytical-area">
                                    <div class="analytical-area-first">

                                        <div class="top-5-agents-card">
                                            <div class="top-performerce">
                                                <h4 class="top-performerce-heading">Key Attributes</h4>
                                            </div>

                                            <div class="info-grid-card">
                                                <div class="info-card">
                                                    <div class="heading">Total Appintments</div>
                                                    <div class="data">{{ $totalAppointments }}</div>
                                                </div>

                                                <div class="info-card">
                                                    <div class="heading">Conducted</div>
                                                    <div class="data">{{ $totalConducted }}</div>
                                                </div>

                                                <div class="info-card">
                                                    <div class="heading">Not Conducted</div>
                                                    <div class="data">{{ $totalNotConducted }}</div>
                                                </div>


                                                <div class="info-card">
                                                    <div class="heading">Scheduled</div>
                                                    <div class="data">{{ $totalScheduled }}</div>
                                                </div>

                                                <div class="info-card">
                                                    <div class="heading">Quality In Progress</div>
                                                    <div class="data">{{ $totalQualityPending }}</div>
                                                </div>

                                                <div class="info-card">
                                                    <div class="heading">Rejected + Rework By Quality</div>
                                                    <div class="data">
                                                        {{ $totalQualityRejected + $totalReworkRequired }}</div>
                                                </div>

                                            </div>


                                            @foreach ($topAgents as $agent)
                                            <div class="individual-agent-list">

                                                <span class="user-avator">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em"
                                                        viewBox="0 0 24 24">
                                                        <path fill="gray" fill-rule="evenodd"
                                                            d="M12 20a7.97 7.97 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.97 7.97 0 0 1 12 20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12m10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7"
                                                            clip-rule="evenodd" />
                                                    </svg>
                                                </span>


                                                <span class="user-name">
                                                    {{ $agent['user']->username }}
                                                </span>

                                                <div
                                                    class="performance-bar @if ($agent['cur_month_appointment_booked_rate'] > 100) extra-ordinary @endif">
                                                    <div class="performance-bar-status w-0 transition-fast">
                                                        <span class="progress-number-absolute">{{
                                                            $agent['cur_month_appointment_booked_rate'] > 100 ? 'Extra
                                                            Ordinary' : $agent['cur_month_appointment_booked_rate'] .
                                                            '%' }}</span>
                                                        <input type="hidden" class="tempinput-progress"
                                                            value="{{ $agent['cur_month_appointment_booked_rate'] > 100 ? 'Extra Ordinary' : $agent['cur_month_appointment_booked_rate'] . '%' }}">
                                                    </div>
                                                </div>


                                                <span class="user-score">
                                                    {{ $agent['monthid'] }}
                                                </span>

                                                <!-- <span class="agent-score">
                                                            {{ $agent['monthid'] }}
                                                        </span> -->

                                                <!-- <span class="agent-score">
                                                            {{ $agent['monthid'] }}
                                                        </span>
                                                        <div class="agent-avator">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                                                    <path fill="currentColor" fill-rule="evenodd" d="M12 20a7.97 7.97 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.97 7.97 0 0 1 12 20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12m10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7" clip-rule="evenodd" />
                                                                </svg>
                                                            </span>
                                                        </div>

                                                        <div class="indivisual-dynamic-pers">
                                                            Appointment Booked:  {{ $agent['monthid'] }}
                                                            <div class="performance-bar-container">
                                                                <div class="agent-name">
                                                                    {{ $agent['user']->username }}
                                                                </div>

                                                                <div class="performance-bar @if ($agent['cur_month_appointment_booked_rate'] > 100) extra-ordinary @endif">
                                                                    <div class="performance-bar-status w-0 transition-fast">
                                                                        <span class="progress-number-absolute">{{ $agent['cur_month_appointment_booked_rate'] > 100 ? 'Extra Ordinary' : $agent['cur_month_appointment_booked_rate'] . '%' }}</span>
                                                                    <input type="hidden" class="tempinput-progress" value="{{ $agent['cur_month_appointment_booked_rate'] > 100 ? 'Extra Ordinary' : $agent['cur_month_appointment_booked_rate'] . '%' }}">
                                                                        
                                                                        <svg width="45" height="28"
                                                                            viewBox="0 0 45 28" fill="none"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            class="performance-numric-holders">
                                                                            <rect width="45" height="19.25"
                                                                                rx="5" fill="#3A0080" />
                                                                            <path
                                                                                d="M22.5 28L14.7057 15.5313L30.2942 15.5312L22.5 28Z"
                                                                                fill="#3A0080" />
                                                                        </svg>

                                                                        <span
                                                                            class="performance-numric-holders performance-numric-holders-nums">
                                                                            {{ $agent['cur_month_appointment_booked_rate'] > 100 ? 'Extra Ordinary' : $agent['cur_month_appointment_booked_rate'] . '%' }}
                                                                        </span>
                                                                    </div>
                                                                </div>


                                                            </div>
                                                        </div> -->
                                            </div>
                                            @endforeach
                                        </div>
                                    </div>





                                    <div class="analytical-area-first analytical-area-second">
                                        <div>

                                            <div class="top-5-agents-card top-5-agents-card-2">
                                                <div class="top-performerce">
                                                    <h4 class="top-performerce-heading">Key Performance Indicators
                                                    </h4>
                                                </div>

                                                <div class="indicator-grid">
                                                    <div class="indicator-card">
                                                        <div class="indicator-card-metere-element">
                                                            <svg width="100%" height="100%" viewBox="0 0 364 364"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M25 175C25 155.302 28.8799 135.796 36.4181 117.597C43.9563 99.3986 55.0052 82.8628 68.934 68.934C82.8628 55.0052 99.3987 43.9563 117.598 36.4181C135.796 28.8799 155.302 25 175 25C194.698 25 214.204 28.8799 232.403 36.4181C250.601 43.9563 267.137 55.0052 281.066 68.934C294.995 82.8628 306.044 99.3987 313.582 117.598C321.12 135.796 325 155.302 325 175L297.075 175C297.075 158.969 293.918 143.095 287.783 128.284C281.648 113.473 272.656 100.015 261.32 88.6797C249.985 77.344 236.527 68.352 221.716 62.2171C206.905 56.0822 191.031 52.9247 175 52.9247C158.969 52.9247 143.095 56.0822 128.284 62.2171C113.473 68.352 100.015 77.344 88.6797 88.6797C77.344 100.015 68.352 113.473 62.2171 128.284C56.0822 143.095 52.9247 158.969 52.9247 175L25 175Z"
                                                                    fill="url(#paint0_linear_28_31)" />
                                                                <path
                                                                    d="M67 175C67 160.817 69.7935 146.773 75.221 133.67C80.6485 120.567 88.6037 108.661 98.6325 98.6325C108.661 88.6037 120.567 80.6485 133.67 75.221C146.773 69.7935 160.817 67 175 67C189.183 67 203.227 69.7935 216.33 75.221C229.433 80.6485 241.339 88.6038 251.368 98.6325C261.396 108.661 269.351 120.567 274.779 133.67C280.207 146.773 283 160.817 283 175L175 175L67 175Z"
                                                                    fill="url(#paint1_linear_28_31)" />
                                                                <path
                                                                    d="M169.11 14.12C168.37 14.12 167.65 14.005 166.95 13.775C166.26 13.545 165.695 13.235 165.255 12.845L165.945 11.66C166.295 11.99 166.75 12.26 167.31 12.47C167.87 12.68 168.465 12.785 169.095 12.785C169.895 12.785 170.51 12.615 170.94 12.275C171.37 11.935 171.585 11.48 171.585 10.91C171.585 10.52 171.49 10.18 171.3 9.89C171.11 9.6 170.78 9.38 170.31 9.23C169.85 9.07 169.215 8.99 168.405 8.99H166.02L166.575 3.5H172.5V4.805H167.13L167.91 4.07L167.475 8.405L166.695 7.685H168.72C169.77 7.685 170.615 7.82 171.255 8.09C171.895 8.36 172.36 8.735 172.65 9.215C172.94 9.685 173.085 10.23 173.085 10.85C173.085 11.45 172.94 12 172.65 12.5C172.36 12.99 171.92 13.385 171.33 13.685C170.75 13.975 170.01 14.12 169.11 14.12ZM178.623 14.12C177.803 14.12 177.068 13.91 176.418 13.49C175.778 13.07 175.268 12.46 174.888 11.66C174.518 10.86 174.333 9.89 174.333 8.75C174.333 7.61 174.518 6.64 174.888 5.84C175.268 5.04 175.778 4.43 176.418 4.01C177.068 3.59 177.803 3.38 178.623 3.38C179.433 3.38 180.163 3.59 180.813 4.01C181.463 4.43 181.973 5.04 182.343 5.84C182.713 6.64 182.898 7.61 182.898 8.75C182.898 9.89 182.713 10.86 182.343 11.66C181.973 12.46 181.463 13.07 180.813 13.49C180.163 13.91 179.433 14.12 178.623 14.12ZM178.623 12.785C179.173 12.785 179.653 12.635 180.063 12.335C180.483 12.035 180.808 11.585 181.038 10.985C181.278 10.385 181.398 9.64 181.398 8.75C181.398 7.86 181.278 7.115 181.038 6.515C180.808 5.915 180.483 5.465 180.063 5.165C179.653 4.865 179.173 4.715 178.623 4.715C178.073 4.715 177.588 4.865 177.168 5.165C176.748 5.465 176.418 5.915 176.178 6.515C175.948 7.115 175.833 7.86 175.833 8.75C175.833 9.64 175.948 10.385 176.178 10.985C176.418 11.585 176.748 12.035 177.168 12.335C177.588 12.635 178.073 12.785 178.623 12.785Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M48.555 63V61.98L52.83 57.855C53.21 57.495 53.49 57.18 53.67 56.91C53.86 56.63 53.985 56.375 54.045 56.145C54.115 55.905 54.15 55.675 54.15 55.455C54.15 54.915 53.96 54.49 53.58 54.18C53.2 53.87 52.645 53.715 51.915 53.715C51.355 53.715 50.85 53.81 50.4 54C49.95 54.18 49.56 54.465 49.23 54.855L48.21 53.97C48.61 53.46 49.145 53.07 49.815 52.8C50.495 52.52 51.24 52.38 52.05 52.38C52.78 52.38 53.415 52.5 53.955 52.74C54.495 52.97 54.91 53.305 55.2 53.745C55.5 54.185 55.65 54.705 55.65 55.305C55.65 55.645 55.605 55.98 55.515 56.31C55.425 56.64 55.255 56.99 55.005 57.36C54.755 57.73 54.395 58.145 53.925 58.605L50.115 62.28L49.755 61.695H56.1V63H48.555ZM60.7233 63.12C59.9833 63.12 59.2633 63.005 58.5633 62.775C57.8733 62.545 57.3083 62.235 56.8683 61.845L57.5583 60.66C57.9083 60.99 58.3633 61.26 58.9233 61.47C59.4833 61.68 60.0783 61.785 60.7083 61.785C61.5083 61.785 62.1233 61.615 62.5533 61.275C62.9833 60.935 63.1983 60.48 63.1983 59.91C63.1983 59.52 63.1033 59.18 62.9133 58.89C62.7233 58.6 62.3933 58.38 61.9233 58.23C61.4633 58.07 60.8283 57.99 60.0183 57.99H57.6333L58.1883 52.5H64.1133V53.805H58.7433L59.5233 53.07L59.0883 57.405L58.3083 56.685H60.3333C61.3833 56.685 62.2283 56.82 62.8683 57.09C63.5083 57.36 63.9733 57.735 64.2633 58.215C64.5533 58.685 64.6983 59.23 64.6983 59.85C64.6983 60.45 64.5533 61 64.2633 61.5C63.9733 61.99 63.5333 62.385 62.9433 62.685C62.3633 62.975 61.6233 63.12 60.7233 63.12Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M333.49 175V165.1L334.135 165.805H331.12V164.5H334.975V175H333.49ZM341.562 175.12C340.742 175.12 340.007 174.91 339.357 174.49C338.717 174.07 338.207 173.46 337.827 172.66C337.457 171.86 337.272 170.89 337.272 169.75C337.272 168.61 337.457 167.64 337.827 166.84C338.207 166.04 338.717 165.43 339.357 165.01C340.007 164.59 340.742 164.38 341.562 164.38C342.372 164.38 343.102 164.59 343.752 165.01C344.402 165.43 344.912 166.04 345.282 166.84C345.652 167.64 345.837 168.61 345.837 169.75C345.837 170.89 345.652 171.86 345.282 172.66C344.912 173.46 344.402 174.07 343.752 174.49C343.102 174.91 342.372 175.12 341.562 175.12ZM341.562 173.785C342.112 173.785 342.592 173.635 343.002 173.335C343.422 173.035 343.747 172.585 343.977 171.985C344.217 171.385 344.337 170.64 344.337 169.75C344.337 168.86 344.217 168.115 343.977 167.515C343.747 166.915 343.422 166.465 343.002 166.165C342.592 165.865 342.112 165.715 341.562 165.715C341.012 165.715 340.527 165.865 340.107 166.165C339.687 166.465 339.357 166.915 339.117 167.515C338.887 168.115 338.772 168.86 338.772 169.75C338.772 170.64 338.887 171.385 339.117 171.985C339.357 172.585 339.687 173.035 340.107 173.335C340.527 173.635 341.012 173.785 341.562 173.785ZM351.567 175.12C350.747 175.12 350.012 174.91 349.362 174.49C348.722 174.07 348.212 173.46 347.832 172.66C347.462 171.86 347.277 170.89 347.277 169.75C347.277 168.61 347.462 167.64 347.832 166.84C348.212 166.04 348.722 165.43 349.362 165.01C350.012 164.59 350.747 164.38 351.567 164.38C352.377 164.38 353.107 164.59 353.757 165.01C354.407 165.43 354.917 166.04 355.287 166.84C355.657 167.64 355.842 168.61 355.842 169.75C355.842 170.89 355.657 171.86 355.287 172.66C354.917 173.46 354.407 174.07 353.757 174.49C353.107 174.91 352.377 175.12 351.567 175.12ZM351.567 173.785C352.117 173.785 352.597 173.635 353.007 173.335C353.427 173.035 353.752 172.585 353.982 171.985C354.222 171.385 354.342 170.64 354.342 169.75C354.342 168.86 354.222 168.115 353.982 167.515C353.752 166.915 353.427 166.465 353.007 166.165C352.597 165.865 352.117 165.715 351.567 165.715C351.017 165.715 350.532 165.865 350.112 166.165C349.692 166.465 349.362 166.915 349.122 167.515C348.892 168.115 348.777 168.86 348.777 169.75C348.777 170.64 348.892 171.385 349.122 171.985C349.362 172.585 349.692 173.035 350.112 173.335C350.532 173.635 351.017 173.785 351.567 173.785Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M285.535 63L289.99 53.13L290.38 53.805H284.14L284.89 53.07V55.68H283.45V52.5H291.37V53.52L287.125 63H285.535ZM295.811 63.12C295.071 63.12 294.351 63.005 293.651 62.775C292.961 62.545 292.396 62.235 291.956 61.845L292.646 60.66C292.996 60.99 293.451 61.26 294.011 61.47C294.571 61.68 295.166 61.785 295.796 61.785C296.596 61.785 297.211 61.615 297.641 61.275C298.071 60.935 298.286 60.48 298.286 59.91C298.286 59.52 298.191 59.18 298.001 58.89C297.811 58.6 297.481 58.38 297.011 58.23C296.551 58.07 295.916 57.99 295.106 57.99H292.721L293.276 52.5H299.201V53.805H293.831L294.611 53.07L294.176 57.405L293.396 56.685H295.421C296.471 56.685 297.316 56.82 297.956 57.09C298.596 57.36 299.061 57.735 299.351 58.215C299.641 58.685 299.786 59.23 299.786 59.85C299.786 60.45 299.641 61 299.351 61.5C299.061 61.99 298.621 62.385 298.031 62.685C297.451 62.975 296.711 63.12 295.811 63.12Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M11.01 175.12C10.19 175.12 9.455 174.91 8.805 174.49C8.165 174.07 7.655 173.46 7.275 172.66C6.905 171.86 6.72 170.89 6.72 169.75C6.72 168.61 6.905 167.64 7.275 166.84C7.655 166.04 8.165 165.43 8.805 165.01C9.455 164.59 10.19 164.38 11.01 164.38C11.82 164.38 12.55 164.59 13.2 165.01C13.85 165.43 14.36 166.04 14.73 166.84C15.1 167.64 15.285 168.61 15.285 169.75C15.285 170.89 15.1 171.86 14.73 172.66C14.36 173.46 13.85 174.07 13.2 174.49C12.55 174.91 11.82 175.12 11.01 175.12ZM11.01 173.785C11.56 173.785 12.04 173.635 12.45 173.335C12.87 173.035 13.195 172.585 13.425 171.985C13.665 171.385 13.785 170.64 13.785 169.75C13.785 168.86 13.665 168.115 13.425 167.515C13.195 166.915 12.87 166.465 12.45 166.165C12.04 165.865 11.56 165.715 11.01 165.715C10.46 165.715 9.975 165.865 9.555 166.165C9.135 166.465 8.805 166.915 8.565 167.515C8.335 168.115 8.22 168.86 8.22 169.75C8.22 170.64 8.335 171.385 8.565 171.985C8.805 172.585 9.135 173.035 9.555 173.335C9.975 173.635 10.46 173.785 11.01 173.785Z"
                                                                    fill="black" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_28_31" x1="25"
                                                                        y1="175" x2="325" y2="175"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#EFE0FF" />
                                                                        <stop offset="1" stop-color="#5400FF" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_28_31" x1="175"
                                                                        y1="67" x2="175" y2="175"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#C2A5FF"
                                                                            stop-opacity="0.63" />
                                                                        <stop offset="0.805" stop-color="#2B0083"
                                                                            stop-opacity="0" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>
                                                        </div>

                                                        <div
                                                            class="indicator-card-metere-element indicator-1 indicator-card-metere-arrow transition-normal">
                                                            <svg width="80%" height="80%" viewBox="0 0 200 200"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M35.064 100.323L100.429 105.268L100.547 97.312L35.064 100.323Z"
                                                                    fill="#2B0083" />
                                                                <path
                                                                    d="M98.9829 105.592C101.37 105.627 103.335 103.72 103.37 101.333C103.405 98.9449 101.498 96.9808 99.1107 96.9455C96.723 96.9102 94.7589 98.8172 94.7236 101.205C94.6883 103.592 96.5953 105.557 98.9829 105.592Z"
                                                                    fill="#2B0083" />
                                                            </svg>
                                                        </div>


                                                        <div class="idigator-title">Quality</div>
                                                        <div class="idigator-score">
                                                            <span>{{ $current_month_quality_approved_percentage
                                                                }}%</span>
                                                        </div>

                                                    </div>



                                                    <div class="indicator-card">
                                                        <div class="indicator-card-metere-element">
                                                            <svg width="100%" height="100%" viewBox="0 0 364 364"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M25 175C25 155.302 28.8799 135.796 36.4181 117.597C43.9563 99.3986 55.0052 82.8628 68.934 68.934C82.8628 55.0052 99.3987 43.9563 117.598 36.4181C135.796 28.8799 155.302 25 175 25C194.698 25 214.204 28.8799 232.403 36.4181C250.601 43.9563 267.137 55.0052 281.066 68.934C294.995 82.8628 306.044 99.3987 313.582 117.598C321.12 135.796 325 155.302 325 175L297.075 175C297.075 158.969 293.918 143.095 287.783 128.284C281.648 113.473 272.656 100.015 261.32 88.6797C249.985 77.344 236.527 68.352 221.716 62.2171C206.905 56.0822 191.031 52.9247 175 52.9247C158.969 52.9247 143.095 56.0822 128.284 62.2171C113.473 68.352 100.015 77.344 88.6797 88.6797C77.344 100.015 68.352 113.473 62.2171 128.284C56.0822 143.095 52.9247 158.969 52.9247 175L25 175Z"
                                                                    fill="url(#paint0_linear_28_31)" />
                                                                <path
                                                                    d="M67 175C67 160.817 69.7935 146.773 75.221 133.67C80.6485 120.567 88.6037 108.661 98.6325 98.6325C108.661 88.6037 120.567 80.6485 133.67 75.221C146.773 69.7935 160.817 67 175 67C189.183 67 203.227 69.7935 216.33 75.221C229.433 80.6485 241.339 88.6038 251.368 98.6325C261.396 108.661 269.351 120.567 274.779 133.67C280.207 146.773 283 160.817 283 175L175 175L67 175Z"
                                                                    fill="url(#paint1_linear_28_31)" />
                                                                <path
                                                                    d="M169.11 14.12C168.37 14.12 167.65 14.005 166.95 13.775C166.26 13.545 165.695 13.235 165.255 12.845L165.945 11.66C166.295 11.99 166.75 12.26 167.31 12.47C167.87 12.68 168.465 12.785 169.095 12.785C169.895 12.785 170.51 12.615 170.94 12.275C171.37 11.935 171.585 11.48 171.585 10.91C171.585 10.52 171.49 10.18 171.3 9.89C171.11 9.6 170.78 9.38 170.31 9.23C169.85 9.07 169.215 8.99 168.405 8.99H166.02L166.575 3.5H172.5V4.805H167.13L167.91 4.07L167.475 8.405L166.695 7.685H168.72C169.77 7.685 170.615 7.82 171.255 8.09C171.895 8.36 172.36 8.735 172.65 9.215C172.94 9.685 173.085 10.23 173.085 10.85C173.085 11.45 172.94 12 172.65 12.5C172.36 12.99 171.92 13.385 171.33 13.685C170.75 13.975 170.01 14.12 169.11 14.12ZM178.623 14.12C177.803 14.12 177.068 13.91 176.418 13.49C175.778 13.07 175.268 12.46 174.888 11.66C174.518 10.86 174.333 9.89 174.333 8.75C174.333 7.61 174.518 6.64 174.888 5.84C175.268 5.04 175.778 4.43 176.418 4.01C177.068 3.59 177.803 3.38 178.623 3.38C179.433 3.38 180.163 3.59 180.813 4.01C181.463 4.43 181.973 5.04 182.343 5.84C182.713 6.64 182.898 7.61 182.898 8.75C182.898 9.89 182.713 10.86 182.343 11.66C181.973 12.46 181.463 13.07 180.813 13.49C180.163 13.91 179.433 14.12 178.623 14.12ZM178.623 12.785C179.173 12.785 179.653 12.635 180.063 12.335C180.483 12.035 180.808 11.585 181.038 10.985C181.278 10.385 181.398 9.64 181.398 8.75C181.398 7.86 181.278 7.115 181.038 6.515C180.808 5.915 180.483 5.465 180.063 5.165C179.653 4.865 179.173 4.715 178.623 4.715C178.073 4.715 177.588 4.865 177.168 5.165C176.748 5.465 176.418 5.915 176.178 6.515C175.948 7.115 175.833 7.86 175.833 8.75C175.833 9.64 175.948 10.385 176.178 10.985C176.418 11.585 176.748 12.035 177.168 12.335C177.588 12.635 178.073 12.785 178.623 12.785Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M48.555 63V61.98L52.83 57.855C53.21 57.495 53.49 57.18 53.67 56.91C53.86 56.63 53.985 56.375 54.045 56.145C54.115 55.905 54.15 55.675 54.15 55.455C54.15 54.915 53.96 54.49 53.58 54.18C53.2 53.87 52.645 53.715 51.915 53.715C51.355 53.715 50.85 53.81 50.4 54C49.95 54.18 49.56 54.465 49.23 54.855L48.21 53.97C48.61 53.46 49.145 53.07 49.815 52.8C50.495 52.52 51.24 52.38 52.05 52.38C52.78 52.38 53.415 52.5 53.955 52.74C54.495 52.97 54.91 53.305 55.2 53.745C55.5 54.185 55.65 54.705 55.65 55.305C55.65 55.645 55.605 55.98 55.515 56.31C55.425 56.64 55.255 56.99 55.005 57.36C54.755 57.73 54.395 58.145 53.925 58.605L50.115 62.28L49.755 61.695H56.1V63H48.555ZM60.7233 63.12C59.9833 63.12 59.2633 63.005 58.5633 62.775C57.8733 62.545 57.3083 62.235 56.8683 61.845L57.5583 60.66C57.9083 60.99 58.3633 61.26 58.9233 61.47C59.4833 61.68 60.0783 61.785 60.7083 61.785C61.5083 61.785 62.1233 61.615 62.5533 61.275C62.9833 60.935 63.1983 60.48 63.1983 59.91C63.1983 59.52 63.1033 59.18 62.9133 58.89C62.7233 58.6 62.3933 58.38 61.9233 58.23C61.4633 58.07 60.8283 57.99 60.0183 57.99H57.6333L58.1883 52.5H64.1133V53.805H58.7433L59.5233 53.07L59.0883 57.405L58.3083 56.685H60.3333C61.3833 56.685 62.2283 56.82 62.8683 57.09C63.5083 57.36 63.9733 57.735 64.2633 58.215C64.5533 58.685 64.6983 59.23 64.6983 59.85C64.6983 60.45 64.5533 61 64.2633 61.5C63.9733 61.99 63.5333 62.385 62.9433 62.685C62.3633 62.975 61.6233 63.12 60.7233 63.12Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M333.49 175V165.1L334.135 165.805H331.12V164.5H334.975V175H333.49ZM341.562 175.12C340.742 175.12 340.007 174.91 339.357 174.49C338.717 174.07 338.207 173.46 337.827 172.66C337.457 171.86 337.272 170.89 337.272 169.75C337.272 168.61 337.457 167.64 337.827 166.84C338.207 166.04 338.717 165.43 339.357 165.01C340.007 164.59 340.742 164.38 341.562 164.38C342.372 164.38 343.102 164.59 343.752 165.01C344.402 165.43 344.912 166.04 345.282 166.84C345.652 167.64 345.837 168.61 345.837 169.75C345.837 170.89 345.652 171.86 345.282 172.66C344.912 173.46 344.402 174.07 343.752 174.49C343.102 174.91 342.372 175.12 341.562 175.12ZM341.562 173.785C342.112 173.785 342.592 173.635 343.002 173.335C343.422 173.035 343.747 172.585 343.977 171.985C344.217 171.385 344.337 170.64 344.337 169.75C344.337 168.86 344.217 168.115 343.977 167.515C343.747 166.915 343.422 166.465 343.002 166.165C342.592 165.865 342.112 165.715 341.562 165.715C341.012 165.715 340.527 165.865 340.107 166.165C339.687 166.465 339.357 166.915 339.117 167.515C338.887 168.115 338.772 168.86 338.772 169.75C338.772 170.64 338.887 171.385 339.117 171.985C339.357 172.585 339.687 173.035 340.107 173.335C340.527 173.635 341.012 173.785 341.562 173.785ZM351.567 175.12C350.747 175.12 350.012 174.91 349.362 174.49C348.722 174.07 348.212 173.46 347.832 172.66C347.462 171.86 347.277 170.89 347.277 169.75C347.277 168.61 347.462 167.64 347.832 166.84C348.212 166.04 348.722 165.43 349.362 165.01C350.012 164.59 350.747 164.38 351.567 164.38C352.377 164.38 353.107 164.59 353.757 165.01C354.407 165.43 354.917 166.04 355.287 166.84C355.657 167.64 355.842 168.61 355.842 169.75C355.842 170.89 355.657 171.86 355.287 172.66C354.917 173.46 354.407 174.07 353.757 174.49C353.107 174.91 352.377 175.12 351.567 175.12ZM351.567 173.785C352.117 173.785 352.597 173.635 353.007 173.335C353.427 173.035 353.752 172.585 353.982 171.985C354.222 171.385 354.342 170.64 354.342 169.75C354.342 168.86 354.222 168.115 353.982 167.515C353.752 166.915 353.427 166.465 353.007 166.165C352.597 165.865 352.117 165.715 351.567 165.715C351.017 165.715 350.532 165.865 350.112 166.165C349.692 166.465 349.362 166.915 349.122 167.515C348.892 168.115 348.777 168.86 348.777 169.75C348.777 170.64 348.892 171.385 349.122 171.985C349.362 172.585 349.692 173.035 350.112 173.335C350.532 173.635 351.017 173.785 351.567 173.785Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M285.535 63L289.99 53.13L290.38 53.805H284.14L284.89 53.07V55.68H283.45V52.5H291.37V53.52L287.125 63H285.535ZM295.811 63.12C295.071 63.12 294.351 63.005 293.651 62.775C292.961 62.545 292.396 62.235 291.956 61.845L292.646 60.66C292.996 60.99 293.451 61.26 294.011 61.47C294.571 61.68 295.166 61.785 295.796 61.785C296.596 61.785 297.211 61.615 297.641 61.275C298.071 60.935 298.286 60.48 298.286 59.91C298.286 59.52 298.191 59.18 298.001 58.89C297.811 58.6 297.481 58.38 297.011 58.23C296.551 58.07 295.916 57.99 295.106 57.99H292.721L293.276 52.5H299.201V53.805H293.831L294.611 53.07L294.176 57.405L293.396 56.685H295.421C296.471 56.685 297.316 56.82 297.956 57.09C298.596 57.36 299.061 57.735 299.351 58.215C299.641 58.685 299.786 59.23 299.786 59.85C299.786 60.45 299.641 61 299.351 61.5C299.061 61.99 298.621 62.385 298.031 62.685C297.451 62.975 296.711 63.12 295.811 63.12Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M11.01 175.12C10.19 175.12 9.455 174.91 8.805 174.49C8.165 174.07 7.655 173.46 7.275 172.66C6.905 171.86 6.72 170.89 6.72 169.75C6.72 168.61 6.905 167.64 7.275 166.84C7.655 166.04 8.165 165.43 8.805 165.01C9.455 164.59 10.19 164.38 11.01 164.38C11.82 164.38 12.55 164.59 13.2 165.01C13.85 165.43 14.36 166.04 14.73 166.84C15.1 167.64 15.285 168.61 15.285 169.75C15.285 170.89 15.1 171.86 14.73 172.66C14.36 173.46 13.85 174.07 13.2 174.49C12.55 174.91 11.82 175.12 11.01 175.12ZM11.01 173.785C11.56 173.785 12.04 173.635 12.45 173.335C12.87 173.035 13.195 172.585 13.425 171.985C13.665 171.385 13.785 170.64 13.785 169.75C13.785 168.86 13.665 168.115 13.425 167.515C13.195 166.915 12.87 166.465 12.45 166.165C12.04 165.865 11.56 165.715 11.01 165.715C10.46 165.715 9.975 165.865 9.555 166.165C9.135 166.465 8.805 166.915 8.565 167.515C8.335 168.115 8.22 168.86 8.22 169.75C8.22 170.64 8.335 171.385 8.565 171.985C8.805 172.585 9.135 173.035 9.555 173.335C9.975 173.635 10.46 173.785 11.01 173.785Z"
                                                                    fill="black" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_28_31" x1="25"
                                                                        y1="175" x2="325" y2="175"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#EFE0FF" />
                                                                        <stop offset="1" stop-color="#5400FF" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_28_31" x1="175"
                                                                        y1="67" x2="175" y2="175"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#C2A5FF"
                                                                            stop-opacity="0.63" />
                                                                        <stop offset="0.805" stop-color="#2B0083"
                                                                            stop-opacity="0" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>

                                                        </div>

                                                        <div
                                                            class="indicator-card-metere-element indicator-2 indicator-card-metere-arrow transition-normal">
                                                            <svg width="80%" height="80%" viewBox="0 0 200 200"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M35.064 100.323L100.429 105.268L100.547 97.312L35.064 100.323Z"
                                                                    fill="#2B0083" />
                                                                <path
                                                                    d="M98.9829 105.592C101.37 105.627 103.335 103.72 103.37 101.333C103.405 98.9449 101.498 96.9808 99.1107 96.9455C96.723 96.9102 94.7589 98.8172 94.7236 101.205C94.6883 103.592 96.5953 105.557 98.9829 105.592Z"
                                                                    fill="#2B0083" />
                                                            </svg>
                                                        </div>

                                                        <div class="idigator-title">Consultation</div>

                                                        <div class="idigator-score">
                                                            <span>{{ $current_month_conducted_rate }}%</span>
                                                        </div>
                                                    </div>



                                                    <div class="indicator-card">
                                                        <div
                                                            class="indicator-card-metere-element indicator-card-metere-element-1">
                                                            <svg width="100%" height="100%" viewBox="0 0 364 364"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M25 175C25 155.302 28.8799 135.796 36.4181 117.597C43.9563 99.3986 55.0052 82.8628 68.934 68.934C82.8628 55.0052 99.3987 43.9563 117.598 36.4181C135.796 28.8799 155.302 25 175 25C194.698 25 214.204 28.8799 232.403 36.4181C250.601 43.9563 267.137 55.0052 281.066 68.934C294.995 82.8628 306.044 99.3987 313.582 117.598C321.12 135.796 325 155.302 325 175L297.075 175C297.075 158.969 293.918 143.095 287.783 128.284C281.648 113.473 272.656 100.015 261.32 88.6797C249.985 77.344 236.527 68.352 221.716 62.2171C206.905 56.0822 191.031 52.9247 175 52.9247C158.969 52.9247 143.095 56.0822 128.284 62.2171C113.473 68.352 100.015 77.344 88.6797 88.6797C77.344 100.015 68.352 113.473 62.2171 128.284C56.0822 143.095 52.9247 158.969 52.9247 175L25 175Z"
                                                                    fill="url(#paint0_linear_28_38)" />
                                                                <path
                                                                    d="M169.11 14.12C168.37 14.12 167.65 14.005 166.95 13.775C166.26 13.545 165.695 13.235 165.255 12.845L165.945 11.66C166.295 11.99 166.75 12.26 167.31 12.47C167.87 12.68 168.465 12.785 169.095 12.785C169.895 12.785 170.51 12.615 170.94 12.275C171.37 11.935 171.585 11.48 171.585 10.91C171.585 10.52 171.49 10.18 171.3 9.89C171.11 9.6 170.78 9.38 170.31 9.23C169.85 9.07 169.215 8.99 168.405 8.99H166.02L166.575 3.5H172.5V4.805H167.13L167.91 4.07L167.475 8.405L166.695 7.685H168.72C169.77 7.685 170.615 7.82 171.255 8.09C171.895 8.36 172.36 8.735 172.65 9.215C172.94 9.685 173.085 10.23 173.085 10.85C173.085 11.45 172.94 12 172.65 12.5C172.36 12.99 171.92 13.385 171.33 13.685C170.75 13.975 170.01 14.12 169.11 14.12ZM178.623 14.12C177.803 14.12 177.068 13.91 176.418 13.49C175.778 13.07 175.268 12.46 174.888 11.66C174.518 10.86 174.333 9.89 174.333 8.75C174.333 7.61 174.518 6.64 174.888 5.84C175.268 5.04 175.778 4.43 176.418 4.01C177.068 3.59 177.803 3.38 178.623 3.38C179.433 3.38 180.163 3.59 180.813 4.01C181.463 4.43 181.973 5.04 182.343 5.84C182.713 6.64 182.898 7.61 182.898 8.75C182.898 9.89 182.713 10.86 182.343 11.66C181.973 12.46 181.463 13.07 180.813 13.49C180.163 13.91 179.433 14.12 178.623 14.12ZM178.623 12.785C179.173 12.785 179.653 12.635 180.063 12.335C180.483 12.035 180.808 11.585 181.038 10.985C181.278 10.385 181.398 9.64 181.398 8.75C181.398 7.86 181.278 7.115 181.038 6.515C180.808 5.915 180.483 5.465 180.063 5.165C179.653 4.865 179.173 4.715 178.623 4.715C178.073 4.715 177.588 4.865 177.168 5.165C176.748 5.465 176.418 5.915 176.178 6.515C175.948 7.115 175.833 7.86 175.833 8.75C175.833 9.64 175.948 10.385 176.178 10.985C176.418 11.585 176.748 12.035 177.168 12.335C177.588 12.635 178.073 12.785 178.623 12.785Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M48.555 63V61.98L52.83 57.855C53.21 57.495 53.49 57.18 53.67 56.91C53.86 56.63 53.985 56.375 54.045 56.145C54.115 55.905 54.15 55.675 54.15 55.455C54.15 54.915 53.96 54.49 53.58 54.18C53.2 53.87 52.645 53.715 51.915 53.715C51.355 53.715 50.85 53.81 50.4 54C49.95 54.18 49.56 54.465 49.23 54.855L48.21 53.97C48.61 53.46 49.145 53.07 49.815 52.8C50.495 52.52 51.24 52.38 52.05 52.38C52.78 52.38 53.415 52.5 53.955 52.74C54.495 52.97 54.91 53.305 55.2 53.745C55.5 54.185 55.65 54.705 55.65 55.305C55.65 55.645 55.605 55.98 55.515 56.31C55.425 56.64 55.255 56.99 55.005 57.36C54.755 57.73 54.395 58.145 53.925 58.605L50.115 62.28L49.755 61.695H56.1V63H48.555ZM60.7233 63.12C59.9833 63.12 59.2633 63.005 58.5633 62.775C57.8733 62.545 57.3083 62.235 56.8683 61.845L57.5583 60.66C57.9083 60.99 58.3633 61.26 58.9233 61.47C59.4833 61.68 60.0783 61.785 60.7083 61.785C61.5083 61.785 62.1233 61.615 62.5533 61.275C62.9833 60.935 63.1983 60.48 63.1983 59.91C63.1983 59.52 63.1033 59.18 62.9133 58.89C62.7233 58.6 62.3933 58.38 61.9233 58.23C61.4633 58.07 60.8283 57.99 60.0183 57.99H57.6333L58.1883 52.5H64.1133V53.805H58.7433L59.5233 53.07L59.0883 57.405L58.3083 56.685H60.3333C61.3833 56.685 62.2283 56.82 62.8683 57.09C63.5083 57.36 63.9733 57.735 64.2633 58.215C64.5533 58.685 64.6983 59.23 64.6983 59.85C64.6983 60.45 64.5533 61 64.2633 61.5C63.9733 61.99 63.5333 62.385 62.9433 62.685C62.3633 62.975 61.6233 63.12 60.7233 63.12Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M333.49 175V165.1L334.135 165.805H331.12V164.5H334.975V175H333.49ZM341.562 175.12C340.742 175.12 340.007 174.91 339.357 174.49C338.717 174.07 338.207 173.46 337.827 172.66C337.457 171.86 337.272 170.89 337.272 169.75C337.272 168.61 337.457 167.64 337.827 166.84C338.207 166.04 338.717 165.43 339.357 165.01C340.007 164.59 340.742 164.38 341.562 164.38C342.372 164.38 343.102 164.59 343.752 165.01C344.402 165.43 344.912 166.04 345.282 166.84C345.652 167.64 345.837 168.61 345.837 169.75C345.837 170.89 345.652 171.86 345.282 172.66C344.912 173.46 344.402 174.07 343.752 174.49C343.102 174.91 342.372 175.12 341.562 175.12ZM341.562 173.785C342.112 173.785 342.592 173.635 343.002 173.335C343.422 173.035 343.747 172.585 343.977 171.985C344.217 171.385 344.337 170.64 344.337 169.75C344.337 168.86 344.217 168.115 343.977 167.515C343.747 166.915 343.422 166.465 343.002 166.165C342.592 165.865 342.112 165.715 341.562 165.715C341.012 165.715 340.527 165.865 340.107 166.165C339.687 166.465 339.357 166.915 339.117 167.515C338.887 168.115 338.772 168.86 338.772 169.75C338.772 170.64 338.887 171.385 339.117 171.985C339.357 172.585 339.687 173.035 340.107 173.335C340.527 173.635 341.012 173.785 341.562 173.785ZM351.567 175.12C350.747 175.12 350.012 174.91 349.362 174.49C348.722 174.07 348.212 173.46 347.832 172.66C347.462 171.86 347.277 170.89 347.277 169.75C347.277 168.61 347.462 167.64 347.832 166.84C348.212 166.04 348.722 165.43 349.362 165.01C350.012 164.59 350.747 164.38 351.567 164.38C352.377 164.38 353.107 164.59 353.757 165.01C354.407 165.43 354.917 166.04 355.287 166.84C355.657 167.64 355.842 168.61 355.842 169.75C355.842 170.89 355.657 171.86 355.287 172.66C354.917 173.46 354.407 174.07 353.757 174.49C353.107 174.91 352.377 175.12 351.567 175.12ZM351.567 173.785C352.117 173.785 352.597 173.635 353.007 173.335C353.427 173.035 353.752 172.585 353.982 171.985C354.222 171.385 354.342 170.64 354.342 169.75C354.342 168.86 354.222 168.115 353.982 167.515C353.752 166.915 353.427 166.465 353.007 166.165C352.597 165.865 352.117 165.715 351.567 165.715C351.017 165.715 350.532 165.865 350.112 166.165C349.692 166.465 349.362 166.915 349.122 167.515C348.892 168.115 348.777 168.86 348.777 169.75C348.777 170.64 348.892 171.385 349.122 171.985C349.362 172.585 349.692 173.035 350.112 173.335C350.532 173.635 351.017 173.785 351.567 173.785Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M285.535 63L289.99 53.13L290.38 53.805H284.14L284.89 53.07V55.68H283.45V52.5H291.37V53.52L287.125 63H285.535ZM295.811 63.12C295.071 63.12 294.351 63.005 293.651 62.775C292.961 62.545 292.396 62.235 291.956 61.845L292.646 60.66C292.996 60.99 293.451 61.26 294.011 61.47C294.571 61.68 295.166 61.785 295.796 61.785C296.596 61.785 297.211 61.615 297.641 61.275C298.071 60.935 298.286 60.48 298.286 59.91C298.286 59.52 298.191 59.18 298.001 58.89C297.811 58.6 297.481 58.38 297.011 58.23C296.551 58.07 295.916 57.99 295.106 57.99H292.721L293.276 52.5H299.201V53.805H293.831L294.611 53.07L294.176 57.405L293.396 56.685H295.421C296.471 56.685 297.316 56.82 297.956 57.09C298.596 57.36 299.061 57.735 299.351 58.215C299.641 58.685 299.786 59.23 299.786 59.85C299.786 60.45 299.641 61 299.351 61.5C299.061 61.99 298.621 62.385 298.031 62.685C297.451 62.975 296.711 63.12 295.811 63.12Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M11.01 175.12C10.19 175.12 9.455 174.91 8.805 174.49C8.165 174.07 7.655 173.46 7.275 172.66C6.905 171.86 6.72 170.89 6.72 169.75C6.72 168.61 6.905 167.64 7.275 166.84C7.655 166.04 8.165 165.43 8.805 165.01C9.455 164.59 10.19 164.38 11.01 164.38C11.82 164.38 12.55 164.59 13.2 165.01C13.85 165.43 14.36 166.04 14.73 166.84C15.1 167.64 15.285 168.61 15.285 169.75C15.285 170.89 15.1 171.86 14.73 172.66C14.36 173.46 13.85 174.07 13.2 174.49C12.55 174.91 11.82 175.12 11.01 175.12ZM11.01 173.785C11.56 173.785 12.04 173.635 12.45 173.335C12.87 173.035 13.195 172.585 13.425 171.985C13.665 171.385 13.785 170.64 13.785 169.75C13.785 168.86 13.665 168.115 13.425 167.515C13.195 166.915 12.87 166.465 12.45 166.165C12.04 165.865 11.56 165.715 11.01 165.715C10.46 165.715 9.975 165.865 9.555 166.165C9.135 166.465 8.805 166.915 8.565 167.515C8.335 168.115 8.22 168.86 8.22 169.75C8.22 170.64 8.335 171.385 8.565 171.985C8.805 172.585 9.135 173.035 9.555 173.335C9.975 173.635 10.46 173.785 11.01 173.785Z"
                                                                    fill="black" />
                                                                <path
                                                                    d="M67 175C67 160.817 69.7935 146.773 75.221 133.67C80.6485 120.567 88.6037 108.661 98.6325 98.6325C108.661 88.6037 120.567 80.6485 133.67 75.221C146.773 69.7935 160.817 67 175 67C189.183 67 203.227 69.7935 216.33 75.221C229.433 80.6485 241.339 88.6038 251.368 98.6325C261.396 108.661 269.351 120.567 274.779 133.67C280.207 146.773 283 160.817 283 175L175 175L67 175Z"
                                                                    fill="url(#paint1_linear_28_38)" />
                                                                <defs>
                                                                    <linearGradient id="paint0_linear_28_38" x1="25"
                                                                        y1="175" x2="325" y2="175"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#3AAF3C" />
                                                                        <stop offset="0.4" stop-color="#F5D617" />
                                                                        <stop offset="1" stop-color="#FF0000" />
                                                                    </linearGradient>
                                                                    <linearGradient id="paint1_linear_28_38" x1="175"
                                                                        y1="67" x2="175" y2="175"
                                                                        gradientUnits="userSpaceOnUse">
                                                                        <stop stop-color="#C2A5FF"
                                                                            stop-opacity="0.63" />
                                                                        <stop offset="0.805" stop-color="#2B0083"
                                                                            stop-opacity="0" />
                                                                    </linearGradient>
                                                                </defs>
                                                            </svg>


                                                        </div>

                                                        <div class="indicator-card-metere-element indicator-3 indicator-card-metere-arrow-1 transition-normal"
                                                            style="margin-left: -0.6em;">
                                                            <svg width="77%" height="77%" viewBox="0 0 200 200"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M35.064 100.323L100.429 105.268L100.547 97.312L35.064 100.323Z"
                                                                    fill="#2B0083" />
                                                                <path
                                                                    d="M98.9829 105.592C101.37 105.627 103.335 103.72 103.37 101.333C103.405 98.9449 101.498 96.9808 99.1107 96.9455C96.723 96.9102 94.7589 98.8172 94.7236 101.205C94.6883 103.592 96.5953 105.557 98.9829 105.592Z"
                                                                    fill="#2B0083" />
                                                            </svg>
                                                        </div>

                                                        <div class="idigator-title">Rejection Rate</div>
                                                        <div class="idigator-score">
                                                            <span>{{ $rejected_count_rate }}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            <div class="top-5-agents-card top-5-agents-card-2 graph-card-main">
                                                <div class="top-performerce">
                                                    <h4 class="top-performerce-heading">Key Performance Indicators
                                                    </h4>
                                                </div>

                                                <div>
                                                    <canvas id="myChart"></canvas>
                                                    <script>
                                                        const ctx = document.getElementById('myChart');

                                                            new Chart(ctx, {
                                                                type: 'line',
                                                                data: {
                                                                    labels: [10, 20, 30, 40, 50, 60],
                                                                    datasets: [{
                                                                            label: 'Leads Generated',
                                                                            data: [12, 19, 3, 5, 2, 3],
                                                                            borderWidth: 1,
                                                                            borderColor: '#AF24F1',
                                                                            backgroundColor: '#F3E3FC',
                                                                            borderRadius: '1em',
                                                                            yAxisID: 'y',
                                                                        },
                                                                        {
                                                                            label: 'Leads Approved',
                                                                            data: [7, 11, 5, 8, 3, 7],
                                                                            borderWidth: 1,
                                                                            borderColor: 'rgba(54, 162, 235, 1)',
                                                                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                                                            yAxisID: 'y1',
                                                                        }
                                                                    ]
                                                                },
                                                                options: {
                                                                    responsive: true,
                                                                    interaction: {
                                                                        mode: 'index',
                                                                        intersect: false,
                                                                    },
                                                                    stacked: false,
                                                                    plugins: {
                                                                        title: {
                                                                            display: true,
                                                                            // text: 'Chart.js Line Chart - Multi Axis'
                                                                        }
                                                                    },
                                                                    scales: {
                                                                        y: {
                                                                            type: 'linear',
                                                                            display: true,
                                                                            position: 'left',
                                                                            beginAtZero: true,
                                                                        },
                                                                        y1: {
                                                                            type: 'linear',
                                                                            display: true,
                                                                            position: 'right',
                                                                            beginAtZero: true,
                                                                            grid: {
                                                                                drawOnChartArea: false, // only want the grid lines for one axis to show up
                                                                            },
                                                                        },
                                                                    }
                                                                },
                                                            });
                                                    </script>
                                                </div>
                                            </div>
                                        </div>



                                        <div class="row">
                                            <!-- QA Approved Rate -->
                                            <!-- <div class="col-md-4">
                                                    <div class="progress-title">QA Approved Rate</div>
                                                    <div class="circular-meter">
                                                        <svg viewBox="0 0 36 18" class="circular-chart"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path class="circle-bg" d="M18 18 A18 18 0 1 1 0 18" />
                                                            <path class="circle"
                                                                stroke-dasharray="{{ $current_month_quality_approved_percentage }}, 100"
                                                                d="M18 18 A18 18 0 1 1 0 18" />
                                                            <text x="18" y="12"
                                                                class="percentage">{{ $current_month_quality_approved_percentage }}%</text>
                                                        </svg>
                                                    </div>
                                                    <div>{{ $current_month_quality_approved_percentage }} %</div>
                                                </div> -->

                                            <!-- QA Conducted Rate -->
                                            <!-- <div class="col-md-4">
                                                    <div class="progress-title">QA Conducted Rate</div>
                                                    <div class="circular-meter">
                                                        <svg viewBox="0 0 36 18" class="circular-chart"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path class="circle-bg" d="M18 18 A18 18 0 1 1 0 18" />
                                                            <path class="circle"
                                                                stroke-dasharray="{{ $current_month_conducted_rate }}, 100"
                                                                d="M18 18 A18 18 0 1 1 0 18" />
                                                            <text x="18" y="12"
                                                                class="percentage">{{ $current_month_conducted_rate }}%</text>
                                                        </svg>
                                                    </div>
                                                    <div>{{ $current_month_conducted_rate }} %</div>
                                                </div> -->

                                            <!-- QA Rejected Rate -->
                                            <!-- <div class="col-md-4">
                                                    <div class="progress-title">QA Rejected Rate</div>
                                                    <div class="circular-meter">
                                                        <svg viewBox="0 0 36 18" class="circular-chart"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path class="circle-bg" d="M18 18 A18 18 0 1 1 0 18" />
                                                            <path class="circle"
                                                                stroke-dasharray="{{ $rejected_count_rate }}, 100"
                                                                d="M18 18 A18 18 0 1 1 0 18" />
                                                            <text x="18" y="12"
                                                                class="percentage">{{ $rejected_count_rate }}%</text>
                                                        </svg>
                                                    </div>
                                                    <div>{{ $rejected_count_rate }} %</div>
                                                </div> -->
                                        </div>
                                    </div>
                                </div>

                                <style>
                                    .secondrow th .dt-column-order {
                                        display: none;
                                    }


                                    /* Set background color for the table */
                                    #myTable {
                                        background-color: #f9f9f9;
                                        /* Light grey background */
                                        border: 1px solid #ddd;
                                        /* Add a border for the table */
                                    }

                                    /* Align buttons on the same line */
                                    .button-group {
                                        display: flex;
                                        gap: 10px;
                                        /* Add some spacing between the buttons */
                                        margin-bottom: 1rem;
                                        justify-content: center;
                                    }

                                    /* Style for individual buttons */
                                    .btn {
                                        padding: 10px 20px;
                                    }
                                </style>







                            </section>

                            <section class="main-tracker-renderer " style="background-color: #e3c9fc">

                                <div class="button-group" style="padding-top: 2%">
                                    <button id="toggleActiveFilter" class="btn btn-success">Show Active
                                        Only</button>
                                    <button id="toggleFilter" class="btn btn-primary">Show Executives
                                        Only</button>
                                </div>


                                <div
                                    class="dataTable-wrapper dataTable-loading no-footer sortable searchable fixed-columns table-grid">
                                    <div class="table-responsive table-grid-child">
                                        <table id="myTable" class="table">
                                            <thead>
                                                <tr>
                                                    <th class="table-grid-heads" style="padding-left: 20px;">Agent Name
                                                    </th>
                                                    <th class="table-grid-heads">Role</th>
                                                    <th class="table-grid-heads">Agent Status</th>
                                                    <th class="table-grid-heads">Target</th>
                                                    <th class="table-grid-heads">Total Appointment ({{
                                                        $totalAppointments }})</th>
                                                    <th class="table-grid-heads table-grid-heads-group-2">QA
                                                        Pending ({{ $totalQualityPending }})</th>
                                                    <th class="table-grid-heads table-grid-heads-group-2">QA
                                                        Rejected ({{ $totalQualityRejected }})</th>

                                                    <th class="table-grid-heads table-grid-heads-group-2">QA
                                                        Rework ({{ $totalReworkRequired }})
                                                    </th>
                                                    <th class="table-grid-heads table-grid-heads-group-2">QA
                                                        Approved ({{ $totalQualityApproved }})</th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">Not
                                                        Conducted ({{ $totalNotConducted }})</th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">
                                                        Scheduled ({{ $totalScheduled }})
                                                    </th>

                                                    <th class="table-grid-heads table-grid-heads-group-3">
                                                        Conducted ({{ $totalConducted }})
                                                    </th>


                                                    <th class="table-grid-heads table-grid-heads-group-3">
                                                        Lost ({{ $closed_lost }})
                                                    </th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">
                                                        In Progress ({{ $in_process}})
                                                    </th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">Won ({{
                                                        $closed_won }})</th>
                                                    {{-- <th class="table-grid-heads table-grid-heads-group-3">Won ids
                                                    </th> --}}
                                                    <th class="table-grid-heads table-grid-heads-group-3">Appt Achieved
                                                        %</th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">Quality Appr.
                                                        %</th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">Conduction
                                                        Rate</th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">Conversion
                                                        Rate</th>
                                                    <th class="table-grid-heads table-grid-heads-group-3">Score</th>

                                                </tr>

                                                {{-- <tr class="secondrow">
                                                    <th></th>
                                                    <th></th>
                                                    <th></th>
                                                    <th id="headerTotalAppointments">{{ $totalAppointments }}
                                                    </th>
                                                    <th class="table-data-group-1" id="headerQualityApproved">
                                                        {{ $totalQualityApproved }}</th>
                                                    <th class="table-data-group-1" id="headerQualityPending">
                                                        {{ $totalQualityPending }}</th>
                                                    <th class="table-data-group-1" id="headerQualityRejected">
                                                        {{ $totalQualityRejected }}</th>
                                                    <th class="table-data-group-1" id="headerReworkRequired">
                                                        {{ $totalReworkRequired }}</th>
                                                    <th class="table-data-group-2" id="headerConducted">
                                                        {{ $totalConducted }}</th>
                                                    <th class="table-data-group-2" id="headerScheduled">
                                                        {{ $totalScheduled }}</th>
                                                    <th class="table-data-group-2" id="headerNotConducted">
                                                        {{ $totalNotConducted }}</th>
                                                </tr> --}}
                                            </thead>




                                            <tbody>
                                                @foreach ($performanceData as $tabData)

                                                <tr class="td-border user-row" data-role="{{ $tabData['user']->role }}"
                                                    data-status="{{ $tabData['user']->user_status }}">

                                                    @php
                                                    $appointmentAchieved = ($tabData['target'] > 0)
                                                    ? ($tabData['totalAppointmentsBooked'] / $tabData['target']) * 100
                                                    : 0;

                                                    $qualityApproved = ($tabData['totalAppointmentsBooked'] > 0)
                                                    ? ($tabData['totalQualityApproved'] /
                                                    $tabData['totalAppointmentsBooked']) * 100
                                                    : 0;

                                                    $conducted = ($tabData['totalQualityApproved'] > 0)
                                                    ? ($tabData['totalConducted'] / $tabData['totalQualityApproved']) *
                                                    100
                                                    : 0;

                                                    $conversion = ($tabData['totalConducted'] > 0)
                                                    ? ($tabData['closedWonCount'] / $tabData['totalConducted']) * 100
                                                    : 0;

                                                    $finalScore = ($appointmentAchieved * 0.50) +
                                                    ($qualityApproved * 0.15) +
                                                    ($conducted * 0.15) +
                                                    ($conversion * 0.20);
                                                    @endphp

                                                    <td>
                                                        <a
                                                            href="{{ route('agentprofile', ['username' => $tabData['user']->username]) }}">
                                                            {{ $tabData['user']->username }}
                                                        </a>
                                                    </td>

                                                    <td>{{ $tabData['user']->role }}</td>
                                                    <td>
                                                        <span
                                                            style="font-size: 12px; padding: 0.2em 0.7em; background-color: #FBF6FE; border: 1px solid #AF24F1; border-radius: 100px;">
                                                            {{ $tabData['user']->user_status }}
                                                        </span>
                                                    </td>
                                                    <td>{{ $tabData['target'] }}</td>
                                                    <td>{{ $tabData['totalAppointmentsBooked'] }}</td>
                                                    <td class="table-data-group-1">
                                                        {{ $tabData['overallQualityPending'] }}</td>
                                                    <td class="table-data-group-1">
                                                        {{ $tabData['totalQualityRejected'] }}</td>
                                                    <td class="table-data-group-1">
                                                        {{ $tabData['totalReworkRequired'] }}</td>
                                                    <td class="table-data-group-1">
                                                        {{ $tabData['totalQualityApproved'] }}</td>
                                                    <td class="table-data-group-2">
                                                        {{ $tabData['totalNotConducted'] }}</td>
                                                    <td class="table-data-group-2">
                                                        {{ $tabData['currentScheduled'] }}</td>

                                                    <td class="table-data-group-2">
                                                        {{ $tabData['totalConducted'] }}</td>


                                                    <td class="table-data-group-2">
                                                        {{ $tabData['closedLostCount'] }}</td>
                                                    <td class="table-data-group-2">
                                                        {{ $tabData['inProcessCount'] }}</td>
                                                    <td class="table-data-group-2">
                                                        {{ $tabData['closedWonCount'] }}</td>
                                                    {{-- <td class="table-data-group-2">
                                                        {{ $tabData['closedWonBusinessIds'] }}</td> --}}
                                                    <td>
                                                        {{ number_format($appointmentAchieved, 2) }}%
                                                    </td>
                                                    <td>
                                                        {{ number_format($qualityApproved, 2) }}%
                                                    </td>
                                                    <td>
                                                        {{ number_format($conducted, 2) }}%
                                                    </td>
                                                    <td>
                                                        {{ number_format($conversion, 2) }}%
                                                    </td>



                                                    <td>{{ number_format($finalScore, 2) }}%</td>


                                                </tr>
                                                @endforeach
                                            </tbody>
                                            <tfoot>

                                                <tr>
                                                    <th colspan="4">Total</th>
                                                    <th id="footerAppointments">{{ $totalAppointments }}</th>
                                                    <th class="table-data-group-1" id="footerQualityPending">
                                                        {{ $totalQualityPending }}</th>
                                                    <th class="table-data-group-1" id="footerQualityRejected">
                                                        {{ $totalQualityRejected }}</th>
                                                    <th class="table-data-group-1" id="footerReworkRequired">
                                                        {{ $totalReworkRequired }}</th>
                                                    <th class="table-data-group-1" id="footerQualityApproved">
                                                        {{ $totalQualityApproved }}</th>

                                                    <th class="table-data-group-2" id="footerNotConducted">
                                                        {{ $totalNotConducted }}</th>
                                                    <th class="table-data-group-2" id="footerScheduled">
                                                        {{ $totalScheduled }}</th>

                                                    <th class="table-data-group-2" id="footerConducted">
                                                        {{ $totalConducted }}</th>


                                                    <th class="table-data-group-2" id="headerConducted">
                                                        {{ $closed_lost }}</th>
                                                    <th class="table-data-group-2" id="headerScheduled">
                                                        {{ $in_process}}</th>
                                                    <th class="table-data-group-2" id="headerNotConducted">
                                                        {{ $closed_won }}</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>

                            </section>


                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </div>

    @include('component/foot')
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://kit.fontawesome.com/fbd2e83a89.js" crossorigin="anonymous"></script>
    <script src="{{ asset('public/assets/js/status-color.js') }}"></script>
    <script type="text/javascript" charset="utf8" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/2.1.3/js/dataTables.js"></script>

    <script>
        let showExecutivesOnly = false;
        let showActiveOnly = false;
    
        $(document).ready(function () {
            const dataTable = $('#myTable').DataTable({
                orderCellsTop: true,
                pageLength: 15,
                lengthMenu: [ [15, 25, 50, 100], [15, 25, 50, 100] ],
                language: {
                    searchPlaceholder: 'Search Appointment Data'
                },
                drawCallback: function () {
                    $('th').addClass('sorting-padding');
                }
            });
    
            // Set default page length select to 15 (after init)
            dataTable.on('init', function () {
                $('.dataTables_length select').val('15').trigger('change');
                updateTotals(); // Initial totals
            });
    
            // Custom filter logic for Executive and Active toggles
            $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
                const row = dataTable.row(dataIndex).node();
                const role = row.getAttribute('data-role');
                const status = row.getAttribute('data-status');
    
                if (showExecutivesOnly && role !== 'Executive') return false;
                if (showActiveOnly && status !== 'Active') return false;
                return true;
            });
    
            function updateTotals() {
                let totals = {
                    appointments: 0,
                    qualityApproved: 0,
                    qualityPending: 0,
                    qualityRejected: 0,
                    reworkRequired: 0,
                    conducted: 0,
                    scheduled: 0,
                    notConducted: 0
                };
    
                dataTable.rows().every(function () {
                    const row = this.node();
                    const role = row.getAttribute('data-role');
                    const status = row.getAttribute('data-status');
    
                    if ((!showExecutivesOnly || role === 'Executive') && (!showActiveOnly || status === 'Active')) {
                        const cells = row.children;
                        totals.appointments     += parseInt(cells[4].textContent) || 0;
                        totals.qualityPending   += parseInt(cells[5].textContent) || 0;
                        totals.qualityRejected  += parseInt(cells[6].textContent) || 0;
                        totals.reworkRequired   += parseInt(cells[7].textContent) || 0;
                        totals.qualityApproved  += parseInt(cells[8].textContent) || 0;
                        totals.notConducted     += parseInt(cells[9].textContent) || 0;
                        totals.scheduled        += parseInt(cells[10].textContent) || 0;
                        totals.conducted        += parseInt(cells[11].textContent) || 0;
                    }
                });
    
                document.getElementById('footerAppointments').textContent       = totals.appointments;
                document.getElementById('footerQualityApproved').textContent   = totals.qualityApproved;
                document.getElementById('footerQualityPending').textContent    = totals.qualityPending;
                document.getElementById('footerQualityRejected').textContent   = totals.qualityRejected;
                document.getElementById('footerReworkRequired').textContent    = totals.reworkRequired;
                document.getElementById('footerConducted').textContent         = totals.conducted;
                document.getElementById('footerScheduled').textContent         = totals.scheduled;
                document.getElementById('footerNotConducted').textContent      = totals.notConducted;
            }
    
            // Toggle Executive Filter
            document.getElementById('toggleFilter').addEventListener('click', function () {
                showExecutivesOnly = !showExecutivesOnly;
                dataTable.draw();
                updateTotals();
                this.textContent = showExecutivesOnly ? 'Show All' : 'Show Executives Only';
            });
    
            // Toggle Active Filter
            document.getElementById('toggleActiveFilter').addEventListener('click', function () {
                showActiveOnly = !showActiveOnly;
                dataTable.draw();
                updateTotals();
                this.textContent = showActiveOnly ? 'Show All' : 'Show Active Only';
            });
    
            // Update totals every time table is redrawn (pagination, sorting, etc.)
            dataTable.on('draw', function () {
                updateTotals();
            });
        });
    </script>
    
    
    

    <script>
        window.addEventListener('DOMContentLoaded', (event) => {
                var userRole = "{{ session('role') }}";
                var deleteLinks = document.querySelectorAll('.delete-link');

                // Loop through each delete link and hide it if the user's role matches
                deleteLinks.forEach(function(deleteLink) {
                    if (userRole === 'Lead Gen Agent' || userRole === 'Quality Executive' || userRole ===
                        'SEO Executive' || userRole == 'Team Leader' || userRole == 'Manager') {
                        deleteLink.style.display = 'none';
                    }
                });

            });
    </script>

    <script>
        let indicator_1 = document.querySelector('.indicator-1');
            let indicator_2 = document.querySelector('.indicator-2');
            let indicator_3 = document.querySelector('.indicator-3');
            var status_width = document.querySelector("#tst-1");
            let userPerformance = document.querySelectorAll(".performance-bar-status");
            let allInputsProgress = document.querySelectorAll(".tempinput-progress");
            let all_inputs = [];

            allInputsProgress.forEach(element => {
                all_inputs.push(element.value)
            });
            // {{ $agent['cur_month_appointment_booked_rate'] > 100 ? 'Extra Ordinary' : $agent['cur_month_appointment_booked_rate'] . '%' }}


            setTimeout(() => {
                indicator_1.style.transform =
                    'rotate({{ $current_month_quality_approved_percentage == 0 ? 0 : 180 / (100 / $current_month_quality_approved_percentage) }}deg)'
                indicator_2.style.transform =
                    'rotate({{ $current_month_conducted_rate == 0 ? 0 : 180 / (100 / $current_month_conducted_rate) }}deg)'
                indicator_3.style.transform =
                    'rotate({{ $rejected_count_rate == 0 ? 0 : 180 / (100 / $rejected_count_rate) }}deg)'
            }, 1000);

            setTimeout(() => {
                let startValue = 0
                userPerformance.forEach(element => {
                    startValue++
                    element.style.width = all_inputs[startValue - 1];
                });
            }, 1000);
    </script>


    <script>
        document.getElementById("exportBtn").addEventListener("click", function() {
                // Get table
                var table = document.getElementById("myTable");
                var rows = table.querySelectorAll("tr");
                var dataArray = [];

                // Iterate through rows and cells
                for (var i = 0; i < rows.length; i++) {
                    var row = [],
                        cols = rows[i].querySelectorAll("td, th");
                    for (var j = 0; j < cols.length; j++) {
                        row.push(cols[j].innerText);
                    }
                    dataArray.push(row);
                }

                // Convert dataArray to worksheet
                var worksheet = XLSX.utils.aoa_to_sheet(dataArray);

                // Create workbook and add worksheet
                var wb = XLSX.utils.book_new();
                XLSX.utils.book_append_sheet(wb, worksheet, "Sheet1");

                // Save workbook to file
                XLSX.writeFile(wb, "Performance_Report.xlsx");
            });
    </script>
    <!-- Form Script -->
    <script>
        // Variable to store the previous value
            let previousValue = '';

            // Reference to the input field
            const myInput = document.getElementById('dataRange');

            // Listen for changes to the input field
            myInput.addEventListener('change', function() {
                // Store the current value as previous value before changing
                previousValue = myInput.value;
            });

            // Reference to the restore button
            const restoreButton = document.getElementById('submit-button');

            // Restore the previous value when the button is clicked
            restoreButton.addEventListener('click', function() {
                myInput.value = previousValue;
            });
    </script>
    @else
    @php
    return redirect('/')->send();
    @endphp ?>
    @endif