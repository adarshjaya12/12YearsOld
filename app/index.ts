import ScrollSnap from 'scroll-snap';

const snapConfig={
    scrollSnapDestination: '90% 0%', // *REQUIRED* scroll-snap-destination css property, as defined here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination
    scrollTimeout: 100, // *OPTIONAL* (default = 100) time in ms after which scrolling is considered finished
    scrollTime: 300 // *OPTIONAL* (default = 300) time in ms for the smooth snap
}

function callback () {
    console.log('called when snap animation ends')
  }

let viewPortWidth;
let viewPortHeight;
let spanElements: HTMLCollectionOf<Element>;

function updateViewPort(){
    // More standard Compatible browsers
    if (typeof window.innerWidth !='undefined')
    {
        viewPortHeight = window.innerHeight;
        viewPortWidth = window.innerWidth;
    }
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined'
    && typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0)
    {
        viewPortWidth = document.documentElement.clientWidth,
        viewPortHeight = document.documentElement.clientHeight
    }
    // older versions of IE
    else
    {
        viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
        viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }
}

function initialSet():void{
    for(let i=0 ; i < spanElements.length;i++)
    {
        var element = spanElements[i] as HTMLDivElement;
        element.style.height = viewPortHeight;
        element.style.width= viewPortWidth;
        if(i ==0)
            element.className = "parallel-span active";
    }
    
}

function setScrollSnap():void{
    var containerElement = document.getElementById("container");
    const snapObject = new ScrollSnap(containerElement, snapConfig)
    snapObject.bind(callback)
}

function scrollDownFunction():void{
    for(let i=0; i< spanElements.length; i++)
    {
        var element = spanElements[i] as HTMLDivElement;
        if(element.className.indexOf("active") !== -1){
            if(i != spanElements.length-1){
                element.className="parallel-span";
                var nextElement = spanElements[i+1] as HTMLDivElement;
                if(nextElement !== undefined)
                {
                    nextElement.className="parallel-span active";
                    break;
                }
            }
        }
    }
}
function scrollUpFunction():void{
    for(let i=0; i< spanElements.length; i++)
    {
        var element = spanElements[i] as HTMLDivElement;
        if(element.className.indexOf("active") !== -1){
            if(i != 0 ){
                element.className="parallel-span";
                var nextElement = spanElements[i-1] as HTMLDivElement;
                if(nextElement !== undefined)
                {
                    nextElement.className="parallel-span active";
                    break;
                }
            }
        }
    }
}

function setElementsToViewPort():void{
    for(let i=0; i< spanElements.length; i++)
    {
        var element = spanElements[i] as HTMLDivElement;
        element.style.height = viewPortHeight;
        element.style.width= viewPortWidth;
    }

}
    
window.onresize = () =>{
    updateViewPort();
    setElementsToViewPort();
};

window.onload =() =>{
    let lastScrollValue = 0;
    let threshold = 300 ;
    updateViewPort();
    spanElements = document.getElementsByClassName("parallel-span");
    let bodyElement = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    initialSet();
    setScrollSnap();
    window.onscroll = () =>{
        let st = window.pageYOffset || document.documentElement.scrollTop; 
        let diff = st -lastScrollValue;
        let downDiff = lastScrollValue - st;
        if(diff > threshold){
            scrollDownFunction();
            lastScrollValue = st;
        }
        if(downDiff > threshold){
            scrollUpFunction();
            lastScrollValue = st;
        }
    }
}