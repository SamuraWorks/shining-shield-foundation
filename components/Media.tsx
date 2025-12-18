import { Calendar } from "lucide-react";

export default function Media() {

    return (
        <section id="media" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Media & Updates</h2>
                    <h3 className="text-3xl md:text-3xl font-heading font-bold text-primary">
                        Recent Updates
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Item 1 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Completed
                                </span>
                                <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                                    <Calendar size={12} />
                                    25 Sept 2025
                                </div>
                            </div>
                            <h4 className="text-xl font-bold font-heading text-primary mb-3">
                                Back-to-School Donation
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Distributed educational materials to students at Rural Education Committee (REC) school in Kossoh Town.
                            </p>
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Upcoming
                                </span>
                                <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                                    <Calendar size={12} />
                                    Dec 2025
                                </div>
                            </div>
                            <h4 className="text-xl font-bold font-heading text-primary mb-3">
                                End of Year Community Gathering
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Planning a community engagement session to discuss next year's educational goals with parents.
                            </p>
                        </div>
                    </div>

                    {/* Item 3 */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-100 group">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
                                    Ongoing
                                </span>
                                <div className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                                    <Calendar size={12} />
                                    2025
                                </div>
                            </div>
                            <h4 className="text-xl font-bold font-heading text-primary mb-3">
                                Partnership Drive
                            </h4>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Actively seeking collaborations with local businesses to support our scholarship fund.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
