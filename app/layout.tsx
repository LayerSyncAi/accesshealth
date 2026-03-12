// app/(site)/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Plus_Jakarta_Sans } from "next/font/google";
// import { ConvexClientProvider } from "@/ConvexClientProvider";
import { Toaster } from "sonner";

const plus = Plus_Jakarta_Sans({
	subsets: ["latin"],
	variable: "--font-plusjakarta",
});

export const metadata: Metadata = {
	title: {
		default: "Access Health Clinic | Quality Healthcare in Harare",
		template: "%s | Access Health Clinic",
	},
	description:
		"Warm, homely, and professional healthcare for families and seniors in Harare. GP consultations, specialist clinics, ultrasound scans, and more.",
	metadataBase: new URL("https://accesshealth.co.zw"),
	icons: {
		icon: [{ url: "/icon.png", type: "image/png" }],
		shortcut: [{ url: "/icon.png", type: "image/png" }],
	},
	openGraph: {
		type: "website",
		locale: "en_ZW",
		url: "https://accesshealth.co.zw",
		siteName: "Access Health Clinic",
		title: "Access Health Clinic | Quality Healthcare in Harare",
		description:
			"Warm, homely, and professional healthcare for families and seniors in Harare. GP consultations, specialist clinics, ultrasound scans, and more.",
	},
	twitter: {
		card: "summary_large_image",
		title: "Access Health Clinic | Quality Healthcare in Harare",
		description:
			"Warm, homely, and professional healthcare for families and seniors in Harare.",
	},
};

export default function SiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "MedicalClinic",
		name: "Access Health Clinic",
		description:
			"Warm, homely, and professional healthcare for families and seniors in Harare.",
		url: "https://accesshealth.co.zw",
		telephone: "+263783458985",
		email: "accesshealthclinics@gmail.com",
		address: {
			"@type": "PostalAddress",
			streetAddress: "Shop 22 Mini Mall, Hogerty Hill Centre, William Powlett Dr",
			addressLocality: "Harare",
			addressCountry: "ZW",
		},
		openingHours: "Mo-Su 09:00-18:00",
		medicalSpecialty: [
			"GeneralPractice",
			"Obstetrics",
			"Gynecology",
			"InternalMedicine",
		],
	};

	return (
		<html lang="en" className="">
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body
				className={`${plus.variable} font-sans antialiased bg-background text-foreground`}
			>
				{/* soft hero-wide gradient */}
				<div className="pointer-events-none fixed inset-0 -z-10 dark:hidden">
					<div
						className="absolute -top-40 -left-32 h-[50vh] w-[60vw] rounded-full blur-3xl opacity-50"
						style={{
							background:
								"radial-gradient(800px 400px at 30% 20%, #dfe8ff 0%, transparent 60%)",
						}}
					/>
					<div
						className="absolute top-20 right-0 h-[45vh] w-[45vw] rounded-full blur-3xl opacity-40"
						style={{
							background:
								"radial-gradient(600px 320px at 70% 10%, #ffd4d4 0%, transparent 60%)",
						}}
					/>
				</div>
				<Toaster richColors />

				<SiteHeader />
				<main>{children}</main>
				<SiteFooter />
				{/* </ConvexClientProvider> */}
			</body>
		</html>
	);
}
