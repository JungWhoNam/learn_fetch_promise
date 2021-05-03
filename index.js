// https://placeimg.com/64/64/3"
// cannot use this url due to CORS
// so fetches a local image for this test


// Option #1... using then(...)
// const divEle = document.querySelector("div");
// divEle.innerHTML += `
//         <img alt="img">
//         <br />
//     `;

// const imgEle = document.querySelector("img");

// fetch('/imgs/test0.png')
//     .then(response => {
//         if (response.ok) {
//             return response.blob();
//         }
//         else {
//             throw new Error("Fail...");
//         }
//     })
//     .then(blob => {
//         // turn the blob into HTML can use.
//         imgEle.src = URL.createObjectURL(blob);
//     })
//     .catch(error => console.error(error));


// Option #2... using async wait
// const divEle = document.querySelector("div");
// divEle.innerHTML += `
//         <img alt="img">
//         <br />
//     `;

// const imgEle = document.querySelector("img");

// showDummyImage('./imgs/test1.png')
//     .then(response => {
//         console.log("Success!", response)
//     })
//     .catch(error => { console.error(error) });

// async function showDummyImage(url) {
//     const response = await fetch(url);
//     if (!response.ok) throw new Error("Fail...");
//     const blob = await response.blob();
//     imgEle.src = URL.createObjectURL(blob);
//     return "Updated... " + imgEle.id;
// }


// #3... showing multiple images (multiple promises)
const proms = [
    getBlob('imgs/test0.png'),
    getBlob('imgs/test1.png'),
    getBlob('imgs/test0.png'),
    getBlob('imgs/test1.png'),
    getBlob('imgs/test0.png')
];

const divEle = document.querySelector("div");
proms.forEach(v => {
    divEle.innerHTML += `
        <img alt="img">
        <br />
    `;
});

const imgElements = document.querySelectorAll("img");

// try all, any, race
Promise.any(proms)
    .then(blobs => {
        // Promise.all
        if (Array.isArray(blobs)) {
            imgElements.forEach((imgEle, idx) => {
                imgEle.src = URL.createObjectURL(blobs[idx]);
            });
        }
        // any, race
        else {
            imgElements.forEach((imgEle, idx) => {
                imgEle.src = idx == 0 ? URL.createObjectURL(blobs) : "imgs/lose.png";
            });
        }
    })
    .catch(error => {
        console.error(error);
    });

async function getBlob(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Fail...");
    const blob = await response.blob();
    return blob;
}