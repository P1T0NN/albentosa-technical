// LIBRARIES
import { useTranslations } from "next-intl";

export const useSessionsData = () => {
    const t = useTranslations("HomePage.sessions");

    return {
        fallas: {
            title: t("fallas_title"),
            price: t("fallas_price"),
            dates: [
                t("fallas_date1"),
                t("fallas_date2"),
                t("fallas_date3")
            ],
            location: t("fallas_location"),
            time: t("fallas_time"),
            coach: t("fallas_coach"),
            capacity: t("fallas_capacity"),
            features: [
                t("fallas_feature1"),
                t("fallas_feature2"),
                t("fallas_feature3"),
                t("fallas_feature4"),
                t("fallas_feature5"),
                t("fallas_feature6")
            ]
        },
        easter: {
            title: t("easter_title"),
            price: t("easter_price"),
            dates: [
                t("easter_date1"),
                t("easter_date2"),
                t("easter_date3")
            ],
            location: t("easter_location"),
            time: t("easter_time"),
            coach: t("easter_coach"),
            capacity: t("easter_capacity"),
            features: [
                t("easter_feature1"),
                t("easter_feature2"),
                t("easter_feature3"),
                t("easter_feature4"),
                t("easter_feature5"),
                t("easter_feature6")
            ]
        }
    };
};