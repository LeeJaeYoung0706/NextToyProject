import prisma from '../../util/dataSource'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createUser } from '../../prismaFunction/user/create';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const result = createUser;
      
    res.status(200).json({});
}

