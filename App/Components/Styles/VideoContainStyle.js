import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
    // width: "100%",
    // height: "100%",
  },
  text: {
    color: "#fff",
    fontSize: 20,
    position: "absolute",
    bottom: 20
  },
  image: {
    // flex: 1,
    width: "100%",
    height: "100%"
  },
  outline: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 36,
    height: 36,
    borderRadius: 22,
    padding: 2,
    backgroundColor: "rgba(236, 240, 241,0.5)",
    alignItems: "center"
  },
  back: {
    color: "#fff"
  },
  box: {
    position: "absolute",
    bottom: 100,
    backgroundColor: "transparent",
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    color: "#fff",
    marginBottom: 10
  }
});
