import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import tailwind from 'tailwind-rn';
import uuid from 'uuid';
import Environment from '../../config/enviroment';
import firebase from '../../config/firebase';
import { useNavigation } from "@react-navigation/native";
import { isExtensible } from 'core-js/core/object';


export default function CameraScan() {

  const navigation = useNavigation();
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.getCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    if (
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

 

  useEffect(() => {
    permisionFunction();
    takePicture();
  }, []);

    const takePicture = async () => {
      try{
        if (camera) {
          const options = { quality: 0.8, base64: true, skipProcessing: true,};
          const data  = await camera.takePictureAsync(options);
          console.log(data.uri);
          submitToGoogle(data.base64);
          
          // setImageUri(data.uri);
        }
      } catch(error) {
          console.log(error, "ERROR <<<<<<<<<<<<<");
      }
    };

    submitToGoogle = async (image) => {
      try {
        let body = JSON.stringify({
          requests: [
            {
              features: [
                { type: 'TEXT_DETECTION', maxResults: 5 },
                { type: 'DOCUMENT_TEXT_DETECTION', maxResults: 5 },
                // { type: 'IMAGE_PROPERTIES', maxResults: 5 },
                // { type: 'CROP_HINTS', maxResults: 5 },
                // { type: 'WEB_DETECTION', maxResults: 5 }
              ],
              image: {
                "content" : image
              }
            }
          ]
        });
        console.log(Environment['GOOGLE_CLOUD_VISION_API_KEY']);
        let response = await fetch(
          'https://vision.googleapis.com/v1/images:annotate?key=' +
            Environment['GOOGLE_CLOUD_VISION_API_KEY'],
          {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            body: body
          }
        );
        let responseJson = await response.json();
        
        
        // console.log(JSON.stringify(responseJson.responses[0].textAnnotations[0].description));
        const allItemsPrices = JSON.stringify(responseJson.responses[0].textAnnotations[0].description).split(/\\n|\r|\n\\/);
        console.log(allItemsPrices);
        
        const itemList = [];
        const priceList =[];

        allItemsPrices.pop();
        const allItemsPriceslen = allItemsPrices.length;


        for (let i = 0; i < allItemsPriceslen; i++) {
          if (i >= (allItemsPriceslen /2)) {
            priceList.push(allItemsPrices[i]);
          } else{
            itemList.push(allItemsPrices[i]);
          }
        }

        let itemToParse = {price: priceList, item: itemList}
        console.log("items to parse: ", itemToParse)
        navigation.navigate("ListItems", itemToParse);
        // console.log(itemList);
        // console.log(priceList);
      } catch (error) {
        console.log(error);
      }
    };
  
    
  
  return (
    <View style={tailwind("flex-initial items-center m-20")}>
      <View style={tailwind('items-center')}>
        <Camera
          ref={(ref) => setCamera(ref)}
          style={{ width: 250, height: 300 }}
          type={type}
          ratio={'1:1'}
        />
      </View>
      <View style = {tailwind('m-8')}>
        <Button title={'Take Picture'} onPress={takePicture} />
        
      </View>
      {imageUri && <Image source={{ uri: imageUri }} style={{ flex: 1 }} />}
    </View>
  );
}

