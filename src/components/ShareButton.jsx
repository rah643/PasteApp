import React from "react";

const ShareButton = () => {
  const shareUrl = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent("Check out this amazing website!");

  return (
    <div>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-purple-500 hover:text-purple-700"
      >
        <i className="fas fa-share-alt mr-2"></i> Share on Facebook
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-purple-500 hover:text-purple-700"
      >
        <i className="fas fa-share-alt mr-2"></i> Share on Twitter
      </a>
      <a
        href={`https://api.whatsapp.com/send?text=${shareText} ${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-purple-500 hover:text-purple-700"
      >
        <i className="fas fa-share-alt mr-2"></i> Share on WhatsApp
      </a>
    </div>
  );
};

export default ShareButton;
