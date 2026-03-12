// components/layout/site-header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Menu, Sun, Moon, MoonStar } from "lucide-react";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";
import { HeartPulseLoader } from "../ui/heart-pulse-loader";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NAV_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "Services" },
	{ href: "/team", label: "Team" },
	{ href: "/resources", label: "Resources" },
	{ href: "/contact", label: "Contact" },
];

export function SiteHeader() {
	const [open, setOpen] = useState(false);
	const [isDark, setIsDark] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const stored = localStorage.getItem("isDark");
		if (stored !== null) {
			setIsDark(stored === "true");
		} else {
			setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
		}
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle("dark", isDark);
		localStorage.setItem("isDark", String(isDark));
	}, [isDark]);

	const isActive = (href: string) =>
		href === "/" ? pathname === "/" : pathname.startsWith(href);

	return (
		<header className="sticky top-0 z-50 backdrop-blur bg-white/10 border-b dark:bg-black">
			<div className="container h-14 md:h-16 px-4 sm:px-6 flex items-center justify-between">
				<div className="flex items-center gap-2">
					<Link
						href="/"
						className="flex items-center h-8 md:h-10"
					>
						{!isDark ? (
							<Image
								src="/images/logo/Access%20Logo-2.png"
								alt="Access Health logo"
								width={160}
								height={40}
								className="h-8 md:h-10 w-auto hover:scale-115"
								priority
							/>
						) : (
							<Image
								src="/images/logo/Access-logo-dark%202.jpg"
								alt="Access Health logo"
								width={160}
								height={40}
								className="h-8 md:h-10 w-auto hover:scale-115"
								priority
							/>
						)}
					</Link>
					<HeartPulseLoader className="h-4 w-16" />
				</div>

				<nav className="hidden md:flex gap-6 items-center text-[15px]">
					{NAV_LINKS.map(({ href, label }) => (
						<Link
							key={href}
							href={href}
							className={`hover:opacity-80 transition-colors ${
								isActive(href)
									? "font-semibold text-[color:var(--brand-blue)] dark:text-[#42d9c8]"
									: ""
							}`}
						>
							{label}
						</Link>
					))}
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsDark((prev) => !prev)}
						aria-label="Toggle theme"
					>
						{isDark ? (
							<Sun className="size-6 text-yellow-500" />
						) : (
							<MoonStar className="size-6 text-indigo-300" />
						)}
					</Button>
					<Button
						asChild
						className="btn-pill rounded-full bg-[color:var(--brand-blue)] text-white hover:bg-[color:var(--brand-blue)]/90 dark:bg-[#42d9c8] dark:text-black dark:hover:bg-[#42d9c8]/90"
					>
						<a
							href="https://syncus.layersyncai.com/book/access-health"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Calendar className="size-4" />
							Book Now
						</a>
					</Button>
				</nav>

				{/* Mobile */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon" aria-label="Open menu">
							<Menu />
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="pt-12">
						<SheetTitle className="sr-only">Main Navigation</SheetTitle>
						<div className="flex flex-col items-center text-center gap-5 text-lg">
							{NAV_LINKS.map(({ href, label }) => (
								<Link
									key={href}
									href={href}
									onClick={() => setOpen(false)}
									className={
										isActive(href)
											? "font-semibold text-[color:var(--brand-blue)] dark:text-[#42d9c8]"
											: ""
									}
								>
									{label}
								</Link>
							))}
							<Button
								variant="ghost"
								size="icon"
								onClick={() => setIsDark((prev) => !prev)}
								aria-label="Toggle theme"
							>
								{isDark ? (
									<Sun className="size-4" />
								) : (
									<Moon className="size-4" />
								)}
							</Button>
							<Button
								asChild
								className="btn-pill rounded-full bg-[color:var(--brand-blue)] text-white hover:bg-[color:var(--brand-blue)]/90 dark:bg-[#42d9c8] dark:text-black dark:hover:bg-[#42d9c8]/90"
							>
								<a
									href="https://syncus.layersyncai.com/book/access-health"
									target="_blank"
									rel="noopener noreferrer"
									onClick={() => setOpen(false)}
								>
									<Calendar className="size-4" />
									Book Now
								</a>
							</Button>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
