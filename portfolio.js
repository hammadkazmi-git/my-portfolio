const links = document.querySelectorAll('.link');
const button = document.getElementById("btn");
const button1 = document.getElementById("btn1");
const toggleMenu = () => {
document.getElementById("navlink").classList.toggle("show");
};
links.forEach(link => {
link.addEventListener('click', function() {
links.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
});
});
window.addEventListener("scroll", () => {
if(scrollY > 100) {
 btn.style.display = "block"
}
else {
      btn.style.display = "none"
    }
});
window.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
});