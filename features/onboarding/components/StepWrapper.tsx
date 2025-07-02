import { ComponentType, useEffect } from 'react';

import { useOnboardingForm } from '../context';
import { FormStep } from '../types';

export interface StepWrapperProps {
    step: FormStep;
    Element: ComponentType<{ stepName: string }>;
}
const StepWrapper = ({ Element, step }: StepWrapperProps) => {
    const { addStep } = useOnboardingForm();

    useEffect(() => {
        addStep({ name: step.name, order: step.order });
    }, [step.name, step.order, addStep]);

    return <Element stepName={step.name} />;
};

export default StepWrapper;
