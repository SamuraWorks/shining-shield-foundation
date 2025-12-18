import { Shield, Target, Heart } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div>
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">About Us</h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                            Protecting dreams, empowering futures
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Shining Shield Foundation (SSF) is dedicated to fostering safe learning environments and promoting gender equality. We offer support to those facing social, financial, or emotional constraints so they can rebuild their dreams and shine in life.
                        </p>

                        <div className="space-y-8 mt-8">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mt-1">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Vision Statement</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        To create a society where every child and youth especially girls has the protection, support, and opportunities needed to thrive academically, emotionally, and socially, regardless of their background, circumstances, or challenges.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mt-1">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-primary mb-2">Mission Statement</h4>
                                    <p className="text-slate-600 leading-relaxed">
                                        To empower and protect children and youths particularly brilliant but underprivileged students, school dropouts, and vulnerable girls by providing access to education, mentorship, and life skills training. We strive to foster safe learning environments, promote gender equality, and offer support to those facing social, financial, or emotional constraints so they can rebuild their dreams and shine in life.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Disclaimer Box */}
                        <div className="mt-10 p-4 border-l-4 border-accent bg-slate-50 rounded-r-md">
                            <p className="text-sm text-slate-500 italic">
                                Note: Shining Shield Foundation is an emerging community initiative currently in the process of registration.
                            </p>
                        </div>
                    </div>

                    {/* Visual/Image Side - Using CSS Patterns since no images yet */}
                    <div className="relative h-full min-h-[400px] w-full bg-slate-100 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-primary/10"></div>
                        {/* Placeholder for an actual image */}
                        <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400">
                            <div className="w-full h-full bg-gradient-to-tr from-primary to-slate-800 opacity-90"></div>
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-8 border border-white/20 rounded-xl bg-white/5 backdrop-blur-sm">
                                <div className="w-24 h-24 mx-auto mb-4 bg-white/10 rounded-full p-2 flex items-center justify-center">
                                    <img src="/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-white font-heading font-medium text-xl">Service Above Self</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
