import React from 'react';
import tailwind from 'tailwind-rn';
import { Text, Layout, Divider, List, ListItem, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';



const calculateTotal = (priceList) => {
    let total = 0
    for(let i = 0; i < priceList.length; i++){
        total = total + parseFloat(priceList[i])
    }
    return total;
}
  
const SplitPage = ( props ) => {

    const format = (price) => {
        console.log(price);
        return(
            <Layout>
                <Layout style={tailwind("flex-row ")}>
                    <Text style={tailwind("text-xs right-10")}> ${price} </Text>
                </Layout>
            </Layout>
        )
    }
    
    console.log("this is here:" + props.price);
    const renderItem = ({ item, index }) => (
        
      <ListItem
        accessoryRight = { format(props.price[index]) }
        title={`${index + 1}.      ${item} `}
        //description={`${item.description} ${index + 1}`}
      />
    );
  
    return (
        <Layout>
            <List
                style = {tailwind('')}
                data={props.item}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />
            <Layout style = {tailwind("flex-row m-1")}>
                <Text style = {tailwind('font-bold ml-10 right-8 ')}> Total Price:  </Text>
                <Text style = {tailwind('font-bold ml-20 pl-20 left-12')}> {calculateTotal(props.price).toFixed(2)} </Text> 
            </Layout>

            
        </Layout>
    );
  };
  



export default ViewHistory = ({ route }) => {
    const navigation = useNavigation();
    return (
        <Layout style={tailwind("flex-1 ")}>
            <Layout style = {tailwind("flex-row m-2")}>
                <Text style = {tailwind('font-bold ml-10 right-8')}> Item(s) </Text>
                <Text style = {tailwind('font-bold ml-20 pl-20 left-20')}> Price </Text> 
            </Layout>
            
            <SplitPage 
                item = {route.params.item}
                price = {route.params.price}
            />
            <Layout style = {tailwind("justify-center m-1 flex-row")}>
                <Button 
                    style={tailwind("items-center")}
                    onPress = {() => {navigation.navigate("Camera")}}
                > Split </Button>

                <Button 
                    style={tailwind("items-center left-2")}
                    onPress = {() => {navigation.navigate("View History")}}
                > Save </Button>
            </Layout>
        </Layout>
    )
}
