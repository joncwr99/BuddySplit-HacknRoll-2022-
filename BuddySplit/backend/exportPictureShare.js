// https://stackoverflow.com/questions/49484159/react-native-can-we-share-an-image-and-text-into-whatsapp
// https://github.com/react-native-share/react-native-share/issues/603
// https://dev.to/majiyd/react-native-series-how-to-save-or-share-react-native-component-as-an-image-5gd3

import React, { Component } from 'react';
import { Share } from 'react-native';

const SharingRecipt = () => {
  const onShare = async (base64Data) => {
    try {
      const result = await Share.share({
        message: 'Buddy Split Receipt',
        url: base64Data,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    onShare // a promise that takes in base64 image stream
  );
};

export default SharingRecipt;
