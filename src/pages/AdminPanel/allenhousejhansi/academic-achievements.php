<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi| Academic Achievements</title>
    <?php include "includes/head.php" ?>
</head>

<body>

    <?php include "includes/header.php" ?>

    <div class="main relative sm:top-[20px] mb:[40px] sm:mb-[120px] mx-0 sm:mx-2">
        <div class="mt-8 mx-4 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-4">
            <div class="sm:mt-10 relative">

                <h1
                    class="text-[32px] sm:hidden block font-[700] text-blue-main  text-center mb-5 sm:mb-8 hr-line relative leading-9">
                    Academic Achievements
                </h1>
                <div>

                    <div class="md:w-[100%]">
                        <h1
                            class="sm:text-[32px] sm:block hidden font-[700] text-blue-main  text-center sm:mb-1 hr-line relative leading-9">
                            Academic Achievements
                        </h1>
                        <div>

                            <div class="tabs sm:mt-10 ">
                                <div class="flex item-center  gap-2 sm:justify-between ">
                                    <ul class="flex gap-2 sm:gap-4 border-b bg-gray-50 " style="border-radius:12px;">
                                        <li class="flex-1">
                                            <a href="#section1"
                                                class="tab-link block text-center py-2.5 px-2 sm:text-[16px] text-[10px] sm:py-3 sm:px-5 font-semibold  text-gray-700  transition-colors hover:bg-slate-700 hover:text-white"
                                                aria-controls="section1" role="tab" tabindex="-1">Title</a>
                                        </li>
                                        <li class="flex-1">
                                            <a href="#section2"
                                                class="tab-link block text-center  py-2.5 sm:py-3 px-2 sm:px-5 sm:text-[16px] text-[10px] font-semibold   text-gray-700 transition-colors hover:bg-slate-700 hover:text-white"
                                                aria-controls="section2" role="tab" tabindex="-1">Category</a>
                                        </li>
                                        <li class="flex-1">
                                            <a href="#section3"
                                                class="tab-link block text-center py-2.5   sm:py-3 px-2 sm:px-5 sm:text-[16px] text-[10px] font-semibold   text-gray-700  transition-colors hover:bg-slate-700 hover:text-white"
                                                aria-controls="section3" role="tab" tabindex="-1">Year</a>
                                        </li>
                                        <!-- <li class="flex-1">
                                            <a href="#section4"
                                                class="tab-link block text-center  py-2.5 sm:py-3 px-2 sm:px-5 sm:text-[16px] text-[10px] font-semibold   text-gray-700  transition-colors hover:bg-slate-700 hover:text-white"
                                                aria-controls="section4" role="tab" tabindex="-1"></a>
                                        </li> -->
                                    </ul>

                                    <input type="text" id="first_name"
                                        class="bg-gray-100 w-[50%] border-b  text-gray-900 sm:text-[16px] text-[10px]  outline-none focus:ring-0 block px-5 py-2 "
                                        style="border-radius:9px;" placeholder="Search" required />

                                </div>

                                <section id="section1" class="tab-panel  block mt-5" role="tabpanel"
                                    aria-hidden="true">
                                    <div id="achievementsContainer" class="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 mx-auto gap-4 ">
                                         
                                     </div>
                                </section>
                                <script>
    async function fetchAchievements() {
        try {
            const response = await fetch("https://allenhouseadmin.fastranking.tech/api/achievements/SCLID000003");
            const data = await response.json();
            const container = document.getElementById("achievementsContainer");
            container.innerHTML = "";
            if (data.data.length > 0) {
                data.data.forEach(achievement => {
                // Find the cover photo based on the 'is_cover' value
                const coverMedia = achievement.medias.find(media => media.pivot.is_cover === "1");
                console.log(coverMedia)
                const coverImageUrl = coverMedia ? coverMedia.urls : "https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg";  

                    const cardHTML = `
                                        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                                            <a href="#"><img class="rounded-t-lg"
                                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg"
                                                    alt="" />
                                                <div class="sm:p-4 p-1 flex flex-col  justify-between relative ">
                                                    <div class="flex  gap-4">
                                                        <div class="w-[30%]">
                                                            <div
                                                                class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">
                                                                2024</div>
                                                            <div
                                                                class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border-[1px] border-gray-300">
                                                                20<br><span class="text-[#223B71] text-[14px]">
                                                                    Nov</span></div>
                                                        </div>
                                                        <div class="w-[70%]">
                                                            <div class="text-blue-main text-[1rem]  font-[700] m-2">${achievement.achievementtitle}</div>
                                                            <hr>
                                                            <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                                                <div>Category : <strong>Boxing</strong></div>
                                                                <div>Total Photo(s) : <strong>2</strong></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <a href="gallery.php">
                                                        <button
                                                            class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border-[1px] border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                                            View More

                                                            <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z" />
                                                            </svg>

                                                        </button>
                                                    </a>
                                                    </span>
                                                </div>
                                            </a>
                                       </div>
                         `;
                    
                    container.innerHTML += cardHTML;
                });
            } else {
                container.innerHTML = "<p class='text-center text-gray-500'>No achievements found.</p>";
            }
        } catch (error) {
            console.error("Error fetching achievements:", error);
            document.getElementById("achievementsContainer").innerHTML = "<p class='text-center text-red-500'>Failed to load achievements.</p>";
        }
    }

    fetchAchievements();
