import { NextRequest, NextResponse } from 'next/server';

// Notion API integration placeholder
// In production, use @notionhq/client with proper API key

interface OrderData {
    packageId: string;
    packageName: string;
    packageSlug: string;
    customerName: string;
    email: string;
    phone: string;
    travelers: number;
    travelDate: string;
    requests: string;
    totalPrice: number;
}

export async function POST(request: NextRequest) {
    try {
        const data: OrderData = await request.json();

        // Validate required fields
        if (!data.customerName || !data.email || !data.phone || !data.travelDate) {
            return NextResponse.json(
                { error: '필수 정보가 누락되었습니다.' },
                { status: 400 }
            );
        }

        // Generate order ID
        const orderId = `KST-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

        // In production, create Notion page here:
        // const notion = new Client({ auth: process.env.NOTION_API_KEY });
        // await notion.pages.create({
        //   parent: { database_id: process.env.NOTION_DATABASE_ID },
        //   properties: {
        //     'Order ID': { title: [{ text: { content: orderId } }] },
        //     'Package Name': { rich_text: [{ text: { content: data.packageName } }] },
        //     'Customer Name': { rich_text: [{ text: { content: data.customerName } }] },
        //     'Email': { email: data.email },
        //     'Phone': { phone_number: data.phone },
        //     'Travel Date': { date: { start: data.travelDate } },
        //     'Travelers': { number: data.travelers },
        //     'Total Price': { number: data.totalPrice },
        //     'Status': { select: { name: 'Pending' } },
        //     'Requests': { rich_text: [{ text: { content: data.requests || '' } }] },
        //   },
        // });

        // For demo, just log the order
        console.log('New order created:', {
            orderId,
            ...data,
            createdAt: new Date().toISOString(),
        });

        return NextResponse.json({
            success: true,
            orderId,
            message: '주문이 성공적으로 생성되었습니다.',
        });
    } catch (error) {
        console.error('Order creation error:', error);
        return NextResponse.json(
            { error: '주문 처리 중 오류가 발생했습니다.' },
            { status: 500 }
        );
    }
}
