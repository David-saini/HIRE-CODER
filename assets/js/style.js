// navbar function
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

// tabs1
function languageName(evt, coders) {
    var i, cardcontent, tabBtns;
    cardcontent = document.getElementsByClassName("cardcontent");
    for (i = 0; i < cardcontent.length; i++) {
        cardcontent[i].style.display = "none";
    }
    tabBtns = document.getElementsByClassName("tabBtns");
    for (i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }
    document.getElementById(coders).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// slider_1
$('.slider_1').slick({
    infinite: true,
    autoplay: true,
    arrows: false,
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

// developers_slider
$('.developers_slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    autoplay: true,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,

    responsive: [
        {
            breakpoint: 1145,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
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
            breakpoint: 550,
            settings: {
                slidesToShow: 2.1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 460,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
});
// work tab
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
document.getElementById('London').style.display = "block";
document.querySelector('.tablinks.active').classList.remove('active');
document.querySelector('.tablinks:first-child').classList.add('active');

//show more btn
var toggleBtn = document.getElementById("toggleBtn");
var content = document.getElementById("content");

toggleBtn.addEventListener("click", function () {
    if (content.style.display === "none") {
        content.style.display = "block";
        toggleBtn.textContent = "Show Less";
    } else {
        content.style.display = "none";
        toggleBtn.textContent = "Show More...";
    }
});

// video play function
// function openTab(tabName) {
//     var i, tabcontent, tablinks;
//     tabcontent = document.getElementsByClassName("video_content");
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }
//     document.getElementById(tabName).style.display = "block";
//     var videos = document.querySelectorAll("video");
//     for (i = 0; i < videos.length; i++) {
//         if (videos[i].id !== "videoPlayer" + tabName.charAt(tabName.length - 1)) {
//             videos[i].pause();
//         }
//     }
// }

// function togglePlayPause(videoId) {
//     var video = document.getElementById(videoId);
//     var button = document.querySelector("#" + videoId + "+ .playPauseBtn");
//     if (video.paused || video.ended) {
//         video.play();
//     } else {
//         video.pause();
//     }
//     button.style.display = video.paused || video.ended ? "block" : "none";
// }
// document.addEventListener("DOMContentLoaded", function () {
//     openTab("video1");
// });

