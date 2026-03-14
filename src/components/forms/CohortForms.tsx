'use client';
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputFieldTyped from "../InputFieldTyped";
import InputFieldDropdown from "../InputFieldDropdown";
import { useState } from "react";
// import { motion } from "framer-motion";

import { TARGET_ROLE_OPTIONS, WORK_STATUS_OPTIONS, YEARS_OF_EXPERIENCE_OPTIONS } from "@/utils/content";
import { BasicDetailsFormData, basicDetailsSchema, CohortFormData, WorkProfileFormData, workProfileSchema } from "@/validation/CohortFormValidators";
import { X } from "lucide-react";
// import InfinityBorderButton from "../InfinityBorderButtton";

const LS_STEP_KEY = "cohort_step";
const LS_BASIC_KEY = "cohort_basic_details";
const LS_WORK_KEY = "cohort_work_profile";

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
  } catch { }
}

export default function CohortStepForm({ closeForm }: { closeForm: () => void }) {
  const [currentStep, setCurrentStep] = useState<number>(() => getStoredStep());
  const [basicDetailsData, setBasicDetailsData] = useState<BasicDetailsFormData | null>(() => getStoredBasicDetails());
  const [workProfileData, setWorkProfileData] = useState<Partial<WorkProfileFormData>>(() => getStoredWorkProfile());

  const handleSetStep = (step: number) => {
    try {
      localStorage.setItem(LS_STEP_KEY, String(step));
    } catch { }

    setCurrentStep(step);
  };

  const handleSetBasicDetails = (data: BasicDetailsFormData | null) => {
    try {
      localStorage.setItem(LS_BASIC_KEY, JSON.stringify(data));
    } catch { }

    setBasicDetailsData(data);
  };

  const handleSetWorkProfile = (data: Partial<WorkProfileFormData>) => {
    try {
      localStorage.setItem(LS_WORK_KEY, JSON.stringify(data));
    } catch { }

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
    <div className="fixed h-full w-full z-100 flex items-center backdrop-blur-sm bg-black/10 justify-center">
      {currentStep == 1 ? (
        <CohortBasicDetailsForm
        key={1}
          setCurrentStep={handleSetStep}
          setBasicDetailsData={handleSetBasicDetails}
          closeForm={handleClose}
          handleSetStep={handleSetStep}
        />
      ) : (

        <CohortWorkProfileForm
          key={2}
          basicDetailsData={basicDetailsData!}
          workProfileData={workProfileData}
          setWorkProfileData={handleSetWorkProfile}
          setCurrentStep={handleSetStep}
          closeForm={handleClose}
          onFinalSubmit={handleFinalSubmit}
        />
      )}
      {/* {currentStep == 1 ? (
        <CohortBasicDetailsForm
          setCurrentStep={handleSetStep}
          setBasicDetailsData={handleSetBasicDetails}
          closeForm={handleClose}
          handleSetStep={handleSetStep}
        />
      ) : null}
      {currentStep == 2 ? (
        <CohortWorkProfileForm
          basicDetailsData={basicDetailsData!}
          workProfileData={workProfileData}
          setWorkProfileData={handleSetWorkProfile}
          setCurrentStep={(val: number)=>{setCurrentStep(val); handleSetStep(val);}}
          closeForm={handleClose}
          onFinalSubmit={handleFinalSubmit}
        />
      ) : null} */}
    </div>
  );
}

