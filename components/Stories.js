import React from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import { Icon } from 'react-native-eva-icons';

export default function Stories() {
    return (
        <ScrollView horizontal style={styles.storiesContainer} showsHorizontalScrollIndicator={false}>
            <View style={styles.addStoryContainer}>
                <AddStory />
            </View>
            <View style={styles.storiesContainer}>
                <Story />
                <Story />
                <Story />
                <Story />
                <Story />
            </View>
        </ScrollView>
    )
}

const AddStory = () => (
    <TouchableOpacity style={styles.addStory}>
        <Icon
            name='plus-outline'
            fill='#b0c6e1'
            height={30}
            width={30}
        />
    </TouchableOpacity>
);

const Story = () => {
    return (
        <View style={styles.storyContainer}>
            <TouchableOpacity style={styles.story}>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    storiesContainer: {
        padding: 10,
    },
    addStoryContainer: {
        padding: 20,
        paddingLeft: 10,
        paddingRight: 10,
        overflow: 'visible'
    },
    addStory: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#b0c6e1",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    storiesContainer: {
        flexDirection: 'row',
        padding: 10,
    },
    storyContainer: {
        padding: 10,
        paddingLeft: 0,
        paddingRight: 20
    },
    story: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#c64b50',
    },
})
