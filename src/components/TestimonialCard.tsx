import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
    quote: string;
    authorName: string;
    authorTitle: string;
    rating?: 1 | 2 | 3 | 4 | 5;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    authorName,
    authorTitle,
    rating = 5,
}) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <Star
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-orange-400' : 'text-gray-300'}`}
            fill={index < rating ? 'currentColor' : 'none'}
        />
    ));

    return (
        <div className="max-w-md h-80 p-8 bg-white rounded-xl shadow-2xl backdrop-blur-sm bg-opacity-95 flex flex-col justify-between">
            <div>
                <div className="flex space-x-0.5 mb-4">{stars}</div>
                <blockquote className="text-xl italic font-normal text-gray-800 leading-relaxed line-clamp-3">
                    &ldquo;{quote}&rdquo;
                </blockquote>
            </div>
            <hr className="my-6 border-gray-100" />
            <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-200 text-gray-700 font-bold text-lg shadow-md">
                    {authorName.charAt(0)}
                </div>
                <div>
                    <p className="text-lg font-bold text-gray-900 truncate">{authorName}</p>
                    <p className="text-sm font-light text-gray-600 truncate">{authorTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
