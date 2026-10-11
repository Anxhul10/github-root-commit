const observer = new MutationObserver(() => {
    document.body.style.border = "5px solid red";

    const curr_div = document.querySelector(
        ".d-flex.flex-column.flex-sm-row.gap-2"
    )
    if(!curr_div)return;
    if(document.getElementById("jumper-div")) return;

    const main_div = document.createElement("div");
    main_div.id = "jumper-div";

    const btn = document.createElement("button");
    btn.id = "btn-id";
    btn.textContent = "Jump to oldest commits";
    btn.classList.add("button-40");

    main_div.appendChild(btn);
    curr_div.appendChild(main_div);
})

observer.observe(document.body, {
    childList: true,
    subtree: true
});

