import { SERVICES } from "@/lib/data";
import { SectionHeading } from "@/components/shared/section-heading";
import { CardService } from "@/components/shared/card-service";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Our Services",
	description:
		"Explore Access Health Clinic services: GP consultations, specialist physician clinics, ultrasound scans, minor surgery, chronic disease management, and more.",
	openGraph: {
		title: "Our Services | Access Health Clinic",
		description:
			"Explore Access Health Clinic services: GP consultations, specialist physician clinics, ultrasound scans, minor surgery, and more.",
		url: "https://accesshealth.co.zw/services",
	},
};

export default function ServicesPage() {
	return (
		<section className="section">
			<div className="container">
				<SectionHeading
					title="All Services"
					subtitle="Clear, informative descriptions to help you choose the right care."
				/>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{SERVICES.map((s) => (
						<CardService key={s.slug} {...s} />
					))}
				</div>
			</div>
		</section>
	);
}
