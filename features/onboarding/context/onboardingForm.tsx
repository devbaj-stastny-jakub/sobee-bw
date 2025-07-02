import { createContext, useCallback, useContext, useState } from 'react';

import { FormStep } from '../types';

export type OnboardingFormContextState = {
    steps: Map<number, FormStep>;
    currentStep: FormStep | null;

    addStep: (step: FormStep) => void;
    removeStep: (name: string) => void;
    nextStep: () => void;
    previousStep: () => void;
    resetSteps: () => void;
    setCurrentStep: (name: string) => void;
};

const onboardingFormContextDefaultValues: OnboardingFormContextState = {
    steps: new Map(),
    currentStep: null,

    addStep: () => {},
    removeStep: () => {},
    nextStep: () => {},
    previousStep: () => {},
    resetSteps: () => {},
    setCurrentStep: () => {},
};

const OnboardingFormContext = createContext<OnboardingFormContextState>(
    onboardingFormContextDefaultValues
);

interface OnboardingFormContextProviderProps {
    children: React.ReactNode;
}
export const OnboardingFormContextProvider = ({ children }: OnboardingFormContextProviderProps) => {
    const [steps, setSteps] = useState<OnboardingFormContextState['steps']>(new Map());
    const [currentStep, setCurrentStep] = useState<OnboardingFormContextState['currentStep']>(null);

    const handleAddStep = useCallback(
        (step: FormStep) => {
            setSteps((prevSteps) => new Map(prevSteps).set(step.order, step));
            if (step.order === 1 && !currentStep) {
                setCurrentStep(step);
            }
        },
        [steps.size]
    );

    const handleRemoveStep = useCallback((stepName: string) => {
        setSteps((prevSteps) => {
            const newSteps = new Map(prevSteps);
            for (const [key, value] of newSteps) {
                if (value.name === stepName) {
                    newSteps.delete(key);
                    break;
                }
            }
            return newSteps;
        });
    }, []);

    const handleNextStep = useCallback(() => {
        if (!currentStep) return;
        const nextStepOrder = currentStep.order + 1;
        const nextStep = steps.get(nextStepOrder);
        if (!nextStep) return;
        setCurrentStep(nextStep);
    }, [currentStep, steps]);

    const handlePreviousStep = useCallback(() => {
        if (!currentStep) return;
        const previousStepOrder = currentStep.order - 1;
        const previousStep = steps.get(previousStepOrder);
        if (!previousStep) return;
        setCurrentStep(previousStep);
    }, [currentStep, steps]);

    const handleResetSteps = useCallback(() => {
        setSteps(new Map());
        setCurrentStep(null);
    }, []);

    const handleSetCurrentStepByName = useCallback(
        (name: string) => {
            const step = Array.from(steps.values()).find((s) => s.name === name);
            if (step) {
                setCurrentStep(step);
            }
        },
        [steps]
    );

    return (
        <OnboardingFormContext.Provider
            value={{
                steps,
                currentStep,

                addStep: handleAddStep,
                removeStep: handleRemoveStep,
                nextStep: handleNextStep,
                previousStep: handlePreviousStep,
                resetSteps: handleResetSteps,
                setCurrentStep: handleSetCurrentStepByName,
            }}
        >
            {children}
        </OnboardingFormContext.Provider>
    );
};

export const useOnboardingForm = () => {
    const context = useContext(OnboardingFormContext);
    if (!context) {
        throw new Error('useOnboardingForm must be used within an OnboardingFormContextProvider');
    }
    return context;
};
