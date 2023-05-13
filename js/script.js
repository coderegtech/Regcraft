// navigation
document.querySelector(".toggle-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("active");
})

// scroll
const header = document.querySelector("header");
const navlinks = document.querySelectorAll(".nav-link");
const headerHeight = header.getBoundingClientRect().height;

navlinks.forEach((links) => {
    links.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - headerHeight;
        window.scrollTo({
            left: 0,
            top: position,
        });
    });
});

const about = document.querySelector("#about")

window.onscroll = () => {
    if (this.scrollY > 0) {
        header.classList.add("sticky");
        document.querySelector(".container").classList.remove("active");
    } else {
        header.classList.remove("sticky");
    }
    if (about.offsetTop <= this.innerHeight) {
        console.log(1);
    }
    
}