import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Meet the Team",
	description:
		"Meet the dedicated doctors and staff at Access Health Clinic. Experienced GPs, specialists, and healthcare professionals serving Harare.",
	openGraph: {
		title: "Meet the Team | Access Health Clinic",
		description:
			"Meet the dedicated doctors and staff at Access Health Clinic in Harare.",
		url: "https://accesshealth.co.zw/team",
	},
};

export default function TeamLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
