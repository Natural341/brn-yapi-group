import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }

export const prisma = globalForPrisma.prisma || new PrismaClient({
  datasources: {
    db: {
      url: "mysql://u253825220_brnyapi_user:Portakal2004!@127.0.0.1:3306/u253825220_brn_yapi_produ",
    },
  },
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma