import React from 'react';
import AppRoutes from './routes/index.routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
     return (
          <NavigationContainer>
               <AppRoutes />
          </NavigationContainer>
     );
}