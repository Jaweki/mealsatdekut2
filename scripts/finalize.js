function transact_() {
    const btn = document.getElementById('frontButton');
    btn.value = ''; // Update the value of the backButton
    btn.setAttribute('onclick', "");

    var loadingText = '...';
      //clearInterval(interval);


    const loader = document.createElement('div');
    

    // loader.classList.add('loader')
    

    const cardSide = document.querySelector('.front');
    cardSide.innerHTML = '';

    const getStyles = getComputedStyle(cardSide);
    loader.style.cssText = getStyles;
    loader.classList.add('loader')
    loader.textContent = '';
    // loader.style.width = '100%';
    // loader.style.position = 'sticky';

    cardSide.appendChild(loader);


    setInterval(function() {
        if (loader.textContent === "PLEASE HOLD..." || btn.value === loadingText) {
            btn.value = "";
            loader.textContent = "PLEASE HOLD";
            cardSide.innerHTML = '';
            cardSide.appendChild(loader);
        } else {
            btn.value += ".";
            loader.textContent += ".";
            cardSide.appendChild(loader);
        }
      }, 500);
}