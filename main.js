function get_base_url(url) {
    let i = url.length-1;

    let cnt = 0;

    while(i >=0 ) {
        if(url[i] === '/') cnt++;
        i--;
        if(cnt === 3) break;
    }

    let final_url = "";

    let j = 0;

    while(j <= i) {
        final_url += url[j];
        j++;
    }
    return final_url;
}

function get_branch() {
    const branch = document.querySelector(
        '.RefSelectorAnchoredOverlay-module__RefSelectorText__w_fmP'
    ).textContent;
    return branch;
}

function get_sha() {
    const container = document.querySelector('.ListView-module__ul__uMK30');
    const itms = container.querySelectorAll('li');
    const url = itms[0].getAttribute('data-commit-link');
    const url_split = url.split('/');
    return url_split[url_split.length-1];
}
function get_url() {
    const curr_url = document.location.href;
    const base_url = get_base_url(curr_url);
    const branch = get_branch();
    const SHA = get_sha();
    const total_commit = Number(prompt("Total commits"));

    const URL = `${base_url}/commits/${branch}/?after=${SHA}+${total_commit+1-34}`
    return URL;
}

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

    btn.addEventListener("click", function () {
        location = get_url();
    })

    btn.classList.add("button-40");

    main_div.appendChild(btn);
    curr_div.appendChild(main_div);
})

observer.observe(document.body, {
    childList: true,
    subtree: true
});

