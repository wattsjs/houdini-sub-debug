import { HoudiniClient } from "$houdini";
import { subscription } from "$houdini/plugins";
import { createClient } from "graphql-ws";

export default new HoudiniClient({
  url: "https://api.betwatch.com/query",

  // uncomment this to configure the network call (for things like authentication)
  // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
  fetchParams({ session }) {
    return {
      headers: {
        Authorization: `Bearer TOKEN`,
      },
    };
  },

  plugins: [
    subscription(() =>
      createClient({
        url:
          import.meta.env.VITE_GRAPHQL_WS_ENDPOINT ||
          "wss://api.betwatch.com/sub",
        keepAlive: 10000,
        shouldRetry: () => true,
        retryAttempts: 10,
        connectionParams: async () => {
          return {
            token: "TOKEN",
          };
        },
      })
    ),
  ],
});
