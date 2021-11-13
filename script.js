setText = (x) => document.getElementById('text').value = x
setB32 = (x) => document.getElementById('b32').value = x
setB64 = (x) => document.getElementById('b64').value = x
setHex = (x) => document.getElementById('hex').value = x
setBinary = (x) => document.getElementById('binary').value = x


function textChanged () {
    setTimeout(() => {
        text = document.getElementById('text').value
        setBinary(binaryEncode(text))
        setHex(hexEncode(text))
        setB32(b32Encode(text))
        setB64(window.btoa(text))
    }, 1)
}
function base32Changed() {
    setTimeout(() => {
        b32 = document.getElementById('b32').value
        setText(b32Decode(b32))
        setBinary(binaryEncode(b32Decode(b32)))
        setHex(hexEncode(b32Decode(b32)))
        setB64(window.btoa(b32Decode(b32)))
    }, 1)
}
function base64Changed() {
    setTimeout(() => {
        b64 = document.getElementById('b64').value
        setText(window.atob(b64))
        setBinary(binaryEncode(window.atob(b64)))
        setHex(hexEncode(window.atob(b64)))
        setB32(b32Encode(window.atob(b64)))
    }, 1)
}
function hexaChanged() {
    setTimeout(() => {
        hex = document.getElementById('hex').value
        setText(hexDecode(hex))
        setBinary(binaryEncode(hexDecode(hex)))
        setB32(b32Encode(hexDecode(hex)))
        setB64(window.btoa(hexDecode(hex)))
    }, 1)
}
function binaryChanged() {
    setTimeout(() => {
        binary = document.getElementById('binary').value
        setText(binaryDecode(binary))
        setHex(hexEncode(binaryDecode(binary)))
        setB32(b32Encode(binaryDecode(binary)))
        setB64(window.btoa(binaryDecode(binary)))
    }, 1)
}
function c(type) {
    const btn = document.getElementById(type + 'btn');
    btn.className = "special"
    btn.innerText = "Copié✅"
    let copyText = document.getElementById(type);
    copyText.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setTimeout(() => {
        btn.className = "regular"
        btn.innerText = "Copier"
    }, 2500)
}