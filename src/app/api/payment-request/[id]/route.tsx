import { NextResponse } from "next/server";
import mockUp from "./mock-up.json";

type Params = {
  id: string;
};

export async function GET(request: Request, context: { params: Params }) {
  // here should be placed the logic to fetch request data from the db
  const data = mockUp.filter((row) => row.id === context.params.id);
  const referer = request.headers.get("referer");

  if (!referer || !referer.startsWith("http")) {
    return NextResponse.json({ message: "Unauthorized" });
  }
  // by primary key, there should be only 1 match from the db
  return new Response(JSON.stringify(data.length === 1 ? data[0] : {}), {
    headers: { "Content-Type": "application/json" },
  });
}
