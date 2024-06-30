import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    justifyContent: "space-evenly",
  },
  // logo: {
  //   width: "50%",
  //   height: 68,
  //   marginLeft: -200,
  // },
  boxTextTitle: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
  },
  textTitle: {
    fontFamily: "Roboto",
    fontSize: 20,
    color: "#000",
    width: "80%",
    marginTop: 45,
  },
  // boxImgBg: {
  //   flex: 0.3,
  //   width: "110%",
  //   alignItems: "center",
  //   // marginBottom: "30%",
  // },
  // imgBg: {
  //   width: "90%",
  //   height: 250,
  //   marginTop: 20,
  // },
  boxButtonAdd: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    // marginBottom: 20,
  },
  buttonAdd: {
    backgroundColor: "#00adda",
    width: "80%",
    height: 64,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  signLink: {
    width: "50%",
    alignItems: "center",
  },
  textBtn: {
    color: "#1133ed",
    fontWeight: "700",
    fontSize: 16,
    marginTop: 30,
  },
});
