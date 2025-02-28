export interface SessionType {
    title: string;
    price: string;
    dates: string[];
    location: string;
    time: string;
    coach: string;
    capacity: string;
    features: string[];
}

export interface SessionsData {
    fallas: SessionType;
    easter: SessionType;
} 