import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { MyClient } from '../myClient';

export async function GET() {
    const client = new MyClient();
    const users = await client.getClient().user.findMany();
    return NextResponse.json(users);
}

export async function POST(req: any, res: any) {
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'Bob',
    //         email: 'bob@prisma.io',
    //         posts: {
    //             create: {
    //                 title: 'Hello World'
    //             }
    //         }
    //     }
    // });
    // console.log(user);
    return NextResponse.json({});
}
