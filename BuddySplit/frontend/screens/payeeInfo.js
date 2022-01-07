import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Input, Text, Layout } from '@ui-kitten/components';
import { useNavigation } from "@react-navigation/native";
import tailwind from 'tailwind-rn';

const payeeInfo = (initialValue = '') => {
  const [value, setValue] = React.useState(initialValue);
  return { value, onChangeText: setValue };
};

export default PayeeInfo = ({ route }) => {
  const navigation = useNavigation();
  const numberOfPayee = payeeInfo();
  const serviceCharge = payeeInfo();
  const gstCharge = payeeInfo();
  
  return (
    <React.Fragment>
    <Layout style = {tailwind("flex-col justify-between items-center")}>
    <Layout style={tailwind("flex-row items-center mb-2")}>
      <Text> Number of Payee </Text>
      <Input
        keyboardType="numeric"
        style={styles.input}
        size='small'
        placeholder='0'
        {...numberOfPayee}
      />
    </Layout>

    <Layout style={tailwind("flex-row items-center mb-2")} level='1'>
      <Text> Service Charge </Text>
      <Input
        keyboardType="numeric"
        style={styles.input}
        size='small'
        placeholder='0'
        {...serviceCharge}
      />
      <Text style={tailwind('left-1')}>%</Text>
    </Layout>

    <Layout style={tailwind("flex-row items-center mb-2")} level='1'>
      <Text> GST Charge </Text>
      <Input
        keyboardType="numeric"
        style={styles.input}
        size='small'
        placeholder='0'
        {...gstCharge}
      />
    <Text style={tailwind('left-1')}>%</Text>
    </Layout>

      <Button onPress = {() => {navigation.navigate("Camera")}}>
        Back Btn for Now
      </Button>
    </Layout>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
    input: {
        marginVertical: 2,
      },

    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button: {
        justifyContent: 'flex-end'
    }

});

    