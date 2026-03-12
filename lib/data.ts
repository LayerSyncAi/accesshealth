import type { LucideIcon } from "lucide-react";

export const CONTACT_INFO = {
	address: "Shop 22 Mini Mall, Hogerty Hill Centre, William Powlett Dr, Harare",
	phone: "+263 (0) 78 345 8985",
	phoneHref: "tel:+263783458985",
	email: "accesshealthclinics@gmail.com",
	emailHref: "mailto:accesshealthclinics@gmail.com",
	whatsapp: "https://wa.me/263783458985",
	hours: "Mon\u2013Sun 09:00\u201318:00",
} as const;

export const SERVICES = [
	{
		slug: "gp-consultation",
		title: "GP Consultation",
		blurb:
			"General practitioner consultations for all ages, providing diagnosis and treatment for everyday health concerns. Includes check-ups, illness diagnosis, medical advice, and referrals when needed.",
		image: "/images/services/gp-consultation-service.jpg",
	},
	{
		slug: "obstetrician-&-gynaecologist-clinic",
		title: "Obstetrician & Gynaecologist Clinic",
		blurb:
			"Comprehensive women\u2019s health care including pregnancy care, reproductive health, menstrual concerns, and routine gynaecological check-ups, delivered with compassion and expertise.",
		image: "/images/services/pediatrician-service.jpg",
	},
	{
		slug: "prescriptions",
		title: "Prescriptions",
		blurb:
			"Fast and accurate prescriptions and medication refills following a medical consultation, ensuring you receive the appropriate treatment for your condition.",
		image: "/images/services/prescriptions-service.jpg",
	},
	{
		slug: "specialist-physician",
		title: "Specialist Physician Clinic",
		blurb:
			"Access to specialist medical consultations for the diagnosis and management of more complex or ongoing health conditions.",
		image: "/images/services/specialist-service.webp",
	},
	{
		slug: "minor-surgical",
		title: "Minor Surgical Procedures",
		blurb:
			"Safe in-clinic procedures performed by qualified professionals, including incision and drainage, Jadelle and implant removal, loop removal, foreign body removal, and wound dressing.",
		image: "/images/services/minor-surgery-service.avif",
	},
	{
		slug: "family-health",
		title: "Family Health Practice",
		blurb:
			"Comprehensive, family-oriented healthcare services including family planning consultations and routine immunisations for children and adults.",
		image: "/images/services/family-health-service.jpg",
	},
	{
		slug: "ultrasound-scans",
		title: "Ultrasound Scans",
		blurb:
			"On-site diagnostic ultrasound imaging including abdominal scans, pelvic scans, and Doppler scans to assist with accurate diagnosis and monitoring.",
		image: "/images/services/ultrasound-service.jpg",
	},
	{
		slug: "medical-examinations",
		title: "Medical Examinations",
		blurb:
			"Medical check-ups required for travel, employment, insurance, or general health certification.",
		image: "/images/services/medical-exams.jpg",
	},
	{
		slug: "chronic-disease",
		title: "Chronic Disease Management",
		blurb:
			"Ongoing care and monitoring for long-term conditions such as diabetes, hypertension, HIV, asthma, and arthritis, helping patients maintain better health and quality of life.",
		image: "/images/services/chronic-disease-service.webp",
	},
	{
		slug: "laboratory-tests",
		title: "Laboratory Tests",
		blurb:
			"On-site laboratory testing for accurate diagnosis and health screening, including STI screening, HIV PCR testing, full blood count, and other essential medical investigations.",
		image: "/images/services/medical-exams.jpg",
	},
];

export const TESTIMONIALS = [
	{
		name: "Esther M.",
		text: "Warm staff and excellent doctors. It feels like family.",
	},
	{
		name: "Peter N.",
		text: "Booking was easy, care was professional and compassionate.",
	},
	{
		name: "Rudo K.",
		text: "They took time to explain everything to me and my mum.",
	},
];

export interface TeamMember {
	name: string;
	bio: string;
	serviceSlug: string;
	photoUrl?: string;
	links?: { href: string; label: string; icon: LucideIcon }[];
}

export const TEAM: TeamMember[] = [
	{
		serviceSlug: "gp-consultation",
		name: "Dr. Maumbe M.N",
		bio: "Overseeing excellence in patient-centered care.",
	},
	{
		serviceSlug: "gp-consultation",
		name: "Dr. Mutsayi R",
		bio: "Providing compassionate and comprehensive general practice.",
	},
	// {
	// 	serviceSlug: "paediatric-clinic",
	// 	name: "Dr. Brian K.",
	// 	bio: "Compassionate care for children and parents.",
	// 	photoUrl: "/images/services/pediatrician1.jpg",
	// },
	{
		serviceSlug: "specialist-physician",
		name: "Dr. Makoni T.",
		bio: "Expert in aerospace and internal medicine.",
	},
	{
		serviceSlug: "obstetrician-&-gynaecologist-clinic",
		name: "Dr. Madombi S.W.",
		bio: "Dedicated to compassionate women's health care.",
		// photoUrl: "/images/services/specialist-service.webp",
	},
	// {
	// 	serviceSlug: "minor-surgical",
	// 	name: "Dr. David M.",
	// 	bio: "Precise surgical care with quick recovery.",
	// 	photoUrl: "/images/services/minor-surgery-service.avif",
	// },
	// {
	// 	serviceSlug: "family-health",
	// 	name: "Nurse Evelyn P.",
	// 	bio: "Supporting families through every stage of life.",
	// },
	// {
	// 	serviceSlug: "prescriptions",
	// 	name: "Pharmacist Farai G.",
	// 	bio: "Ensures safe and accurate prescriptions.",
	// },
	// {
	// 	name: "Nurse Emily R.",
	// 	bio: "Supportive care across family health services.",
	// 	serviceSlug: "family-health",
	// },
];
