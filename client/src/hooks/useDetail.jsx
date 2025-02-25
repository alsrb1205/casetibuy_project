import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { DetailContext } from '../context/DetailContext';

export function useDetail() {
  const { setActiveCase, setGauge, setFeature, setHoveredGauge,casesData } = useContext(DetailContext);


  const handleCaseClick = (caseId) => {
    if (casesData[caseId]) {
      const caseData = casesData[caseId];
      setActiveCase(caseId);
      setGauge({ protective: caseData.protective, weight: caseData.weight });
      setFeature(caseData.feature);
    }
  };

  const handleHover = (caseId) => {
    if (casesData[caseId]) {
      const caseData = casesData[caseId];
      setHoveredGauge({ protective: caseData.protective, weight: caseData.weight });
    }
  };

  const handleLeave = () => {
    setHoveredGauge(null);
  };

  return { casesData, handleCaseClick, handleHover, handleLeave };
}
