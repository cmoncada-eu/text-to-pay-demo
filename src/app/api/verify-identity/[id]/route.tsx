import { NextRequest, NextResponse } from "next/server";
import mockUp from "../../payment-request/[id]/mock-up.json";

type Params = {
  id: string;
};

export async function GET(request: NextRequest, context: { params: Params }) {
  // here should be placed the logic to fetch the data
  // preferably from a reusable function that fetches from the db (same as in payment-request)
  const data = mockUp.filter((row) => row.id === context?.params?.id);
  const referer = request.headers.get("referer");

  const params = request.nextUrl.searchParams;

  if (!referer || !referer.startsWith("http")) {
    return NextResponse.json({ message: "Unauthorized" });
  }

  if (!params.has("birthYear") || !params.has("ssn")) {
    return NextResponse.json({ message: "Error 1" });
  }

  if (data?.length === 1) {
    console.log("DATA EXISTSSSSSS", data[0]);

    const birthYear = params.get("birthYear");
    const ssn = params.get("ssn");

    console.log("DALEEE", birthYear, ssn);

    if (data[0].birth_year === birthYear && data[0].ssn.slice(-4) === ssn) {
      return new Response(JSON.stringify({ message: "success" }), {
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  return NextResponse.json({ message: "Error verifying" });
}
