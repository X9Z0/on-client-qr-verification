"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import crypto from "crypto";

const secretKey = "supersecretkey123"; // This should be securely stored

const VerifyPage = () => {
  const [verificationResult, setVerificationResult] = useState<string | null>(
    null
  );
  const [productData, setProductData] = useState<any>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const base64Data = searchParams.get("data");
    if (base64Data) {
      verifyQRCode(base64Data);
    }
  }, [searchParams]);

  const verifyQRCode = (base64Data: string) => {
    try {
      const decodedString = Buffer.from(base64Data, "base64").toString("utf8");
      const { info, signature } = JSON.parse(decodedString);

      const hmac = crypto.createHmac("sha256", secretKey);
      hmac.update(JSON.stringify(info));
      const expectedSignature = hmac.digest("hex");

      if (signature === expectedSignature) {
        setVerificationResult("Product is authentic");
        setProductData(info);
      } else {
        setVerificationResult("Product verification failed");
      }
    } catch (error) {
      console.error("Error verifying QR code:", error);
      setVerificationResult("Verification failed");
    }
  };

  return (
    <main className="min-h-screen bg-black antialiased dark:bg-dot-white/[0.2] bg-dot-black/[0.2]">
      <div className="bg-black min-h-screen flex items-center justify-center text-white">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Verification Result</h2>
          {verificationResult ? (
            <div>
              <p>{verificationResult}</p>
              {productData && (
                <div className="mt-4">
                  <p>Product Info: {JSON.stringify(productData)}</p>
                </div>
              )}
            </div>
          ) : (
            <p>Verifying...</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default VerifyPage;
