'use client';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputFieldTyped from "../InputFieldTyped";
import InputFieldDropdown from "../InputFieldDropdown";
import { useState } from "react";
import { TARGET_ROLE_OPTIONS, WORK_STATUS_OPTIONS, YEARS_OF_EXPERIENCE_OPTIONS } from "@/app/utils/content";
import { BasicDetailsFormData, basicDetailsSchema, CohortFormData, WorkProfileFormData, workProfileSchema } from "@/validation/CohortFormValidators";
import { X } from "lucide-react";

const LS_STEP_KEY = "book_step";
const LS_BASIC_KEY = "book_basic_details";
const LS_WORK_KEY = "book_work_profile";

function getStoredStep(): number {
  try {
    const val = localStorage.getItem(LS_STEP_KEY);
    return val ? parseInt(val, 10) : 1;
  } catch { return 1; }
}

function getStoredBasicDetails(): BasicDetailsFormData | null {
  try {
    const val = localStorage.getItem(LS_BASIC_KEY);
    return val ? JSON.parse(val) : null;
  } catch { return null; }
}

function getStoredWorkProfile(): Partial<WorkProfileFormData> {
  try {
    const val = localStorage.getItem(LS_WORK_KEY);
    return val ? JSON.parse(val) : {};
  } catch { return {}; }
}

function clearStorage() {
  try {
    localStorage.removeItem(LS_STEP_KEY);
    localStorage.removeItem(LS_BASIC_KEY);
    localStorage.removeItem(LS_WORK_KEY);
  } catch {}
}

export default function BookACallStepForm({ closeForm }: { closeForm: () => void }) {
  const [currentStep, setCurrentStep] = useState<number>(() => getStoredStep());
  const [basicDetailsData, setBasicDetailsData] = useState<BasicDetailsFormData | null>(() => getStoredBasicDetails());
  const [workProfileData, setWorkProfileData] = useState<Partial<WorkProfileFormData>>(() => getStoredWorkProfile());

  const handleSetStep = (step: number) => {
  try {
    localStorage.setItem(LS_STEP_KEY, String(step));
  } catch {}

  setCurrentStep(step);
};

const handleSetBasicDetails = (data: BasicDetailsFormData | null) => {
  try {
    localStorage.setItem(LS_BASIC_KEY, JSON.stringify(data));
  } catch {}

  setBasicDetailsData(data);
};

const handleSetWorkProfile = (data: Partial<WorkProfileFormData>) => {
  try {
    localStorage.setItem(LS_WORK_KEY, JSON.stringify(data));
  } catch {}

  setWorkProfileData(data);
};

  const handleClose = (currentFormData?: BasicDetailsFormData | WorkProfileFormData) => {
    if (currentStep === 1 && currentFormData) {
      handleSetBasicDetails(currentFormData as BasicDetailsFormData);
    } else if (currentStep === 2 && currentFormData) {
      handleSetWorkProfile(currentFormData as WorkProfileFormData);
    }
    closeForm();
  };

  const handleFinalSubmit = () => {
    clearStorage();
    setWorkProfileData({});
    setBasicDetailsData(null);
    setCurrentStep(1);
    closeForm();
  };

  return (
    <div className="fixed h-full w-full z-100 flex items-center backdrop-blur-md justify-center">
      {currentStep === 1 && (
        <BookACallBasicDetailsForm
          setCurrentStep={handleSetStep}
          setBasicDetailsData={handleSetBasicDetails}
          closeForm={handleClose}
        />
      )}
      {currentStep === 2 && (
        <BookACallWorkProfileForm
          basicDetailsData={basicDetailsData!}
          workProfileData={workProfileData}
          setWorkProfileData={handleSetWorkProfile}
          setCurrentStep={handleSetStep}
          closeForm={handleClose}
          onFinalSubmit={handleFinalSubmit}
        />
      )}
    </div>
  );
}

