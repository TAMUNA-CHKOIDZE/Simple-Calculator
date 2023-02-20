(function () {
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let clear = document.querySelector(".btn_clear");
    let equal = document.querySelector(".btn_equal");
    let plus = document.querySelector(".btn_plus");

    // ეკრანზე რომ დაიბეჭდოს ის რასაც ღილაკებზე დაწოლის დროს განვახორციელებთ
    buttons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener("click", function (e) {
        if (screen.value === "") {
            screen.value = "";
        }
        else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    });

    clear.addEventListener("click", function (e) {
        screen.value = "";
    });
})();