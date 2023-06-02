import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { CoinCardItem } from "./coin.card.item";
import { coinsList } from "./coins.list";

export const CoinContainer: React.FC = () => {
  const [coins, setCoins] = useState(coinsList)

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          coins.map((item) => (
            <CoinCardItem
            price={item.price}
            description={item.description}
            id={item.id}
          />
          ))
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 5
  }
})