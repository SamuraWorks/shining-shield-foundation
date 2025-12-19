import { Mail, MapPin, Phone, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</h2>
                        <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                            Contact Our Office
                        </h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            We welcome inquiries from the public, media, and potential partners. Please allow 24-48 hours for a response from our communications team.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Location</h4>
                                    <p className="text-slate-600">
                                        130 British Road, New London<br />
                                        Kossoh Town, Jui
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Phone</h4>
                                    <p className="text-slate-600">
                                        <a href="tel:+23232778016" className="hover:text-accent transition-colors block">032 778 016</a>
                                        <a href="tel:+23278921412" className="hover:text-accent transition-colors block">078 921 412</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Email</h4>
                                    <p className="text-slate-600">
                                        <a href="mailto:shiningshieldfoundation@gmail.com" className="hover:text-accent transition-colors">
                                            shiningshieldfoundation@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-primary">
                                    <Instagram size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Instagram</h4>
                                    <p className="text-slate-600">
                                        <a href="https://instagram.com/shiningshield.foundation" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                                            @shiningshield.foundation
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Column */}
                    <div className="w-full lg:col-span-1">
                        <div className="h-full min-h-[400px] bg-slate-200 rounded-xl overflow-hidden relative shadow-lg border border-slate-200">
                            <iframe
                                width="100%"
                                height="100%"
                                id="gmap_canvas"
                                src="https://maps.google.com/maps?q=130%20British%20Road%2C%20New%20London%2C%20Kossoh%20Town%2C%20Jui%2C%20Sierra%20Leone&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                frameBorder="0"
                                marginHeight={0}
                                marginWidth={0}
                                title="Shining Shield Foundation Location"
                                className="w-full h-full"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
