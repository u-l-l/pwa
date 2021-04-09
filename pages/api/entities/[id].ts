import { NextApiRequest, NextApiResponse } from 'next'
import { entities } from '../../../utils/sample-data'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    res.status(200).json(entities.find(e => e.id == _req.query.id))
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler;
