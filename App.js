import { View, Text } from "react-native";
import Home from "./screens/Home";
import { globalStyles } from "./styles/global";

export default function App() {
  return (
    <View style={globalStyles.mainContainer}>
      <Home />
    </View>
  );
}
