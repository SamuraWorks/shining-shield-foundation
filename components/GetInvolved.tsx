"use client";

import Link from "next/link";
import { HandHeart, Users2 } from "lucide-react";

export default function GetInvolved() {
    return (
        <section id="get-involved" className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Join The Movement</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                        Be The Change You Want To See
                    </h3>
                    <p className="text-slate-600 text-lg">
                        We are always looking for passionate individuals and organizations to join our mission. Whether you can volunteer your time or partner with us strategically, your involvement matters.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Join The Movement</h2>
                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                        Get Involved
                    </h3>
                    <p className="text-slate-600 text-lg">
                        We are always looking for passionate individuals and organizations to join our mission.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl border border-slate-100 p-8 md:p-12">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-slate-50"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-slate-50"
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-slate-50"
                                    placeholder="+232..."
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">I am interested in...</label>
                            <select className="w-full px-4 py-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-slate-50">
                                <option value="Volunteer">Volunteering</option>
                                <option value="Partner">Partnering</option>
                                <option value="Sponsor">Sponsorship</option>
                            </select>
                        </div>

                        <button
                            type="button"
                            className="w-full py-4 bg-primary hover:bg-primary-light text-white font-bold rounded-md shadow-lg transition-colors"
                            onClick={() => window.open('https://wa.me/23232778016', '_blank')}
                        >
                            Submit Interest
                        </button>

                        <p className="text-xs text-center text-slate-500 mt-4">
                            Submitting this form will connect you with our team via WhatsApp to proceed.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
