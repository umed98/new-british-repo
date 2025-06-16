<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi| Coding</title>
    <?php include "includes/head.php" ?>
</head>

<body>

    <?php include "includes/header.php" ?>

    <div class="main relative mb-[120px] mx-0">
        <!-- Start -->
        <div class="bg-center flex items-center text-center h-[300px] comman-banner" 
        >
            <div>
                <h1 class="text-[32px] sm:hidden block font-[700] text-white text-left pl-4 mb-5 sm:mb-8 hr-line relative leading-9">
                  Coding Academy
                </h1>
            </div>

            <div class="md:w-[100%]">
                <h1 class="sm:text-[32px] sm:block hidden font-[700] text-white text-left sm:mb-1 hr-line relative leading-9 ml-[7rem]">
                   Coding Academy
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
                        <svg class="rtl:rotate-180 w-3 h-3 text-blue-main mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                        </svg>
                        <p class="ms-1 text-sm font-medium text-blue-main">Beyond Acaddemics
                        </p>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="rtl:rotate-180 w-3 h-3 text-blue-main mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path>
                        </svg>
                        <a href="coding.php" class="ms-1 text-sm font-medium text-blue-main">Coding</a>
                    </div>
                </li>
            </ol>
        </div>
        <!-- End -->

        <div class="mt-8 mx-3 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-3">
            <div class="mt-10 relative">
                <div class="absolute top-[-100px] -z-50">
                    <!-- <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1736182459/Coding_Lab_cjyqjp.jpg"
                        class="w-[100%] object-top" alt=""> -->
                </div>
              
                <div class="md:flex gap-9">
                    <div class="md:w-[40%]">
                        <img src="https://res.cloudinary.com/dj7wogsju/image/upload/v1736182459/Coding_Lab_cjyqjp.jpg"
                            alt="" class="w-[100%]" alt="Robotics">
                    </div>
                    <div class="md:w-[60%]">
                       

                        <p class="sm:text-[16px] text-[16px] text-gray-600 font-[400] mt-5">
                           Coding is the vocabulary to communicate with computers. Through this, we are able to make computers perform tasks. Computer coding empowers kids to learn to create interesting content, they learn various uses of computers, such as making their own video game or even their own website.</p>

                        <p class="sm:text-[16px] text-[16px] text-gray-600 font-[400] mt-2">Superhouse Education Foundation runs a Coding Academy in more than 15 schools. The academy focuses on inducing problem-solving and analysis skills, such as finding errors, thinking logically, and developing teamwork and interpersonal skills.</p>
                        <p class="sm:text-[16px] text-[16px] text-gray-600 font-[400] mt-2">Here at ALLEN CODING ACADEMY, students learn the basics of all software and get familiarized with all trends of coding in the market. Knowledge and skills in coding can open doors to a wide range of career opportunities. “Creativity is the goal, and Coding is the medium to reach that goal. With Creativity taking the front seat, and technology the backseat.”</p>
                    </div>
                </div>
            </div>
            <div class="mt-10">


                <ul class="mt-3  text-gray-600 text-[16px] mb-2" style="list-style: disc;">
                    While selecting the coding, we should keep some points in mind about how coding can help in future -
                    <li class="text-gray-600 text-[16px] mb-2 ml-8">
                       Coding helps you understand technology
                    </li>
                    <li class="text-gray-600 text-[16px] mb-2 ml-8">
                        It enhances problem-solving skills
                    </li>
                    <li class="text-gray-600 text-[16px] mb-2 ml-8">
                        Coding complements creativity
                    </li>
                    <li class="text-gray-600 text-[16px] mb-2 ml-8">
                        Coding can be applied to data visualization
                    </li>
                    <li class="text-gray-600 text-[16px] mb-2 ml-8">
                        Coding improves career prospects
                    </li>
                </ul>



            </div>
        </div>
    </div>

    <?php include "includes/footer.php" ?>
    <?php include "includes/foot.php" ?>
    <script>
        var glide01 = new Glide('.glide-01', {
            type: 'carousel',
            focusAt: 'center',
            perView: 3.5,
            autoplay: 3500,
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
        glide01.mount();
    </script>
</body>

</html>