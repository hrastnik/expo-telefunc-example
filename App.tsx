import { useEffect, useState } from "react";
import { Text, View, DevSettings } from "react-native";
import { readPost } from "./readPost.telefunc";
import { telefuncConfig } from "telefunc/client";

telefuncConfig.telefuncUrl = "http://localhost:3000/_telefunc"

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<undefined | string>(undefined);
  const [data, setData] = useState<undefined | string>(undefined);

  useEffect(() => {
    readPost()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(String(error));
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>
        {JSON.stringify(
          {
            isLoading,
            data,
            error,
          },
          null,
          2
        )}
      </Text>
    </View>
  );
}
