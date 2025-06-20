<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi| Print Media</title>
    <?php include "includes/head.php" ?>
</head>

<body>

    <?php include "includes/header.php" ?>

    <div class="main relative mb-[120px] ">
        <div class="main relative  mb-[40px] sm:mb-[120px] ">
            <div class="bg-center flex items-center text-center h-[300px] comman-banner">
                <div>
                    <h1
                        class="text-[32px] sm:hidden block font-[700] text-white text-left pl-4 mb-5 sm:mb-8 hr-line relative leading-9">
                        Event
                    </h1>
                </div>

                <div class="md:w-[100%]">
                    <h1
                        class="sm:text-[32px] sm:block hidden font-[700] text-white text-left sm:mb-1 hr-line relative leading-9 ml-[7rem]">
                        Event
                        <span class="sm:hidden"></span>
                    </h1>
                </div>
            </div>

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
                            <p class="ms-1 text-sm font-medium text-blue-main">Media & Events</a>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <svg class="rtl:rotate-180 w-3 h-3 text-blue-main mx-1" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m1 9 4-4-4-4" />
                            </svg>
                            <a href="event.php" class="ms-1 text-sm font-medium text-blue-main">Event</a>
                        </div>
                    </li>
                </ol>
            </div>

            <div class="mt-8 mx-3 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-3">
                <div class="mt-10 relative">

                    <div>

                        <div>
                            <div class="tabs sm:mt-10 ">
                                <div class="flex item-center  gap-2 sm:justify-between ">
                                    <ul class="flex gap-2 sm:gap-4 border-b bg-gray-50 " style="border-radius:12px;">
                                        <li class="flex-1">
                                            <a href="#section1"
                                                class="tab-link block text-center py-2.5 px-2 sm:text-[16px] text-[10px] sm:py-3 sm:px-5 font-semibold  text-gray-700  transition-colors hover:bg-slate-700 hover:text-white"
                                                aria-controls="section1" role="tab" tabindex="-1">Title</a>
                                        </li>
                                        <!-- <li class="flex-1">
                                            <a href="#section2"
                                                class="tab-link block text-center  py-2.5 sm:py-3 px-2 sm:px-5 sm:text-[16px] text-[10px] font-semibold   text-gray-700 transition-colors hover:bg-slate-700 hover:text-white"
                                                aria-controls="section2" role="tab" tabindex="-1">Category</a>
                                        </li>
                                        <li class="flex-1">
                                            <a href="#section3"
                                                class="tab-link block text-center py-2.5   sm:py-3 px-2 sm:px-5 sm:text-[16px] text-[10px] font-semibold   text-gray-700  transition-colors hover:bg-slate-700 hover:text-white"
                                                aria-controls="section3" role="tab" tabindex="-1">Year</a>
                                        </li> -->

                                    </ul>

                                    <input type="text" id="first_name"
                                        class="bg-gray-100 w-[50%] border-b  text-gray-900 sm:text-[16px] text-[10px]  outline-none focus:ring-0 block px-5 py-2 "
                                        style="border-radius:9px;" placeholder="Search" required />

                                </div>

                                  <section id="section1" class="tab-panel  hidden mt-5" role="tabpanel"
                                    aria-hidden="true">
                                    <div id="eventGrid" class="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                                    </div>
                                </section>

                                <!-- <section id="section2" class="tab-panel  hidden mt-5" role="tabpanel"
                                    aria-hidden="true">
                                    NOT PROVIDED
                                </section>

                                <section id="section3" class="tab-panel  hidden mt-5" role="tabpanel"
                                    aria-hidden="true">
                                    NOT PROVIDED
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
        let galleryData = []; // store fetched data globally

        async function loadGallery() {
            const response = await fetch('https://allenhouseadmin.fastranking.tech/api/events/SCLID000004');
            const data = await response.json();
            galleryData = data.data;

            renderGallery(galleryData);
        }

        function renderGallery(data) {
            const container = document.getElementById('eventGrid');
            container.innerHTML = '';

            if (data.length === 0) {
                container.innerHTML = '<p class="text-center text-gray-500 col-span-full">No results found.</p>';
                return;
            }

            data.forEach(item => {
                const coverImage = item.medias.find(media => media.pivot.is_cover === "1")?.urls || '';
                const date = new Date(item.date);
                const day = date.getDate();
                const month = date.toLocaleString('default', {
                    month: 'short'
                });
                const year = date.getFullYear();

                const card = `
                <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-[rgba(0,0,0,0.15)_0px_15px_25px,rgba(0,0,0,0.05)_0px_5px_10px] transition-shadow duration-300">
                    <a href="#">
                        <img class="rounded-t-lg w-full h-[200px] object-cover" src="${coverImage}" alt="${item.title}" />
                        <div class="sm:p-4 p-1 flex flex-col justify-between relative">
                            <div class="flex gap-4">
                                <div class="w-[30%]">
                                    <div class="bg-blue-main text-white text-center rounded-t-lg p-1 font-[700] text-[18px]">${year}</div>
                                    <div class="text-center font-[700] text-[24px] text-[#D9A414] rounded-b-lg border border-gray-300">
                                        ${day}<br><span class="text-[#223B71] text-[14px]">${month}</span>
                                    </div>
                                </div>
                                <div class="w-[70%]">
                                    <div class="text-blue-main text-[1rem] font-[700] m-2">${item.title}</div>
                                    <hr>
                                    <div class="flex gap-2 text-[9px] text-[#3B3B3B] m-2">
                                        <div>Category: <strong>${item.type}</strong></div>
                                        <div>Total Photo(s): <strong>${item.medias.length}</strong></div>
                                    </div>
                                </div>
                            </div>
                            <a href="gallery.php">
                                <button class="group py-1 px-4 sm:px-6 rounded-[10px] w-full border border-gray text-blue-main hover:text-white hover:bg-[#053B7A] flex gap-2 items-center justify-center mt-5">
                                    View More
                                    <svg class="w-[14px] h-[10px] fill-[#223B71] group-hover:fill-white" width="8" height="9" viewBox="0 0 8 9" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65008 0.911564C6.9831 0.911564 7.25307 1.18153 7.25307 1.51456L7.25307 6.63112C7.25307 6.96414 6.9831 7.23411 6.65008 7.23411C6.31705 7.23411 6.04708 6.96414 6.04708 6.63112L6.04708 2.97031L1.10714 7.91026C0.871652 8.14574 0.489858 8.14574 0.254375 7.91026C0.0188919 7.67477 0.018892 7.29298 0.254376 7.0575L5.19432 2.11755L1.53352 2.11755C1.20049 2.11755 0.930523 1.84758 0.930523 1.51456C0.930523 1.18153 1.20049 0.911564 1.53352 0.911564L6.65008 0.911564Z" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </a>
                </div>
            `;

                container.insertAdjacentHTML('beforeend', card);
            });
        }

        // Search filter
        document.getElementById('first_name').addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();

            const filtered = galleryData.filter(item => {
                const title = item.title?.toLowerCase() || '';
                const type = item.type?.toLowerCase() || '';

                const dateObj = new Date(item.date);
                const day = dateObj.getDate().toString();
                const month = dateObj.toLocaleString('default', {
                    month: 'short'
                }).toLowerCase();
                const year = dateObj.getFullYear().toString();

                return (
                    title.includes(searchTerm) ||
                    type.includes(searchTerm) ||
                    day.includes(searchTerm) ||
                    month.includes(searchTerm) ||
                    year.includes(searchTerm)
                );
            });

            renderGallery(filtered);
        });

        // Load gallery on page load
        window.addEventListener('DOMContentLoaded', loadGallery);
    </script>

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