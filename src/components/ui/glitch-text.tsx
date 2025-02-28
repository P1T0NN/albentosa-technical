// LIBRARIES
import { cn } from "@/lib/utils";

interface GlitchTextProps {
    text: string;
    className?: string;
}

export const GlitchText = ({ 
    text, 
    className 
}: GlitchTextProps) => {
    return (
        <span 
            className={cn("glitch-text", className)} 
            data-text={text}
        >
            {text}
        </span>
    );
};