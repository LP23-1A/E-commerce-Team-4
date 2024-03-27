import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { v4 as uuidv4 } from "uuid";

const s3 = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "AKIA47CRYFUEQG3Q7X5W",
    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY ||
      "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",
  },
});

export async function GET(req: Request, res: Response) {
  try {
    const objectUrls: any = [];
    const urls = await Promise.all(
      ["image1.png"].map((_) => {
        const key = uuidv4();
        const command = new PutObjectCommand({
          Bucket: "ecommerceteam4pinecone",
          Key: `${key}`,
          ACL: "public-read",
        });

        objectUrls.push(
          `https://ecommerceteam4pinecone.s3.ap-southeast-1.amazonaws.com/${key}`
        );

        return getSignedUrl(s3, command, { expiresIn: 3600 });
      })
    );

    return Response.json({
      uploadUrls: urls,
      objectUrl: objectUrls,
    });
  } catch (error) {
    console.error("Error getting signed URL:", error);
    throw error;
  }
}
