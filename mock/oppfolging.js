export default [
  {
    url: "/api/oppfolging",
    method: "get",
    response: () => {
      return {
        erUnderOppfolging: true,
      };
    },
  },
];
