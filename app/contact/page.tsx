import { Mail, Phone, MapPin } from 'lucide-react';

export const metadata = {
    title: 'Contact Us | SP Trading',
    description: 'Get in touch for bulk orders, export inquiries, or general questions about our Water Chestnut Flour.',
};

export default function ContactPage() {
    return (
        <main className="pt-24 pb-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-sans mb-4 text-secondary">Get in Touch</h1>
                    <p className="text-xl text-gray-600">
                        We'd love to hear from you.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-secondary mb-8">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                                    <a href="mailto:info@sptrading.com" className="text-gray-600 hover:text-primary transition-colors">info@sptrading.com</a>
                                    <p className="text-sm text-gray-400 mt-1">For export: export@sptrading.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                                    <a href="tel:+919876543210" className="text-gray-600 hover:text-primary transition-colors">+91 987 654 3210</a>
                                    <p className="text-sm text-gray-400 mt-1">Mon-Sat, 9am - 6pm IST</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Office</h3>
                                    <p className="text-gray-600">
                                        123, Trading Hub, Industrial Area,<br />
                                        New Delhi, India - 110001
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm">
                        <h2 className="text-2xl font-bold text-secondary mb-6">Send a Message</h2>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                    <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Optional" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white">
                                    <option>General Inquiry</option>
                                    <option>Bulk/Export Quote</option>
                                    <option>Distribution Partnership</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Tell us about your requirements..."></textarea>
                            </div>

                            <button type="submit" className="w-full bg-highlight text-white font-bold py-4 rounded-lg hover:bg-red-800 transition-colors shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
