import React from 'react';
import { StyleSheet } from 'react-native';
import { Input, Text } from '@ui-kitten/components';

const payeeInfo = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default PayeeInfo = () => {

  const numberOfPayee = payeeInfo();
  const serviceCharge = payeeInfo();
  const gstCharge = payeeInfo();

  return (
    <React.Fragment>
      <Text> hello </Text>
      <Input
        keyboardType="numeric"
        style={styles.input}
        size='small'
        placeholder='Number of Payee'
        {...numberOfPayee}
      />

      <Input
        keyboardType="numeric"
        style={styles.input}
        size='small'
        placeholder='Service Charge'
        {...serviceCharge}
      />

      <Input
        keyboardType="numeric"
        style={styles.input}
        size='small'
        placeholder='GST Charge'
        {...gstCharge}
      />

    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 2,
      },
    });
    