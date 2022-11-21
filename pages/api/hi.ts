// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    res.status(200).json({
        hi_cookie: req.headers["x-hello-from-middleware1"] || "쿠키가 없어요",
    });
}
