import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function SupportProducts() {
    const products = [
        {
            name: "Official Foundation Cap",
            price: "$25.00",
            image: "bg-slate-200", // Placeholder class
        },
        {
            name: "Supporter T-Shirt",
            price: "$30.00",
            image: "bg-slate-300",
        },
        {
            name: "Lapel Pin - Gold Edition",
            price: "$15.00",
            image: "bg-slate-200",
        },
    ];

    return (
        <section id="support-products" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Support The Cause</h2>
                    <h3 className="text-3xl md:text-3xl font-heading font-bold text-primary mb-4">
                        Support Products
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        To support our educational and community programs, SSF offers a small selection of branded support products. Proceeds go directly to foundation initiatives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Product 1 */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-32 h-32 bg-white rounded-lg flex-shrink-0 flex items-center justify-center border border-slate-200 shadow-sm overflow-hidden">
                            <img src="/products/soap.jpg" alt="Shield Clean Soap" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-bold text-primary mb-2">Shield Clean Multi-Purpose Liquid Soap</h4>
                            <p className="text-sm text-slate-600 mb-4">
                                "Clean Hands, Clean Hearts, Brighter Futures."<br />
                                Versatile soap supporting SSF programs.
                            </p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-colors text-sm"
                            >
                                Enquire / Support
                            </Link>
                        </div>
                    </div>

                    {/* Product 2 (Placeholder) */}
                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-32 h-32 bg-white rounded-lg flex-shrink-0 flex items-center justify-center border border-slate-200 shadow-sm">
                            <ShoppingBag className="text-slate-300" size={32} />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-bold text-primary mb-2">Other Branded Items</h4>
                            <p className="text-sm text-slate-600 mb-4">Educational materials and other branded support items.</p>
                            <Link
                                href="#contact"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 text-slate-600 font-semibold rounded-md hover:bg-slate-100 transition-colors text-sm"
                            >
                                Enquire / Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
