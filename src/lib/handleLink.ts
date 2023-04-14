import { prisma } from "./prisma";

export async function createLinks(nome: string, url: string) {
  return await prisma.redirect.create({
    data: {
      nome,
      url
    }
  })
}

export async function removeLinks(id: string) {
  return await prisma.redirect.delete({
    where: {
      id,
    }
  })
}

export async function getLink(id: string) {
  const data = await prisma.redirect.findUnique({
    where: {
      id,
    }
  })

  return data
}

export async function getAllLink() {
  return await prisma.redirect.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}