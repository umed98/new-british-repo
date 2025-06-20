<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AllenHouse Jhansi| Admission Process</title>
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

        .bg-gredient-image::before {
            content: '';
            position: absolute;
            height: 100%;
            width: 100%;
            background: linear-gradient(270deg, rgba(217, 217, 217, 0) 0%, #132959 88.65%);
        }


        .dropdown {
            position: relative;
            font-size: 14px;
            color: #333;
            border-radius: 5px;


            .dropdown-list {
                padding: 12px;
                background: #fff;
                position: absolute;
                top: 30px;
                left: 2px;
                right: 2px;
                box-shadow: 0 1px 2px 1px rgba(0, 0, 0, .15);
                transform-origin: 50% 0;
                transform: scale(1, 0);
                transition: transform .15s ease-in-out .15s;
                max-height: 66vh;
                overflow-y: scroll;
            }

            .dropdown-option {
                display: block;
                padding: 8px 12px;
                opacity: 0;
                transition: opacity .15s ease-in-out;
            }

            .dropdown-label {
                display: block;
                height: 30px;
                background: #fff;
                border: 1px solid #e5e7eb;
                border-radius: 5px;
                padding: 6px 12px;
                line-height: 1;
                cursor: pointer;
                color: #9d96a9;

                &:before {
                    content: '▼';
                    float: right;
                }
            }

            &.on {
                .dropdown-list {
                    transform: scale(1, 1);
                    transition-delay: 0s;

                    .dropdown-option {
                        opacity: 1;
                        transition-delay: .2s;
                    }
                }

                .dropdown-label:before {
                    content: '▲';
                }
            }

            [type="checkbox"] {
                position: relative;
                top: -1px;
                margin-right: 4px;
            }
        }
    </style>
    <?php include "includes/header.php" ?>

    <div class="main relative  mb-[40px] sm:mb-[120px] ">
        <div class="bg-center flex items-center text-left h-[300px] comman-banner">
            <div>
                <h1
                    class="text-[32px] sm:hidden block font-[700] text-white text-left mb-5 sm:mb-8 hr-line relative leading-9 pl-4 ">
                    Admission Procedure
                </h1>
            </div>

            <div class="md:w-[100%]">
                <h1
                    class="sm:text-[32px] sm:block hidden font-[700] text-white text-left sm:mb-1 hr-line relative leading-9 ml-[7rem]">
                    Admission
                    <span class="sm:hidden"></span> Procedure
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
                        <a href="admission-procedure.php" class="ms-1 text-sm font-medium text-blue-main">Admission
                            Procedure</a>
                    </div>
                </li>
            </ol>
        </div>

        <div class="mt-10 mx-4 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-4">
            <div class="mt-5">
                <p class="sm:text-[16px] text-[16px] text-gray-600 font-[400] mt-2">
                    A standardised worksheet, trips, and a nature walk for getting in touch with the outdoors. Special Assemblies are a regular feature to mark festivals and special occasions. It caters to critical and creative thinking. We provide academic education that allows our students to be competitive and successful in the wider world. One can find all the traditional subjects and many challenging new subjects like Fashion Studies, Legal Studies, Mass Communication, NCC, etc., at Allenhouse Public School.
                </p>

                <div>
                    <h3 class="text-lg font-semibold mt-5 text-gray-600">Nursery and Prep</h3>
                    <ul class=" mt-2 text-gray-600 text-gray-600">
                        <li>&#9672 Registration is the first step. The prospectus given during Registration
                            gives complete information about the school system.</li>
                        <li>&#9672 Eligibility age: 3+ years</li>
                        <li>&#9672 Admission to Nursery & Prep will be through informal interaction with the parents and the child. The date and timing for the interaction will be intimated telephonically.
                        </li>
                        <li>&#9672 A list of selected candidates will be displayed at the administrative
                            office. Parents will also be informed telephonically.</li>
                        <li>&#9672 On confirmation of admission, parents will be required to deposit the fee
                            within two days, failing which the admission shall stand cancelled.</li>

                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mt-5 text-gray-600"> Important Documents To Be Attached
                        At The Time Of Registration</h3>
                    <ul class=" mt-2 text-gray-600">
                        <li>&#9672 Photocopy of proof of residence.</li>
                        <li>&#9672 Two passport-size photographs.</li>
                        <li>&#9672 Self-attested photocopy of the Birth Certificate of the child issued by the Municipal Corporation/ Competent Authority.</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mt-5 text-gray-600">For Classes I – VIII</h3>
                    <ul class=" mt-2 text-gray-600">
                        <li>&#9672 Registration is the first step. The prospectus given during Registration
                            gives complete information about the school system.</li>
                        <li>&#9672 Admission to classes I & above is given based on the result of an
                            admission test conducted by the school and the interaction of students & parents
                            with the Principal of shortlisted students.</li>
                        <li>&#9672 The date, Time, & Syllabus for the admission test may be collected from the school administrative office at the time of Registration.
                        </li>
                        <li>&#9672 The Admission Test result will be displayed at the school Administrative
                            Office within two days of the test.</li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mt-5 text-gray-600">Documents Required At The Time Of
                        Admission</h3>
                    <ul class="mt-2 text-gray-600">
                        <li>&#9672 Filled up a form and two passport-size photographs.</li>
                        <li>&#9672 Attested a copy of my Birth Certificate.</li>
                        <li>&#9672 Original birth certificate for verification.</li>
                        <li>&#9672 Report card of previous class (Attested).</li>
                        <li>&#9672 T.C. (original) is to be submitted within one month from the admission
                            date.</li>
                        <li>&#9672 Original Character certificate for (Class VII and above).</li>
                        <li>&#9672 Proof of residence.</li>
                        <li>&#9672 Caste certificate for SC / ST / OBC / EWS.</li>
                        <li>&#9672 Copy of the Aadhar Card of parents as well as the student.</li>
                        <li>&#9672 Certificate for disability, if any.</li>
                    </ul>
                </div>

            </div>
        </div>


        <div class="sm:mt-20 mt-10 mx-4 2xl:w-[1280px] lg:w-[1024px] md:w-[767px] sm:w-[640px] sm:mx-auto sm:px-5 px-4">
            <div class="relative">
                <h2 class="text-center sm:text-[32px] text-[28px] font-[700] text-blue-main leading-9">
                    Enquiry Form | Session 2025–2026
                </h2>
                <div class="mt-10">
                    <form method="post" onsubmit="return validateFormValidate()">
                        <!-- Class selection -->
                        <div class="mt-4">
                            <select name="class-selection" id="class-selection" required
                                class="w-full border border-gray-300 p-[11px] rounded-md text-gray-600">
                                <option value="" disabled selected>Select Class</option>
                                <option>PG-I</option>
                                <option>PG-II</option>
                                <option>Nursery</option>
                                <option>Preparatory</option>
                                <option>I</option>
                                <option>II</option>
                                <option>III</option>
                                <option>IV</option>
                                <option>V</option>
                                <option>VI</option>
                                <option>VII</option>
                                <option>VIII</option>
                                <option>IX</option>
                                <option>X</option>
                                <option>XI</option>
                                <option>XII</option>
                            </select>
                        </div>

                          <!-- Student name -->
                            <div class="mt-4">
                                <input type="text" name="student-name" id="student-validate" placeholder="Student Name"
                                    pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed"
                                    class="w-full border border-gray-300 p-[11px] rounded-md outline-none" required>
                                <span id="studentError" class="text-red-500 text-sm mt-1 block"></span>
                            </div>

                            <!-- Parent name -->
                            <div class="mt-4">
                                <input type="text" name="parent-name" id="parent_val" placeholder="Parents Name"
                                    pattern="[A-Za-z\s]+" title="Only letters and spaces are allowed"
                                    class="w-full border border-gray-300 p-[11px] rounded-md outline-none">
                                <span id="parent-error" class="text-red-500 text-sm mt-1 block"></span>
                            </div>

                            <!-- Mobile number -->
                            <div class="mt-4">
                                <input type="tel" name="mobile" id="phone-validate" placeholder="Mobile Number"
                                    maxlength="10"
                                    class="w-full border border-gray-300 p-[11px] rounded-md outline-none">
                                <div id="mobileErrorss" class="text-red-500 text-sm mt-1 hidden">Please enter valid
                                    phone number</div>
                            </div>

                            <!-- Email -->
                            <div class="mt-4">
                                <input type="text" name="email" id="email-validate" placeholder="E-mail"
                                    class="w-full border border-gray-300 p-[11px] rounded-md outline-none">
                                <span id="emailErrorss" class="text-red-500 text-sm mt-1 hidden">Please enter a valid
                                    email address.</span>
                            </div>

                            <!-- Address -->
                            <div class="mt-4">
                                <textarea name="address" id="address_val" placeholder="Address"
                                    class="w-full border border-gray-300 p-[11px] rounded-md outline-none"></textarea>
                                <span id="address-error" class="text-red-500 text-sm mt-1 block"></span>
                            </div>

                            <!-- Terms -->
                            <div class="mt-4 flex items-center gap-2">
                                <input type="checkbox" id="terms" required>
                                <label for="terms">I agree to <a href="termsandconditions.php"
                                        class="text-blue-500 underline">Terms and
                                        Conditions</a>.</label>
                            </div>

                        <!-- Submit -->
                        <div class="mt-4">
                            <button type="submit"
                                class="p-4 bg-blue-main w-full text-white font-semibold text-[18px] rounded hover:bg-red-500 transition">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    </script>


    <?php include "includes/footer.php" ?>
    <?php include "includes/foot.php" ?>


</body>

</html>