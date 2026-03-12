import { ContactForm } from "@/components/forms/contact-form";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { CONTACT_INFO } from "@/lib/data";

export function ContactCTA() {
	return (
		<section id="contact" className="section">
			<div className="container">
				<div className="card grad-border p-10">
					<div className="grid items-start gap-10 md:grid-cols-2">
						<div>
							<p className="inline-block rounded-pill border border-border bg-card px-3 py-1 text-sm text-muted-foreground">
								We&apos;ll get back within 1 business day
							</p>
							<h3 className="mt-3 text-3xl font-semibold">Ready to visit?</h3>
							<p className="mt-2 text-muted-foreground">
								Call, email, or send a message &mdash; we&apos;ll confirm your
								booking shortly.
							</p>
							<div className="mt-6 space-y-2 text-sm text-muted-foreground">
								<p>
									<strong>Address:</strong> {CONTACT_INFO.address}
								</p>
								<p>
									<strong>Phone:</strong>{" "}
									<a href={CONTACT_INFO.phoneHref} className="hover:underline">
										{CONTACT_INFO.phone}
									</a>
								</p>
								<p>
									<strong>Email:</strong>{" "}
									<a href={CONTACT_INFO.emailHref} className="hover:underline">
										{CONTACT_INFO.email}
									</a>
								</p>
								<p>
									<strong>Hours:</strong> {CONTACT_INFO.hours}
								</p>
							</div>
							<div className="mt-6">
								<Button
									asChild
									className="btn-pill bg-[color:var(--brand-blue)] text-white hover:bg-[#25D366]"
								>
									<a
										href={CONTACT_INFO.whatsapp}
										target="_blank"
										rel="noopener noreferrer"
									>
										Connect on Whatsapp
										<FaWhatsapp />
									</a>
								</Button>
							</div>
						</div>
						<ContactForm />
					</div>
				</div>
			</div>
		</section>
	);
}
