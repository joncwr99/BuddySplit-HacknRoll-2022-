import React from 'react';
import tailwind from 'tailwind-rn';
import { Text, Layout, Divider, List, ListItem } from '@ui-kitten/components';

const data = new Array(8).fill({
    title: 'Item',
    description: 'Description for Item',
  });


  
const ListOfPastReceipts = () => {
  
    const renderItem = ({ item, index }) => (
      <ListItem
        accessoryRight = {
            <Layout style={tailwind("m-1 flex-row right-8")}>
                <Text style={tailwind('text-xs right-4')}> $10 </Text>
            </Layout>}
            
        title={`${item.title} ${index + 1}`}
        description={`${item.description} ${index + 1}`}
      />
    );
  
    return (
      <List
        data={data}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    );
  };
  



export default ViewHistory = () => {
    return (
        <Layout style={tailwind("flex-1")}>
            <Layout style = {tailwind("items-center ")}>
                <Text style={tailwind('font-bold text-2xl')}> Date: Today</Text>
            </Layout>

            <Layout style = {tailwind("flex-row")}>
                <Text style = {tailwind('font-bold ml-10 right-8')}> Receipts </Text>
                <Text style = {tailwind('font-bold ml-20 pl-20 left-20')}> Price </Text> 
            </Layout>
            
            <ListOfPastReceipts />
        </Layout>
    )
}
