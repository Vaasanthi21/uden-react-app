import React, { useState, useEffect, useRef } from 'react';
import { Bot } from 'lucide-react';

const IntercomLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const registeredCallbacks = useRef(false);

  useEffect(() => {
    let observer = null;

    const checkState = () => {
      const frame = document.querySelector('div[data-testid="fin-floating-frame"], .intercom-messenger-frame');
      if (frame) {
        const vis = frame.getAttribute('data-visibility-state');
        if (vis === 'visible') {
          setIsOpen(true);
        } else if (vis === 'shrinked') {
          setIsOpen(false);
        }
      }
    };

    const registerCallbacks = () => {
      if (!registeredCallbacks.current && typeof window !== 'undefined' && typeof window.Intercom === 'function') {
        try {
          window.Intercom('onShow', () => setIsOpen(true));
          window.Intercom('onHide', () => setIsOpen(false));
          registeredCallbacks.current = true;
        } catch (e) {}
      }
    };

    const setupObserver = () => {
      const container = document.getElementById('intercom-container');
      if (container && !observer) {
        observer = new MutationObserver(() => {
          checkState();
        });
        observer.observe(container, {
          attributes: true,
          subtree: true,
          attributeFilter: ['data-visibility-state', 'style', 'class']
        });
      }
    };

    const runChecks = () => {
      checkState();
      setupObserver();
      registerCallbacks();
    };

    runChecks();
    const interval = setInterval(runChecks, 300);

    return () => {
      clearInterval(interval);
      if (observer) observer.disconnect();
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      if (typeof window.Intercom === 'function') {
        window.Intercom('show');
        setIsOpen(true);
      } else {
        const poll = setInterval(() => {
          if (typeof window.Intercom === 'function') {
            clearInterval(poll);
            window.Intercom('show');
            setIsOpen(true);
          }
        }, 50);
        setTimeout(() => clearInterval(poll), 4000);
      }
    }
  };

  return (
    <button
      id="intercom-custom-launcher"
      onClick={handleClick}
      aria-label="Chat with UDEN AI"
      title="Ask UDEN AI"
      type="button"
      style={{ display: isOpen ? 'none' : 'flex' }}
    >
      <Bot size={30} color="#FFFFFF" strokeWidth={2.2} />
    </button>
  );
};

export default IntercomLauncher;
