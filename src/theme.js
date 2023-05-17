import {Platform} from 'react-native';

export const theme ={
    appBar:{
        primary: '#24292e',
        secondary: '#999',
        textPrimary: '#ffffff',
    },
    colors: {
        textPrimary: '#24292e',
        textSecondary: '#586069',
        primary: '#0366d6',
        white: "#ffffff",
    }, 
    fontSizes: {
        body: 14,
        subheading: 16,
        header: 20,
    },
    fonts: {
        main: Platform.select({
            ios: 'Arial',
            android: 'Roboto',
            default: 'System'
        }),
    },
    fontWeights: {
        normal: '400',
        bold: '700'
    }
}