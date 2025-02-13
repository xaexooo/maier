document.getElementById("burger").addEventListener("click", function() {
    document.getElementById("popup").classList.add("show");
});
document.getElementById("close").addEventListener("click", function() {
    document.getElementById("popup").classList.remove("show");
});