import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShareNodes} from '@fortawesome/free-solid-svg-icons'

const ShareButton = () => {
  const router = useRouter();

  const handleShare = () => {
    // Get the current URL
    const currentURL = window.location.href;

    // Check if the browser supports the Web Share API
    if (navigator.share) {
      navigator.share({
        title: 'My Website',
        url: currentURL,
      })
        .then(() => console.log('Successfully shared'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      const shareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentURL)}`;
      window.open(shareURL, '_blank');
    }
  };

  return (
       <FontAwesomeIcon icon={faShareNodes} onClick={handleShare}/>
  );
};

export default ShareButton;
