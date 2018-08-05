import ScrollSnap from 'scroll-snap';

const snapConfig={
    scrollSnapDestination: '0% 100%', // *REQUIRED* scroll-snap-destination css property, as defined here: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-destination
    scrollTimeout: 100, // *OPTIONAL* (default = 100) time in ms after which scrolling is considered finished
    scrollTime: 300 // *OPTIONAL* (default = 300) time in ms for the smooth snap
}

function callback () {
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

function setScrollSnap():void{
    var containerElement = document.getElementById("container");
    const snapObject = new ScrollSnap(containerElement, snapConfig)
    snapObject.bind(callback)
}
    
window.onload =() =>{
    spanElements = document.getElementsByClassName("parallel-span");
    setScrollSnap();
}