// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getLink, removeLinks } from '@/lib/handleLink'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === 'DELETE') {
    const { id } = req.query

    if(id) {
      await removeLinks(id.toString())
      res.status(200).json({message: "deleted"})
    }
  }
}