function CohortBasicDetailsForm({
  setCurrentStep,
  setBasicDetailsData,
  closeForm,
  handleSetStep,
}: {
  setCurrentStep: (step: number) => void;
  setBasicDetailsData: (data: BasicDetailsFormData | null) => void;
  closeForm: (data?: BasicDetailsFormData) => void;
  handleSetStep: (step: number) => void;
}) {
  const methods = useForm<BasicDetailsFormData>({
    resolver: zodResolver(basicDetailsSchema),
    defaultValues: getStoredBasicDetails() ?? undefined,
  });

  const { handleSubmit, formState: { }, getValues } = methods;

  const onSubmit = (data: BasicDetailsFormData) => {
    setBasicDetailsData(data);
    setCurrentStep(2);
  };

  return (
    <div className="form1 relative w-full md:w-100 border border-white/10 bg-radial from-[#001E52] to-[#000B22] rounded-lg flex items-center justify-center p-6">
      <div className="absolute h-6 w-6 top-5 right-5 hover:cursor-pointer" onClick={() => closeForm(getValues())}>
        <X />
      </div>

      <div className="w-full max-w-md">
        <div className="text-[#84BEF7] tracking-widest font-light">Step 1 of 2</div>
        <div className="text-[#FEFEFE] text-4xl mt-5">Apply for next cohort</div>
        <div className="text-[#C0CADF] text-lg mt-3 mb-4 leading-tight font-light">
          Share your basic details so a senior manager can speak with you.
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <InputFieldTyped name="name" placeholder="Name" />
            <InputFieldTyped name="email" type="email" placeholder="Email" />
            <InputFieldTyped name="phone" type="tel" placeholder="Phone" />

            <button
              onClick={() => { handleSetStep(2); }}
              type="submit"
              className="w-full py-3 rounded-lg bg-radial from-[#0A45B8] to-[#052E8A] text-lg text-white hover:cursor-pointer"
            >
              Continue
            </button>

            {/* <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 22,
              }}
              className="relative flex w-full bg-radial py-3 from-[#0A45B8] to-[#052E8A]  hover:cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[14px] border-0 bg-transparent text-lg text-white tracking-wide outline-none ring-0  focus:outline-none focus:ring-0"
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 248 64"
                fill="none"
                className="pointer-events-none absolute inset-0 z-0"
                preserveAspectRatio="none"
              >
                <defs>
                  <filter
                    id="softGlowWhite"
                    x="-40%"
                    y="-40%"
                    width="180%"
                    height="180%"
                  >
                    <feGaussianBlur
                      stdDeviation="1.8"
                      result="blur"
                    />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <motion.rect
                  x="1"
                  y="1"
                  width="245"
                  height="61"
                  rx="12.5"
                  stroke="#fff"
                  strokeWidth="2.3"
                  strokeDasharray="40 560"
                  animate={{ strokeDashoffset: [120, -480] }}
                  transition={{
                    duration: 2.35,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  opacity="0.85"
                />

                <motion.rect
                  x="1"
                  y="1"
                  width="245"
                  height="61"
                  rx="12.5"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeDasharray="5 595"
                  animate={{ strokeDashoffset: [115, -485] }}
                  transition={{
                    duration: 2.35,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  opacity="0.75"
                  filter="url(#softGlowWhite)"
                />

                <motion.rect
                  x="1"
                  y="1"
                  width="245"
                  height="61"
                  rx="12.5"
                  stroke="#fff"
                  strokeWidth="1.7"
                  strokeDasharray="5 595"
                  animate={{ strokeDashoffset: [110, -490] }}
                  transition={{
                    duration: 2.35,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  opacity="0.65"
                />

                <motion.rect
                  x="1"
                  y="1"
                  width="245"
                  height="61"
                  rx="12.5"
                  stroke="#fff"
                  strokeWidth="1.5"
                  strokeDasharray="5 595"
                  animate={{ strokeDashoffset: [105, -495] }}
                  transition={{
                    duration: 2.35,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  opacity="0.58"
                  filter="url(#softGlowWhite)"
                />

                <motion.rect
                  x="1"
                  y="1"
                  width="245"
                  height="61"
                  rx="12.5"
                  stroke="#fff"
                  strokeWidth="1.4"
                  strokeDasharray="5 595"
                  animate={{ strokeDashoffset: [100, -500] }}
                  transition={{
                    duration: 2.35,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  opacity="0.5"
                />
              </svg>

              <span className="relative z-10 flex items-center w-full h-full gap-2 ">
                <span className="text-medium w-full">Conitnue</span>
              </span>
            </motion.button> */}

            {/* <div className="w-full rounded-lg bg-radial from-[#0A45B8] to-[#052E8A] text-lg text-white hover:cursor-pointer">
              <InfinityBorderButton>
                Continue
              </InfinityBorderButton>
            </div> */}


            <div className="text-xs font-extralight tracking-wider">
              We never share your details with third parties.
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

function CohortWorkProfileForm({
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

  const { handleSubmit, getValues, formState: { } } = methods;

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
    <div className="form2 relative w-full max-h-[91vh] overflow-y-scroll md:w-100 border border-white/10 bg-radial from-[#001E52] to-[#000B22] rounded-lg flex  justify-center px-6 pt-6 hide-scroll">
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
                className="w-1/3 py-3 rounded-lg border border-white/50 hover:border-[#104680]/60 text-[#C0CADF] text-lg hover:bg-white/5 transition-colors hover:cursor-pointer"
              >
                Back
              </button>

              <button
                type="submit"
                className="hover:cursor-pointer w-2/3 py-3 rounded-lg bg-radial from-[#0A45B8] to-[#052E8A] text-lg text-white"
              >
                Submit
              </button>
              {/* <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                className="relative flex w-full bg-radial from-[#0A45B8] to-[#052E8A]  hover:cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-[14px] border-0 bg-transparent text-lg text-white tracking-wide outline-none ring-0  focus:outline-none focus:ring-0"
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 248 64"
                  fill="none"
                  className="pointer-events-none absolute inset-0 z-0"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <filter
                      id="softGlowWhite"
                      x="-40%"
                      y="-40%"
                      width="180%"
                      height="180%"
                    >
                      <feGaussianBlur
                        stdDeviation="1.8"
                        result="blur"
                      />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  <motion.rect
                    x="1"
                    y="1"
                    width="245"
                    height="61"
                    rx="12.5"
                    stroke="#fff"
                    strokeWidth="2.3"
                    strokeDasharray="40 560"
                    animate={{ strokeDashoffset: [120, -480] }}
                    transition={{
                      duration: 2.35,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    opacity="0.85"
                  />

                  <motion.rect
                    x="1"
                    y="1"
                    width="245"
                    height="61"
                    rx="12.5"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeDasharray="5 595"
                    animate={{ strokeDashoffset: [115, -485] }}
                    transition={{
                      duration: 2.35,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    opacity="0.75"
                    filter="url(#softGlowWhite)"
                  />

                  <motion.rect
                    x="1"
                    y="1"
                    width="245"
                    height="61"
                    rx="12.5"
                    stroke="#fff"
                    strokeWidth="1.7"
                    strokeDasharray="5 595"
                    animate={{ strokeDashoffset: [110, -490] }}
                    transition={{
                      duration: 2.35,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    opacity="0.65"
                  />

                  <motion.rect
                    x="1"
                    y="1"
                    width="245"
                    height="61"
                    rx="12.5"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeDasharray="5 595"
                    animate={{ strokeDashoffset: [105, -495] }}
                    transition={{
                      duration: 2.35,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    opacity="0.58"
                    filter="url(#softGlowWhite)"
                  />

                  <motion.rect
                    x="1"
                    y="1"
                    width="245"
                    height="61"
                    rx="12.5"
                    stroke="#fff"
                    strokeWidth="1.4"
                    strokeDasharray="5 595"
                    animate={{ strokeDashoffset: [100, -500] }}
                    transition={{
                      duration: 2.35,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    opacity="0.5"
                  />
                </svg>

                <span className="relative z-10 flex items-center w-full h-full gap-2 ">
                  <span className="text-medium w-full">Submit</span>
                </span>
              </motion.button> */}
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
