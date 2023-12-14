import {Text, View} from "react-native";
import {Button} from "react-native-paper";
import {server} from "../../core/server";

export function Content() {

    function runMigration() {
        server
            .fetch('migrations/run', {}, undefined, 'PUT').then(() => {
                console.log('run migrations');
        }).catch(error => console.log(error));
    }

    return (
        <View>
            <Button onPress={runMigration}>Run Migration</Button>
        </View>
    )
}