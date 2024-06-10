import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import PostCard from './PostCard';

const Home = () => {
  const [cards, setCards] = useState<{ id: number; imageUri: string; username: string; }[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
      const data = await response.json();

    setCards((prevCards: { id: number; imageUri: string; username: string; }[]) => [...prevCards, ...data.map((item: { id: string; download_url: string; }) => ({ id: parseInt(item.id), imageUri: item.download_url, username: `user_${item.id}` }))]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  const renderCard = ({ item }: { item: { id: number; imageUri: string; username: string; } }) => (
    <PostCard
      username={item.username}
      imageUri={item.imageUri}
    />
  );

  const handleEndReached = () => {
    fetchCards();
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161B22',
    flex: 1,
    padding: 20,
  },
});

export default Home;