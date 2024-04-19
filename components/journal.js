/**
 * File:    App.js
 * Author:  Jesse!!
 * Brief:   Heavily influenced by Instructor Stephan Graham, and Claire Fleckney
 */

import * as SQLite from 'expo-sqlite';
import { useEffect, useState } from 'react';
import { Platform, StatusBar, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { Item } from './Item';
import Styles from "../styles/masterstyles";

export function Journal() {
    const [db, setDb] = useState(null);
    const [text, setText] = useState(null);
    const [updateItems, forceUpdate] = useState(0);
    const [items, setItems] = useState([]);


    // open the database at launch
    useEffect(() => {
        let db = null;
        // Expo SQLite does not work on web, so don't try it
        if (Platform.OS === 'web') {
            db = {
                transaction: () => {
                    return {
                        executeSql: () => { },
                    };
                },
            };
        } else {
            db = SQLite.openDatabase('journal_log8.db');
        }
        setDb(db);

        // Create the table if it doesn't exist
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists items (id integer primary key not null, date DATETIME, value text);"
            );
        });

    }, []);

    // Update when the database changes [db, updateItems]
    useEffect(() => {
        if (db) {
            db.transaction(
                (tx) => {
                    tx.executeSql(
                        "select * from items",
                        [],
                        (_, { rows }) => {
                            // Extract items from the result and update state
                            const itemsArray = rows._array.map(item => ({
                                id: item.id,
                                date: item.date,
                                value: item.value
                            }));

                            // tried to sort based on date but then released id was the same effect so its based on id
                            const sortedItems = itemsArray.sort((a, b) => b.id - a.id);
                            setItems(sortedItems);
                        }
                    );
                }
            );
        }
    }, [db, updateItems]);


    // Insert a new item into the todo list with current date and time
    const createRecord = (text) => {
        // Get current date and time for the entry
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleString();

        db.transaction(
            (tx) => {
                tx.executeSql(
                    "insert into items (date, value) values (?, ?)",
                    [formattedDate, text] // Pass formattedDate instead of currentDate
                );
                tx.executeSql(
                    "select * from items",
                    [],
                    (_, { rows }) => console.log(JSON.stringify(rows))
                );
            },
            null,
            forceUpdate(f => f + 1)
        );
    };

    return (
        <View style={Styles.container}>
            <StatusBar backgroundColor="green" />
            <View style={Styles.flexRow}>
                <TextInput
                    onChangeText={(text) => setText(text)}
                    onSubmitEditing={() => {
                        createRecord(text)
                        setText(null)
                    }}
                    placeholder='What is on your mind today?'
                    style={Styles.input}
                    value={text}
                />
            </View>
            <ScrollView style={Styles.listArea}>
                {items.map(({ id, value, date }) => {
                    return (
                        <Item key={id} itemId={id} itemText={value} itemDate={date} />
                    );
                })}
            </ScrollView>


        </View>
    );
}