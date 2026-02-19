
let buttons = document.querySelectorAll(".btn");
let textbox = document.querySelector("#t1");

for (let b of buttons) {
    b.addEventListener("click", function () {

        let value = b.innerText;

        if (value === "=") {
            try {
                textbox.value = eval(textbox.value);
            } catch {
                textbox.value = "Error";
            }
        }
        else if (value === "C") {
            textbox.value = "";
        }
        else if (value === "DEL") {
            textbox.value = textbox.value.slice(0, -1);
        }
        else {
            textbox.value += value;
        }

    });
}