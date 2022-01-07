import React from 'react';
import { Text } from 'react-native';
import { Input } from '@ui-kitten/components';

// billSplittingMain Component 
/*
    pass in the number of users and the food items from receipt OCR

    invoke "get GST and service charge"

    Run For loop for each user:

        invoke "Select items component"
        invokes "Calculate each person's bill component"
        append the price to a key value array (key -> userNo, Value -> computed value)

    return array for rendering
    
*/
const billSplittingMain = (numUsers, foodItems) => {

    const gstPercent = getGST(); // UI to get GST input
    const servicePercent = getServiceCharge(); // UI to get service Charge input
    const allUserFinalPriceArr = [];
    for (var i=0; i < numUsers; i++) {
        const selectedItemsIndex = selectItems(foodItems);
        const currUserFinalPrice = calculateFinalPrice(selectedItemsIndex);
        allUserFinalPriceArr.push(currUserFinalPrice);
    }
    return allUserFinalPriceArr;
}

// GST and Service Charge getters and converters

const getGST = () => {
    // Based on the FrontEnd code
    InputSimpleUsageShowcase('Input GST Percentage');
    return gstValue / 100;
}

const getServiceCharge = () => {
    // Based on the FrontEnd code
    InputSimpleUsageShowcase('Input Service Charge Percentage');
    return getServiceCharge / 100;
}


// Calculate each person's bill component
/*
    Based on GST and service charge, computate the user selected items' and return 
    them their amt to pay
*/

const calculateFinalPrice = (selectedItemsIndexsArr, gstPercent, servicePercent, priceList) => {

    const numSelectedItems = selectedItemsIndexsArr.length;
    const sumFinalPricesPerUser = 0;
    for (let i =0; i < numSelectedItems; i++) {
        sumFinalPricesPerUser += priceList.indexof(i) * (1 + gstPercent) * (1 + servicePercent);
    }
    return sumFinalPricesPerUser;
}