</script>

                                <section id="section2" class="tab-panel  hidden mt-5" role="tabpanel"
                                    aria-hidden="true">
                                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 ">

                                        <div
                                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                                            <a href="#"><img class="rounded-t-lg"
                                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg"
                                                    alt="" />
                                                <div class="sm:p-4 p-1 flex flex-col  justify-between relative ">
                                                    <div class="flex  gap-4">
                                                        <div class="w-[30%]">
                                                            <div
                                                                class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">
                                                                2024</div>
                                                            <div
                                                                class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border-[1px] border-gray-300">
                                                                20<br><span class="text-[#223B71] text-[14px]">
                                                                    Nov</span></div>
                                                        </div>


                                                        <div class="w-[70%]">
                                                            <div class="text-blue-main text-[1rem]  font-[700] m-2">Boxing
                                                                Competition - Silver Medal</div>
                                                            <hr>
                                                            <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                                                <div>Category : <strong>Boxing</strong></div>
                                                                <div>Total Photo(s) : <strong>2</strong></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <a href="gallery.php">
                                                        <button
                                                            class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border-[1px] border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                                            View More

                                                            <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z" />
                                                            </svg>

                                                        </button>
                                                    </a>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </section>

                                <section id="section3" class="tab-panel  hidden mt-5" role="tabpanel"
                                    aria-hidden="true">
                                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 ">

                                        <div
                                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                                            <a href="#"><img class="rounded-t-lg"
                                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg"
                                                    alt="" />
                                                <div class="sm:p-4 p-1 flex flex-col  justify-between relative ">
                                                    <div class="flex  gap-4">
                                                        <div class="w-[30%]">
                                                            <div
                                                                class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">
                                                                2024</div>
                                                            <div
                                                                class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border-[1px] border-gray-300">
                                                                20<br><span class="text-[#223B71] text-[14px]">
                                                                    Nov</span></div>
                                                        </div>


                                                        <div class="w-[70%]">
                                                            <div class="text-blue-main text-[1rem]  font-[700] m-2">Boxing
                                                                Competition - Silver Medal</div>
                                                            <hr>
                                                            <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                                                <div>Category : <strong>Boxing</strong></div>
                                                                <div>Total Photo(s) : <strong>2</strong></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <a href="gallery.php">
                                                        <button
                                                            class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border-[1px] border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                                            View More

                                                            <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z" />
                                                            </svg>

                                                        </button>
                                                    </a>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>

                                        <div
                                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                                            <a href="#"><img class="rounded-t-lg"
                                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg"
                                                    alt="" />
                                                <div class="sm:p-4 p-1 flex flex-col  justify-between relative ">
                                                    <div class="flex  gap-4">
                                                        <div class="w-[30%]">
                                                            <div
                                                                class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">
                                                                2024</div>
                                                            <div
                                                                class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border-[1px] border-gray-300">
                                                                20<br><span class="text-[#223B71] text-[14px]">
                                                                    Nov</span></div>
                                                        </div>


                                                        <div class="w-[70%]">
                                                            <div class="text-blue-main text-[1rem]  font-[700] m-2">Boxing
                                                                Competition - Silver Medal</div>
                                                            <hr>
                                                            <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                                                <div>Category : <strong>Boxing</strong></div>
                                                                <div>Total Photo(s) : <strong>2</strong></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <a href="gallery.php">
                                                        <button
                                                            class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border-[1px] border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                                            View More

                                                            <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z" />
                                                            </svg>

                                                        </button>
                                                    </a>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>

                                        <div
                                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                                            <a href="#"><img class="rounded-t-lg"
                                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg"
                                                    alt="" />
                                                <div class="sm:p-4 p-1 flex flex-col  justify-between relative ">
                                                    <div class="flex  gap-4">
                                                        <div class="w-[30%]">
                                                            <div
                                                                class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">
                                                                2024</div>
                                                            <div
                                                                class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border-[1px] border-gray-300">
                                                                20<br><span class="text-[#223B71] text-[14px]">
                                                                    Nov</span></div>
                                                        </div>


                                                        <div class="w-[70%]">
                                                            <div class="text-blue-main text-[1rem]  font-[700] m-2">Boxing
                                                                Competition - Silver Medal</div>
                                                            <hr>
                                                            <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                                                <div>Category : <strong>Boxing</strong></div>
                                                                <div>Total Photo(s) : <strong>2</strong></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <a href="gallery.php">
                                                        <button
                                                            class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border-[1px] border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                                            View More

                                                            <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                                    d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z" />
                                                            </svg>

                                                        </button>
                                                    </a>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </section>

                                <!-- <section id="section4" class="tab-panel  hidden mt-5" role="tabpanel"
                                    aria-hidden="true">
                                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 ">

                                    <div
                                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                                            <a href="#"><img class="rounded-t-lg"
                                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg"
                                                    alt="" />
                                                <div class="sm:p-4 p-1 flex flex-col  justify-between relative ">
                                                    <div class="flex  gap-4">
                                                        <div class="w-[30%]">
                                                            <div
                                                                class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">
                                                                2024</div>
                                                            <div
                                                                class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border-[1px] border-gray-300">
                                                                20<br><span class="text-[#223B71] text-[14px]">
                                                                    Nov</span></div>
                                                        </div>


                                                        <div class="w-[70%]">
                                                            <div class="text-blue-main text-[1rem]  font-[700] m-2">Boxing
                                                                Competition - Silver Medal</div>
                                                            <hr>
                                                            <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                                                <div>Category : <strong>Boxing</strong></div>
                                                                <div>Total Photo(s) : <strong>2</strong></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <a href="gallery.php">
                                                    <button
                                                        class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border-[1px] border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                                        View More

                                                        <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z"
                                                                />
                                                        </svg>

                                                    </button>
