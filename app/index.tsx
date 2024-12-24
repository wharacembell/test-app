import { Directory, Paths, File } from "expo-file-system/next";
import { Text, TouchableOpacity, View } from "react-native";

async function downloadFile() {
  const url = `${process.env.EXPO_PUBLIC_ASSETS_URL}/file.json`;
  const downloadDestination = new Directory(Paths.cache, "downloads");

  try {
    downloadDestination.create();
    const downloadedFile = await File.downloadFileAsync(
      url,
      downloadDestination,
    );
    downloadedFile.delete();
    downloadDestination.delete();
  } catch (error) {
    throw error;
  }
}

export default function Index() {
  const url = `${process.env.EXPO_PUBLIC_ASSETS_URL}/file.json`;
  return (
    <View>
      <Text>{url}</Text>
      <TouchableOpacity onPress={() => downloadFile()}>
        <Text>Download</Text>
      </TouchableOpacity>
    </View>
  );
}
