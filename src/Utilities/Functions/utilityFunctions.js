function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function getSize(cssSelector){
    const element = document.querySelector(cssSelector)
    
    return {
        height: element.offsetHeight,
        width: element.offsetWidth
    }
}

export {convertRemToPixels, getSize}