const observer = new MutationObserver(() => {
    document.body.style.border = "5px solid red";
})

observer.observe(document.body, {
    childList: true,
    subtree: true
});