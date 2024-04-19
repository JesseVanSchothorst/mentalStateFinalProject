import React, { useEffect, useState } from 'react';
import { ScrollView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import styles from '../styles/masterstyles';
import PresetSoundButton from './button';

// Importing sound files
import sound1 from '../assets/meditations/drop-anchor.mp3';
import sound2 from '../assets/meditations/be-present.mp3';
import sound3 from '../assets/meditations/headspace-mini.mp3';
import sound4 from '../assets/meditations/short-meditation.mp3';

export default function App() {
    const [presetSounds, setPresetSounds] = useState([]);
    const [currentSoundIndex, setCurrentSoundIndex] = useState(null);
    const [isPlaying, setIsPlaying] = useState(Array(4).fill(false));

    useEffect(() => {
        async function loadSounds() {
            try {
                const loadedSounds = await Promise.all([
                    Audio.Sound.createAsync(sound1),
                    Audio.Sound.createAsync(sound2),
                    Audio.Sound.createAsync(sound3),
                    Audio.Sound.createAsync(sound4),
                ]);
                setPresetSounds(loadedSounds.map(loadedSound => loadedSound.sound));
            } catch (error) {
                console.error('Failed to load sounds:', error);
            }
        }
        loadSounds();
    }, []);

    async function playPresetSound(index) {
        const sound = presetSounds[index];
        if (sound) {
            try {
                if (currentSoundIndex !== null && index === currentSoundIndex) {
                    if (isPlaying[index]) {
                        await sound.pauseAsync();
                    } else {
                        await sound.playAsync();
                    }
                    setIsPlaying(prevState => prevState.map((value, idx) => idx === index ? !value : value));
                } else {
                    if (currentSoundIndex !== null) {
                        const prevSound = presetSounds[currentSoundIndex];
                        await prevSound.stopAsync();
                        setIsPlaying(prevState => prevState.map(() => false));
                    }
                    await sound.playAsync();
                    setCurrentSoundIndex(index);
                    setIsPlaying(prevState => prevState.map((value, idx) => idx === index ? true : value));
                }
            } catch (error) {
                console.error(`Failed to play preset sound ${index}:`, error);
            }
        } else {
            console.error(`Sound at index ${index} does not exist.`);
        }
    }

    async function stopPresetSound() {
        if (currentSoundIndex !== null) {
            try {
                const sound = presetSounds[currentSoundIndex];
                await sound.stopAsync();
                setCurrentSoundIndex(null);
                setIsPlaying(Array(4).fill(false));
            } catch (error) {
                console.error('Failed to stop current sound:', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="green" />

            <View style={styles.header}>
                <Text style={styles.headerText}>Meditations</Text>
                <Text style={styles.subHeaderText}>Soothe your mind!</Text>
            </View>

            <View style={styles.soundContentContainer}>
                <View style={styles.soundContent}>
                    {presetSounds.map((sound, index) => (
                        <View key={index}>
                            <PresetSoundButton
                                onPress={() => playPresetSound(index)}
                                textStyle={{ fontSize: 20 }}
                                name={`Meditation ${index + 1}`}
                                playing={isPlaying[index]}
                            />
                        </View>
                    ))}
                </View>


            </View>
            {/* stop button to stop meditation */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={stopPresetSound} style={styles.button}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
