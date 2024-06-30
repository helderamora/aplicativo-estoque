import "react-native-gesture-handler";
import { Link } from "expo-router";
import SimpleLineIcons from "@react-native-vector-icons/simple-line-icons";

import {
  Text,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles";

const title = "Bem vindo! Esse é seu novo app de controle de estoque!";

export default function Home() {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.logo} source={require("./images/LogoIcatu.png")} /> */}
      <View style={styles.boxTextTitle}>
        <Text style={styles.textTitle}>{title}</Text>
      </View>

      {/* <View style={styles.boxImgBg}>
        <ImageBackground
          style={styles.imgBg}
          source={require("./images/background.png")}
        ></ImageBackground>
      </View> */}

      <View style={styles.boxButtonAdd}>
        <TouchableOpacity style={styles.buttonAdd}>
          <Link
            href={"/login"}
            style={{ color: "#fff", fontWeight: "bold", fontSize: 22 }}
          >
            Login
          </Link>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.signLink}>
        <Link href={"/signIn"} style={styles.textBtn}>
          Sign in
        </Link>
      </TouchableOpacity> */}
      </View>
    </View>
  );
}
