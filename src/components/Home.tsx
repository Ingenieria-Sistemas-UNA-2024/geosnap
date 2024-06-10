import React, { useState, useEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import PostCard from "./PostCard";
import getPhotos from "../libs/getPhotos";
import { Photo } from "../types/types";

interface Card {
  id: number;
  imageUri: string;
  username: string;
}

const Home = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const photos: Photo[] = await getPhotos();

      setCards((prevCards) => [
        ...prevCards,
        ...photos.map((photo) => ({
          id: parseInt(photo.photoID || "0", 10),
          imageUri: photo.photoURL || "",
          username: `user_${photo.userID || ""}`,
        })),
      ]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching cards:", error);
    }
  };

  const renderCard = ({
    item,
  }: {
    item: Card;
  }) => <PostCard username={item.username} imageUri={item.imageUri} />;

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
    backgroundColor: "#161B22",
    flex: 1,
    padding: 20,
  },
});

export default Home;
