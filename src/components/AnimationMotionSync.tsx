'use client';

import { closeMotionAnimation, openMotionAnimation } from "@/lib/redux/slices/ShowMotionAnimationsSlice";
import { RootState } from "@/lib/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const UseMotionAnimationSync = () => {
  const dispatch = useDispatch();
  
  const showCohortForm = useSelector((state: RootState) => state.showCohortForm.isOpen);
  const showBookACallForm = useSelector((state: RootState) => state.showBookACallForm.isOpen);
  const showSystemBreakdown = useSelector((state: RootState) => state.showSystemBreakdown.isOpen);

  useEffect(() => {
    const anyPopupOpen = showCohortForm || showBookACallForm || showSystemBreakdown;

    if (anyPopupOpen) {
      dispatch(closeMotionAnimation());
    } else {
      dispatch(openMotionAnimation());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showCohortForm, showBookACallForm, showSystemBreakdown]);
  return null;
};