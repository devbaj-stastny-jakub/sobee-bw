import { createContext, useContext, useState } from 'react';

export type CravingFormContextState = {
    steps: number[];
    currentStep: number;

    addStep: (step: number) => void;
    setCurrentStep: (step: number) => void;
    nextStep: () => void;
    previousStep: () => void;
};

const cravingFormContextDefaultValues: CravingFormContextState = {
    steps: [],
    currentStep: 0,

    addStep: () => null,
    setCurrentStep: () => null,
    nextStep: () => null,
    previousStep: () => null,
};

const CravingFormContext = createContext<CravingFormContextState>(cravingFormContextDefaultValues);

interface CravingFormContextProviderProps {
    children: React.ReactNode;
}
export const CravingFormContextProvider = ({ children }: CravingFormContextProviderProps) => {
    const [steps, setSteps] = useState<CravingFormContextState['steps']>([]);
    const [currentStep, setCurrentStep] = useState<CravingFormContextState['currentStep']>(1);

    const handleNextStep = () => {
        setCurrentStep((prev) => {
            if (prev === steps.length) return prev;
            return prev + 1;
        });
    };

    const handlePreviousStep = () => {
        setCurrentStep((prev) => {
            if (prev === 1) return prev;
            return prev - 1;
        });
    };

    const handleAddStep = (step: number) => {
        setSteps((prev) => {
            if (prev.includes(step)) return prev;
            return [...prev, step];
        });
    };

    return (
        <CravingFormContext.Provider
            value={{
                steps,
                currentStep,
                setCurrentStep,
                addStep: handleAddStep,
                nextStep: handleNextStep,
                previousStep: handlePreviousStep,
            }}
        >
            {children}
        </CravingFormContext.Provider>
    );
};

export const useCravingForm = () => {
    const context = useContext(CravingFormContext);
    if (!context) {
        throw new Error('useCravingForm must be used within a CravingFormContextProvider');
    }
    return context;
};
