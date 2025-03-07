import React from 'react';
import '../../style/bar.css';

export default function ReviewBars({ distribution }) {
  // distribution 예시: { '5': '40%', '4': '30%', '3': '20%', '2': '5%', '1': '5%' }
  const defaultDistribution = { '5': '0%', '4': '0%', '3': '0%', '2': '0%', '1': '0%' };
  const reviewDistribution = distribution || defaultDistribution;

  const textMapping = {
    '5': '최고',
    '4': '좋음',
    '3': '보통',
    '2': '별로',
    '1': '최악'
  };

// distribution is now assumed to be an object with review counts per rating
// e.g. { '5': 40, '4': 30, '3': 20, '2': 5, '1': 5 }
const totalReviews = Object.values(reviewDistribution).reduce((acc, val) => acc + Number(val), 0);

return (
    <div className="review-bars">
        {['5', '4', '3', '2', '1'].map(rating => {
            const count = Number(reviewDistribution[rating]);
            const barWidth =
                totalReviews > 0
                    ? `${((count / totalReviews) * 100).toFixed(1)}%`
                    : '0%';
            return (
                <div key={rating} className="flex items-center gap-18 mt-18">
                    <div className="font-bold text-left w-45 text-12">{rating} 별점</div>
                    <div className="flex-1 h-15 bg-gray2">
                        <div
                            className="h-full rounded bg-blue"
                            style={{ width: barWidth }}
                        ></div>
                    </div>
                    <div className="w-12 text-sm text-right">{count}</div>
                </div>
            );
        })}
    </div>
);
}