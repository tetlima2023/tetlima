// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getLink } from '@/lib/handleLink'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query

    if (id) {
      const dados = await getLink(id.toString())
      res.status(200).json(dados)
    }
  }
}
