import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Health Resources",
	description:
		"Access educational health resources from Access Health Clinic. Learn about breast cancer awareness, preventive care, and more.",
	openGraph: {
		title: "Health Resources | Access Health Clinic",
		description:
			"Access educational health resources from Access Health Clinic.",
		url: "https://accesshealth.co.zw/resources",
	},
};

export default function ResourcesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
