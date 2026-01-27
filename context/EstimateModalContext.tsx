"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface EstimateModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const EstimateModalContext = createContext<EstimateModalContextType | undefined>(undefined);

export function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <EstimateModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </EstimateModalContext.Provider>
  );
}

export function useEstimateModal() {
  const context = useContext(EstimateModalContext);
  if (context === undefined) {
    throw new Error("useEstimateModal must be used within an EstimateModalProvider");
  }
  return context;
}
