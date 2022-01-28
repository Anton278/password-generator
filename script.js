const btn = document.getElementById("btn");

const getPassword = (isLowerCaseChoosen, isUpperCaseChoosen, isDigitsChoosen, countOfLetters) => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const digits = "0123456789";

    countOfLetters = Number(countOfLetters);

    let temp = "";

    isLowerCaseChoosen && (temp += lowerCaseLetters);
    isUpperCaseChoosen && (temp += upperCaseLetters);
    isDigitsChoosen && (temp += digits);

    if (temp.length === 0) return "Error: Forgot choose option";
    if (countOfLetters === 0) return "Error: Forgot choose count of letters";

    let result = "";

    for (let i = 0; i < countOfLetters; i++) {
        result += temp[Math.trunc(Math.random() * temp.length)];
    }

    return "Result: " + result;
};

btn.addEventListener("click", () => {
    const out = document.getElementById("out");
    const isLowerCaseChoosen = document.getElementById("lowercase").checked;
    const isUpperCaseChoosen = document.getElementById("uppercase").checked;
    const isDigitsChoosen = document.getElementById("digits").checked;
    const countOfLetters = document.getElementById("count-of-letters").value;

    out.innerText = getPassword(isLowerCaseChoosen, isUpperCaseChoosen, isDigitsChoosen, countOfLetters);
});