import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-eva-icons';

import NewText from '../components/NewText';

export default function Posts() {
    return (
        <View style={styles.postsContainer}>
            <PostImage />
            <PostDetail />
        </View>
    )
}

const PostImage = () => {
    return (
        <View style={styles.postImage}></View>
    )
}

const PostDetail = () => {
    return (
        <View style={styles.postDetail}>
            <TouchableOpacity style={styles.postDetailImage}></TouchableOpacity>
            <View style={styles.postInfo}>
                <View style={styles.postInfoContainer}>
                    <NewText content="Shane Robertson" dark h3 />
                    <NewText content="32m ago" light h5 />
                </View>
                <TouchableOpacity style={styles.moreIcon}>
                    <Icon
                        name='more-vertical-outline'
                        fill='#303035'
                        height={30}
                        width={30}
                    // ref={iconRef}
                    // animation='pulse'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postsContainer: {
        margin: 20,
        borderRadius: 20,
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowColor: "#b0c6e1",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    postImage: {
        height: 250,
        backgroundColor: '#c64b50'
    },
    postDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    postDetailImage: {
        height: 70,
        width: 70,
        borderRadius: 35,
        margin: 20,
        backgroundColor: '#ccc'
    },
    postInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '68%'
    },
    postInfoContainer: {},
    moreIcon: {},
})
