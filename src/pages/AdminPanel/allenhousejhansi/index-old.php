<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi Lines| Home</title>
    <?php include "includes/head.php" ?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
</head>

<body style="overflow-x: hidden;">

    <style>
    ul.glide__slides {
        display: flex;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    ul.tabs {
        padding: 0px;
        list-style: none;
    }

    ul.tabs li {
        background: none;
        color: #053B7A;
        display: inline-block;
        padding: 10px 15px;
        cursor: pointer;

        background: #ededed;
    }

    @media (max-width: 640px) {
        ul.tabs li {
            font-size: 14px;
            padding: 8px;
            background: #ededed;
        }

    }


    ul.tabs li.current {
        background: #053B7A;
        color: #fff;
    }

    .tab-content {
        display: none;
        padding-top: 15px;
    }

    .tab-content.current {
        display: block !important;
    }

    .img-popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: transparent;
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999;
    }

    .popup-content {
        background: rgba(0, 0, 0, 0.85);
        border-radius: 12px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        animation: animatepopup 0.3s ease-in-out forwards;

        /* Desktop default */
        width: 50vw;
        height: 90vh;
    }

    .popup-content img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        opacity: 0;
        transform: translateY(-100px);
        animation: animatepopup 0.3s ease-in-out forwards;
        border-radius: 10px;
    }

    /* Responsive for mobile screens */
    @media (max-width: 640px) {
        .popup-content {
            width: 100vw;
            height: 50vh;
        }
    }

    .close-btn {
        width: 35px;
        height: 30px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .close-btn .bar {
        height: 4px;
        background: #fff;
        border-radius: 2px;
    }

    .close-btn .bar:nth-child(1) {
        transform: rotate(45deg);
    }

    .close-btn .bar:nth-child(2) {
        transform: translateY(-4px) rotate(-45deg);
    }

    .img-popup.opened {
        display: flex;
    }

    @keyframes animatepopup {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .mySwiper .swiper-pagination-bullet {
        background-color: #053B7A !important;
    }

    .mySwiper .swiper-pagination-bullet-active {
        background-color: #002A5B !important;
    }

    @media (max-width: 640px) {
        .swiper {
            box-shadow: none !important;
        }

        .swiper-slide {
            box-shadow: none !important;
        }

        .swiper-wrapper {
            margin: 0 !important;
        }
    }

    .clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        transition: max-height 0.3s ease;
    }

    .expanded {
        max-height: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        display: block;
        -webkit-line-clamp: unset;
        white-space: normal;
    }
    </style>

    <?php include "includes/header.php" ?>

    <div id="formOverlay"
        class="fixed inset-0 bg-gray-800 bg-opacity-60 flex items-center justify-center z-[99999] hidden">
        <!-- Custom Modal -->
        <div class="bg-white rounded-xl shadow-2xl p-6 w-full lg:max-w-xl md:max-w-lg sm:max-w-md relative">
            <!-- Dismiss Button -->
            <button id="dismissPopup"
                class="absolute top-4 right-4 text-gray-400 hover:text-red-400 text-2xl font-bold">&times;</button>
            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746704798/APS_KHL_1x1_ecfb0c.png" alt="">
        </div>
    </div>


    <div class="main relative">
        <div class="mx-3">

            <div class="relative w-full heroSlider opne-hide-circle">
                <div class="overflow-hidden" data-glide-el="track">
                    <ul
                        class="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
                        <li class="relative">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744447168/Website_Data_393x600_4_povwox.webp"
                                alt="Experience Excellence" class="sm:w-auto w-[100%] sm:hidden ">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744446563/Hero_Banner_Size_8000x2503px4_psdmng.webp"
                                alt="Experience Excellence" class="w-[100%] hidden sm:block">
                            <div class="absolute top-5 left-4 sm:top-[75px] sm:left-[180px] hidden">
                                <h2 class="text-gray-500 sm:text-4xl text-3xl font-[700]">
                                    Experience <br>
                                    <span class="text-[40px] sm:text-[60px] font-[700] text-blue-900">
                                        Excellence</span>
                                </h2>
                            </div>
                        </li>
                        <li class="relative">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744447168/Website_Data_393x600_1_ii0kak.webp"
                                alt="Experience Excellence" class="sm:w-auto w-[100%] sm:hidden ">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744446568/Hero_Banner_Size_8000x2503px1_kono4s.webp"
                                alt="Experience Excellence" class="w-[100%] hidden sm:block">
                            <div class="absolute top-5 left-4 sm:top-[75px] sm:left-[180px] hidden">
                                <h2 class="text-gray-500 sm:text-4xl text-3xl font-[700]">
                                    Experience <br>
                                    <span class="text-[40px] sm:text-[60px] font-[700] text-blue-900">
                                        Excellence</span>
                                </h2>
                            </div>
                        </li>
                        <li class="relative">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744447168/Website_Data_393x600_3_twnefh.webp"
                                alt="Experience Excellence" class="sm:w-auto w-[100%] sm:hidden ">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744446568/Hero_Banner_Size_8000x2503px3_kiyfsr.webp"
                                alt="Experience Excellence" class="w-[100%] hidden sm:block">
                            <div class="absolute top-5 left-4 sm:top-[75px] sm:left-[180px] hidden">
                                <h2 class="text-gray-500 sm:text-4xl text-3xl font-[700]">
                                    Experience <br>
                                    <span class="text-[40px] sm:text-[60px] font-[700] text-blue-900">
                                        Excellence</span>
                                </h2>
                            </div>
                        </li>
                        <li class="relative">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744447168/Website_Data_393x600_2_i8wju0.webp"
                                alt="Experience Excellence" class="sm:w-auto w-[100%] sm:hidden ">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1744446569/Hero_Banner_Size_8000x2503px2_tbbxik.webp"
                                alt="Experience Excellence" class="w-[100%] hidden sm:block">
                            <div class="absolute top-5 left-4 sm:top-[75px] sm:left-[180px] hidden">
                                <h2 class="text-gray-500 sm:text-4xl text-3xl font-[700]">
                                    Experience <br>
                                    <span class="text-[40px] sm:text-[60px] font-[700] text-blue-900">
                                        Excellence</span>
                                </h2>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="absolute left-0 sm:flex hidden items-center justify-between w-full h-0 px-4 top-1/2 hide-circle"
                    data-glide-el="controls">
                    <button
                        class="inline-flex items-center  justify-center hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                        data-glide-dir="<" aria-label="prev slide">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        class="inline-flex items-center  justify-center hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                        data-glide-dir=">" aria-label="next slide">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>

            </div>

            <div class="ralative hidden">
                <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730297499/uvr4w0120yj7kwuxipip.png"
                    alt="Experience Excellence" class="sm:w-auto w-[100%] sm:hidden ">
                <img src="assets/images/hero_bannner.jpg" alt="Experience Excellence" class="w-[100%] hidden sm:block">

                <div class="absolute top-5 sm:top-[50px] sm:left-[80px] left-[30px]">
                    <h2 class="text-gray-500 sm:text-4xl text-3xl font-[700]">
                        Experience <br>
                        <span class="text-[40px] sm:text-[60px] font-[700] text-blue-900">
                            Excellence</span>
                    </h2>
                </div>
            </div>
        </div>


        <div class="mt-5 sm:mt-[60px] 2xl:w-[1080px] lg:w-[824px] md:w-[567px] sm:w-[440px] sm:mx-auto sm:px-5 px-3">
            <div>
                <ul
                    class="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-2 items-center gap-5">
                    <li>
                        <a href="https://allenj.superhouseerp.com/RegistrationTransaction/OnlineRegistration"
                            target="_blank"
                            class="w-full h-[110px] sm:h-auto border border-[#053B7A] rounded-[12px] bg-[#EFF6FF] sm:p-[20px]  transition-all duration-300 transform hover:scale-[1.03] hover:[box-shadow:0_5px_0_rgba(5,59,122,0.4),0_10px_0_rgba(5,59,122,0.3),0_15px_0_rgba(5,59,122,0.2),0_20px_0_rgba(5,59,122,0.1),0_25px_0_rgba(5,59,122,0.05)] flex-col sm:flex-row flex justify-center items-center">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746186761/2370854348960_i8iqco.png"
                                alt=""
                                class="2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] lg:w-[45px] lg:h-[45px] sm:w-[45px] sm:h-[45px]  object-contain">
                            <span
                                class="font-[600] text-[13px] sm:text-[16px] text-[#053B7A] mt-2 sm:mt-0 sm:ml-2 text-center sm:text-left">
                                Online Registration
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="https://allenj.superhouseerp.com/Login/Login" target="_blank"
                            class="w-full h-[110px] sm:h-auto border border-[#053B7A] rounded-[12px] bg-[#EFF6FF] sm:p-[20px]  transition-all duration-300 transform hover:scale-[1.03] hover:[box-shadow:0_5px_0_rgba(5,59,122,0.4),0_10px_0_rgba(5,59,122,0.3),0_15px_0_rgba(5,59,122,0.2),0_20px_0_rgba(5,59,122,0.1),0_25px_0_rgba(5,59,122,0.05)] flex-col sm:flex-row flex justify-center items-center">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746186761/2370789102992_rbvkph.png"
                                alt=""
                                class="2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] lg:w-[45px] lg:h-[45px] sm:w-[45px] sm:h-[45px] object-contain">
                            <span
                                class="font-[600] text-[13px] sm:text-[16px] text-[#053B7A] mt-2 sm:mt-0 sm:ml-2 text-center sm:text-left">
                                Online Payment
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="admission-procedure.php"
                            class="w-full h-[110px] sm:h-auto border border-[#053B7A] rounded-[12px] bg-[#EFF6FF] sm:p-[20px]  transition-all duration-300 transform hover:scale-[1.03] hover:[box-shadow:0_5px_0_rgba(5,59,122,0.4),0_10px_0_rgba(5,59,122,0.3),0_15px_0_rgba(5,59,122,0.2),0_20px_0_rgba(5,59,122,0.1),0_25px_0_rgba(5,59,122,0.05)] flex-col sm:flex-row flex justify-center items-center">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746186762/2370736316896_f5vzil.png"
                                alt=""
                                class="2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] lg:w-[45px] lg:h-[45px] sm:w-[45px] sm:h-[45px] object-contain">
                            <span
                                class="font-[600] text-[13px] sm:text-[16px] text-[#053B7A] mt-2 sm:mt-0 sm:ml-2 text-center sm:text-left">
                                Admission Enquiry
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href=""
                            class="w-full h-[110px] sm:h-auto border border-[#053B7A] rounded-[12px] bg-[#EFF6FF] sm:p-[20px]  transition-all duration-300 transform hover:scale-[1.03] hover:[box-shadow:0_5px_0_rgba(5,59,122,0.4),0_10px_0_rgba(5,59,122,0.3),0_15px_0_rgba(5,59,122,0.2),0_20px_0_rgba(5,59,122,0.1),0_25px_0_rgba(5,59,122,0.05)] flex-col sm:flex-row flex justify-center items-center">
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746186762/Group_cf1pii.png"
                                alt=""
                                class="2xl:w-[60px] 2xl:h-[60px] xl:w-[60px] xl:h-[60px] lg:w-[45px] lg:h-[45px] sm:w-[45px] sm:h-[45px] object-contain">
                            <span
                                class="font-[600] text-[13px] sm:text-[16px] text-[#053B7A] mt-2 sm:mt-0 sm:ml-2 text-center sm:text-left">
                                Campus Tour
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

 

        <div
            class="sm:block hidden mt-10 sm:mt-[60px] 2xl:w-[1480px] lg:w-[1224px] md:w-[967px] sm:w-[840px] sm:mx-auto sm:px-5 px-3">
            <div class="grid sm:grid-cols-4 grid-cols-1 gap-5">
                <div class="overflow-hidden">
                    <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                        <div class="top-hide">
                            <div class="absolute z-10 p-3">
                                <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                    style="color: #B4D7FF;">
                                    Excellence <br>
                                    <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                        In Action</span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009862/Frame_1000007241_1_d3mkmx.png"
                                class="w-[100%]" alt="">
                        </div>
                        <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                            <div class="relative bottom-[16px]">
                                <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                    style="color: #B4D7FF;">
                                    Excellence <br>
                                    <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                        In Action</span>
                                </h2>
                                <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not confined to
                                    the
                                    classroom.</p>
                                <button class="w-[100%]"><a href="excellence-in-action.php"
                                        class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                        More

                                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542" stroke="#053B7A"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="overflow-hidden">
                    <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                        <div class="top-hide">
                            <div class="absolute z-10 p-3">
                                <h2
                                    class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] text-white/80">
                                    Celebrating <br>
                                    <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700]"
                                        style="color: #B4D7FF;">
                                        Excellence</span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009863/Frame_1000007239_1_txfafm.png"
                                class="w-[100%]" alt="">
                        </div>
                        <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                            <div class="relative bottom-[16px]">
                                <h2
                                    class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] text-white/80">
                                    Celebrating <br>
                                    <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700]"
                                        style="color: #B4D7FF;">
                                        Excellence</span>
                                </h2>
                                <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not confined to
                                    the
                                    classroom.</p>

                                <button class="w-[100%]"><a href=""><a href="celebrating-excellence.php"
                                            class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                            More

                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542"
                                                    stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>
                                        </a></a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden">
                    <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                        <div class="top-hide">
                            <div class="absolute z-10 p-3">
                                <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                    style="color: #B4D7FF;">
                                    Excellence <br>
                                    <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                        In the Spotlight</span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009862/Frame_1000007240_1_ctsocg.png"
                                class="w-[100%]" alt="">
                        </div>
                        <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                            <div class="relative bottom-[16px]">
                                <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                    style="color: #B4D7FF;">
                                    Excellence <br>
                                    <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                        In the Spotlight</span>
                                </h2>
                                <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not confined to
                                    the
                                    classroom.</p>
                                <button class="w-[100%]"><a href="excellence-in-spotlight.php"
                                        class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                        More

                                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542" stroke="#053B7A"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="overflow-hidden">
                    <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                        <div class="top-hide">
                            <div class="absolute z-10 p-3">
                                <h2 class=" text-[22px] 2xl:text-[22px] lg:text-[16px] leading-8 font-[700] "
                                    style="color: #B4D7FF;">
                                    Embark on a Journey of<br>
                                    <span class="text-[35px] 2xl:text-[35px] lg:text-[24px] font-[700] text-white/80">
                                        Excellence</span>
                                </h2>
                            </div>
                        </div>
                        <div>
                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009861/Frame_1000007242_1_mdmcoc.png"
                                class="w-[100%]" alt="">
                        </div>
                        <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                            <div class="relative bottom-[16px]">
                                <h2 class=" text-[22px] 2xl:text-[22px] lg:text-[16px] leading-8 font-[700] "
                                    style="color: #B4D7FF;">
                                    Embark on a Journey of<br>
                                    <span class="text-[35px] 2xl:text-[35px] lg:text-[24px] font-[700] text-white/80">
                                        Excellence</span>
                                </h2>
                                <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not confined to
                                    the
                                    classroom.</p>
                                <button class="w-[100%]"><a href="embark-on-journey.php"
                                        class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                        More

                                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                stroke-width="1.5" stroke-linecap="round" />
                                            <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542" stroke="#053B7A"
                                                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="block sm:hidden mt-10 px-0">
            <div class="swiper mySwiper w-full">
                <div class="swiper-wrapper">
                    <!-- SLIDE 1 -->
                    <div class="swiper-slide px-3">
                        <div class="overflow-hidden">
                            <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                                <div class="top-hide">
                                    <div class="absolute z-10 p-3">
                                        <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                            style="color: #B4D7FF;">
                                            Excellence <br>
                                            <span
                                                class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                                In Action</span>
                                        </h2>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009862/Frame_1000007241_1_d3mkmx.png"
                                        class="w-[100%]" alt="">
                                </div>
                                <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                                    <div class="relative bottom-[16px]">
                                        <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                            style="color: #B4D7FF;">
                                            Excellence <br>
                                            <span
                                                class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                                In Action</span>
                                        </h2>
                                        <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not
                                            confined to
                                            the
                                            classroom.</p>
                                        <button class="w-[100%]"><a href=""
                                                class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                                More

                                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                        stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542"
                                                        stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg></a>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SLIDE 2 -->
                    <div class="swiper-slide px-3">
                        <div class="overflow-hidden">
                            <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                                <div class="top-hide">
                                    <div class="absolute z-10 p-3">
                                        <h2
                                            class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] text-white/80">
                                            Celebrating <br>
                                            <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700]"
                                                style="color: #B4D7FF;">
                                                Excellence</span>
                                        </h2>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009863/Frame_1000007239_1_txfafm.png"
                                        class="w-[100%]" alt="">
                                </div>
                                <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                                    <div class="relative bottom-[16px]">
                                        <h2
                                            class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] text-white/80">
                                            Celebrating <br>
                                            <span class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700]"
                                                style="color: #B4D7FF;">
                                                Excellence</span>
                                        </h2>
                                        <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not
                                            confined to
                                            the
                                            classroom.</p>
                                        <button class="w-[100%]"><a href=""
                                                class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                                More

                                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                        stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542"
                                                        stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg></a>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SLIDE 3 -->
                    <div class="swiper-slide px-3">
                        <div class="overflow-hidden">
                            <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                                <div class="top-hide">
                                    <div class="absolute z-10 p-3">
                                        <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                            style="color: #B4D7FF;">
                                            Excellence <br>
                                            <span
                                                class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                                In the Spotlight</span>
                                        </h2>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009862/Frame_1000007240_1_ctsocg.png"
                                        class="w-[100%]" alt="">
                                </div>
                                <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                                    <div class="relative bottom-[16px]">
                                        <h2 class="text-[35px] 2xl:text-[35px] lg:text-[24px] leading-8 font-[700] "
                                            style="color: #B4D7FF;">
                                            Excellence <br>
                                            <span
                                                class="text-[22px] 2xl:text-[22px] lg:text-[16px] font-[700] text-white/80">
                                                In the Spotlight</span>
                                        </h2>
                                        <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not
                                            confined to
                                            the
                                            classroom.</p>
                                        <button class="w-[100%]"><a href=""
                                                class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                                More

                                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                        stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542"
                                                        stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg></a>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- SLIDE 4 -->
                    <div class="swiper-slide px-3">
                        <div class="overflow-hidden">
                            <div class="relative w-full card-top-peudo rounded-[8px] cursor-pointer">
                                <div class="top-hide">
                                    <div class="absolute z-10 p-3">
                                        <h2 class=" text-[22px] 2xl:text-[22px] lg:text-[16px] leading-8 font-[700] "
                                            style="color: #B4D7FF;">
                                            Embark on a Journey of<br>
                                            <span
                                                class="text-[35px] 2xl:text-[35px] lg:text-[24px] font-[700] text-white/80">
                                                Excellence</span>
                                        </h2>
                                    </div>
                                </div>
                                <div>
                                    <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746009861/Frame_1000007242_1_mdmcoc.png"
                                        class="w-[100%]" alt="">
                                </div>
                                <div class="absolute bottom-0 px-6 z-10 bottom-card-content bottom-open">
                                    <div class="relative bottom-[16px]">
                                        <h2 class=" text-[22px] 2xl:text-[22px] lg:text-[16px] leading-8 font-[700] "
                                            style="color: #B4D7FF;">
                                            Embark on a Journey of<br>
                                            <span
                                                class="text-[35px] 2xl:text-[35px] lg:text-[24px] font-[700] text-white/80">
                                                Excellence</span>
                                        </h2>
                                        <p class="mt-3 text-white">At Allenhouse, the pursuit of excellence is not
                                            confined to
                                            the
                                            classroom.</p>
                                        <button class="w-[100%]"><a href=""
                                                class=" rounded-full text-blue-main p-2 font-[600] bg-white mt-5 flex justify-center items-center gap-2">Read
                                                More

                                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.929932 5.16199L12.6731 5.16199" stroke="#053B7A"
                                                        stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M9.42798 1.39856L13.1917 5.16174L9.42798 8.92542"
                                                        stroke="#053B7A" stroke-width="1.5" stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg></a>

                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-pagination  mt-4"></div>
            </div>
        </div>

 

        <div style="background-image: url('https://res.cloudinary.com/dj7wogsju/image/upload/v1745924133/Rectangle_7157_j4cj0a.png');  background-repeat: no-repeat;"
            class="bg-cover">
            <div
                class="mt-10 sm:mt-8 sm:py-16 py-4 2xl:w-[880px] lg:w-[624px] md:w-[467px] sm:w-[340px] sm:mx-auto mx-3">
                <div class="text-center">
                    <h2 class="text-[32px] font-[700] leading-9 text-blue-main  relative">The Allenhouse Approach
                    </h2>
                    <p class="mt-4 text-[#808080] text-[18px]">
                        We aim to prepare students for a future full of possibilities by empowering them to excel academically, socially and emotionally. We believe that an education that integrates Indian culture and values with a global perspective, will shape students into compassionate global citizens.
                    </p>
                </div>
            </div>
        </div>
    </div>



    <div class="mt-10">

        <div class="sm:bg-[#053b7a] bg-[#002a5b] text-center pt-5 sm:pb-2 pb-5">
            <h2 class="text-[32px] font-[700] leading-9 text-white  relative text-center pb-5 ">Legacy of Excellence
            </h2>
        </div>
        <div class="sm:py-8 py-5 bg-feature">
            <div class="grid grid-cols-1 sm:grid-cols-5 ">
                <div class="flex justify-center gap-4 items-center sm:py-0 py-6">
                    <span class="sm:w-[50%] w-[35%] inline-block "><img src="assets/images/icons/thump.png" alt="Years"
                            class="w-[50px] 2xl:w-[50px] lg:w-[45px] md:w-[40px]" style="margin: 0 0 0 auto;"></span>
                    <div class="inline-block w-[50%]">
                        <h2 class="text-white font-[700] text-[35px] 2xl:text-[30px] lg:text-[20px] md:text-[20px] 
                        ">27+</h2>
                        <h3 class="text-white font-[700]  text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px] ">
                            Years</h3>
                    </div>
                </div>
                <div class="flex justify-center gap-4 items-center sm:pb-0 pb-10">
                    <span class="sm:w-[50%] w-[35%] inline-block "><img src="assets/images/icons/campus.png"
                            alt="Campus" class="w-[50px] 2xl:w-[50px] lg:w-[45px] md:w-[40px]"
                            style="margin: 0 0 0 auto;"></span>
                    <div class="inline-block w-[50%]">
                        <h2 class="text-white font-[700] text-[35px] 2xl:text-[30px] lg:text-[20px] md:text-[20px] 
                        ">25+</h2>
                        <h3 class="text-white font-[700]  text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px]">
                            Campus</h3>
                    </div>
                </div>
                <div class="flex justify-center gap-4 items-center sm:pb-0 pb-10">
                    <span class="sm:w-[50%] w-[35%] inline-block "><img src="assets/images/icons/students.png"
                            alt="Students" class="w-[50px] 2xl:w-[50px] lg:w-[45px] md:w-[40px]"
                            style="margin: 0 0 0 auto;"></span>
                    <div class="inline-block w-[50%]">
                        <h2 class="text-white font-[700] text-[35px] 2xl:text-[30px] lg:text-[20px] md:text-[20px] 
                        ">30,000+</h2>
                        <h3 class="text-white font-[700]  text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px]">
                            Students</h3>
                    </div>
                </div>
                <div class="flex justify-center gap-4 items-center sm:pb-0 pb-10">
                    <span class="sm:w-[50%] w-[35%] inline-block "><img src="assets/images/icons/staff.png" alt="Staff"
                            class="w-[50px] 2xl:w-[50px] lg:w-[45px] md:w-[40px]" style="margin: 0 0 0 auto;"></span>
                    <div class="inline-block w-[50%]">
                        <h2 class="text-white font-[700] text-[35px] 2xl:text-[30px] lg:text-[20px] md:text-[20px] 
                        ">1850+</h2>
                        <h3 class="text-white font-[700]  text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px]">
                            Staff</h3>
                    </div>
                </div>
                <div class="flex justify-center gap-4 items-center ">
                    <span class="sm:w-[50%] w-[35%] inline-block "><img src="assets/images/icons/allumi.png"
                            alt="Alumni" class="w-[50px] 2xl:w-[50px] lg:w-[45px] md:w-[40px]"
                            style="margin: 0 0 0 auto;"></span>
                    <div class="inline-block w-[50%]">
                        <h2 class="text-white font-[700] text-[35px] 2xl:text-[30px] lg:text-[20px] md:text-[20px] ">
                            15000+</h2>
                        <h3 class="text-white font-[700]  text-[22px] 2xl:text-[20px] lg:text-[15px] md:text-[15px]">
                            Alumni</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>


    <div class=" 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-5 mt-10">
        <div class="text-center">
            <h2 class="text-[32px] font-[700] leading-8 text-blue-main">Our Philosophy <span class="sm:hidden">
                    <br></span> Centres Around
            </h2>
        </div>
        <div class="relative w-full glide-0222 mt-5 opne-hide-circle">
            <div class="overflow-hidden" data-glide-el="track">
                <ul
                    class="relative w-full overflow-hidden  p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
                    <li>
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1745937461/Mask_group_5_pddki6.png"
                            alt="A Multidimensional
                                Approach to Education" class="w-[100%]">
                        <div class="mt-4">
                            <h2 class="text-[18px] font-[700] leading-5 text-blue-main">A Multidimensional
                                Approach to Education</h2>
                            <p class="text-gray-600 text-[16px] mt-1">Going beyond traditional academic boundaries to
                                nurture well-rounded individuals</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1745937359/Mask_group_3_s9psew.png"
                            alt="Holistic Development" class="w-[100%]">
                        <div class="mt-4">
                            <h2 class="text-[18px] font-[700] leading-5 text-blue-main">Holistic Development</h2>
                            <p class="text-gray-600 text-[16px] mt-1">Emphasis on the spiritual, moral, intellectual,
                                social, emotional and physical growth of each student</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1745937360/Mask_group_1_cewapj.png"
                            alt="Innovative Curriculum" class="w-[100%]">
                        <div class="mt-4">
                            <h2 class="text-[18px] font-[700] leading-5 text-blue-main">Innovative Curriculum</h2>
                            <p class="text-gray-600 text-[16px] mt-1">A blend of advanced academics, creative
                                co-curricular activities and practical life skills; focus on emerging technologies,
                                entrepreneurship and global awareness</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1745937359/Mask_group_2_ayq7gj.png"
                            alt="Supportive Learning Environment" class="w-[100%]">
                        <div class="mt-4">
                            <h2 class="text-[18px] font-[700] leading-5 text-blue-main">Supportive Learning Environment
                            </h2>
                            <p class="text-gray-600 text-[16px] mt-1">Fostering a culture of compassion, collaboration
                                and courage; encouraging students to think critically, explore their passions and make a
                                positive impact</p>
                        </div>
                    </li>
                    <li>
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1747388958/Untitled-1_3_1_pvj8qq.jpg"
                            alt="Experiential Learning" class="w-[100%]">
                        <div class="mt-4">
                            <h2 class="text-[18px] font-[700] leading-5 text-blue-main">Experiential Learning
                            </h2>
                            <p class="text-gray-600 text-[16px] mt-1">Hands-on projects, field trips, and real-world
                                applications to complement classroom instruction; opportunities for students to develop
                                leadership, problem-solving, and communication skills</p>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Controls -->
            <div class="absolute left-0 sm:flex hidden items-center justify-between w-full h-0 px-4 top-1/2 hide-circle"
                data-glide-el="controls">
                <button
                    class="inline-flex items-center relative sm:right-[66px] justify-center hidden hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                    data-glide-dir="<" aria-label="prev slide">
                    <i class="fa-solid fa-angle-left"></i>
                </button>
                <button
                    class="inline-flex items-center relative sm:left-[66px] justify-center hidden hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                    data-glide-dir=">" aria-label="next slide">
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
            <div class="absolute bottom-[-20px] flex items-center justify-center w-full gap-2"
                data-glide-el="controls[nav]">
                <button class=" group" data-glide-dir="=0" aria-label="goto slide 1"><span
                        class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-200 focus:outline-none"></span></button>
                <button class=" group" data-glide-dir="=1" aria-label="goto slide 2"><span
                        class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-200 focus:outline-non2"></span></button>
                <button class=" group" data-glide-dir="=2" aria-label="goto slide 3"><span
                        class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-200 focus:outline-none"></span></button>
                <button class=" group" data-glide-dir="=3" aria-label="goto slide 4"><span
                        class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-200 focus:outline-none"></span></button>
            </div>
        </div>
    </div>
    <style>
    .academic-box {
        border-radius: 12px;
        transition: all 0.3s ease;
    }

    .academic-box:hover {
        box-shadow: 5px 5px 15px rgba(17, 39, 89, 0.8);
        /* More visible shadow */
        border-radius: 12px;
    }
    </style>

    <div style="background-image: url('https://res.cloudinary.com/dj7wogsju/image/upload/v1745924133/Rectangle_7157_j4cj0a.png');  background-repeat: no-repeat;"
        class="bg-cover  sm:mt-20 mt-10 pt-5 pb-16">
        <h2 class="text-[28px] sm:text-[30px] font-[700] leading-10  text-blue-main relative text-center"> Future Ready
            Skills </h2>
        <div class="container mx-auto">

            <ul class="grid sm:grid-cols-3 grid-cols-2 sm:gap-5 gap-3 sm:mt-5 mt-10 sm:mx-[80px] sm:px-0 px-3">
                <li class="mx-auto"><a href="robotics.php" class=""><img
                            class="border-[1px] border-blue-main  academic-box sm:w-[80%] w-[]"
                            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746711563/Group_1000005365_sgm6iv.png"
                            alt=""></a></li>
                <li class="mx-auto"><a href="sports.php" class=""><img
                            class="border-[1px] border-blue-main  academic-box sm:w-[80%] w-[]"
                            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746711563/Group_1000005364_j4hak2.png"
                            alt=""></a></li>
                <li class="mx-auto"><a href="animation-master-class.php" class=""><img
                            class="border-[1px] border-blue-main  academic-box sm:w-[80%] w-[]"
                            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746711563/Group_1000005366_yejepc.png"
                            alt=""></a></li>
                <li class="mx-auto"><a href="oluxi-smart-class.php" class=""><img
                            class="border-[1px] border-blue-main  academic-box sm:w-[80%] w-[]"
                            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746711563/Group_1000005368_xobn3b.png"
                            alt=""></a></li>
                <li class="mx-auto"><a href="coding.php" class=""><img
                            class="border-[1px] border-blue-main  academic-box sm:w-[80%] w-[]"
                            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746711563/Group_1000005367_bpuyzy.png"
                            alt=""></a></li>
                <li class="mx-auto"><a href="" class=""><img
                            class="border-[1px] border-blue-main  academic-box sm:w-[80%] w-[]"
                            src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746711563/Group_1000005369_j7ftwt.png"
                            alt=""></a></li>
            </ul>
        </div>
    </div>

    <div class="sm:mt-[100px] mt-10">
        <div class="2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto ">

            <div class="relative ">
                <div class="o-video mx-auto">
                    <iframe width="560" height="315"
                        src="https://www.youtube.com/embed/1Vzi5P3yE7c?autoplay=1&mute=1&loop=1&playlist=1Vzi5P3yE7c"
                        frameborder="0" allow="autoplay;" allowfullscreen>
                    </iframe>
                </div>
            </div>
        </div>

    </div>
    </div>


    <div class="sm:mt-12 mt-8 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto relative">
        <div class="absolute top-[-235px] -z-50">
            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307222/Group_53_s3txur.png"
                class="w-[100%] h-[100vh] object-top" alt="">
        </div>
        <div class="mx-5">
            <div class="text-center">
                <h2 class="text-[30px] font-[700] leading-10 text-blue-main relative">Our
                    Campuses</h2>
            </div>

            <div class="relative w-full glide-0333 mt-5 opne-hide-circle">
                <div class="overflow-hidden" data-glide-el="track">
                    <ul
                        class="relative w-full overflow-hidden p-0 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
                        <li class="bg-white mb-5 rounded-[10px] "
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/Allenhouse-Rooma.jpg" alt="APS Rooma"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allenhouse Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Kulgaon road, National Highway 2, Chakeri Ward, Kanpur, Uttar Pradesh 208008">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Rooma, Kanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:919235400468"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 9235400468</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">
                                        <a href="https://allenhouserooma.com/Site/Home/40000001_40000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>
 
                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/Allenhouse-Panki.jpg" alt="APS Panki"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allenhouse Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]" alt="884 B Block, Panki Rd, MIG,
                                                Ratanpur, Colony, Panki, Kanpur, Uttar Pradesh 208020">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Panki, Kanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:918853075656"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 8853075656</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">
                                        <a href="https://allenhousepanki.com/Site/Home/20000001_20000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                            <img src="assets/images/Allenhouse-Khalasi-Lines.jpg" alt="Allenhouse Khalasi Lines"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allenhouse Public School Khalasi Lines </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]" alt="khalasi
                                                lines, kanpur">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">khalasi
                                                lines, kanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:916390907001"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 6390907001</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">
                                        <a href="http://www.allenhousekhalasiline.com/Site/Home/200000001_200000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website
                                             <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                       
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                            <img src="assets/images/Allenhouse-Lucknow.jpg" alt="APS  Lucknow"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allenhouse Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Allenhouse Public School Plot No. HS01, Sector 6C, Vrindavan Yojna Near Teli Bagh, Lucknow">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Vrindavan Yojna, Lucknow
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a class="text-gray-500 capitalize text-[16px] w-[85%]">+91 9026624548 </a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="https://allenhouselucknow.com/Site/Home/210000001_210000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/Allenhouse-Ghaziabad.jpg" alt="APS Ghaziabad"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allenhouse Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Allenhouse Public School Sector 2A, Vasundhara, Ghaziabad, Uttar Pradesh, 201012">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Vasundhara, Ghaziabad
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:916390907005"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 6390907005</a>

                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="https://allenhouseghaziabad.com/Site/Home/70000001_70000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/Allenhouse-Agra.jpg" alt="APS Agra" class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allenhouse Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Shastripuram, Agra
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="918090155519"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 8090155519</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="https://allenhouseagra.com"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <!-- Allen Kids -->
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/AK-Kakadeo.jpg" alt="AkidKakdeo"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allen
                                    Kids
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Kakadeo, Kanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="917042676336"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 7042676336</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="https://allenhouseagra.com"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">
                            <img src="assets/images/school/AK-Swaroop-Nagar.jpg" alt="AkidSwaropnagar"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allen Kids </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Swaroop Nagar, Kanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="917800661660"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 7800661660
                                            </a> </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="https://allenhouseagra.com"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1736184773/Allen_kids_Mukherji_Vihar_w7bzik.jpg"
                                alt="Akid MukherjiVihar" class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allen Kids
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Mukherji Vihar, Kanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:916390907030"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 6390907030
                                            </a></p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="https://allenhouseagra.com"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/AK-Bareilly.jpg" alt="Akid Bareilly"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Allen
                                    Kids
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Veer Savarkar Nagar,
                                            Bareilly
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="919720010109"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 9720010109
                                            </a> </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="https://allenhouseagra.com"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <!-- DPS -->
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-Kalyanpur.jpg" alt="DPS Kalyanpur"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Kalyanpur, Kanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:919044055605"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 9044055605
                                            </a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpskalyanpur.com/Site/Home/160000001_160000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-Unnao.jpg" alt="DPS Unnao"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Akrampur, Unnao
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="919839513636"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 9839513636</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpsunnao.com/Site/Home/120000001_120000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-Indira-Nagar.jpg" alt="DPS Indira Nagar"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Indira Nagar, Lucknow
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:915222717293"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 5222717293</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpsindiranagar.com/Site/Home/230000001_230000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-ldeco.jpg" alt="DPS Eldeco"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi
                                    Public School</h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Eldeco Colony, Lucknow
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:917522002115"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 7522002115</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpseldeco.com/Site/Home/150000001_150000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>

                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-Gomti-Nagar.jpg" alt="DPS Gomti Nagar Extension"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Gomti Nagar Extn.,
                                            Lucknow
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:917275036866"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 7275036866</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpsgomtinagar.com/Site/Home/250000001_250000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-JANKIPURAm.jpg" alt="DPS Jankipuram"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Jankipuram Extn.,
                                            Lucknow
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:918737040977"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 8737040977</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpsjankipuram.com/Site/Home/240000001_240000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-Amrapli-Yojna.jpg" alt="DPS Amrapali"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Amrapali Yojna, Dubagga,
                                            Lucknow
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:918707354579"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 8707354579</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpsamrapali.com/Site/Home/270000001_270000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPSBareilly.jpg" alt="DPS Bareilly"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Parsakhera, Bareilly
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:917081444424"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 7081444424</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpsbareilly.com/Site/Home/90000001_90000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-Saharanpur.jpg" alt="DPS Saharanpur"
                                class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Delhi Road, Saharanpur
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:917088100160"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 7088100160</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpssaharanpur.com/Site/Home/140000001_140000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>

                        </li>
                        <li class="bg-white mb-5 rounded-[10px]"
                            style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;">

                            <img src="assets/images/school/DPS-Gomti-Nagar-Jr-Branch.jpg"
                                alt="DPS Gomti Nagar Junior Branch" class="w-[100%] rounded-[10px]">
                            <div class="mx-3 mt-4 mb-5">
                                <h2 class="text-[22px] font-[700] leading-8 text-blue-main">Delhi Public School Jr.
                                </h2>
                                <div class="mt-3">
                                    <div class="flex gap-3">
                                        <span class="mt-1">
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307962/fi-rs-map-marker_znpaah.png"
                                                class="w-[20px] h-[20px]"
                                                alt="Plot No. C2, Sector-C2, Shastripuram, Agra, Uttar Pradesh-282007">
                                        </span>
                                        <p class="text-gray-500 capitalize text-[16px] w-[85%]">Gomti Nagar Vistar,
                                            Lucknow
                                        </p>
                                    </div>
                                    <div class="flex gap-3 mt-2 items-center">
                                        <span>
                                            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307956/Vector_6_niwc9i.png"
                                                class="w-[20px] h-[20px]" alt="2652 255 5468, 2652 255 5468">
                                        </span>
                                        <p><a href="tel:919151112813"
                                                class="text-gray-500 capitalize text-[16px] w-[85%]">+91 9151112813</a>
                                        </p>
                                    </div>
                                    <button class="w-full rounded-full text-white bg-blue-main mt-5">

                                        <a href="http://www.dpsgomtinagar.com/Site/ContactUsNew/250000001_250000001_Home"
                                            class="flex items-center gap-2 p-2 justify-center">
                                            Visit Website

                                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.36914 4.71826L13.1123 4.71826" stroke="white"
                                                    stroke-width="1.5" stroke-linecap="round" />
                                                <path d="M9.86719 0.955078L13.6309 4.71826L9.86719 8.48193"
                                                    stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </svg>

                                        </a>
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- Controls -->
                <div class="absolute left-0 sm:flex hidden items-center justify-between w-full h-0 px-4 top-1/2 hide-circle"
                    data-glide-el="controls">
                    <button
                        class="inline-flex items-center relative sm:right-[66px] justify-center hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                        data-glide-dir="<" aria-label="prev slide">
                        <i class="fa-solid fa-angle-left"></i>
                    </button>
                    <button
                        class="inline-flex items-center relative sm:left-[66px] justify-center hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                        data-glide-dir=">" aria-label="next slide">
                        <i class="fa-solid fa-angle-right"></i>
                    </button>
                </div>
                <div class="absolute bottom-[-20px] flex items-center justify-center w-full gap-2"
                    data-glide-el="controls[nav]">
                    <button class=" group" data-glide-dir="=0" aria-label="goto slide 1"><span
                            class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-none"></span></button>
                    <button class=" group" data-glide-dir="=1" aria-label="goto slide 2"><span
                            class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-non2"></span></button>
                    <button class=" group" data-glide-dir="=2" aria-label="goto slide 3"><span
                            class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-none"></span></button>
                    <button class=" group" data-glide-dir="=3" aria-label="goto slide 4"><span
                            class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-none"></span></button>
                </div>
            </div>
        </div>
    </div>

    <style>
    .swiper-container {
        width: 110%;
        height: auto;
        margin: 0 -88px;
        padding: 40px 0;
    }

    .swiper-slide {
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        transform: perspective(1000px) rotateX(2deg) !important;
        animation: curveWave 4s ease-in-out infinite alternate;
    }

    .swiper-slide img {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .swiper-wrapper {
        height: auto !important
    }

    @keyframes curveWave {
        0% {
            transform: perspective(800px) rotateX(2deg) rotateY(-2deg);
        }

        100% {
            transform: perspective(800px) rotateX(-2deg) rotateY(2deg);
        }
    }
    </style>


    <div class="relative sm:py-6 py-5 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto mt-10">
        <div class="absolute top-[-235px] -z-50">
            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307222/Group_53_s3txur.png"
                class="w-[100%] h-[100vh] object-top" alt="">
        </div>

        <div class="text-center">
            <h2 class="sm:text-[30px] text-[28px] font-[700] leading-10 text-blue-main relative">Life at Allenhouse</h2>
        </div>

        <div class="mx-5 mt-7">
            <div class="sm:flex gap-3">
                <div class="sm:w-[33.33%]">
                    <div>
                        <a><img src="assets/images/g8.png" alt="student 1"
                                class="popup-img rounded-[10px] mb-2 object-cover hover:scale-90 transition delay-300"
                                style="width:100%"></a>
                    </div>
                    <div class="mt-3">
                        <a><img src="assets/images/g9.png" alt="student 2"
                                class="popup-img rounded-[10px] mb-2 object-cover hover:scale-90 transition delay-300"
                                style="width:100%"></a>
                    </div>
                </div>

                <div class="sm:w-[33.33%]">
                    <div>
                        <a><img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1734084995/g6_1_1_sqgcas.png"
                                alt="student 3"
                                class="popup-img rounded-[10px] object-cover hover:scale-90 transition delay-300"
                                style="width:100%"></a>
                    </div>
                </div>

                <div class="w-[33.33%] sm:block hidden">
                    <div>
                        <a><img src="assets/images/g10.png" alt="student 4"
                                class="popup-img rounded-[10px] mb-2 hover:scale-90 transition delay-300"
                                style="width:100%"></a>
                    </div>
                    <div class="mt-3">
                        <a><img src="assets/images/g11.png" alt="student 5"
                                class="popup-img rounded-[10px] mb-2 hover:scale-90 transition delay-300"
                                style="width:100%"></a>
                    </div>
                    <div>
                        <a><img src="assets/images/g12.png" alt="student 6"
                                class="popup-img rounded-[10px] mb-2 sm:hidden hover:scale-90 transition delay-300"
                                style="width:100%"></a>
                    </div>
                </div>
            </div>

            <div class="mt-[6px] sm:flex gap-3">
                <div>
                    <a><img src="assets/images/g13.png" alt="student 7"
                            class="popup-img rounded-[10px] mb-2 hover:scale-90 transition delay-300"
                            style="width:100%"></a>
                </div>
                <div>
                    <a><img src="assets/images/g14.png" alt="student 8"
                            class="popup-img rounded-[10px] mb-2 hover:scale-90 transition delay-300"
                            style="width:100%"></a>
                </div>
            </div>
        </div>
    </div>

    <div class="img-popup">
        <div class="popup-content">
            <img src="" alt="Popup Image">
            <div class="close-btn">
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </div>


    <div class="relative sm:mt-20 mt-10" id="testimonials">
        <div class="absolute top-[-235px] -z-50">
            <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307222/Group_53_s3txur.png"
                class="w-[100%] h-[100vh] object-top" alt="Testimonial Shape">
        </div>
        <div class="2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 mx-3 px-3">
            <div class="text-center">
                <h2 class="text-[28px] sm:text-[30px] font-[700] leading-10 text-blue-main relative">Testimonials</h2>
            </div>
            <div class="relative  sm:pt-5 pt-2 hidden">

                <ul class="tabs 2xl:ml-[432px] md:ml-[298px]  ml-[6px]">
                    <li class="tab-link current" data-tab="tab-1">Image Testimonials</li>
                    <li class="tab-link" data-tab="tab-2">Video Testimonials</li>
                </ul>

                <div id="tab-1" class="tab-content current Testimonials">
                    <div class=" overflow-hidden mt-1" data-glide-el="track">
                        <ul class="glide__slides">

                            <li
                                class=" sm:flex items-start gap-2 mb-4 border-[1px] border-gray-300 p-3 rounded-[8px] bg-blue-main">
                                <div class="text-center sm:w-[30%] w-[90%]">
                                    <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746609841/Allen_kids_homepage_-1_cbenst.webp"
                                        alt="Proud parents of Rozmin Inam"
                                        class="mb-2 mx-auto rounded-[10px] w-[130px] h-[130px]">
                                    <h2 class="font-[700] text-[16px] text-gray-100">Proud parents of Rozmin Inam Class
                                        1-C</h2>
                                </div>
                                <div class="sm:w-[50%] w-[90%] sm:mt-0 mt-3 sm:text-left text-center ">
                                    <p
                                        class="testimonial-text text-[16px] text-gray-200 text-center sm:text-left clamp-2">
                                        As parents, our experience at Allen House has been exceptional. Words cannot
                                        capture
                                        our appreciation for the class teacher, Sadhvi Ma’am, for all the love, care,
                                        and
                                        dedication she puts into teaching our child. We are overwhelmed with our child’s
                                        performance and growth as a learner.
                                    </p>
                                    <button class="moreless-button font-[600] text-white text-sm mt-1">Read
                                        more...</button>
                                </div>
                            </li>

                            <li
                                class=" sm:flex items-start gap-2 mb-4 border-[1px] border-gray-300 p-3 rounded-[8px] bg-blue-main">
                                <div class="text-center sm:w-[30%] w-[90%]">
                                    <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746609841/Allen_kids_homepage_-2_ogbkp7.webp"
                                        alt="Hadiya Fatima" class="mb-2 mx-auto rounded-[10px] w-[130px] h-[130px] ">
                                    <h2 class="font-[700] text-[16px] text-gray-100">Mother of Eisa Nasir <br>Class I-C
                                    </h2>
                                </div>
                                <div class="sm:w-[60%] w-[90%] sm:mt-0 mt-3  sm:text-left text-center">
                                    <p
                                        class="testimonial-text text-[16px] text-gray-200 text-center sm:text-left clamp-2">
                                        I extend my heartfelt gratitude to the management of Allenhouse School for
                                        providing
                                        an incredible learning experience to my son. I truly appreciate the teachers'
                                        dedication and support during his initial journey. Special thanks to Ms. Shilpa
                                        Arora and Ms. Sadhvi Kapoor for their guidance and confidence-building efforts.
                                        Proud to belong here.
                                    </p>
                                    <button class="moreless-button font-[600] text-white text-sm mt-1">Read
                                        more...</button>
                                </div>
                            </li>
                            <li
                                class=" sm:flex items-start gap-2 mb-4 border-[1px] border-gray-300 p-3 rounded-[8px] bg-blue-main">
                                <div class="text-center sm:w-[30%] w-[90%]">
                                    <img src="" alt="Parents of Vedant Singh"
                                        class="mb-2 mx-auto rounded-[10px] w-[130px] h-[130px] ">
                                    <h2 class="font-[700] text-[16px] text-gray-100">Parents of Vedant Singh <br> Class
                                        1-C</h2>
                                </div>
                                <div class="sm:w-[60%] w-[90%] sm:mt-0 mt-3  sm:text-left text-center">
                                    <p
                                        class="testimonial-text text-[16px] text-gray-200 text-center sm:text-left clamp-2">
                                        Allenhouse Public School, Khalasi Lines, has impressed us with its focus on
                                        holistic
                                        education. The teachers and Principal are cooperative and committed. Smart
                                        boards
                                        and varied teaching styles make learning engaging. We truly appreciate the
                                        school’s
                                        academic structure and overall exposure. Our child is growing beautifully.
                                        Choosing
                                        Allenhouse was absolutely the right decision.
                                    </p>
                                    <button class="moreless-button font-[600] text-white text-sm mt-1">Read
                                        more...</button>
                                </div>
                            </li>


                            <li
                                class=" sm:flex items-start gap-2 mb-4 border-[1px] border-gray-300 p-3 rounded-[8px] bg-blue-main">
                                <div class="text-center sm:w-[30%] w-[90%]">
                                    <img src="" alt="Parents of Kushagra Dubey"
                                        class="mb-2 mx-auto rounded-[10px] w-[130px] h-[130px] ">
                                    <h2 class="font-[700] text-[16px] text-gray-100">Parents of Kushagra Dubey <br>
                                        Class 1-C
                                    </h2>
                                </div>
                                <div class="sm:w-[60%] w-[90%] sm:mt-0 mt-3  sm:text-left text-center">
                                    <p
                                        class="testimonial-text text-[16px] text-gray-200 text-center sm:text-left clamp-2">
                                        I truly appreciate the teachers' efforts in creating an engaging learning
                                        environment. My child enjoys all subjects, especially the activities that build
                                        confidence and enthusiasm. The surplus sheets provided were very effective. The
                                        teaching approach has positively impacted my child’s learning. Thank you for
                                        your
                                        continued support and dedication to quality education.
                                    </p>
                                    <button class="moreless-button font-[600] text-white text-sm mt-1">Read
                                        more...</button>
                                </div>
                            </li>
                            <li
                                class=" sm:flex items-start gap-2 mb-4 border-[1px] border-gray-300 p-3 rounded-[8px] bg-blue-main">
                                <div class="text-center sm:w-[30%] w-[90%]">
                                    <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1746609840/Allen_kids_homepage_wxcq9s.webp"
                                        alt="Parents of Rishik Jain"
                                        class="mb-2 mx-auto rounded-[10px] w-[130px] h-[130px] ">
                                    <h2 class="font-[700] text-[16px] text-gray-100">Parents of Rishik Jain <br> Class
                                        1-C
                                    </h2>
                                </div>
                                <div class="sm:w-[60%] w-[90%] sm:mt-0 mt-3  sm:text-left text-center">
                                    <p
                                        class="testimonial-text text-[16px] text-gray-200 text-center sm:text-left clamp-2">
                                        Thank you to you and the entire Allenhouse staff. The school is doing a
                                        fantastic
                                        job. Rishik is lucky to have such a wonderful class teacher. Your classroom
                                        management and the positive learning environment are truly appreciated. The kids
                                        are
                                        progressing well. Grateful for the efforts you put in for our children.
                                    </p>
                                    <button class="moreless-button font-[600] text-white text-sm mt-1">Read
                                        more...</button>
                                </div>
                            </li>
                            <li
                                class=" sm:flex items-start gap-2 mb-4 border-[1px] border-gray-300 p-3 rounded-[8px] bg-blue-main">
                                <div class="text-center sm:w-[30%] w-[90%]">
                                    <img src="" alt="Dr. Insha Shamim"
                                        class="mb-2 mx-auto rounded-[10px] w-[130px] h-[130px] ">
                                    <h2 class="font-[700] text-[16px] text-gray-100">Dr. Insha Shamim</h2>
                                </div>
                                <div class="sm:w-[60%] w-[90%] sm:mt-0 mt-3  sm:text-left text-center">
                                    <p
                                        class="testimonial-text text-[16px] text-gray-200 text-center sm:text-left clamp-2">
                                        Seeing my child Marwaan start Class 1 at Allenhouse has been a heartwarming
                                        experience. The smooth transition from kindergarten, thanks to caring teachers
                                        and
                                        engaging activities, is commendable. Marwaan eagerly shares his learnings daily.
                                        We’ve seen growth in his confidence, social skills, and routines. Allenhouse is
                                        truly nurturing his overall development beautifully.
                                    </p>
                                    <button class="moreless-button font-[600] text-white text-sm mt-1">Read
                                        more...</button>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>

                <div id="tab-2" class="tab-content">
                    <div class=" overflow-hidden mt-1" data-glide-el="track">
                        <ul
                            class="mt-1 relative w-full overflow-hidden p-0 pb-5 whitespace-no-wrap flex gap-3 flex-no-wrap">

                            <li>
                                <video class="w-full rounded-2xl shadow-lg bg-blue-main sm:p-5 p-2" controls>
                                    <source
                                        src="https://res.cloudinary.com/dj7wogsju/video/upload/v1744209832/3_lmi1ji.mp4"
                                        type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </li>

                            <li class="sm:block hidden">
                                <video class="w-full rounded-2xl shadow-lg bg-blue-main sm:p-5 p-2" controls>
                                    <source
                                        src="https://res.cloudinary.com/dj7wogsju/video/upload/v1744209831/2_mbpslg.mp4"
                                        type="video/mp4">
                                    Your browser does not support the video tag.
                                </video>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="relative mt-8 mb-10">
            <div class="absolute top-[-235px] -z-50">
                <img src="https://res.cloudinary.com/dvzfuapyy/image/upload/v1730307222/Group_53_s3txur.png"
                    class="w-[100%] h-[100vh] object-top" alt="Testimonial Shape">
            </div>
            <div class="2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-3">
                <div class="text-center">
                    <h2 class="text-[28px] sm:text-[32px] font-[700] leading-10  text-blue-main relative">Gallery
                    </h2>
                </div>
                <div class="relative Images sm:pt-5 pt-2  opne-hide-circle">

                    <div class="overflow-hidden mt-1" data-glide-el="track">
                        <ul
                            class="relative w-full overflow-hidden p-0 pb-5 whitespace-no-wrap flex flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform]">
                            <li class="flex items-start gap-10 mb-4">
                                <div class="flex">
                                    <div><img src="assets/images/1.jpg" alt="Image 1"></div>
                                </div>
                            </li>
                            <li class="flex items-start gap-10 mb-4">
                                <div class="flex">
                                    <div><img src="assets/images/2.jpg" alt="Image 2"></div>
                                </div>
                            </li>
                            <li class="flex items-start gap-10 mb-4">
                                <div class="flex">
                                    <div><img src="assets/images/3.jpg" alt="Image 3"></div>
                                </div>
                            </li>
                            <li class="flex items-start gap-10 mb-4">
                                <div class="flex">
                                    <div><img src="assets/images/4.jpg" alt="Image 4"></div>
                                </div>
                            </li>
                            <li class="flex items-start gap-10 mb-4">
                                <div class="flex">
                                    <div><img src="assets/images/5.jpg" alt="Image 5"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <!-- Controls -->
                    <div class="absolute left-0 hidden sm:flex items-center justify-between w-full h-0 px-4 top-1/2 hide-circle"
                        data-glide-el="controls">
                        <button
                            class="inline-flex items-center relative sm:right-[66px] justify-center hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                            data-glide-dir="<" aria-label="prev slide">
                            <i class="fa-solid fa-angle-left"></i>
                        </button>
                        <button
                            class="inline-flex items-center relative sm:left-[66px] justify-center hover:bg-red-500 hover:text-white w-8 h-8 transition duration-300 border rounded-full lg:w-10 lg:h-10 text-slate-700 border-slate-700 hover:text-slate-900 hover:border-slate-900 focus-visible:outline-none bg-white/20"
                            data-glide-dir=">" aria-label="next slide">
                            <i class="fa-solid fa-angle-right"></i>
                        </button>
                    </div>

                    <div class="absolute bottom-0 flex items-center justify-center w-full gap-2 hidden"
                        data-glide-el="controls[nav]">
                        <button class=" group" data-glide-dir="=0" aria-label="goto slide 1"><span
                                class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-none"></span></button>
                        <button class=" group" data-glide-dir="=1" aria-label="goto slide 2"><span
                                class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-non2"></span></button>
                        <button class=" group" data-glide-dir="=2" aria-label="goto slide 3"><span
                                class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-none"></span></button>
                        <button class=" group" data-glide-dir="=3" aria-label="goto slide 4"><span
                                class="block w-[10px] h-[10px] transition-colors duration-300 rounded-full bg-gray-300 focus:outline-none"></span></button>
                    </div>
                    <div class="text-center mt-3">
                        <a href="photo-gallery.php"
                            class="text-[16px]font-[600] rounded-[20px] p-[5px] px-4 border-[1px] border-blue-main  hover:bg-red-500 hover:text-white hover:boder-red-500">View
                            All</a>
                    </div>
                </div>
            </div>
        </div>

        <?php include "includes/footer.php" ?>



    </div>
    <script>
    document.addEventListener('DOMContentLoaded', () => {
        const videos = document.querySelectorAll('#tab-2 video');

        videos.forEach(video => {
            video.addEventListener('play', () => {
                videos.forEach(otherVideo => {
                    if (otherVideo !== video) {
                        otherVideo.pause();
                    }
                });
            });
        });
    });
    </script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
    <?php include "includes/foot.php" ?>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
    var glide03 = new Glide('.glide-0333', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1024: {
                perView: 2
            },
            640: {
                perView: 1
            }
        },
    });

    glide03.mount();

    var glide022 = new Glide('.glide-0222', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        autoplay: 3000,
        animationDuration: 700,
        gap: 24,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1024: {
                perView: 2
            },
            640: {
                perView: 1
            }
        },
    });

    glide022.mount();


    $(document).ready(function() {
        $('ul.tabs li').click(function() {
            var tab_id = $(this).attr('data-tab');

            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');

            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        });
    });
    </script>
    <script>
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        breakpoints: {
            1024: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 2
            },
            480: {
                slidesPerView: 1
            }
        }
    });
    </script>
    <script>
    $('.moreless-button').click(function() {
        const moreText = $(this).siblings('.moretext');
        moreText.slideToggle();

        if ($(this).text() == "Read less") {
            $(this).text("Read more...");
        } else {
            $(this).text("Read less");
        }
    });
    </script>
    <script>
    var Images = new Glide('.Images', {
        type: 'carousel',
        focusAt: 1,
        perView: 4,
        autoplay: 3500,
        animationDuration: 700,
        gap: 24,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1680: {
                perView: 4
            },
            1024: {
                perView: 3
            },
            820: {
                perView: 2
            },
            640: {
                perView: 1
            }
        },
    });
    Images.mount();

    var Testimonials = new Glide('.Testimonials', {
        type: 'carousel',
        focusAt: 1,
        perView: 2,
        autoplay: 3500,
        animationDuration: 700,
        gap: 10,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1680: {
                perView: 2
            },
            1024: {
                perView: 2
            },
            820: {
                perView: 2
            },
            640: {
                perView: 1
            }
        },
    });
    Testimonials.mount();

    var Testimonials2 = new Glide('.Testimonials2', {
        type: 'carousel',
        focusAt: 1,
        perView: 4,
        autoplay: 350000,
        animationDuration: 700,
        gap: 10,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1680: {
                perView: 4
            },
            1024: {
                perView: 3
            },
            820: {
                perView: 2
            },
            640: {
                perView: 1
            }
        },
    });
    Testimonials2.mount();


    var Videos = new Glide('.videos', {
        type: 'carousel',
        focusAt: 1,
        perView: 4,
        autoplay: 3500,
        animationDuration: 700,
        gap: 24,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1680: {
                perView: 4
            },
            1024: {
                perView: 3
            },
            820: {
                perView: 2
            },
            640: {
                perView: 1
            }
        },
    });
    Videos.mount();
    </script>

    <script>
    let count = document.querySelectorAll(".count")
    let arr = Array.from(count)



    arr.map(function(item) {
        let startnumber = 0

        function counterup() {
            startnumber++
            item.innerHTML = startnumber

            if (startnumber == item.dataset.number) {
                clearInterval(stop)
            }
        }

        let stop = setInterval(function() {
            counterup()
        }, .002)

    })
    </script>

    <script>
    document.addEventListener("DOMContentLoaded", function() {
        new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
    </script>

    <script>
    $(document).ready(function() {
        var imgPopup = $('.img-popup');
        var popupImage = $('.img-popup img');
        var closeBtn = $('.close-btn');

        // Open on image click
        $('.popup-img').on('click', function() {
            var img_src = $(this).attr('src');
            popupImage.attr('src', img_src);
            imgPopup.addClass('opened');
        });

        // Close popup
        imgPopup.on('click', function() {
            imgPopup.removeClass('opened');
            popupImage.attr('src', '');
        });

        closeBtn.on('click', function() {
            imgPopup.removeClass('opened');
            popupImage.attr('src', '');
        });

        popupImage.on('click', function(e) {
            e.stopPropagation();
        });

        // ESC key to close
        $(document).on('keydown', function(e) {
            if (e.key === "Escape") {
                imgPopup.removeClass('opened');
                popupImage.attr('src', '');
            }
        });
    });
    </script>

    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const buttons = document.querySelectorAll(".moreless-button");

        buttons.forEach(button => {
            button.addEventListener("click", function() {
                const para = this.previousElementSibling;
                para.classList.toggle("expanded");
                para.classList.toggle("clamp-2");

                this.textContent = para.classList.contains("expanded") ? "Read less" :
                    "Read more...";
            });
        });
    });
    </script>


    <script>
    window.addEventListener('load', () => {
        document.getElementById('formOverlay').classList.remove('hidden');
    });

    document.getElementById('dismissPopup').addEventListener('click', () => {
        document.getElementById('formOverlay').classList.add('hidden');
    });
    </script>

    <script>
    document.addEventListener("DOMContentLoaded", function() {
        const tabs = document.querySelectorAll(".tab-link");
        const contents = document.querySelectorAll(".tab-content");

        tabs.forEach(tab => {
            tab.addEventListener("click", function() {
                const tabId = this.getAttribute("data-tab");

                // Remove 'current' from all tabs and contents
                tabs.forEach(t => t.classList.remove("current"));
                contents.forEach(c => c.classList.remove("current"));

                // Add 'current' to the clicked tab and its content
                this.classList.add("current");
                document.getElementById(tabId).classList.add("current");

                // Stop all videos if switching away from video tab
                if (tabId !== "tab-2") {
                    const videos = document.querySelectorAll("#tab-2 video");
                    videos.forEach(video => {
                        video.pause();
                        video.currentTime = 0; // Optional: reset to beginning
                    });
                }
            });
        });
    });
    </script>




</body>

</html>