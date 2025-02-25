import { useProductSelection } from './ProductSelectionContext';

export function useCaseImage() {
  const { activeCase, hoveredCase, activeColor } = useProductSelection();
  // hoveredCase가 있으면 우선 사용, 없으면 activeCase 사용
  const caseKey = hoveredCase || activeCase;

  const caseImages = {
    impact: {
      black: '/images/detail/selectcase/impact-black.png',
      skyblue: '/images/detail/selectcase/impact-skyblue.png',
      purple: '/images/detail/selectcase/impact-purple.png',
      mattblack: '/images/detail/selectcase/impact-mattblack.png',
    },
    bounce: {
      black: '/images/detail/selectcase/bounce-black.png',
      skyblue: '/images/detail/selectcase/bounce-skyblue.png',
      purple: '/images/detail/selectcase/bounce-purple.png',
      mattblack: '/images/detail/selectcase/bounce-mattblack.png',
    },
  };

  return caseImages[caseKey]?.[activeColor] || '/images/default.png';
}
