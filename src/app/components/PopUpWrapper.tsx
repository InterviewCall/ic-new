'use client';

import BookACallStepForm from "./forms/BookACallForms";
import CohortStepForm from "./forms/CohortForms";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { closeCohortForm } from "@/lib/redux/slices/ShowCohortFormSlice";
import { closeBookACallForm } from "@/lib/redux/slices/ShowBookACallFormSlice";
import SystemOverviewCard from "./SystemOverviewCard";
import { closeSystemBreakdown } from "@/lib/redux/slices/ShowSystemBreakdown";


export default function PopUpWrapper() {
    const dispatch = useAppDispatch();
    const cohortFormIsOpen = useAppSelector((state) => state.showCohortForm.isOpen);
    const bookACallFormIsOpen = useAppSelector((state) => state.showBookACallForm.isOpen);
    const systemBreakdownIsOpen = useAppSelector((state) => state.showSystemBreakdown.isOpen);


    const handleCloseCohortForm = () => dispatch(closeCohortForm());
    const handleCloseBookACallForm = () => dispatch(closeBookACallForm());
    const handleCloseSystemBreakdown = () => dispatch(closeSystemBreakdown());




    return (
        <div className="relative z-100 w-full h-full bg-transparent">
            {
                systemBreakdownIsOpen && (

                    <div className="fixed bg-black/5 top-0 left-0 z-100 w-full min-h-full h-full overflow-y-auto hide-scroll   ">
                        <SystemOverviewCard isOpen={systemBreakdownIsOpen} onClose={handleCloseSystemBreakdown} />
                    </div>
                )
            }

            {
                cohortFormIsOpen && (
                    <div className="fixed bg-black/5 w-full h-full top-0 left-0">
                        <CohortStepForm closeForm={handleCloseCohortForm} />
                    </div>
                )
            }

            {
                bookACallFormIsOpen && (
                    <div className="fixed bg-black/5 top-0 left-0 z-100 w-full h-full">
                        <BookACallStepForm closeForm={handleCloseBookACallForm} />
                    </div>
                )
            }
        </div>

    )
}