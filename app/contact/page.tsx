import { ContactCTA } from "@/components/hero/contact-cta";
import {
	Clock,
	Facebook,
	Instagram,
	LucideIcon,
	Mail,
	MapPin,
	Music2,
	Phone,
	Twitter,
} from "lucide-react";
import Map from "@/components/shared/map";
import { CONTACT_INFO } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Us | Access Health Clinic",
	description:
		"Get in touch with Access Health Clinic in Harare. Call, email, or visit us at Hogerty Hill Centre. Open Mon\u2013Sun 09:00\u201318:00.",
	openGraph: {
		title: "Contact Us | Access Health Clinic",
		description:
			"Get in touch with Access Health Clinic in Harare. Call, email, or visit us at Hogerty Hill Centre.",
		url: "https://accesshealth.co.zw/contact",
		siteName: "Access Health Clinic",
		type: "website",
	},
};

const socialLinks: {
	href: string;
	label: string;
	icon: LucideIcon;
	className: string;
}[] = [
	{
		href: "https://www.facebook.com/share/1CeJVCTvRe/?mibextid=wwXIfr",
		label: "Facebook",
		icon: Facebook,
		className:
			"bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white",
	},
	{
		href: "https://www.instagram.com/accesshealthzw?igsh=OWdnNTV5ZnVydnZ3&utm_source=qr",
		label: "Instagram",
		icon: Instagram,
		className:
			"bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white dark:bg-pink-900/30 dark:text-pink-400 dark:hover:bg-pink-600 dark:hover:text-white",
	},
	{
		href: "https://x.com/accesshealthzw?s=21",
		label: "X",
		icon: Twitter,
		className:
			"bg-gray-100 text-gray-800 hover:bg-black hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black",
	},
	{
		href: "https://www.tiktok.com/@accesshealthclinic?_t=ZM-8zDt6WnSs8E&_r=1",
		label: "TikTok",
		icon: Music2,
		className:
			"bg-gray-100 text-gray-800 hover:bg-black hover:text-white dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-white dark:hover:text-black",
	},
];

export default function ContactPage() {
	return (
		<>
			<ContactCTA />
			<section className="section py-10">
				<div className="container mx-auto px-4">
					<div className="card grad-border p-6 shadow-xl rounded-lg">
						<div className="grid md:grid-cols-3 gap-8 items-center">
							{/* Left Section: Map */}
							<div className="md:col-span-2 rounded-lg overflow-hidden shadow-md">
								<Map />
							</div>

							{/* Right Section: Contact Information */}
							<div className="md:col-span-1 bg-muted p-6 rounded-lg space-y-6">
								<h2 className="text-2xl font-bold text-foreground mb-6">
									Get In Touch
								</h2>

								<div className="space-y-4 text-foreground">
									<div className="flex items-start space-x-3">
										<MapPin className="h-5 w-5 mt-1 text-muted-foreground" />
										<div>
											<p className="text-sm font-semibold uppercase tracking-wide">
												Address
											</p>
											<p className="text-lg font-medium mt-1">
												{CONTACT_INFO.address}
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<Phone className="h-5 w-5 mt-1 text-muted-foreground" />
										<div>
											<p className="text-sm font-semibold uppercase tracking-wide">
												Phone
											</p>
											<a
												href={CONTACT_INFO.phoneHref}
												className="text-lg font-medium mt-1 hover:underline block"
											>
												{CONTACT_INFO.phone}
											</a>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<Mail className="h-5 w-5 mt-1 text-muted-foreground" />
										<div>
											<p className="text-sm font-semibold uppercase tracking-wide">
												Email
											</p>
											<a
												href={CONTACT_INFO.emailHref}
												className="text-lg font-medium mt-1 hover:underline block"
											>
												{CONTACT_INFO.email}
											</a>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<Clock className="h-5 w-5 mt-1 text-muted-foreground" />
										<div>
											<p className="text-sm font-semibold uppercase tracking-wide">
												Hours
											</p>
											<p className="text-lg font-medium mt-1">
												{CONTACT_INFO.hours}
											</p>
										</div>
									</div>
								</div>

								{/* Social Media Icons */}
								<div className="flex justify-center space-x-4 mt-8 pt-4 border-t border-border">
									{socialLinks.map(({ href, label, icon: Icon, className }) => (
										<a
											key={label}
											href={href}
											aria-label={`Follow us on ${label}`}
											target="_blank"
											rel="noopener noreferrer"
											className={`h-10 w-10 rounded-full flex items-center justify-center shadow-md transition-colors duration-200 ${className}`}
										>
											<Icon className="h-6 w-6" />
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
