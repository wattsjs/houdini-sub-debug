/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
  watchSchema: {
    url: "https://api.betwatch.com/query",
    headers: {
      "X-API-KEY": "5b594dae-c950-4ba7-a315-326b78ed1dbd",
    },
  },
  plugins: {
    "houdini-svelte": {},
  },
  scalars: {
    Time: {
      type: "Date",
      unmarshal(value) {
        return new Date(value);
      },
      marshal(value) {
        return value.getTime();
      },
    },
  },
};

export default config;
