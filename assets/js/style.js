function opennav() {
    document.getElementById("menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closenav() {
    document.getElementById("menu").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

// year function
document.getElementById("currentYear").innerText =
    new Date().getFullYear();

// tabs
const tabs = document.querySelectorAll('.tabs li a');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', function (event) {
        event.preventDefault();

        // Remove 'active' class from all tabs
        tabs.forEach(tab => tab.parentNode.classList.remove('active'));

        // Hide all tab contents
        tabContents.forEach(content => content.style.display = 'none');

        // Add 'active' class to clicked tab
        this.parentNode.classList.add('active');

        // Display corresponding tab content
        const target = this.getAttribute('href').substring(1);
        document.getElementById(target).style.display = 'block';
    });
});

// slider_1
$('.slider_1').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2.05,
                slidesToScroll: 1,
            }
        },
    ]
});

// slider_2
$('.slider_2').slick({
    infinite: true,
    dots: false,
    arrows: false,
    autoplay: true,
    speed: 800,
    slidesToShow: 7,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});

// show or hide function
const showBtn = document.querySelector(".show_btn");
const hideBtn = document.querySelector(".hide_btn");
const experienceContent = document.querySelector(".experience_content");

showBtn.addEventListener("click", function () {
    experienceContent.style.display = "block";
    showBtn.style.display = "none";
    hideBtn.style.display = "inline-block";
});

hideBtn.addEventListener("click", function () {
    experienceContent.style.display = "none";
    hideBtn.style.display = "none";
    showBtn.style.display = "inline-block";
});

hideBtn.style.display = "none";


// 2nd tab
document.getElementById('London').style.display = "block";
document.querySelector('.tablinks.active').classList.remove('active');
document.querySelector('.tablinks:first-child').classList.add('active');

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}