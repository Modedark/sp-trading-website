import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

export const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-16 pb-8 border-t border-[#333]">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="relative w-48 h-20">
                                <Logo className="w-full h-full" />
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium quality organic water chestnut products.
                            Hygienically processed for global export standards.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {/* Placeholder for Trust Badges */}
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded border border-white/20">
                                <span className="text-xs font-bold text-white">FSSAI Certified</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded border border-white/20">
                                <span className="text-xs font-bold text-white">APEDA Registered</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-highlight font-sans">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/export" className="hover:text-primary transition-colors">Export</Link></li>
                            <li><Link href="/recipes" className="hover:text-primary transition-colors">Recipes</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-highlight font-sans">Products</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/product" className="hover:text-primary transition-colors">Water Chestnut Flour</Link></li>
                            <li><Link href="/product" className="hover:text-primary transition-colors">Singhara Atta (Retail)</Link></li>
                            <li><Link href="/product" className="hover:text-primary transition-colors">Bulk Supply</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-[#D32F2F]">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-[#D32F2F] shrink-0" />
                                <span>
                                    123 Industrial Area, <br />
                                    Madhya Pradesh, India - 462001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-[#D32F2F] shrink-0" />
                                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-[#D32F2F] shrink-0" />
                                <a href="mailto:export@sptrading.com" className="hover:text-white">export@sptrading.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} S P Trading. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
