import React from 'react';

export default function Divider({ dividerText }) {
    return (
        <div className="relative min-w-full">
            <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
            >
                <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
                <span className="bg-white px-3 text-lg font-medium text-gray-900">
                    {dividerText}
                </span>
            </div>
        </div>
    );
}
