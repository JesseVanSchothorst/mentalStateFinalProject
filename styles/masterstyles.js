/*
* Author: Jesse Van Schothorst
* File: masterstyles.js
* Breif: for every page
*/
import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2E8B57',
        alignItems: 'center',
        justifyContent: 'center',
    },
    flexRow: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        flex: 1,
        height: 120,
        margin: 16,
        marginTop: 50,
        backgroundColor: 'white'
    },
    itemStyle: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 1,
        padding: 10,
        margin: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    itemText: {
        fontSize: 16,
    },
    listArea: {
        width: '95%',
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8,
    },

    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#2E8B57',
        width: '100%',
    },
    content: {
        flex: 1,
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    header: {
        paddingTop: 50,
        width: "100%",

        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 62,
        fontWeight: 'bold',
        textShadowColor: 'rgba(255, 255, 255, 0.75)',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    },
    subHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    gridItem: {
        width: '80%',
        aspectRatio: 1,
        margin: '3%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    soundContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    soundContentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#2E8B57',
        width: '100%',

    },
    soundGridItem: {
        width: '100%',
        height: 64,
        margin: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        padding: 20,
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 5,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    meditationText: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
    },

    gridItemPressed: {
        opacity: 0.5,
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    gridItemText: {

        fontSize: 20,
        fontWeight: 'bold',

    },


    // for the drawer header
    headerTitle: {
        color: 'white',
        fontSize: 24,
    },
    drawerContentContainer: {
        flex: 1,
        backgroundColor: 'lightgreen',
    },
    drawerHeader: {
        borderBottomWidth: 1,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: "center",
        elevation: 2,
    },
    drawerHeaderText: {
        color: 'white',
        fontSize: 26,
    },
    drawerItemLabel: {
        fontSize: 16,
    },
});

export default Styles;