"use client";

import Link from "next/link";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin, FiInstagram } from "react-icons/fi";

const ACCENT = "#447f80";

export default function Footer() {
	return (
		<footer className="w-full border-t border-[#5fa1a2] bg-[#447f80]">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid gap-8 md:grid-cols-4">
					{/* Logo + Short Line */}
					<div className="space-y-3">
						<div className="relative h-10 w-32 bg-white py-4 px-3 rounded-2xl">
							<Image
								src="https://res.cloudinary.com/djthwunnh/image/upload/v1764150280/logo-web-1_miqcdh.png"
								alt="Kasa Interiors"
								fill
								className="object-contain"
							/>
						</div>
						<p className="text-xs leading-relaxed text-slate-100 max-w-[200px]">
							Premium interiors for homes, apartments & commercial spaces.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
							Menu
						</h4>
						<ul className="mt-3 space-y-2 text-sm">
							{[
								{ label: "Home", href: "/" },
								{ label: "About", href: "/about" },
								{ label: "Services", href: "/services" },
								{ label: "Portfolio", href: "/gallery" },
								{ label: "Contact", href: "/contact" },
							].map((item) => (
								<li key={item.href}>
									<Link
										href={item.href}
										className="text-slate-200 text-[13px] hover:text-white transition">
										{item.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
							Contact
						</h4>

						<div className="mt-3 space-y-3 text-[13px] text-slate-200">
							<div className="flex items-start gap-2">
								<FiMail className="mt-1 text-white" />
								<a
									href="mailto:srinivas@kasainteriors.in"
									className="hover:text-white">
									srinivas@kasainteriors.in
								</a>
							</div>

							<div className="flex items-start gap-2">
								<FiPhone className="mt-1 text-white" />
								<div>
									<a href="tel:+917675031977" className="hover:text-white">
										+91 76750 31977
									</a>
									<br />
									<a href="tel:+919542872999" className="hover:text-white">
										+91 95428 72999
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Locations */}
					<div>
						<h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
							Studios
						</h4>

						<div className="mt-3 space-y-3 text-[13px] text-slate-200">
							<div className="flex gap-2">
								<FiMapPin className="text-white mt-1" />
								<p>
									Hyderabad
									<br />
									Mytri Nagar, Miyapur 500049
								</p>
							</div>

							<div className="flex gap-2">
								<FiMapPin className="text-white mt-1" />
								<p>
									Vijayawada
									<br />
									Ramakrishna Puram 520003
								</p>
							</div>

							<div className="flex gap-2">
								<FiMapPin className="text-white mt-1" />
								<p>
									Vishakapatnam
									<br />
									Akkaya Palem 530016
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[#5fa1a2] pt-4 text-[12px] text-slate-200 sm:flex-row">
					<p>
						© {new Date().getFullYear()} Kasa Interiors. All rights reserved.
					</p>

					<div className="flex items-center gap-4">
						<Link
							href="https://instagram.com"
							className="flex items-center gap-1 text-slate-200 hover:text-white transition">
							<FiInstagram className="text-lg" />
						</Link>

						<p>Hyderabad · Vijayawada · Vishakapatnam</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
