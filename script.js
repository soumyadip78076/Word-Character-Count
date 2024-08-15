let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function () {
    var text = this.value;

    // Count characters
    let charCount = text.length;
    document.getElementById("char").innerHTML = charCount;

    // Count words
    let wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
    document.getElementById("word").innerHTML = wordCount;
});
