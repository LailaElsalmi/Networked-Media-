require("dotenv").config();
const fs = require("node:fs");
const m = require("masto");



// Mastodon API client setup
const masto = m.createRestAPIClient({
    url: "https://networked-media.itp.io/",
    accessToken: process.env.TOKEN,
});



// Function to post a random MJ ghost message
async function mjghost() {
    const messages = [
        "I'm haunting the timeline! heeehee!",
        "We are the world and stuff, heehee!",
        "Moonwalkin' heehee!",
        "THRIIIILAAAA THRILLAAAA NIGHT, heeehee!",
        "DIRTY DIANAAA UGH, heeeehee!",
        "Guys Billie Jean was NOT my lover! shes just a giiiirllllll guysssssss, heeheee!"

    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];

    await masto.v1.statuses.create({
        status: randomMessage,
        visibility: "public",
    });

    console.log("Posted an MJ ghost message:", randomMessage);
}

// https://github.com/neet/masto.js/blob/main/examples/create-new-status-with-image.ts
const path = require('path');
async function postImage() {
    const imagePaths = [
        "media/image1.png",
        "media/image2.png",
        "media/image3.png",
        "media/image4.png"
    ];
    const randomImage = imagePaths[Math.floor(Math.random() * imagePaths.length)];

    const media = await masto.v2.media.create({
        file: new Blob([fs.readFileSync(randomImage)]),
        description: "MJ image",
    });

    await masto.v1.statuses.create({
        status: "",
        mediaIds: [media.id],
        visibility: "public",
    });

    console.log("Posted an MJ ghost image:", randomImage);
}

//postImage();

function scheduleMjghost() {
    setInterval(async () => {
        console.log("Triggering MJ ghost message...");
        await mjghost();
    }, 900000);
}

function schedulePostImage() {
    setInterval(async () => {
        console.log("Triggering MJ ghost image post...");
        await postImage();
    }, 1800000);
}

scheduleMjghost();
schedulePostImage();

