import type { NextRequest } from "next/server";
import Jimp from "jimp";
export const config = {
    runtime: "experimental-edge",
};
import { NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
    const res = await fetch(
        "https://trive-attachment.s3.ap-northeast-2.amazonaws.com/subscription/4768/3695/467a9abd-22fb-4cd1-8bbd-95f42a975901.pdf"
    );
    const resBlob = await res.blob();
    return new NextResponse(resBlob, {
        status: 200,
        headers: { "content-type": "application/pdf" },
    });
}
