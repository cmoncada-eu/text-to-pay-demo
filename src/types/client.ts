export type clients = "acme" | "CrossCountry";
export type ClientProps = {
  [key in clients]: any;
};
