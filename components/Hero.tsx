import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-primary">
            {/* Real Life Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/gallery/rec-donation/rec-2.jpg"
                    alt="Shining Shield Foundation Community"
                    className="w-full h-full object-cover object-center"
                />
                {/* Gradient overlay - Brightened */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/80 to-[#0033A0]/60 mix-blend-multiply"></div>
            </div>

            {/* Background pattern texture on top of image for polish */}
            <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 mix-blend-overlay z-0"></div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
                <Reveal width="100%">
                    <p className="inline-block text-accent font-semibold tracking-wider uppercase mb-4">
                        Protecting dreams, empowering futures
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.1}>
                    <h1 className="max-w-4xl mx-auto text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight tracking-tight mb-6 uppercase">
                        Shining Shield Foundation
                    </h1>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <p className="max-w-2xl mx-auto text-2xl font-light text-white/90 italic mb-8 leading-relaxed font-heading border-l-4 border-accent pl-4">
                        “Together we shield, together we shine”
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.3}>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                        To empower and protect children and youths by providing access to education, mentorship, and life skills training.
                    </p>
                </Reveal>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="#get-involved"
                        className="w-full sm:w-auto px-8 py-3 bg-white text-primary font-bold rounded-md hover:bg-slate-100 transition-all text-center"
                    >
                        Get Involved
                    </Link>
                    <Link
                        href="#donate"
                        className="w-full sm:w-auto px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white/10 transition-all text-center"
                    >
                        Support the Mission
                    </Link>
                </div>
            </div>
        </section>
    );
}
