import { NextResponse as Response } from "next/server";
export function GET () {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    console.log("Chat ID:", TELEGRAM_CHAT_ID);
    console.log("Bot Token:", TELEGRAM_BOT_TOKEN);

    return new Response(
      `Chat ID: ${TELEGRAM_CHAT_ID}, Bot Token: ${TELEGRAM_BOT_TOKEN}`,
      { status: 200 }
  );
} 