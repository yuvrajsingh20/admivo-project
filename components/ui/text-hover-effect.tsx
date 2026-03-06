import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TextHoverEffectProps {
    text: string;
}

export const TextHoverEffect: React.FC<TextHoverEffectProps> = ({ text }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={containerRef}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="relative flex items-center justify-center w-full h-[30vh] md:h-[40vh] overflow-hidden bg-transparent select-none"
        >
            <svg
                viewBox="0 0 1000 250"
                className="w-full h-full max-h-full"
                preserveAspectRatio="xMidYMid meet"
            >
                <defs>
                    <linearGradient
                        id="textGradient"
                        gradientUnits="userSpaceOnUse"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        {hovered && (
                            <>
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#3ca2fa" />
                                <stop offset="100%" stopColor="transparent" />
                            </>
                        )}
                        {!hovered && (
                            <>
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="currentColor" stopOpacity={0.05} />
                                <stop offset="100%" stopColor="transparent" />
                            </>
                        )}
                    </linearGradient>

                    <mask id="textMask">
                        <rect width="100%" height="100%" fill="black" />
                        <motion.circle
                            cx={mousePos.x * 2} // Scale factor to approximate SVG internal coordinates
                            cy={mousePos.y * 2}
                            r="150"
                            fill="white"
                            animate={{
                                cx: mousePos.x * (1000 / (containerRef.current?.offsetWidth || 1000)),
                                cy: mousePos.y * (250 / (containerRef.current?.offsetHeight || 250)),
                            }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            style={{
                                filter: "blur(40px)",
                            }}
                        />
                    </mask>
                </defs>

                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="font-bold fill-transparent text-[160px] md:text-[200px] text-white/5 opacity-40 transition-opacity duration-1000"
                    style={{ fontFamily: "Inter, sans-serif" }}
                >
                    {text}
                </text>

                {/* Hover overlay text */}
                <motion.text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    stroke="url(#textGradient)"
                    strokeWidth="3"
                    mask="url(#textMask)"
                    className="font-bold fill-transparent text-[160px] md:text-[200px]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {text}
                </motion.text>
            </svg>
        </div>
    );
};
