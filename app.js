const items = document.querySelectorAll(".inbox input[type='checkbox']");
console.log(items);

function handleCheck(e) {
    let inBetween = false;
    if(e.shiftKey && this.checked) {
        items.forEach(box => {
            if(box === this || box === lastChecked) {
                inBetween = !inBetween
            }

            if(inBetween) {
                box.checked = true;
            }
        });
    }
    lastChecked = this;
    console.log(lastChecked);
}

items.forEach(box => {
    box.addEventListener('click', handleCheck);
});