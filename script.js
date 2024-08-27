var active = 3; //default state:
var mncircles = document.querySelectorAll(".mncircle");//selecting all the circle buttons:
var sec = document.querySelectorAll(".sec");//selecting all the sec part of strip:

//Set default circle-btn opacity:
gsap.to(mncircles[active - 1], {
    opacity: .5,
}
)
//Set default sec-strip opacity:
gsap.to(sec[active - 1], {
    opacity: 1
})

//run loop on all the circle-btns:
mncircles.forEach((val, index) => {
    val.addEventListener("click", () => {
        //set rotation on circle according to circle-btn click:
        gsap.to(".circle", {
            rotate: (3 - (index + 1)) * 10,
            ease: Expo.easeInOut,
            duration: 1
        })

        greyout();//set opacity low of circle-btn & strip's sec part:

        //set opacity of circle-btn by their index:
        gsap.to(mncircles[index], {
            opacity: .5,
        })
        //set opacity of sec-strip by their index:
        gsap.to(sec[index], {
            opacity: 1
        })
    })
})
//set opacity low of circle-btn & strip's sec part:
greyout = () => {
    gsap.to(mncircles, {
        opacity: .08
    })
    gsap.to(sec, {
        opacity: .4
    })
}

//default rotation for circle:
gsap.to(".circle", {
    rotate: 0,
    ease: Expo.easeInOut,
    duration: 2
})