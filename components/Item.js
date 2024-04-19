/**
 * File:    item.js
 * Author:  Stephen Graham, Claire Fleckney
 * Brief:   The Item component that will display
 *          each item in the To Do list
 */

import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";
import Styles from "../styles/masterstyles";

export const Item = ({ itemId, itemText, itemDate }) => {
    return (
        <Pressable
            style={Styles.itemStyle}
            key={itemId}
        >
            <Text style={Styles.itemDate}>{itemDate}</Text>
            <Text style={Styles.itemText}>{itemText}</Text>
        </Pressable>
    )
}
