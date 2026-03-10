import React from "react";

type FormProgressProps = {
  currentStep: number;
};

const steps = [
  { id: 1, label: 'Výber útulku' },
  { id: 2, label: 'Osobné údaje' },
  { id: 3, label: 'Potvrdenie' },
];

export default function FormProgress({ currentStep }: FormProgressProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto_1fr_auto] items-center gap-4">
      {steps.map((step, index) => {
        const isActiveOrCompleted = step.id <= currentStep;

        return (
          <React.Fragment key={step.id}>
            <div className="flex items-center gap-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full border text-sm font-medium ${
                  isActiveOrCompleted
                    ? 'border-primary bg-primary text-white'
                    : 'border-gray-300 text-gray-300'
                }`}
              >
                {step.id}
              </div>

              <p
                className={`text-base ${
                  isActiveOrCompleted ? 'text-gray-900' : 'text-gray-300'
                }`}
              >
                {step.label}
              </p>
            </div>

            {index < steps.length - 1 && (
              <div
                className={`h-px w-full ${
                  step.id < currentStep ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}