import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Heart } from 'lucide-react-native';

interface PostCardProps {
  username: string;
  imageUri: string;
}

export default function PostCard({ username, imageUri }: PostCardProps) {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
      </View>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.footer}>
        <View style={styles.likeButton}>
          <TouchableOpacity onPress={handleLike}>
            <Heart size={30} color={isLiked ? 'red' : 'black'} />
          </TouchableOpacity>
          <Text style={styles.likeText}>{likes} Me gusta</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
  },
  header: {
    padding: 10,
    backgroundColor: '#fff',
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  },
  image: {
    width: '100%',
    height: 300,
  },
  footer: {
    padding: 10,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  likeText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 15,
  },
});