import { createContext, useContext, useState } from 'react';

export type FailureFormContextState = {
    steps: number[];
    currentStep: number;

    addStep: (step: number) => void;
    setCurrentStep: (step: number) => void;
    nextStep: () => void;
    previousStep: () => void;
};

const failureFormContextDefaultValues: FailureFormContextState = {
    steps: [],
    currentStep: 0,

    addStep: () => null,
    setCurrentStep: () => null,
    nextStep: () => null,
    previousStep: () => null,
};

const FailureFormContext = createContext<FailureFormContextState>(failureFormContextDefaultValues);

interface FailureFormContextProviderProps {
    children: React.ReactNode;
}
export const FailureFormContextProvider = ({ children }: FailureFormContextProviderProps) => {
    const [steps, setSteps] = useState<FailureFormContextState['steps']>([]);
    const [currentStep, setCurrentStep] = useState<FailureFormContextState['currentStep']>(1);

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
        <FailureFormContext.Provider
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
        </FailureFormContext.Provider>
    );
};

export const useFailureForm = () => {
    const context = useContext(FailureFormContext);
    if (!context) {
        throw new Error('useFailureForm must be used within a FailureFormContextProvider');
    }
    return context;
};
