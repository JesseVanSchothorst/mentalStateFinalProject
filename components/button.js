import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import styles from '../styles/masterstyles';

export default function PresetSoundButton({ name, onPress, buttonStyle, textStyle, color }) {
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: pressed ? 'rgba(0, 0, 0, 0.2)' : color, // Apply color and the change to color
                    ...styles.soundGridItem, // Apply button style from imported styles
                    ...(pressed && styles.buttonPressed) // Apply styles when pressed
                }
            ]}
            android_ripple={{ color: 'rgba(0, 0, 0, 0.2)' }} // Ripple effect color
            onPress={onPress}
        >
            <Text style={[styles.meditationText]}>{name}</Text>
        </Pressable>
    );
}
