import { clients } from "@/types/client";
import dotenv from "dotenv";

dotenv.config();

export const client: clients =
  (process.env.NEXT_PUBLIC_CLIENT as clients) || "acme";
