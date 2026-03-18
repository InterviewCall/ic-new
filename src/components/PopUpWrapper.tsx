'use client';

import BookACallStepForm from "./forms/BookACallForms";
import CohortStepForm from "./forms/CohortForms";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { closeCohortForm } from "@/lib/redux/slices/ShowCohortFormSlice";
import { closeBookACallForm } from "@/lib/redux/slices/ShowBookACallFormSlice";
import SystemOverviewCard from "./SystemOverviewCard";
import { closeSystemBreakdown } from "@/lib/redux/slices/ShowSystemBreakdown";
import { closeTrainingModules } from "@/lib/redux/slices/ShowTrainingModulesSlice";
import { TrainingModulesMobilePopUp } from "./TrainingModules";


export default function PopUpWrapper() {
    const dispatch = useAppDispatch();
    const cohortFormIsOpen = useAppSelector((state) => state.showCohortForm.isOpen);
    const bookACallFormIsOpen = useAppSelector((state) => state.showBookACallForm.isOpen);
    const systemBreakdownIsOpen = useAppSelector((state) => state.showSystemBreakdown.isOpen);
    const selectedModule = useAppSelector((state) => state.showTrainingModules.currentModule);

    const handleCloseCohortForm = () => dispatch(closeCohortForm());
    const handleCloseBookACallForm = () => dispatch(closeBookACallForm());
    const handleCloseSystemBreakdown = () => dispatch(closeSystemBreakdown());
    const handleCloseTrainingModules = () => dispatch(closeTrainingModules());


    return (
        <>
            {systemBreakdownIsOpen ? (
                <div className="fixed bg-black/5 top-0 left-0 z-50 w-full min-h-full h-screen sm:h-full overflow-y-auto hide-scroll">
                    <SystemOverviewCard isOpen={systemBreakdownIsOpen} onClose={handleCloseSystemBreakdown} />
                </div>
            ): null }

            {cohortFormIsOpen ? (
                <div className="fixed bg-black/5 w-full h-screen sm:h-full top-0 left-0 z-60">
                    <CohortStepForm closeForm={handleCloseCohortForm} />
                </div>
            ): null}

            {bookACallFormIsOpen ? (
                <div className="fixed bg-black/5 top-0 left-0 z-70 w-full h-screen sm:h-full">
                    <BookACallStepForm closeForm={handleCloseBookACallForm} />
                </div>
            ): null}

            {selectedModule ? (
                <div className="fixed bg-black/5 top-0 left-0 z-50 w-full h-full">
                    <TrainingModulesMobilePopUp handleCloseTrainingModules={handleCloseTrainingModules} selectedModule={selectedModule}/>
                </div>
            ) : null}
        </>
    );
}