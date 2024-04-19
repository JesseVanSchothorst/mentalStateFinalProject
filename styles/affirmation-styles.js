/*
* Author: Jesse Van Schothorst
* File: affirmations-styles.js
* Breif: just for the affirmation page since i had to use absolute styling
*/
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    buttonsContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 20,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    affirmationContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },
    affirmationTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        padding: 10,
        backgroundColor: 'black',
        shadowColor: '#000000',
        // generated from site
        shadowOffset: {
            width: 7,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 7,
        height: 200,
        width: '80%',

    },
    affirmationText: {
        fontSize: 24,
        color: 'white',

    },
    headerContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        borderRadius: 5,
    },
    headerText: {
        fontSize: 62,
        fontWeight: 'bold',
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
});

export default styles;
