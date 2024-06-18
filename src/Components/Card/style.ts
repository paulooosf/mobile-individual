import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cards: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 10,
  },
  card: {
    width: "95%",
    height: 140,
    borderRadius: 10,
    gap: 10,
    overflow: 'hidden', // Ensure the image doesn't spill outside the card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  card_imagem: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Ensure the image is behind other content
  },
  card_conteudo: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: to make the content more readable over the image
  },
  card_titulo: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    position: 'absolute',
    bottom: 0,
  },
});
