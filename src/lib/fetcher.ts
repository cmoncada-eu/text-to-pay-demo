export const fetcher = (arg: string | URL | Request) =>
  fetch(arg).then((res) => res.json());
