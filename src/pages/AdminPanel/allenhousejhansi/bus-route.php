<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi| Bus Route</title>
    <?php include "includes/head.php" ?>
</head>

<body>
    <style>
        .job-opening-bg {
            position: relative;
        }

        .job-opening-bg::before {
            content: "";
            height: 100%;
            position: absolute;
            opacity: .6;
            width: 100%;
            background: #112759;
        }

        .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #053B7A;
            /* Tailwind blue-500 */
            border-radius: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background-color: #053B7A;
            /* Tailwind blue-600 */
        }

        .custom-scrollbar::-webkit-scrollbar-track {
            background-color: #EFEFEF;
        }
    </style>
    <?php include "includes/header.php" ?>

    <div class="main relative  mb-[40px] sm:mb-[120px] ">
        <div class="bg-center flex items-center text-center h-[300px] comman-banner">
            <div>
                <h1
                    class="text-[32px] sm:hidden block font-[700] text-white text-left pl-4 mb-5 sm:mb-8 hr-line relative leading-9">
                    Bus Route
                </h1>
            </div>

            <div class="md:w-[100%]">
                <h1 class="sm:text-[32px] sm:block hidden font-[700] text-white text-left sm:mb-1 hr-line relative leading-9 ml-[7rem]">
                    Bus
                    <span class="sm:hidden"></span> Route
                </h1>
            </div>
        </div>

        <div class="sm:flex justify-between m-5 sm:m-10 sm:pr-14  hidden">

            <div class="flex m-5" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                    <li class="inline-flex items-center">
                        <a href="index.php" class="inline-flex items-center text-sm font-medium text-blue-main">
                            Home
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-blue-main mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <p class="ms-1 text-sm font-medium text-blue-main">Admission</p>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-blue-main mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="animation-master-class.php" class="ms-1 text-sm font-medium text-blue-main">Bus
                                Route</a>
                        </div>
                    </li>
                </ol>
            </div>
            

         </div>

        <div class="sm:my-10 my-10">
            <div class="mt-5 sm:mt-[60px] 2xl:w-[1480px] lg:w-[1224px] md:w-[967px] sm:w-[840px] mx-auto sm:px-5 px-3">
                <div class="sm:flex block gap-10 ">

                    <div class="2xl:hidden md:hidden flex-col mx-auto tab-content block" id="mroute1">

                        <img src="assets/images/bus-route/m-route-1.webp"
                            alt="">

                        <div class=" mt-[-28px]">
                            <img src="assets/images/bus-route/m-route-11.webp"
                                alt="">
                        </div>
                    </div>

                    <div class="2xl:hidden md:hidden flex-col mx-auto tab-content block hidden" id="mroute3">

                        <img src="assets/images/bus-route/m-route-2.webp"
                            alt="">

                        <div class=" mt-[-28px]">
                            <img src="assets/images/bus-route/m-route-22.webp"
                                alt="">
                        </div>
                    </div>

                    <div class="2xl:hidden md:hidden flex-col mx-auto tab-content block hidden" id="mroute5">

                        <img src="assets/images/bus-route/m-route-3.webp"
                            alt="">

                        <div class=" mt-[-28px]">
                            <img src="assets/images/bus-route/m-route-33.webp"
                                alt="">
                        </div>
                    </div>

                    <div class="2xl:hidden md:hidden flex-col mx-auto tab-content block hidden" id="mroute6">

                        <img src="assets/images/bus-route/m-route-4.webp"
                            alt="">

                        <div class=" mt-[-28px]">
                            <img src="assets/images/bus-route/m-route-44.webp"
                                alt="">
                        </div>
                    </div>

                    <div class="2xl:hidden md:hidden flex-col mx-auto tab-content block hidden" id="mroute7">

                        <img src="assets/images/bus-route/m-route-5.webp"
                            alt="">

                        <div class=" mt-[-28px]">
                            <img src="assets/images/bus-route/m-route-55.webp"
                                alt="">
                        </div>
                    </div>
                    <div class="2xl:hidden md:hidden flex-col mx-auto tab-content block hidden" id="mroute7">

                        <img src="assets/images/bus-route/m-route-6.webp"
                            alt="">

                        <div class=" mt-[-28px]">
                            <img src="assets/images/bus-route/m-route-66.webp"
                                alt="">
                        </div>
                    </div>
                    <div class="2xl:hidden md:hidden flex-col mx-auto tab-content block hidden" id="mroute7">

                        <img src="assets/images/bus-route/m-route-7.webp"
                            alt="">

                        <div class=" mt-[-28px]">
                            <img src="assets/images/bus-route/m-route-77.webp"
                                alt="">
                        </div>
                    </div>

                    <!-- Tab Start -->
                    <div
                        class="2xl:w-[40%] md:w-[50%] md:h-[980px] 2xl:h-[1300px] md:overflow-y-auto 2xl:overflow-y-auto pr-2 custom-scrollbar 2xl:mt-0 md:mt-0 mt-5 md:ml-0 2xl:ml-0 ml-[20px] sm:block hidden">

                        <div onclick="showMap('route1', event)"
                            class="tab-card cursor-pointer active bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 KT 5262
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 1</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onclick="showMap('route3', event)"
                            class="tab-card cursor-pointer bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 1164
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 3</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onclick="showMap('route5', event)"
                            class="tab-card cursor-pointer bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 1444
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 5</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onclick="showMap('route6', event)"
                            class="tab-card cursor-pointer bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 1445
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 6</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onclick="showMap('route7', event)"
                            class="tab-card cursor-pointer bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 7308
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 7</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div onclick="showMap('route8', event)"
                            class="tab-card cursor-pointer bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 7308
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 8</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div onclick="showMap('route9', event)"
                            class="tab-card cursor-pointer bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 7308
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 9</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Mobile Tab -->
                     <div
                        class="2xl:w-[40%] md:w-[50%] md:h-[980px] 2xl:h-[1300px] md:overflow-y-auto 2xl:overflow-y-auto pr-2 custom-scrollbar 2xl:mt-0 md:mt-0 mt-5 md:ml-0 2xl:ml-0 ml-[20px] sm:hidden">


                        <div onclick="showMap('mroute1', event)"
                            class="tab-card cursor-pointer active bg-white 2xl:p-[30px]  p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 KT 5262
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 1</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div onclick="showMap('mroute3', event)"
                            class="bg-white 2xl:p-[30px] tab-card cursor-pointer p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 1164
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 3</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div onclick="showMap('mroute5', event)"
                            class="bg-white 2xl:p-[30px] tab-card cursor-pointer p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 1444
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 5</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>
  
                        <div onclick="showMap('mroute6', event)"
                            class="bg-white 2xl:p-[30px] tab-card cursor-pointer p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 1445
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 6</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onclick="showMap('mroute7', event)"
                            class="bg-white 2xl:p-[30px] tab-card cursor-pointer p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 7308
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 7</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                         <div onclick="showMap('mroute8', event)"
                            class="bg-white 2xl:p-[30px] tab-card cursor-pointer p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 7308
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 8</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div onclick="showMap('mroute9', event)"
                            class="bg-white 2xl:p-[30px] tab-card cursor-pointer p-2 w-[100%] border-[2px] rounded-[12px] border-[#D6D6D6]  active:border-[#053B7A] shadow-lg mb-5 2xl:w-[90%] md:w-[100%] mx-auto  my-10 ">

                            <div class="flex items-center sm:justify-between gap-1">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">

                                    <svg width="40" height="40" viewBox="0 0 70 70" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="35" cy="35" r="35" fill="#ECF1F8" />
                                        <path
                                            d="M27.75 43.5C28.1478 43.5 28.5294 43.342 28.8107 43.0607C29.092 42.7794 29.25 42.3978 29.25 42C29.2572 41.9001 29.2572 41.7999 29.25 41.7C29.2345 41.6058 29.2041 41.5147 29.16 41.43C29.1265 41.3347 29.0812 41.244 29.025 41.16L28.845 40.935C28.7023 40.7984 28.5341 40.6914 28.35 40.62C28.0696 40.488 27.7552 40.4461 27.45 40.5L27.18 40.59L26.91 40.725C26.8322 40.7814 26.7571 40.8414 26.685 40.905L26.505 41.13C26.4488 41.214 26.4035 41.3047 26.37 41.4C26.3259 41.4847 26.2955 41.5758 26.28 41.67C26.2728 41.7699 26.2728 41.8701 26.28 41.97C26.28 42.3678 26.438 42.7494 26.7193 43.0307C27.0006 43.312 27.3822 43.47 27.78 43.47L27.75 43.5ZM39.75 43.5C40.1478 43.5 40.5294 43.342 40.8107 43.0607C41.092 42.7794 41.25 42.3978 41.25 42C41.2572 41.9001 41.2572 41.7999 41.25 41.7C41.2345 41.6058 41.2041 41.5147 41.16 41.43C41.1265 41.3347 41.0812 41.244 41.025 41.16L40.845 40.935C40.6983 40.8036 40.5311 40.6972 40.35 40.62C39.9848 40.47 39.5752 40.47 39.21 40.62C39.0289 40.6972 38.8617 40.8036 38.715 40.935L38.535 41.16C38.4788 41.244 38.4335 41.3347 38.4 41.43C38.3559 41.5147 38.3255 41.6058 38.31 41.7C38.3028 41.7999 38.3028 41.9001 38.31 42C38.3117 42.3935 38.4679 42.7706 38.745 43.05C39.0108 43.322 39.3701 43.4828 39.75 43.5ZM35.25 25.5H32.25C31.8522 25.5 31.4706 25.658 31.1893 25.9393C30.908 26.2206 30.75 26.6022 30.75 27C30.75 27.3978 30.908 27.7794 31.1893 28.0607C31.4706 28.342 31.8522 28.5 32.25 28.5H35.25C35.6478 28.5 36.0294 28.342 36.3107 28.0607C36.592 27.7794 36.75 27.3978 36.75 27C36.75 26.6022 36.592 26.2206 36.3107 25.9393C36.0294 25.658 35.6478 25.5 35.25 25.5ZM42.75 21H24.75C23.5565 21 22.4119 21.4741 21.568 22.318C20.7241 23.1619 20.25 24.3065 20.25 25.5V43.5C20.2526 44.4284 20.5423 45.3333 21.0794 46.0906C21.6165 46.8479 22.3747 47.4205 23.25 47.73V49.5C23.25 49.8978 23.408 50.2794 23.6893 50.5607C23.9706 50.842 24.3522 51 24.75 51C25.1478 51 25.5294 50.842 25.8107 50.5607C26.092 50.2794 26.25 49.8978 26.25 49.5V48H41.25V49.5C41.25 49.8978 41.408 50.2794 41.6893 50.5607C41.9706 50.842 42.3522 51 42.75 51C43.1478 51 43.5294 50.842 43.8107 50.5607C44.092 50.2794 44.25 49.8978 44.25 49.5V47.73C45.1253 47.4205 45.8835 46.8479 46.4206 46.0906C46.9577 45.3333 47.2474 44.4284 47.25 43.5V25.5C47.25 24.3065 46.7759 23.1619 45.932 22.318C45.0881 21.4741 43.9435 21 42.75 21ZM44.25 43.5C44.25 43.8978 44.092 44.2794 43.8107 44.5607C43.5294 44.842 43.1478 45 42.75 45H24.75C24.3522 45 23.9706 44.842 23.6893 44.5607C23.408 44.2794 23.25 43.8978 23.25 43.5V39H44.25V43.5ZM44.25 36H23.25V25.5C23.25 25.1022 23.408 24.7206 23.6893 24.4393C23.9706 24.158 24.3522 24 24.75 24H42.75C43.1478 24 43.5294 24.158 43.8107 24.4393C44.092 24.7206 44.25 25.1022 44.25 25.5V36Z"
                                            fill="#053B7A" />
                                    </svg>
                                    <p class="text-[#053B7A] text-[14px] font-[600]">
                                        UP 78 CT 7308
                                    </p>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <p class="text-[#053B7A] text-[14px] font-[600] px-2  rounded-full ">
                                        Route 9</p>

                                    <button> <svg width="30" height="30" viewBox="0 0 31 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="31" height="30" rx="15" fill="#ECF1F8" />
                                            <path
                                                d="M10.1665 18.3327V19.666C10.1665 20.0196 10.307 20.3588 10.557 20.6088C10.8071 20.8589 11.1462 20.9993 11.4998 20.9993H19.4998C19.8535 20.9993 20.1926 20.8589 20.4426 20.6088C20.6927 20.3588 20.8332 20.0196 20.8332 19.666V18.3327M12.1665 14.3327L15.4998 17.666M15.4998 17.666L18.8332 14.3327M15.4998 17.666V9.66602"
                                                stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg></button>

                                </div>

                            </div>
                            <div class="sm:p-[10px]  rounded-[8px] sm:mt-6 sm:mb-4 m-2 p-[5px]">
                                <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1743010358/Group_1000005303_tkqqn1.png"
                                    alt="">
                                <div class="flex items-center sm:justify-between gap-1 mt-1">
                                    <div class="text-start">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                    <div class="text-end">
                                        <p class="sm:text-[12px] text-[8px] font-[600] text-[#053B7A]">NOT PROVIDED
                                        </p>
                                        <p class="sm:text-[10px] text-[6px] text-[#828282]">NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                            <div class="py-3 px-2 rounded-[8px]  flex  justify-between">
                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>
                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13.1667 12.3333C13.1667 11.4493 13.5179 10.6014 14.143 9.97631C14.7681 9.35119 15.6159 9 16.5 9C17.3841 9 18.2319 9.35119 18.857 9.97631C19.4821 10.6014 19.8333 11.4493 19.8333 12.3333C19.8333 13.2174 19.4821 14.0652 18.857 14.6904C18.2319 15.3155 17.3841 15.6667 16.5 15.6667C15.6159 15.6667 14.7681 15.3155 14.143 14.6904C13.5179 14.0652 13.1667 13.2174 13.1667 12.3333ZM13.1667 17.3333C12.0616 17.3333 11.0018 17.7723 10.2204 18.5537C9.43899 19.3351 9 20.3949 9 21.5C9 22.163 9.26339 22.7989 9.73223 23.2678C10.2011 23.7366 10.837 24 11.5 24H21.5C22.163 24 22.7989 23.7366 23.2678 23.2678C23.7366 22.7989 24 22.163 24 21.5C24 20.3949 23.561 19.3351 22.7796 18.5537C21.9982 17.7723 20.9384 17.3333 19.8333 17.3333H13.1667Z"
                                                fill="#053B7A" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Driver
                                            Name</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">Contact
                                            Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>

                                <div class="flex items-center 2xl:gap-2 md:gap-1 gap-1">
                                    <div>

                                        <svg class="2xl:w-[40px] md:w-[32px] w-[20px] 2xl:h-[40px] md:h-[32px] h-[20px]"
                                            viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="16.5" cy="16.5" r="16" fill="white" />
                                            <path
                                                d="M12.465 15.5925C13.545 17.715 15.285 19.455 17.4075 20.535L19.0575 18.885C19.2675 18.675 19.56 18.615 19.8225 18.6975C20.6625 18.975 21.5625 19.125 22.5 19.125C22.6989 19.125 22.8897 19.204 23.0303 19.3447C23.171 19.4853 23.25 19.6761 23.25 19.875V22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25C19.1185 23.25 15.8755 21.9067 13.4844 19.5156C11.0933 17.1245 9.75 13.8815 9.75 10.5C9.75 10.3011 9.82902 10.1103 9.96967 9.96967C10.1103 9.82902 10.3011 9.75 10.5 9.75H13.125C13.3239 9.75 13.5147 9.82902 13.6553 9.96967C13.796 10.1103 13.875 10.3011 13.875 10.5C13.875 11.4375 14.025 12.3375 14.3025 13.1775C14.385 13.44 14.325 13.7325 14.115 13.9425L12.465 15.5925Z"
                                                fill="#053B7A" />
                                        </svg>

                                    </div>
                                    <div>
                                        <p class="2xl:text-[12px] md:text-[10px] text-[8px] text-[#828282]">
                                            Emergency Number</p>
                                        <p class="text-[#053B7A] 2xl:text-[10px] md:text-[8px] text-[6px] font-[600]">
                                            NOT PROVIDED</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <!-- Desktop -->
                    <div class="sm:w-[60%] sm:block hidden">
                        <div id="route1" class="tab-content  active">
                            <img src="assets/images/bus-route/route-1.webp"
                                alt="route-1">
                        </div>
                        <div id="route3" class="tab-content hidden ">
                            <img src="assets/images/bus-route/route-2.webp" alt="route-2">
                        </div>
                        <div id="route5" class="tab-content hidden ">
                            <img src="assets/images/bus-route/route-3.webp" alt="route-3">
                        </div>
                        <div id="route6" class="tab-content hidden ">
                            <img src="assets/images/bus-route/route-4.webp" alt="route-4">
                        </div>
                        <div id="route7" class="tab-content hidden ">
                            <img src="assets/images/bus-route/route-5.webp"
                                alt="route-7">
                        </div>
                        <div id="route8" class="tab-content hidden ">
                            <img src="assets/images/bus-route/route-6.webp"
                                alt="route-7">
                        </div>
                        <div id="route9" class="tab-content hidden ">
                            <img src="assets/images/bus-route/route-7.webp"
                                alt="route-7">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <style>
        .tab-card.active {
            border: 2px solid #053B7A;
            box-shadow: 0 0 10px rgba(5, 59, 122, 0.2);
        }
    </style>

    <!-- JavaScript to toggle maps -->
    <script>
        function showMap(tabId, event) {
            // Hide all map containers
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            // Show selected map
            document.getElementById(tabId).classList.remove('hidden');

            // Remove "active" class from all tab cards
            document.querySelectorAll('.tab-card').forEach(card => card.classList.remove('active'));
            // Add "active" to the clicked one
            event.currentTarget.classList.add('active');
        }
    </script>
    <?php include "includes/footer.php" ?>
    <?php include "includes/foot.php" ?>
  
</body>

</html>