import React, { useState, useEffect, useCallback } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import PostCard from "./PostCard";
import getPhotos from "../libs/getPhotos";
import { Photo } from "../types/types";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { setPhotos, addPhotos, setLastKey } from "../redux/photoSlice";
import { Phone } from "lucide-react-native";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const photos = useAppSelector((state) => state.photo.photos);
  const lastkey = useAppSelector((state) => state.photo.lastkey);
  const dispatch = useAppDispatch();
  console.log("array", photos)
  useEffect(() => {
    const loadPhotosAndCards = async () => {
      await fetchPhotos();
    };
    loadPhotosAndCards();
  }, []);

  const fetchPhotos = async () => {
    try {
      setLoading(true); // Indicar que se está cargando
      const { items, LastEvaluatedKey } = await getPhotos();
      dispatch(setPhotos(items as Photo[]));
      dispatch(setLastKey(LastEvaluatedKey));
      setLoading(false); // Indicar que la carga ha terminado
    } catch (error) {
      console.error("Error fetching photos:", error);
      setLoading(false); // Asegurar que la carga se marque como completa en caso de error
    }
  };

  const renderCard = ({ item }: { item: Photo }) => (
    <PostCard username={item.userName ?? ""} imageUri={item.photoURL ?? ""} />
  );

  const handleEndReached = useCallback(async () => {
    if (!loading && hasMore && lastkey) {
      setLoading(true); // Indicar que se está cargando
      const { items, LastEvaluatedKey } = await getPhotos(lastkey);
      dispatch(addPhotos(items));
      dispatch(setLastKey(LastEvaluatedKey));
      setLoading(false); // Indicar que la carga ha terminado
    }
  }, [loading, hasMore, lastkey]);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()} // Usa el índice como clave
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" /> : null
        }
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
