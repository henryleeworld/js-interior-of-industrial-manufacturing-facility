var $fan = $(".contactbg #Fan");
var $fan2 = $(".contactbg #Fan2");
var $valve = $(".contactbg #Valve");
var $wheel = $(".contactbg #Wheel");
var $boxLight1 = $(".contactbg #Boxlight1");
var $boxLight2 = $(".contactbg #Boxlight2");

var $thisCloud;
for (i = 1; i <= 5; i++) {
    $thisCloud = $("#Cloud" + i);
    TweenMax.set($thisCloud, {
        opacity: 0,
        scaleX: 0,
        scaleY: 0,
        y: "28px"
    });
}

TweenMax.set([$("#Sky"), $("#Bluebg"), $("#Water")], {
    scaleX: 8,
    x: "-300px"
});
TweenMax.set([$boxLight1, $boxLight2], {
    opacity: 0
});

var cloud1Tween = new TimelineMax({
    repeat: -1
});
cloud1Tween.to([$("#Cloud1")], 1, {
        delay: 2,
        opacity: .2,
        scaleX: .1,
        scaleY: .1,
        x: "0px",
        y: "23px",
        ease: Power2.easeIn
    })
    .to($("#Cloud1"), 8, {
        opacity: .8,
        scaleX: .8,
        scaleY: .8,
        x: "-10px",
        y: "-50px",
        ease: Power2.easeInOut
    });

var cloud2Tween = new TimelineMax({
    repeat: -1
});
cloud2Tween.to([$("#Cloud2")], 1, {
        delay: 12,
        opacity: .2,
        scaleX: .1,
        scaleY: .1,
        x: "0px",
        y: "23px",
        ease: Power2.easeIn
    })
    .to($("#Cloud2"), 8, {
        opacity: .8,
        scaleX: .8,
        scaleY: .8,
        x: "-10px",
        y: "-100px",
        ease: Power2.easeInOut
    });

var cloud4Tween = new TimelineMax({
    repeat: -1
});
cloud4Tween.to([$("#Cloud4")], 1, {
        delay: 20,
        opacity: .2,
        scaleX: .1,
        scaleY: .1,
        x: "0px",
        y: "23px",
        ease: Power2.easeIn
    })
    .to($("#Cloud4"), 8, {
        opacity: .8,
        scaleX: .8,
        scaleY: .8,
        x: "-10px",
        y: "-100px",
        ease: Power2.easeInOut
    });

for (i = 1; i <= 4; i++) {
    var $thisLight = $("#wl" + i);
    TweenMax.set($thisLight, {
        opacity: "0"
    });
    TweenMax.to($thisLight, 4, {
        delay: i,
        opacity: 1,
        repeat: -1,
        yoyo: true
    });
}

TweenMax.to($fan, 1, {
    rotation: 360,
    transformOrigin: "center 8px",
    repeat: -1,
    ease: Power0.easeInOut
});
TweenMax.to($fan2, 3, {
    rotation: -720,
    transformOrigin: "3.4px 4.6px",
    repeat: -1,
    ease: Power0.easeInOut
});
TweenMax.to($valve, 4, {
    delay: 4,
    rotation: 360,
    transformOrigin: "11px 11px",
    repeat: -1,
    ease: Quad.easeOut
});
TweenMax.to($wheel, 4, {
    rotation: 360,
    transformOrigin: "26px 26px",
    repeat: -1,
    ease: Power0.easeInOut
});

function bringBox(thisBox, thedelay) {
    TweenMax.to(thisBox, 2, {
        y: "4px",
        delay: thedelay,
        ease: Power2.easeOut,
        onComplete: dropBox,
        onCompleteParams: [thisBox]
    });
}

function dropBox(thisBox) {
    console.log("drop!");
    TweenMax.to(thisBox, 1, {
        y: "17.5px",
        ease: Bounce.easeOut,
        onComplete: moveBox1,
        onCompleteParams: [thisBox]
    });
}

function moveBox1(thisBox) {
    TweenMax.to(thisBox, 3, {
        x: "45px",
        ease: Power2.easeIn,
        onComplete: moveBox2,
        onCompleteParams: [thisBox]
    });
}

function moveBox2(thisBox) {
    TweenMax.to(thisBox, .3, {
        x: "55px",
        y: "19px",
        rotation: 25,
        ease: Power0.easeNone,
        onComplete: moveBox3,
        onCompleteParams: [thisBox]
    });
}

function moveBox3(thisBox) {
    TweenMax.to(thisBox, 2, {
        x: "100px",
        y: "45px",
        ease: Power0.easeNone,
        onComplete: moveBox4,
        onCompleteParams: [thisBox]
    });
}

function moveBox4(thisBox) {
    TweenMax.to(thisBox, 1, {
        y: "63px",
        x: "105px",
        rotation: 92,
        ease: Bounce.easeOut,
        onComplete: moveBox5,
        onCompleteParams: [thisBox]
    });
}

function moveBox5(thisBox) {
    TweenMax.to(thisBox, 3, {
        x: "140px",
        ease: Power0.easeNone,
        onComplete: boxLights,
        onCompleteParams: [thisBox]
    });
}

function boxLights(thisBox) {
    TweenMax.to($boxLight1, .5, {
        opacity: 1,
        ease: Elastic.easeOut
    });
    TweenMax.to($boxLight2, .5, {
        opacity: 1,
        delay: .5,
        ease: Elastic.easeOut,
        onComplete: resetBox,
        onCompleteParams: [thisBox]
    });
}

function resetBox(thisBox) {
    TweenMax.to($boxLight1, 1, {
        opacity: 0,
        ease: Elastic.easeOut,
        delay: .5
    });
    TweenMax.to($boxLight2, 1, {
        opacity: 0,
        delay: 1,
        ease: Elastic.easeOut,
        onComplete: bringBox,
        onCompleteParams: [thisBox, 1]
    });
    TweenMax.set(thisBox, {
        x: "0px",
        y: "0px",
        rotation: 0
    });
}
var theBox;
for (i = 0; i <= 4; i++) {
    theBox = $("#Box" + i);
    TweenMax.to(theBox, 0, {
        delay: i,
        x: "0px",
        y: "0px",
        rotation: 0,
        onComplete: bringBox,
        onCompleteParams: [theBox, i * 2]
    });
}
var $ball = $("#ball1");

function bringBall(thisBall, thedelay) {
    TweenMax.to(thisBall, 2, {
        y: "-10px",
        delay: thedelay,
        ease: Power2.easeIn,
        onComplete: moveBall,
        onCompleteParams: [thisBall]
    });
}

function moveBall(thisBall) {
    TweenMax.to(thisBall, 3, {
        x: "28px",
        y: "-11px",
        ease: Power0.easeNone,
        onComplete: moveBall2,
        onCompleteParams: [thisBall]
    });
}

function moveBall2(thisBall) {
    TweenMax.to(thisBall, .5, {
        x: "30px",
        y: "-13px",
        ease: Power0.easeNone,
        onComplete: moveBall3,
        onCompleteParams: [thisBall]
    });
}

function moveBall3(thisBall) {
    TweenMax.to(thisBall, .5, {
        x: "32px",
        y: "-80px",
        ease: Power0.easeNone,
        onComplete: moveBall4,
        onCompleteParams: [thisBall]
    });
}

function moveBall4(thisBall) {}