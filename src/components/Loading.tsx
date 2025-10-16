import Image from 'next/image';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
            <div className="relative flex items-center justify-center">
                {/* Animated circular gradient background */}
                <div className="absolute w-28 h-28 rounded-full bg-gradient-to-br from-soft-teal via-light-peach to-accent-teal animate-spin-slow opacity-80 blur-sm"></div>

                {/* Spinning circular progress indicator */}
                <div className="relative w-24 h-24 animate-spin">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-soft-teal via-light-peach to-accent-peach opacity-90"></div>
                    <div className="absolute inset-3 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}></div>
                </div>

                {/* Logo in the center with bounce animation */}
                <div className="absolute flex items-center justify-center ">
                    <Image
                        src="/logo.png"
                        alt="Nooly Logo"
                        width={128}
                        height={128}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}

