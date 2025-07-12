function copyCode(index) {
    const code = document.getElementById(`code-${index}`).innerText;
    navigator.clipboard.writeText(code).then(() => {
        alert("Code copied!");
    }).catch(err => {
        alert("Failed to copy code.");
    });
}
