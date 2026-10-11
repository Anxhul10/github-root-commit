const observer = new MutationObserver(() => {
    document.body.style.border = "5px solid red";

    const curr_div = document.querySelector(
        ".d-flex.flex-column.flex-sm-row.gap-2"
    )

    if(document.getElementById("jumper")) return;

    const new_div = document.createElement("div");
    new_div.id = "jumper";
    new_div.textContent = "Jump to old commits";

    curr_div.appendChild(new_div);
})

observer.observe(document.body, {
    childList: true,
    subtree: true
});