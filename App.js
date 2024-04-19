/*
* Author: Jesse Van Schothorst
* File: App.js
* Breif: This is the main folder here I have installed the navigation and
* will be the main display for all of my app mainly utilizing 
* react-native-gesture-handler react-native-reanimated
* from: https://reactnavigation.org/docs/5.x/getting-started/
*/

import * as React from 'react';
import {
    StatusBar, Button, useWindowDimensions, Pressable, Text, View, Image,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import * as Haptics from 'expo-haptics';
import * as SplashScreen from 'expo-splash-screen'
import { Canvas, LinearGradient, Rect, vec } from '@shopify/react-native-skia';
import { useDerivedValue, useSharedValue, withTiming } from 'react-native-reanimated';

// Just ones that I use a lot
import Styles from './styles/masterstyles';
// specefic to affirmation
import { AffirmationText } from './components/affirmation-text'
import affirmationStyles from './styles/affirmation-styles';
import { getRandomColor } from './styles/random-color';
// Gallery
import { GalleryView } from './components/cats'
// Journal
import { Journal } from './components/journal'
// Meditation
import MeditationPlayer from './components/meditations';

// for the splash screen
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

/**
 * The purpose is to view the affirmations to get into a better mindset for the day.
 */
function AffirmationScreen({ navigation }) {

    // I could put this stuff in another page for a cleaner look
    // gets the dimensions of screen
    const { width, height } = useWindowDimensions();

    // this is first set colors
    const leftColor = useSharedValue('red');
    const rightColor = useSharedValue('blue');

    // on click it will use these ones after
    const colors = useDerivedValue(() => {
        return [leftColor.value, rightColor.value]
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="green" />
            <Canvas style={{ flex: 1 }}>
                <Rect x={0} y={0} width={width} height={height}>
                    <LinearGradient
                        start={vec(0, 0)}
                        end={vec(width, height)}
                        colors={colors}
                    />
                </Rect>
            </Canvas>

            <View style={affirmationStyles.headerContainer}>
                <View style={Styles.header}>
                    <Text style={affirmationStyles.headerText}>Affirmations</Text>
                    <Text style={Styles.subHeaderText}>Swipe up or down:</Text>
                </View>
            </View>

            <AffirmationText />


            <View style={affirmationStyles.buttonsContainer}>
                <Pressable
                    style={affirmationStyles.button}
                    android_ripple={{ color: '#ccc' }}
                    onPress={() => {
                        // not sure that this work suppose to give animation
                        leftColor.value = withTiming(getRandomColor());
                        rightColor.value = withTiming(getRandomColor());

                        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    }}>
                    <Text style={affirmationStyles.buttonText}>Press to change Background</Text>
                </Pressable>
            </View>
        </View>
    );
}

/**
 * The purpose of this one is to look at cats because they make me happy
 */
function CatGalleryScreen({ navigation }) {
    return (


        <View>
            <StatusBar backgroundColor="green" />
            <GalleryView />
        </View>
    );
}


/**
 * The purpose of this one is to allow users to journal. Just adding journal entries
 * upon the upload of a journal entry then it shows date/time with entry. this can be as much
 * or as little as user wants
 */
function JournalingScreen({ navigation }) {
    return (

        <View style={Styles.container}>
            <StatusBar backgroundColor="green" />
            {/* Header */}
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Journaling</Text>
                <Text style={Styles.subHeaderText}>Write down what your feeling today!</Text>
            </View>

            <Journal />
        </View>
    );
}


/**
 * The purpose of this one is to meditate. I want the user to be able to add their own
 * but might just give them some default ones depending on time.
 */
const MeditationScreen = ({ navigation }) => {

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor="green" />
            <MeditationPlayer />
        </View>
    );
};




/**
 * The purpose of this one is to navigate. I want to add a digipet where the longer
 * youre on the app the happier the guy gets. the goal/plan is to try to get him happy
 * every day. then resets.
 */
const HomeScreen = ({ navigation }) => {
    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor="green" />

            {/* Header */}
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Mental State</Text>
                <Text style={Styles.subHeaderText}>Start your self care with any of the below:</Text>
            </View>

            {/* Content */}
            <View style={Styles.contentContainer}>
                <View style={Styles.content}>
                    <Pressable onPress={() => navigation.navigate('Meditation')}>
                        {({ pressed }) => (
                            <View style={[Styles.gridItem, pressed && Styles.gridItemPressed]}>
                                <Image
                                    style={Styles.image}
                                    source={require('./assets/meditate.png')}
                                />
                                <Text style={Styles.gridItemText}>Meditation</Text>

                            </View>
                        )}
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Affirmations')}>
                        {({ pressed }) => (
                            <View style={[Styles.gridItem, pressed && Styles.gridItemPressed]}>
                                <Image
                                    style={Styles.image}
                                    source={require('./assets/affirm.png')}
                                />
                                <Text style={Styles.gridItemText}>Affirmations</Text>
                            </View>
                        )}
                    </Pressable>
                </View>

                <View style={Styles.content}>
                    <Pressable onPress={() => navigation.navigate('Journal')}>
                        {({ pressed }) => (
                            <View style={[Styles.gridItem, pressed && Styles.gridItemPressed]}>
                                <Image
                                    style={Styles.image}
                                    source={require('./assets/journal.png')}
                                />
                                <Text style={Styles.gridItemText}>Journaling</Text>

                            </View>
                        )}
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Cat Gallery')}>
                        {({ pressed }) => (
                            <View style={[Styles.gridItem, pressed && Styles.gridItemPressed]}>
                                <Image
                                    style={Styles.image}
                                    source={require('./assets/cat.png')}
                                />
                                <Text style={Styles.gridItemText}>Cat Gallery</Text>

                            </View>
                        )}
                    </Pressable>

                </View>

            </View>



        </View>
    );
};

//https://reactnavigation.org/docs/5.x/getting-started/
const Drawer = createDrawerNavigator();

// Had to do this to style the drawer because it wouldnt work from the other screenOptions way
// some not working
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={Styles.drawerContentContainer}>
            <View style={Styles.drawerHeader}>
                <Text style={Styles.drawerHeaderText}>Mental State</Text>
            </View>

            <DrawerItemList {...props}
                labelStyle={Styles.drawerItemLabel}
                activeTintColor="lightgreen"
                inactiveTintColor="gray"
            />
        </DrawerContentScrollView>
    );
}

export default function App() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor="green" />
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: 'green',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: Styles.headerTitle,
                    }}
                    drawerContent={(props) => <CustomDrawerContent {...props} />}
                >
                    <Drawer.Screen name="Home" component={HomeScreen} />
                    <Drawer.Screen name="Meditation" component={MeditationScreen} />
                    <Drawer.Screen name="Affirmations" component={AffirmationScreen} />
                    <Drawer.Screen name="Journal" component={JournalingScreen} />
                    <Drawer.Screen name="Cat Gallery" component={CatGalleryScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </View>
    );
}