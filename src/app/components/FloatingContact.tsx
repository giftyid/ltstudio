import { Facebook, MessageCircle, Phone } from 'lucide-react';

export default function FloatingContact() {
  return (
    <div className="fixed right-6 bottom-6 space-y-3 z-40">
      <a 
        href="https://www.facebook.com/LTStudioVietNam" 
        target="_blank"
        rel="noopener noreferrer"
        className="block w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </a>
      <a 
        href="https://wa.me/84944108872" 
        target="_blank"
        rel="noopener noreferrer"
        className="block w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href="tel:0944108872" 
        className="block w-14 h-14 bg-red-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-red-600 transition-all hover:scale-110"
        aria-label="Phone"
      >
        <Phone size={24} />
      </a>
    </div>
  );
} 