</a>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>

                                        <div
                                            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow  hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                                            <a href="#"><img class="rounded-t-lg"
                                                    src="https://res.cloudinary.com/dj7wogsju/image/upload/v1735304436/Banner_200000001202411191269766_oyy43q.jpg"
                                                    alt="" />
                                                <div class="sm:p-4 p-1 flex flex-col  justify-between relative ">
                                                    <div class="flex  gap-4">
                                                        <div class="w-[30%]">
                                                            <div
                                                                class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">
                                                                2024</div>
                                                            <div
                                                                class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border-[1px] border-gray-300">
                                                                20<br><span class="text-[#223B71] text-[14px]">
                                                                    Nov</span></div>
                                                        </div>


                                                        <div class="w-[70%]">
                                                            <div class="text-blue-main text-[1rem]  font-[700] m-2">Boxing
                                                                Competition - Silver Medal</div>
                                                            <hr>
                                                            <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                                                <div>Category : <strong>Boxing</strong></div>
                                                                <div>Total Photo(s) : <strong>2</strong></div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <a href="gallery.php">
                                                    <button
                                                        class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border-[1px] border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                                        View More

                                                        <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z"
                                                                />
                                                        </svg>

                                                    </button>
</a>
                                                    </span>
                                                </div>
                                            </a>
                                        </div>

                                    </div>
                                </section> -->








                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php include "includes/footer.php" ?>
    <?php include "includes/foot.php" ?>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const tabLinks = document.querySelectorAll('.tab-link');
            const tabPanels = document.querySelectorAll('.tab-panel');
            const indicator = document.getElementById('indicator');

            let activeTab = tabLinks[0];
            let activePanel = tabPanels[0];

            function changeTab(newTab) {
                // Hide all panels
                tabPanels.forEach(panel => panel.classList.add('hidden'));

                // Remove aria-selected and tabindex from all tabs
                tabLinks.forEach(tab => {
                    tab.setAttribute('aria-selected', 'false');
                    tab.setAttribute('tabindex', '-1');
                });

                // Show new tab's panel
                const targetPanel = document.getElementById(newTab.getAttribute('aria-controls'));
                targetPanel.classList.remove('hidden');
                targetPanel.setAttribute('aria-hidden', 'false');

                // Set aria-selected and tabindex on the new tab
                newTab.setAttribute('aria-selected', 'true');
                newTab.setAttribute('tabindex', '0');

                // Move indicator
                const offset = newTab.offsetLeft;
                const width = newTab.offsetWidth;
                indicator.style.left = `${offset}px`;
                indicator.style.width = `${width}px`;
            }

            function handleKeydown(event) {
                const keyCode = event.keyCode;
                let newTab;

                if (keyCode === 37) { // Left arrow
                    newTab = activeTab.previousElementSibling?.querySelector('.tab-link');
                } else if (keyCode === 39) { // Right arrow
                    newTab = activeTab.nextElementSibling?.querySelector('.tab-link');
                }

                if (newTab) {
                    changeTab(newTab);
                    activeTab = newTab;
                }
            }

            tabLinks.forEach(tabLink => {
                tabLink.addEventListener('click', (event) => {
                    event.preventDefault();
                    activeTab = event.target;
                    changeTab(activeTab);
                });
                tabLink.addEventListener('keydown', handleKeydown);
            });

            // Initialize the first tab as active
            changeTab(activeTab);
        });
    </script>

</body>

</html>