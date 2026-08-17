import React, { createContext, useContext, useState } from 'react';

const FormModalContext = createContext();

export const FormModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    formType: 'demo', // 'demo' | 'getStarted' | 'contact' | 'apply'
    initialData: {}
  });

  const openModal = (formType = 'demo', initialData = {}) => {
    setModalState({
      isOpen: true,
      formType,
      initialData
    });
  };

  const closeModal = () => {
    setModalState(prev => ({
      ...prev,
      isOpen: false
    }));
  };

  return (
    <FormModalContext.Provider value={{ ...modalState, openModal, closeModal }}>
      {children}
    </FormModalContext.Provider>
  );
};

export const useFormModal = () => {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error('useFormModal must be used within a FormModalProvider');
  }
  return context;
};

export default FormModalContext;
