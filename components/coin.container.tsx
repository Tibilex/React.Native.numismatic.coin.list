import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { CoinCardItem } from "./coin.card.item";
import { coinsList } from "./coins.list";

interface props {
  theme: boolean;
}
export const CoinContainer: React.FC<props> = ({theme}) => {
  const [coins, setCoins] = useState(coinsList)
  
  return (
    <View>
      <ScrollView>
        <View style={styles.container}>
          {
            coins.map((item) => (
              <CoinCardItem
              price={item.price}
              description={item.description}
              id={item.id}
              key={item.id}
              theme={theme}
            />
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 5
  }
})