import { PrismaClient } from '@prisma/client';

declare global {
    namespace Express {
           var prismadb: PrismaClient;
}
}