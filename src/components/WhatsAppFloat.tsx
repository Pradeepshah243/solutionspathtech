import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = '9779812148801'; // Nepal phone number
  const message = 'Hello! I am interested in your IT services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 w-80 animate-in slide-in-from-bottom">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-[#111827]">Chat with us</h4>
                  <p className="text-xs text-gray-500">We're online!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <p className="text-gray-600 text-sm mb-4">
              Hi there! 👋 How can we help you today? Click below to start a conversation on WhatsApp.
            </p>
            
            <button
              onClick={handleWhatsAppClick}
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start Chat</span>
            </button>
            
            <p className="text-xs text-gray-500 text-center mt-3">
              Usually replies within minutes
            </p>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 relative"
          aria-label="Open WhatsApp chat"
        >
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
          
          {/* Icon */}
          <MessageCircle className="w-8 h-8 text-white relative z-10" />
          
          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs z-20">
            1
          </span>
        </button>
      </div>
    </>
  );
}
