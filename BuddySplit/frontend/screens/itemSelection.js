import React from 'react';
import tailwind from 'tailwind-rn';
import { Text, Layout, Divider, List, ListItem, Button } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView } from "react-native";
import Counter from "react-native-counters";

const plusMinusBtn = () => {
    return(
        <Counter start={1} onChange={(number, type) => onChange(number, type)} />
    )
}

const SelectPage = ( props ) => {
    
    const renderItem = ({ item, index }) => (
        
      <ListItem
        // TODO: Get it working ... 
        // accessoryRight = {plusMinusBtn}
        title={`${index + 1}.      ${item} `}
        //description={`${item.description} ${index + 1}`}
      />
    );
  
    return (
        <View key={props.index}>
            <Text style={tailwind("text-center font-bold")}> Payee {props.index+1}</Text>
            <List
                style = {tailwind('')}
                data={props.item}
                ItemSeparatorComponent={Divider}
                renderItem={renderItem}
            />
            {/* <Layout style = {tailwind("flex-row m-1")}>
                <Text style = {tailwind('font-bold ml-10 right-8 ')}> SubTotal:  </Text>
                <Text style = {tailwind('font-bold ml-20 pl-20 left-12')}> {calculateTotal(props.price).toFixed(2)} </Text> 
            </Layout> */}
        </View>
    );
  };
  
renderLists = (item, numPax) => {
    var output = [];
    for(let i = 0; i < numPax; i ++) {
        var tempItem = (
            <ScrollView key = {i}>
                <SelectPage 
                    item = {item}
                    index = {i}
                />
            </ScrollView>
        );
        output[i] = (tempItem);
    }

    return(
        output
    )
}

export default ItemSelection = ({ route }) => {
    const navigation = useNavigation();
     

    //console.log(route.params);
    return (
        <Layout style={tailwind("flex-1 ")}>
            <Layout style = {tailwind("flex-row m-2")}>
                <Text style = {tailwind('font-bold ml-10 right-8')}> Item(s) </Text>
                <Text style = {tailwind('font-bold ml-20 pl-20 left-20')}> Quantity </Text> 
            </Layout>
            <ScrollView key = {1}>
                {renderLists(route.params.ItemDetails.item, route.params.NumPayee)}
            </ScrollView>
            
            {/* <Layout style = {tailwind("justify-center m-1 flex-row")}>
                <Button 
                    style={tailwind("items-center")}
                    onPress = {() => {navigation.navigate("PayeeInfo", route.params)}}
                > Split </Button>

                <Button 
                    style={tailwind("items-center left-2")}
                    onPress = {() => {navigation.navigate("View History")}}
                > Save </Button>
            </Layout> */}
        </Layout>
    )
}
