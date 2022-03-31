import React from "react";
import { Pressable, Text } from "react-native";
//calling the function from another component to here 

const ProopsPractice = (props) => {
    return (
        <Pressable
            onPress={props.onPressFunction}
            hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
            android_ripple={{ color: '#00f' }}
            style={({ pressed }) => [
                { backgroundColor: pressed ? 'red' : 'yellow' },
                { padding: 12 }
            ]}
        >
            <Text>
                {props.title}
            </Text>

        </Pressable>
    )
}
export default ProopsPractice;