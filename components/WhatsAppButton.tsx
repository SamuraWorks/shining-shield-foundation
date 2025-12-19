"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

export default function WhatsAppButton() {
    return (
        <Link
            href="https://wa.me/23232778016"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={28} fill="white" className="text-white" />
        </Link>
    );
}
