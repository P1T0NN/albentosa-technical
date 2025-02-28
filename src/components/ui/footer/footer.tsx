// NEXTJS IMPORTS
import Image from "next/image";

export const Footer = () => {
    const navItems = [
        { name: 'Home', href: '#' },
        { name: 'Programs', href: '#programs' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center mb-4">
                            <Image 
                                src="/logo/albentosa-technical-logo.png" 
                                alt="Albentosa Football School" 
                                width={70} 
                                height={70}
                                className="transition-all duration-300"
                            />
                            <h3 className="ml-2 text-xl font-bold">Albentosa Football School</h3>
                        </div>
                        
                        <p className="text-gray-400">
                            Developing the next generation of soccer stars through professional training and dedication
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="text-gray-400 hover:text-[#00ff00] transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact</h3>
                        <p className="text-gray-400">
                            Email: info@albentosa.football<br />
                            Phone: (555) 123-4567<br />
                            Location: 123 Soccer Street<br />
                            Los Angeles, CA 90001
                        </p>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p>&copy; 2024 Albentosa Football School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
