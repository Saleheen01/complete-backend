// const {ImageKit} = require('@imagekit/imagekit');
const ImageKit = require("@imagekit/nodejs").default;

const imagekit = new ImageKit({
    
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
   
});

async function uploadFile(buffer){
    
    console.log(buffer);

    const result= await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.png",
    })
    return result;
}
module.exports = {uploadFile};

// import ImageKit from '@imagekit/nodejs';

// const client = new ImageKit({
//   privateKey: process.env['private_aEs/lSE29RhiYmJvRRsZDZd3AEw='], // This is the default and can be omitted
// });

// const response = await client.files.upload({
//   file: buffer.toString("based64"),
//   fileName: 'Screenshot 2026-11-04 100936.png',
// });

// console.log(response);