// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    console.log(req.headers);
    const res2 = await axios.get(
        "https://trive-attachment.s3.ap-northeast-2.amazonaws.com/subscription/4768/3695/467a9abd-22fb-4cd1-8bbd-95f42a975901.pdf",
        { responseType: "stream" }
    );

    res.status(200)
        .setHeader("Content-Type", "application/pdf")
        .send(res2.data);
}
