//
//  PocketCastsBeta.plist
//  BeardedSpice
//
//  Created by Ion Ander Gurrutxaga on 10/16/17.
//  Copyright (c) 2015 Tyler Rhodes / Jose Falcon. All rights reserved.
//
BSStrategy = {
version:1,
displayName:"PocketCasts (beta)",
accepts: {
method: "predicateOnTab",
format:"%K LIKE[c] '*play*.pocketcasts.com*'",
args: ["URL"]
},
toggle: function () {document.querySelector('div.animated-play-button').click()},
next: function () {document.querySelector('div.skip_forward_button').click()},
previous: function () {document.querySelector('div.skip_back_button').click()},
pause: function () {document.querySelector('div.pause_button').click()},
trackInfo: function () {
    return {
        'track': document.querySelector('div.controls div.episode-title').innerText,
        'album': document.querySelector('div.controls div.episode-title').innerText,
        'image': document.querySelector('div.controls div.image img').src,
    };
}
}
