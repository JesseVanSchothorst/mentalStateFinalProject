/*
* Author: Jesse Van Schothorst
* File: affirmation-text.js
* Breif: this will display the gallery of cat images from the web
*/

import React, { useState, useEffect } from 'react';
import { Text, View, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';

import affirmationStyles from '../styles/affirmation-styles';
import { affirmations } from './affirmations';

export function AffirmationText() {
    const [affirmationIndex, setAffirmationIndex] = useState(0);
    const opacity = new Animated.Value(0);

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500, // Adjust duration as needed
            useNativeDriver: true,
        }).start();
    }, [affirmationIndex]);

    const playSwipeSound = async () => {
        const { sound } = await Audio.Sound.createAsync(
            require('../assets/swipe.mp3')
        );
        await sound.playAsync();
    };

    const onGestureEvent = event => {
        if (event.nativeEvent.oldState === State.ACTIVE) {
            const { translationY } = event.nativeEvent;
            if (translationY < -50) {
                playSwipeSound();
                const newIndex = (affirmationIndex + 1) % affirmations.length;
                setAffirmationIndex(newIndex);
            } else if (translationY > 50) {
                playSwipeSound();
                const newIndex = (affirmationIndex - 1 + affirmations.length) % affirmations.length;
                setAffirmationIndex(newIndex);
            }
        }
    };

    return (
        <View style={affirmationStyles.affirmationContainer}>
            <PanGestureHandler
                onGestureEvent={onGestureEvent}
                onHandlerStateChange={onGestureEvent}
            >
                <View style={affirmationStyles.affirmationTextContainer}>
                    <Animated.Text
                        style={[
                            affirmationStyles.affirmationText,
                            { opacity }
                        ]}
                    >
                        {affirmations[affirmationIndex]}
                    </Animated.Text>
                </View>
            </PanGestureHandler>
        </View>
    );
}
