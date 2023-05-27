import { Link } from "expo-router";
import { View, Text } from "react-native";

const About = () => {
    return ( 
        <View>
            <Text>About Page</Text>
            <Link href="/">Back Home</Link>
        </View>
     );
}
 
export default About;