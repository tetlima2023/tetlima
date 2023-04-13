// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getAllLink } from '@/lib/handleLink'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const dados = await getAllLink()
    res.status(200).json(dados)
  }
}
