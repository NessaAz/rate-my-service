function convertRemToPixels(rem) {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

// Takes in a string such as "high-charts" and returns "highCharts"
function makeCamelCase(string){
    string = string.replace("_", " ") // because "_" is considered a word in regex
    string = string.toLowerCase()
    let stringArray = string.replace(/[^\w]/g, " ").split(" ").filter(s => s !== '')
    stringArray = stringArray.map((strItem, index) => {
        if(index == 0){
            return strItem
        }else {
            return strItem.charAt(0).toUpperCase() + strItem.slice(1)
        }
    })

    return stringArray.join("")
}

function getDOMElementSize(cssSelector){
    const element = document.querySelector(cssSelector)

    const elementName = makeCamelCase(cssSelector)
    
    return {
        [`${elementName}Height`]: element.offsetHeight,
        [`${elementName}Width`]: element.offsetWidth
    }
}

export {convertRemToPixels, getDOMElementSize}