const id = (eid) => {
    return document.getElementById(eid);
};
const loadRestOfPage = () => {
    console.log("still wip for now!");
};
window.addEventListener("animationend", (e) => {
    if (e.animationName == "slideDownCenter") {
        if (document.readyState == "complete") {
            loadRestOfPage();
        } else {
            id("logo").classList.replace("center-sliding", "center");
            id("logo").classList.add("pulse");
            window.onload = () => {
                id("logo").classList.remove("pulse");
                loadRestOfPage();
            };
        }
    }
});