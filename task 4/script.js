function analyze() {
    let text = document.getElementById("text").value;

    if (text.trim() === "") {
        document.getElementById("result").innerHTML = "Please enter text!";
        return;
    }

    let charCount = text.length;

    let words = text.trim().split(/\s+/);
    let wordCount = words.length;

    let reversed = text.split("").reverse().join("");

    document.getElementById("result").innerHTML =
        "Characters: " + charCount + "<br>" +
        "Words: " + wordCount + "<br>" +
        "Reversed Text: " + reversed;
}