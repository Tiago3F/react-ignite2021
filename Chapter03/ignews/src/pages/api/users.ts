import { NextApiRequest, NextApiResponse } from "next";

export default function (request: NextApiRequest, response: NextApiResponse) {
  const users = [
    {
      id: "1",
      name: "Tiago Moreira",
    },
    {
      id: "2",
      name: "Alan Jesus",
    },
    {
      id: "3",
      name: "Luiz José",
    },
  ];

  return response.json(users);
}
