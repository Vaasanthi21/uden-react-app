import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

const IntercomLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShow = () => setIsOpen(true);
    const handleHide = () => setIsOpen(false);

    const attachIntercomListeners = () => {
      if (typeof window !== 'undefined' && window.Intercom) {
        window.Intercom('onShow', handleShow);
        window.Intercom('onHide', handleHide);
      }
    };

    attachIntercomListeners();
    window.addEventListener('load', attachIntercomListeners);

    // Observer to watch for Intercom messenger visibility state changes
    let observer = null;
    const setupObserver = () => {
      const intercomContainer = document.getElementById('intercom-container');
      if (intercomContainer && !observer) {
        observer = new MutationObserver(() => {
          const frame = document.querySelector('div[data-testid="fin-floating-frame"], .intercom-messenger-frame');
          if (frame) {
            const vis = frame.getAttribute('data-visibility-state');
            if (vis === 'visible') {
              setIsOpen(true);
            } else if (vis === 'shrinked') {
              setIsOpen(false);
            }
          }
        });
        observer.observe(intercomContainer, {
          attributes: true,
          subtree: true,
          attributeFilter: ['data-visibility-state', 'class', 'style']
        });
      }
    };

    setupObserver();
    const interval = setInterval(setupObserver, 500);
    const timeout = setTimeout(() => clearInterval(interval), 5000);

    return () => {
      window.removeEventListener('load', attachIntercomListeners);
      clearInterval(interval);
      clearTimeout(timeout);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (window.Intercom) {
        window.Intercom('show');
      } else {
        const interval = setInterval(() => {
          if (window.Intercom) {
            window.Intercom('show');
            clearInterval(interval);
          }
        }, 100);
        setTimeout(() => clearInterval(interval), 4000);
      }
    }
  };

  if (isOpen) return null;

  return (
    <button
      id="intercom-custom-launcher"
      onClick={handleClick}
      aria-label="Chat with UDEN AI"
      title="Ask UDEN AI"
      type="button"
    >
      <Bot size={30} color="#FFFFFF" strokeWidth={2.2} />
    </button>
  );
};

export default IntercomLauncher;
