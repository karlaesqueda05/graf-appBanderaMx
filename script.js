const verde = document.getElementById("verde");
const rojo = document.getElementById("rojo");

const verdeRange = document.getElementById("verdeRange");
const rojoRange = document.getElementById("rojoRange");

const verdeHEX = document.getElementById("verdeHEX");
const rojoHEX = document.getElementById("rojoHEX");

function toHex(valor) {
    let hex = parseInt(valor).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

verdeRange.addEventListener("input", () => {
    let v = verdeRange.value;
    let hex = `#00${toHex(v)}00`;

    verde.style.background = hex;
    verdeHEX.textContent = hex;
});

rojoRange.addEventListener("input", () => {
    let r = rojoRange.value;
    let hex = `#${toHex(r)}0000`;

    rojo.style.background = hex;
    rojoHEX.textContent = hex;
});