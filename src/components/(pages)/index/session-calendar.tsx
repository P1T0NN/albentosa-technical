"use client";

// LIBRARIES
import { useTranslations } from "next-intl";

interface SessionCalendarProps {
    activeTab: string;
}

export const SessionCalendar = ({ 
    activeTab 
}: SessionCalendarProps) => {
    const t = useTranslations("HomePage.sessions");
    
    const weekDays = [
        t("calendar_sunday"),
        t("calendar_monday"),
        t("calendar_tuesday"),
        t("calendar_wednesday"),
        t("calendar_thursday"),
        t("calendar_friday"),
        t("calendar_saturday")
    ];

    return (
        <div className="mb-8">
            <div className="grid grid-cols-7 gap-1 mb-2">
                {weekDays.map((day, i) => (
                    <div key={i} className="text-center text-sm font-medium text-gray-500">
                        {day}
                    </div>
                ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 35 }, (_, i) => {
                    const day = i - 3; // Offset to start month correctly
                    const isSessionDay = activeTab === "fallas" 
                        ? [23, 30, 37].includes(day) 
                        : [51, 58, 65].includes(day);
                    
                    return (
                        <div 
                            key={i} 
                            className={`
                                calendar-day aspect-square
                                ${day < 1 || day > 28 ? 'opacity-30' : ''}
                                ${isSessionDay ? 'has-session' : ''}
                                ${day === 15 ? 'today' : ''}
                            `}
                        >
                            {day > 0 && day <= 31 && (
                                <>
                                    <div className="day-number">{day}</div>
                                    {isSessionDay && <div className="session-indicator" />}
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};