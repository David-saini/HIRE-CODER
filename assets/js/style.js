function opennav() {
    document.getElementById("menu").style.left = "0%";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}
function closenav() {
    document.getElementById("menu").style.left = "-100%";
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
}

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
// tabs