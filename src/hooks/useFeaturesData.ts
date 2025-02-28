// LIBRARIES
import { useTranslations } from "next-intl";

// LUCIDE ICONS
import { Users, Trophy, Calendar, Target, Zap, Award } from "lucide-react";

export const useFeaturesData = () => {
    const t = useTranslations("HomePage.features");  // Note: namespace changed to include 'features'

    return [
        {
            title: t("youth_title"),
            icon: Users,
            description: t("youth_description"),
            features: [
                t("youth_feature1"),
                t("youth_feature2"),
                t("youth_feature3")
            ],
            color: 'from-blue-500/20 to-blue-600/5'
        },
        {
            title: t("elite_title"),
            icon: Trophy,
            description: t("elite_description"),
            features: [
                t("elite_feature1"),
                t("elite_feature2"),
                t("elite_feature3")
            ],
            color: 'from-primary/20 to-primary/5'
        },
        {
            title: t("summer_title"),
            icon: Calendar,
            description: t("summer_description"),
            features: [
                t("summer_feature1"),
                t("summer_feature2"),
                t("summer_feature3")
            ],
            color: 'from-orange-500/20 to-orange-600/5'
        },
        {
            title: t("tactical_title"),
            icon: Target,
            description: t("tactical_description"),
            features: [
                t("tactical_feature1"),
                t("tactical_feature2"),
                t("tactical_feature3")
            ],
            color: 'from-purple-500/20 to-purple-600/5'
        },
        {
            title: t("physical_title"),
            icon: Zap,
            description: t("physical_description"),
            features: [
                t("physical_feature1"),
                t("physical_feature2"),
                t("physical_feature3")
            ],
            color: 'from-red-500/20 to-red-600/5'
        },
        {
            title: t("mental_title"),
            icon: Award,
            description: t("mental_description"),
            features: [
                t("mental_feature1"),
                t("mental_feature2"),
                t("mental_feature3")
            ],
            color: 'from-yellow-500/20 to-yellow-600/5'
        }
    ];
}; 