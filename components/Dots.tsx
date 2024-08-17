export default function Dots({ step }: { step: number }) {
    return (
        <div className="flex space-x-2 justify-center my-8">
            {[0, 1, 2].map((dotIndex) => (
                <div
                    key={dotIndex}
                    className={`w-4 h-4 rounded-full ${step === dotIndex ? 'bg-black' : 'bg-gray-300'}`}
                />
            ))}
        </div>
    );
};