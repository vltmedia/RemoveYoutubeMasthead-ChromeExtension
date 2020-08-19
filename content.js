try{
elementt = document.getElementById("masthead-ad");
console.log("IF YOU'RE MISSING YOUR YOUTUBE MASTHEAD, YOU MAY HAVE FORGOT TO DISABLE THE 'Remove Politics Youtube Homepage' CHROME EXTENSION!! - Dev");
elementt.parentNode.removeChild(elementt);
}catch{

    console.log("Looks like there's no Youtube MastHead.");
}
