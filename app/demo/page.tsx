"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Cardqr from "@/components/ui/Cardqr";
import { Input } from "@/components/ui/input";
import penguin from "/public/qrcode2.png";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { useState } from "react";
const crypto = require("crypto");
const QRCode = require("qrcode");

// Secret key for HMAC (should be stored securely)
const secretKey = "supersecretkey123";

// Function to encrypt product information
function encryptProductInfo(info: string, key: string) {
  const infoString = JSON.stringify(info);
  const hmac = crypto.createHmac("sha256", key);
  hmac.update(infoString);
  const signature = hmac.digest("hex");

  const encryptedInfo = {
    info,
    signature, // Add the HMAC signature to the product info
  };

  return encodeURIComponent(
    Buffer.from(JSON.stringify(encryptedInfo)).toString("base64")
  );
}

// Function to generate a secure QR code with a URL

export default function demo() {
  const [metadata, setMetadata] = useState<string>("");
  const [src, setSrc] = useState<string>("");

  async function generateQRCodeWithURL() {
    try {
      const base64Data = encryptProductInfo(metadata, secretKey);
      const url = `https://localhost:3000/verify?data=${base64Data}`; // Replace with your verification URL
      await QRCode.toDataURL(url).then((val: any) => setSrc(val));
      console.log("QR Code generated successfully:");
      // Save or display the QR code as needed
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  }

  return (
    <main className="min-h-screen flex justify-center antialiased items-center bg-black dark:bg-dot-white/[0.2]">
      <div className="flex justify-between w-2/4">
        <div>
          <Card className="bg-black text-slate-300 w-96">
            <CardHeader className="p-3 ml-3">Metadata</CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Input
                      className="h-72"
                      id="metadata-qrcode"
                      placeholder="enter the product information"
                      value={metadata}
                      onChange={(e) => setMetadata(e.target.value)}
                    ></Input>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button
                className="bg-slate-100 rounded text-black hover:bg-gray-300"
                onClick={generateQRCodeWithURL}
              >
                Generate
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <CardSpotlight>
            <Cardqr
              imageUrl={src}
              imageAlt="#"
              title="Secured QR-code"
              description=""
            />
          </CardSpotlight>
        </div>
      </div>
    </main>
  );
}
