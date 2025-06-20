<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi| School Brochure</title>
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
    </style>
    <?php include "includes/header.php" ?>

    <div class="main relative  mb-[40px] sm:mb-[120px] ">
        <div class="bg-center flex items-center text-center h-[300px] comman-banner">
            <div>
                <h1
                    class="text-[32px] sm:hidden block font-[700] text-white text-left pl-4 mb-5 sm:mb-8 hr-line relative leading-9">
                    School Brochure
                </h1>
            </div>

            <div class="md:w-[100%]">
                <h1
                    class="sm:text-[32px] sm:block hidden font-[700] text-white text-left sm:mb-1 hr-line relative leading-9 ml-[7rem]">
                    School
                    <span class="sm:hidden"></span> Brochure
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
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <p class="ms-1 text-sm font-medium text-blue-main">Admission</a>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-blue-main mx-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="school-brochure.php" class="ms-1 text-sm font-medium text-blue-main">School Brochure</a>
                    </div>
                </li>
            </ol>
        </div>

          <div class="mt-8 mx-3 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-3">
            <div class="sm:mt-10 relative">

              
                <div>

                    <div class="md:w-[100%]">
                        
                        <div></div>
                        <div class="my-10">


                            <table class="w-full text-sm text-left rtl:text-right text-gray-600 ">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-200 ">
                                    <tr>
                                        <th scope="col" class="px-6 py-4">
                                            S.No.
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Documents/Information
                                        </th>
                                        <th scope="col" class="px-6 py-4">
                                            Upload Document Link
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd:bg-white even:bg-gray-50  border-b dark:border-gray-700">
                                        <th scope="row" class="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                                            1.
                                        </th>
                                        <td class="px-6 py-2">
                                            School Brochure
                                        </td>
                                        <td class="px-6 py-2">
                                            <a href="APS_Brochure_Jhansi_Final.pdf" target="_blank"
                                                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</a>
                                        </td>
                                    </tr>

                                   

                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    <?php include "includes/footer.php" ?>
    <?php include "includes/foot.php" ?>

</body>

</html>