function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function getDOMElementSize(cssSelector){
    const element = document.querySelector(cssSelector)
    
    return {
        height: element.offsetHeight,
        width: element.offsetWidth
    }
}

export {convertRemToPixels, getDOMElementSize}