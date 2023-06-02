import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { imageURLList, imageURLListBack } from "./coins.list";

interface CoinCardProps {
  id: number;
  description: string;
  price: string;
}

export const CoinCardItem: React.FC<CoinCardProps> = ({id, description, price}) => {
  const [state, setState] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Pressable onPress={() => state ? setState(false) : setState(true)}>
          <Image source={state ? imageURLList[id - 1] : imageURLListBack[id - 1]} />
        </Pressable>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    backgroundColor: '#323232',
    minWidth: '90%',
    marginBottom: 20, 
    borderRadius: 8,
  },
  description: {
    color: '#fff',
    marginTop: 40,
    paddingHorizontal: 10
  },
  price: {
    color: '#fff',
    marginVertical: 80
  },
  img: {
    marginTop: 40
  }
})