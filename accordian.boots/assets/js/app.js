
/*accordian1*/
let accordian = document.querySelectorAll(".accordian");

accordian.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active");

        row.classList.toggle("active");
        x && x.classList.remove("active");
    })
})


/*accordian2*/
let accordian2 = document.querySelectorAll(".accordian-item-2");

accordian2.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active2");

        row.classList.toggle("active2");
        x && x.classList.remove("active2");
    })
})


/*accordian-item-3*/
let accordian3 = document.querySelectorAll(".accordian-item-3");

accordian3.forEach((row) => {
    row.addEventListener("click", () => {
        const x = document.querySelector(".active3");

        row.classList.toggle("active3");
        x && x.classList.remove("active3");
    })
})
