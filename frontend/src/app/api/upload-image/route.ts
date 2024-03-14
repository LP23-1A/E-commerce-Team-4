import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { v4 } from "uuid"
 
const s3 = new S3Client({
    region: 'ap-southeast-1',
    endpoint: process.env.ENDPOINT || '',
    credentials: {
        accessKeyId: process.env.ACCESS_KEY_ID || 'AKIA47CRYFUEWEIXJVGW',
        secretAccessKey: process.env.SECRET_ACCESS_KEY || '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',
    },
});
 
export async function GET(request: Request) {
    console.log(s3);
 
 
    try {
        const key = v4()
        const sign = await getSignedUrl(
            s3,
            new PutObjectCommand({
                Bucket: 'ecommerceteam4pinecone',
                Key: key,
                ACL: 'public-read',
            }),
            {
                expiresIn: 60 * 60,
            }
        )
 
        return Response.json({
            uploadUrls: sign,
            objectUrl: `https://ecommerceteam4pinecone.s3.ap-southeast-1.amazonaws.com/${key}`
        });
 
    } catch (error) {
        console.log(error);
        return Response.json({
            error,
            // accessUrls: keys.map((key) => process.env.PUB_URL + key),
        });
    }
 
}