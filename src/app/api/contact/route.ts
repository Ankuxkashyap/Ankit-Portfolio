import { NextRequest as Request } from "next/server";

export async function POST(request: Request) {
    try {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log("Bot Token:", TELEGRAM_BOT_TOKEN);
    console.log("Chat ID:", TELEGRAM_CHAT_ID);

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        return new Response("Telegram bot token or chat ID not configured", { status: 500 });
    }
    const { name, email, message } = await request.json();
    
        const text = `
    ✨ *New Portfolio Message*

        👤 Name - *${name.trim()}*
        📧 Email - *${email.trim()}*


        💬 *Message:*
        ${message.trim()}

    ────────────────────
        📅 ${new Date().toLocaleDateString()}
        ⏰ ${new Date().toLocaleTimeString()}
        `.trim();


    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
            parse_mode: "Markdown",
        }),
    });

    if (!response.ok) {
        return new Response("Failed to send message", { status: 500 });
    }
    
    return new Response("Message sent successfully", { status: 200 });

} catch (error) {
    return new Response("An error occurred", { status: 500 });
}
}