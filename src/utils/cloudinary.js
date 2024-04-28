import {v2} from "cloudinary"
import { log } from "console";
import { response } from "express";
import fs from 'fs'
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: CLOUDINARY_API_KEY, 
  api_secret: CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        //checking if local path exists or not
        if(!localFilePath) return null
        //uploading file on cloudinary
        cloudinary.uploader.upload(localFilePath, {
            resource_type : "auto"
        })
        console.log("file is successfully uploaded",
    response.url);
    return response;
    } catch (error) {
        //removing files fron server
        fs.unlinkSync(localFilePath) //remove locally saved temp file as the upload operation got failed
        return null
    }
} 

/*
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
*/

export { uploadOnCloudinary }