function BookACallBasicDetailsForm({
  setCurrentStep,
  setBasicDetailsData,
  closeForm,
}: {
  setCurrentStep: (step: number) => void;
  setBasicDetailsData: (data: BasicDetailsFormData | null) => void;
  closeForm: (data?: BasicDetailsFormData) => void;
})  {
  const methods = useForm<BasicDetailsFormData>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: getStoredBasicDetails() ?? undefined,
  });

  const { handleSubmit, formState: { isSubmitting }, getValues } = methods;

  const onSubmit = (data: BasicDetailsFormData) => {
    setBasicDetailsData(data);
    setCurrentStep(2);
  };

  return (
    <div className="relative w-full md:w-100 border border-white/10 bg-radial from-[#001E52] to-[#000B22] rounded-lg flex items-center justify-center p-6">
      <div className="absolute h-6 w-6 top-5 right-5 hover:cursor-pointer" onClick={() => closeForm(getValues())}>
        <X />
      </div>

      <div className="w-full max-w-md">
        <div className="text-[#84BEF7] tracking-widest font-light">Step 1 of 2</div>
        <div className="text-[#FEFEFE] text-4xl mt-5">Book an intro call</div>
        <div className="text-[#C0CADF] text-lg mt-3 mb-4 leading-tight font-light">
          Share your basic details so a senior manager can speak with you.
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <InputFieldTyped name="name" placeholder="Name" />
            <InputFieldTyped name="email" type="email" placeholder="Email" />
            <InputFieldTyped name="phone" type="tel" placeholder="Phone" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-radial from-[#0A45B8] to-[#052E8A] text-lg text-white hover:cursor-pointer"
            >
              Continue
            </button>

            <div className="text-xs font-extralight tracking-wider">
              We never share your details with third parties.
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

function BookACallWorkProfileForm({
  basicDetailsData,
  workProfileData,
  setWorkProfileData,
  setCurrentStep,
  closeForm,
  onFinalSubmit,
}: {
  basicDetailsData: BasicDetailsFormData;
  workProfileData: Partial<WorkProfileFormData>;
  setWorkProfileData: (data: Partial<WorkProfileFormData>) => void;
  setCurrentStep: (step: number) => void;
  closeForm: (data?: WorkProfileFormData) => void;
  onFinalSubmit: () => void;
}) {
  const methods = useForm<WorkProfileFormData>({
    resolver: zodResolver(workProfileSchema),
    defaultValues: {
      workStatus: workProfileData.workStatus ?? "",
      yearsOfExperience: workProfileData.yearsOfExperience ?? "",
      targetRole: workProfileData.targetRole ?? "",
    },
  });

  const { handleSubmit, getValues, formState: { isSubmitting } } = methods;

  const handleBack = () => {
    setWorkProfileData(getValues());
    setCurrentStep(1);
  };

  const onSubmit = async (data: WorkProfileFormData) => {
    const cohortFormData: CohortFormData = {
      ...basicDetailsData,
      ...data,
    };

    alert(JSON.stringify(cohortFormData, null, 2));
    onFinalSubmit();
  };

  return (
    <div className="relative w-full max-h-[90vh] overflow-y-scroll hide-scroll md:w-100 border border-white/10 bg-radial from-[#001E52] to-[#000B22] rounded-lg flex justify-center px-6 pt-6">
      <div className="absolute h-6 w-6 top-5 right-5 hover:cursor-pointer" onClick={() => closeForm(getValues())}>
        <X />
      </div>

      <div className="w-full max-w-md">
        <div className="text-[#84BEF7] tracking-widest font-light">Step 2 of 2</div>
        <div className="text-[#FEFEFE] text-4xl mt-5">Help Us Personalize Your Call</div>
        <div className="text-[#C0CADF] text-lg mt-3 mb-6 leading-tight font-light">
          This helps us connect you to the right mentor and advisor.
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <InputFieldDropdown
              name="workStatus"
              placeholder="Work status"
              options={WORK_STATUS_OPTIONS}
            />

            <InputFieldDropdown
              name="yearsOfExperience"
              placeholder="Years of experience"
              options={YEARS_OF_EXPERIENCE_OPTIONS}
            />

            <InputFieldDropdown
              name="targetRole"
              placeholder="Target role"
              options={TARGET_ROLE_OPTIONS}
            />

            <div className="flex gap-3">
              <button
                type="button"
                onClick={handleBack}
                className="w-1/3 py-3 rounded-lg border border-white/10 hover:border-[#104680]/60 text-[#C0CADF] text-lg hover:bg-white/5 transition-colors hover:cursor-pointer"
              >
                Back
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-2/3 py-3  rounded-lg bg-radial from-[#0A45B8] to-[#052E8A] text-lg text-white hover:cursor-pointer"
              >
                Submit
              </button>
            </div>

            <div className="text-xs font-extralight tracking-wider pb-6">
              By submitting, you agree to our <span className="text-[#5BBFFB]">Privacy Policy.</span>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}