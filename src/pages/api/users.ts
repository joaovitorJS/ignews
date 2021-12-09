import { NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {id: 1, name: 'joao'},
    {id: 2, name: 'luiz'},
    {id: 3, name: 'neto'}
  ];

  return response.json(users);
}