// app/api/verify/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";

const secretKey = "supersecretkey123"; // This should be stored securely

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const base64Data = searchParams.get("data");

  if (!base64Data) {
    return NextResponse.json({ message: "No data provided" }, { status: 400 });
  }

  const jsonData = Buffer.from(base64Data, "base64").toString("utf8");
  const productInfo = JSON.parse(jsonData);

  const { signature, ...originalData } = productInfo;

  const hmac = crypto.createHmac("sha256", secretKey);
  hmac.update(JSON.stringify(originalData));
  const expectedSignature = hmac.digest("hex");

  if (signature === expectedSignature) {
    return NextResponse.json({
      message: "Product is authentic",
      data: originalData,
    });
  } else {
    return NextResponse.json(
      { message: "Product verification failed" },
      { status: 400 }
    );
  }
}
