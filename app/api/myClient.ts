import { PrismaClient } from '@prisma/client';
export class MyClient {
    private prisma: any;

    constructor() {
        this.prisma = new PrismaClient();
    }
    getClient() {
        return this.prisma;
    }
}
