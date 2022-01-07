import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { AppNavigator } from './frontend/AppNavigator';
import CameraScan from './frontend/components/cameraScan';

export default () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <CameraScan />
  </ApplicationProvider>
);