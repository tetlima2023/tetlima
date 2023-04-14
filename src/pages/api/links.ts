// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createLinks, getAllLink, removeLinks } from '@/lib/handleLink'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  if(req.method === 'GET') {
    const data = await getAllLink()
    res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const nome = req.body.nome
    const url = req.body.url
    await createLinks(nome, url)
    res.status(201).json({ mesage: 'created' })
  }
}
