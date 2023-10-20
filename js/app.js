const randomHexColor = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

const spanHexValue = document.querySelector('#hex-value');

const changeBgColor = () => {
    const hexColor = randomHexColor();
    document.body.style.background = hexColor;
    spanHexValue.textContent = hexColor;
}
