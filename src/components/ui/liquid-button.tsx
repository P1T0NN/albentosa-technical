// LIBRARIES
import { cn } from "@/lib/utils";

// COMPONENTS
import { Button, ButtonProps } from "@/components/ui/button";

interface LiquidButtonProps extends ButtonProps {
    children: React.ReactNode;
}

export const LiquidButton = ({ 
    className, 
    children, 
    ...props 
}: LiquidButtonProps) => {
    return (
        <>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
                </filter>
            </svg>
            
            <Button
                className={cn("liquid-button", className)}
                {...props}
            >
                {children}
            </Button>
        </>
    );
};