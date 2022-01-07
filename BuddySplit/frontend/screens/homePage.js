import React from 'react';
import tailwind from 'tailwind-rn';
import { Layout, Text } from '@ui-kitten/components';
import CameraScan from '../components/cameraScan';


export default HomePage = () => {
    return (
        <Layout style={tailwind('flex-1 justify-center items-center')}>
            <Text category='h1'>BuddySplit</Text>
            <CameraScan />
            
        </Layout>
    )
}
