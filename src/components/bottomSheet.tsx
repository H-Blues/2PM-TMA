import React, { useState } from "react";
import { X, Check } from "lucide-react";
import { initUtils } from "@telegram-apps/sdk";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  inviteLink: string;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, inviteLink }) => {
  const [isCopied, setIsCopied] = useState(false);
  const utils = initUtils();
  const share_url = `https://t.me/share/url?url=https://t.me/datahoney_bot/startapp=123456`;

  if (!isOpen) return null;

  function shareLink() {
    utils.openTelegramLink(share_url);
  }

  function copyToClipboard(text: string) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      console.log("Text copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    document.body.removeChild(textArea);
  }

  const handleCopyLink = async () => {
    try {
      await copyToClipboard(inviteLink);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      alert(`Failed to copy link. Please try again. ${err}`);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
      <div className="bg-white w-full max-w-md rounded-t-2xl p-4 transform transition-transform duration-400 ease-out">
        <div className="flex justify-between items-center mb-4">
          <div className="w-14 h-1 bg-gray-300 rounded mx-auto mb-4"></div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <button className="w-full bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg mb-3" onClick={shareLink}>
          Share Invite Link
        </button>
        <button
          className="w-full bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-lg flex items-center justify-center"
          onClick={handleCopyLink}
        >
          {isCopied ? (
            <>
              <Check size={20} className="mr-2" />
              Copied!
            </>
          ) : (
            "Copy Invite Link"
          )}
        </button>
      </div>
    </div>
  );
};

export default BottomSheet;
