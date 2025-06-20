<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.0.2/glide.js"></script>
<script src="assets/js/wind.js"></script>

<script>
      document.addEventListener("DOMContentLoaded", function() {
            window.addEventListener("scroll", function() {
                if (window.scrollY > 100) {
                    document.getElementById("scroll").style.display = "block";
                } else {
                    document.getElementById("scroll").style.display = "none";
                }
            });

            document.getElementById("scroll").addEventListener("click", function() {
                setTimeout(function() {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });
                }, 500); // 500ms delay
            });
        });
</script>

<script>
    var glide09 = new Glide('.glide-marque', {
        type: 'carousel',
        autoplay: 1,
        animationDuration: 4500,
        animationTimingFunc: 'linear',
        perView: 3,
        classes: {
            activeNav: '[&>*]:bg-slate-700',
        },
        breakpoints: {
            1024: {
                perView: 2
            },
            640: {
                perView: 1,
                gap: 36
            }
        },
    });

    glide09.mount();
</script>

<script>
    const openPopup = document.getElementById('openPopup');
    const closePopup = document.getElementById('closePopup');
    const popupForm = document.getElementById('popupForm');

    openPopup.addEventListener('click', (e) => {
      e.preventDefault(); // Prevents default anchor behavior
      popupForm.classList.remove('hidden');
    });

    closePopup.addEventListener('click', () => {
      popupForm.classList.add('hidden');
    });

    popupForm.addEventListener('click', (e) => {
      if (e.target === popupForm) {
        popupForm.classList.add('hidden');
      }
    });
  </script>
<script>
  const openEnquiryBtn = document.getElementById('ctaEnquireBtn');
  const closeEnquiryBtn = document.getElementById('customCloseBtn');
  const enquiryPopup = document.getElementById('customEnquiryPopup');

  openEnquiryBtn.addEventListener('click', (e) => {
    e.preventDefault();
    enquiryPopup.classList.remove('hidden');
  });

  closeEnquiryBtn.addEventListener('click', () => {
    enquiryPopup.classList.add('hidden');
  });

  enquiryPopup.addEventListener('click', (e) => {
    if (e.target === enquiryPopup) {
      enquiryPopup.classList.add('hidden');
    }
  });
</script>


  <script>
  document.addEventListener('DOMContentLoaded', function () {
    const toggles = document.querySelectorAll('input[type="checkbox"]');

    toggles.forEach((toggle) => {
      toggle.addEventListener('change', function () {
        if (this.checked) {
          toggles.forEach((otherToggle) => {
            if (otherToggle !== this) {
              otherToggle.checked = false;
            }
          });
        }
      });
    });
  });
</script>

<script>
 
document.getElementById("openPopup").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("popupForm").classList.remove("hidden");
});

document.getElementById("closePopup").addEventListener("click", function() {
    document.getElementById("popupForm").classList.add("hidden");
});

 document.getElementById('enquiryForm').addEventListener('submit', function(e) {
        const studentInput = document.getElementById('student_val');
        const parentInput = document.getElementById('parent_val');
        const mobileInput = document.getElementById('mobile_val');
        const emailInput =  document.getElementById('email_val');
        const addressInput = document.getElementById("address_val");

        const studentError = document.getElementById("student-error");
        const parentError = document.getElementById("parent-error");
        const mobileError = document.getElementById('mobile-error');
        const emailError =  document.getElementById('email-error');
        const addressError = document.getElementById("address-error");

        const student = studentInput.value.trim();
        const parent = parentInput.value.trim();
        const mobile = mobileInput.value.trim();
        const email = emailInput.value.trim();
        const address = addressInput.value.trim();

        const namePattern = /^[a-zA-Z ]+$/; // Only letters and spaces
        const mobileRegex = /^[6-9]\d{9}$/; // Indian 10-digit mobile
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const addressPattern = /^[a-zA-Z0-9\s.,?!-]+$/;

        let isValid = true;

        // Clear previous errors
        studentError.textContent = '';
        parentError.textContent = '';
        mobileError.textContent = '';
        emailError.textContent = '';
        addressError.textContent = '';

        if (!namePattern.test(student)) {
            studentError.textContent = "Student name can only contain letters and spaces.";
            isValid = false;
        }

        if (!namePattern.test(parent)) {
            parentError.textContent = "Parent name can only contain letters and spaces.";
            isValid = false;
        }

        if (!mobileRegex.test(mobile)) {
            mobileError.textContent = "Please enter a valid 10-digit mobile number starting with 6-9.";
            isValid = false;
        }

        if (!emailRegex.test(email)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false;
        }

        if (!addressPattern.test(address)) {
            addressError.textContent = "Address cannot contain special characters other than , . ? ! -";
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault(); // Stop form submission
        }
    });
 
 
</script>
 
