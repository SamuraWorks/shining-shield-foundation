"use client";

import { CreditCard, Smartphone } from "lucide-react";
import { useState } from "react";

export default function Donate() {
    const [amount, setAmount] = useState<string>("100");
    const [customAmount, setCustomAmount] = useState<string>("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const handleAmountClick = (val: string) => {
        setAmount(val);
        setCustomAmount("");
    };

    const handleDonate = () => {
        const finalAmount = customAmount || amount;
        const name = `${firstName} ${lastName}`.trim();

        if (!finalAmount || !name) {
            alert("Please provide your name and a donation amount.");
            return;
        }

        // Construct WhatsApp Message
        const message = `Hello Shining Shield Foundation, my name is ${name}${email ? ` (${email})` : ""}. I would like to pledge a donation of $${finalAmount} to support your educational initiatives. How can I proceed with the transfer?`;

        // Open WhatsApp
        const waLink = `https://wa.me/23232778016?text=${encodeURIComponent(message)}`;
        window.open(waLink, "_blank");
    };

    return (
        <section id="donate" className="py-20 bg-gradient-to-br from-primary to-[#002366] text-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Make a Difference</h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                            Support Our Mission
                        </h3>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                            Your contribution directly supports our educational and community programs. We value transparency and responsible stewardship.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mobile Money */}
                        <div className="bg-white rounded-xl p-8 text-slate-800 shadow-xl border-t-8 border-orange-500">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
                                    <Smartphone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary">Orange Money</h4>
                                    <p className="text-sm text-slate-500">Mobile Transfer</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                                    <p className="text-sm font-semibold text-orange-800 uppercase tracking-wide mb-1">Number</p>
                                    <p className="text-3xl font-bold text-slate-800 tracking-wider">078 921 412</p>
                                </div>
                                <p className="text-sm text-slate-500 italic">
                                    * Please verify the recipient name matches "Shining Shield Foundation" or authorized representative before confirming.
                                </p>
                            </div>
                        </div>

                        {/* Bank Transfer */}
                        <div className="bg-white rounded-xl p-8 text-slate-800 shadow-xl border-t-8 border-primary">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-primary">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary">Bank Donation</h4>
                                    <p className="text-sm text-slate-500">Direct Deposit</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                                    <div className="mb-3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Bank Name</p>
                                        <p className="font-bold text-slate-800">Bank details available upon request</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-slate-500 uppercase">Account Name</p>
                                        <p className="font-bold text-slate-800">Shining Shield Foundation</p>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500">
                                    For bank transfer details, please contact us at <a href="mailto:shiningshieldfoundation@gmail.com" className="text-accent hover:underline">shiningshieldfoundation@gmail.com</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-white/80 text-sm">
                            * Note: No online checkout available. All donations are processed directly to ensure security and transparency.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
