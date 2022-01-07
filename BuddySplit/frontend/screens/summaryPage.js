import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, List, Text } from '@ui-kitten/components';

//to be filled
const data = new Array(8).fill({
  title: 'Item',
});

export default SummaryPage = () => {

  const renderPayeeHeader = (headerProps, info) => (
    <View {...headerProps}>
      <Text category='h6'>
        {info.item.title} {info.index + 1}
      </Text>
    </View>
  );

  const renderTotalFooter = (footerProps) => (
    <Text {...footerProps}>
      Total: 
    </Text>
  );

  const renderItemList = (info) => (
    <Card
      style={styles.item}
      status='basic'
      header={headerProps => renderPayeeHeader(headerProps, info)}
      footer={renderTotalFooter}>
      <Text>
        Cai Png x 1
      </Text>
    </Card>
  );

  return (
    <List
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={data}
      renderItem={renderItemList}
    />
    //<Button title="Share" />
  );
};

const styles = StyleSheet.create({
  container: {
    maxHeight: 320,
  },
  contentContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    marginVertical: 4,
  },
});