import React from 'react';

function MyLoader() {
    return (
        <div className="top-1/2 left-1/2 w-auto h-auto absolute items-center justify-center z-50">
            <div className="absolute top-1/2 left-1/2 w-auto h-auto transform -translate-x-1/2 -translate-y-1/2">
                <div
                    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}

export default MyLoader;
