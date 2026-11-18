import React, { useState, useEffect } from 'react';
import { Bot } from 'lucide-react';

const IntercomLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleShow = () => {
      setIsOpen(true);
      if (typeof document !== 'undefined') {
        document.body.classList.add('intercom-open');
      }
    };

    const handleHide = () => {
      setIsOpen(false);
      if (typeof document !== 'undefined') {
        document.body.classList.remove('intercom-open');
      }
    };

    const attachIntercomListeners = () => {
      if (typeof window !== 'undefined' && window.Intercom) {
        window.Intercom('onShow', handleShow);
        window.Intercom('onHide', handleHide);
        try {
          window.Intercom('reattach_activator');
        } catch (e) {}
      }
    };

    attachIntercomListeners();
    window.addEventListener('load', attachIntercomListeners);

    // Observer to watch for Intercom messenger visibility changes in DOM
    let observer = null;
    const setupObserver = () => {
      const intercomContainer = document.getElementById('intercom-container');
      if (intercomContainer && !observer) {
        observer = new MutationObserver(() => {
          const messengerFrame = document.querySelector(
            'div[data-testid="fin-floating-frame"], .intercom-messenger-frame, iframe[name="intercom-messenger-frame"]'
          );
          if (messengerFrame) {
            const vis = messengerFrame.getAttribute('data-visibility-state');
            const style = window.getComputedStyle(messengerFrame);
            if (vis === 'visible' || (style.display !== 'none' && style.visibility !== 'hidden' && parseFloat(style.opacity) > 0.5 && messengerFrame.offsetHeight > 200)) {
              setIsOpen(true);
              document.body.classList.add('intercom-open');
            } else if (vis === 'shrinked' || messengerFrame.offsetHeight <= 100) {
              if (vis === 'shrinked') {
                setIsOpen(false);
                document.body.classList.remove('intercom-open');
              }
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
        if (isOpen) {
          window.Intercom('hide');
          setIsOpen(false);
          document.body.classList.remove('intercom-open');
        } else {
          window.Intercom('show');
          setIsOpen(true);
          document.body.classList.add('intercom-open');
        }
      } else {
        const checkInterval = setInterval(() => {
          if (window.Intercom) {
            window.Intercom('show');
            setIsOpen(true);
            document.body.classList.add('intercom-open');
            clearInterval(checkInterval);
          }
        }, 100);
        setTimeout(() => clearInterval(checkInterval), 4000);
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
