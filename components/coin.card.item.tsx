import React, { useEffect, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { imageURLList, imageURLListBack } from "./coins.list";

interface CoinCardProps {
  id: number;
  description: string;
  price: string;
  theme: boolean;
}

export const CoinCardItem: React.FC<CoinCardProps> = ({id, description, price, theme}) => {
  const [state, setState] = useState(true);
  const [isDark, setIsDark] = useState(theme)

  const darkMode = () => {
    theme ? setIsDark(false) : setIsDark(true);
  }

  useEffect(() => {
    darkMode();
  }, [theme])

  return (
    <View style={{
      display: "flex",
      alignItems: 'center', 
      backgroundColor: isDark ? '#dbdbdb' : '#323232',
      minWidth: '90%',
      marginBottom: 20, 
      borderRadius: 8,
    }}>
      <View style={styles.img}>
        <Pressable onPress={() => state ? setState(false) : setState(true)}>
          <Image source={state ? imageURLList[id - 1] : imageURLListBack[id - 1]} />
        </Pressable>
      </View>
      <Text style={{
        color: isDark ? '#323232' : '#fff',
        marginTop: 40,
        paddingHorizontal: 10
      }}>{description}</Text>
      <Text style={{
        color: isDark ? '#323232' : '#fff',
        marginVertical: 80
      }}>{price}</Text>
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
  img: {
    marginTop: 40
  }
})