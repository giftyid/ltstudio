import { Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">LT Studio</h3>
            <p className="text-gray-300 mb-4">
              Chuyên cung cấp và sản xuất các video giải trí và truyền thông chất lượng cao
            </p>
            <div className="text-gray-400 space-y-1">
              <p>Địa chỉ: Cuối đường Thái Bình, Tp Nam Định</p>
              <p>Điện thoại: 0944.108.872</p>
              <p>
                Facebook: 
                <a 
                  href="https://www.facebook.com/LTStudioVietNam" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 ml-1"
                >
                  @LTStudioVietNam
                </a>
              </p>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <div className="mb-4">
              <a 
                href="https://www.facebook.com/LTStudioVietNam" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 LT Studio. Thiết kế bởi LT Studio
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 