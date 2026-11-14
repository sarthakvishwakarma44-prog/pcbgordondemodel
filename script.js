var keys = [];

document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase();

    if (["w", "s", "a", "d", "arrowup", "arrowdown", "arrowleft", "arrowright", ",", "/"].includes(key)) {
        event.preventDefault();

        if (!keys.includes(key)) {
            keys.push(key);
            document.getElementById("log").innerHTML = "Key pressed: " + key;
        }
    }
});

document.addEventListener("keyup", function(event) {
    var key = event.key.toLowerCase();

    keys = keys.filter(function(item) {
        return item !== key;
    });

    document.getElementById("log").innerHTML = "Key released: " + key;
});

function stopAll() {
    keys = [];
    document.getElementById("log").innerHTML = "All controls stopped";
}

window.addEventListener("blur", stopAll);
