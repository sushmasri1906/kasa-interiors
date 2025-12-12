export interface Project {
	slug: string;
	title: string;
	location: string;
	type: string;
	coverImage: string;
	heroImage: string;
	shortDescription: string;
	area: string;
	style: string;
	images: string[];

	// NEW FIELDS FOR DETAILED CONTENT
	overview: string;
	highlights: string[];
}

export const PROJECTS: Project[] = [
	{
		slug: "3bhk-modern-kondapur",
		title: "3BHK Modern Apartment – Warm Minimal Interiors",
		location: "Kondapur, Hyderabad",
		type: "Residential",
		coverImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518895/pexels-photo-3356416_xjsagl.jpg",
		heroImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518939/pexels-photo-1571458_htnr7z.jpg",
		shortDescription:
			"Warm, modern interiors for a young family home – with a custom TV wall, soft lighting layers and discreet storage that keeps the space clutter-free.",
		area: "1650 sq.ft • 3BHK",
		style: "Warm Modern Minimal",
		images: [
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518939/pexels-photo-1571458_htnr7z.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518909/pexels-photo-1457844_mlyelv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518895/pexels-photo-3356416_xjsagl.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518862/governor-s-mansion-montgomery-alabama-grand-staircase-161758_f6vhem.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518844/pexels-photo-1129413_ktnhbg.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518801/pexels-photo-1457842_xi0vis.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/71jKCUz5XaL._AC_UF894_1000_QL80__gmbnb2.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/bg-scottsdale-interior-designer-25-4_mz4uev.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433918/pngtree-3d-rendering-of-scandinavian-inspired-living-room-interior-image_3726765_x0kuvt.jpg",
		],
		overview:
			"This 3BHK apartment in Kondapur was designed for a young family that wanted a warm, hotel-like feel without losing everyday practicality. The layout was optimised for better circulation and natural light, while the material palette blends soft neutrals with warm wood tones. Every room was planned with built-in storage to keep surfaces clean and the home easy to maintain.",
		highlights: [
			"Custom TV wall with concealed storage, wiring management and ledge display.",
			"Layered lighting plan – ambient, task and accent lights to set different moods.",
			"Full-height wardrobes with internal organisers for maximum storage.",
			"Neutral base palette balanced with texture, fabrics and subtle colour accents.",
			"Durable, easy-to-clean finishes chosen for family-friendly living.",
		],
	},

	{
		slug: "luxury-villa-gachibowli",
		title: "Luxury Villa Interiors – Gachibowli",
		location: "Gachibowli, Hyderabad",
		type: "Residential",
		coverImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
		heroImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
		shortDescription:
			"A luxury villa designed with double-height spaces, statement lighting, premium finishes and custom-made furniture tailored to the family’s lifestyle.",
		area: "4500 sq.ft • Villa",
		style: "Luxury Contemporary",
		images: [
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518939/pexels-photo-1571458_htnr7z.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518909/pexels-photo-1457844_mlyelv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518895/pexels-photo-3356416_xjsagl.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518862/governor-s-mansion-montgomery-alabama-grand-staircase-161758_f6vhem.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518844/pexels-photo-1129413_ktnhbg.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518801/pexels-photo-1457842_xi0vis.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/71jKCUz5XaL._AC_UF894_1000_QL80__gmbnb2.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/bg-scottsdale-interior-designer-25-4_mz4uev.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433918/pngtree-3d-rendering-of-scandinavian-inspired-living-room-interior-image_3726765_x0kuvt.jpg",
		],
		overview:
			"This independent villa in Gachibowli was conceived as a luxurious yet liveable home for a multi-generational family. The design focuses on openness, natural light and statement elements that immediately catch the eye – from the double-height living area to the feature staircase and art walls. Formal and informal zones are clearly defined, while private spaces retain a calm, resort-like feel.",
		highlights: [
			"Double-height living room with a dramatic feature wall and chandelier.",
			"Formal and family living areas separated yet visually connected.",
			"Custom-designed furniture pieces to match the scale of the villa.",
			"Premium finishes – veneers, marble, metal accents and curated fabrics.",
			"Integrated storage and hidden services to maintain a clean visual language.",
		],
	},

	{
		slug: "commercial-office-finanical-district",
		title: "Corporate Office – Open, Collaborative Workspace",
		location: "Financial District, Hyderabad",
		type: "Commercial",
		coverImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
		heroImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
		shortDescription:
			"An open-plan office designed for collaboration – with glass cabins, breakout corners, ergonomic workstations and a clean, branded aesthetic.",
		area: "6000 sq.ft • Office",
		style: "Modern Workspace",
		images: [
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518939/pexels-photo-1571458_htnr7z.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518909/pexels-photo-1457844_mlyelv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518895/pexels-photo-3356416_xjsagl.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518862/governor-s-mansion-montgomery-alabama-grand-staircase-161758_f6vhem.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518844/pexels-photo-1129413_ktnhbg.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518801/pexels-photo-1457842_xi0vis.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/71jKCUz5XaL._AC_UF894_1000_QL80__gmbnb2.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/bg-scottsdale-interior-designer-25-4_mz4uev.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433918/pngtree-3d-rendering-of-scandinavian-inspired-living-room-interior-image_3726765_x0kuvt.jpg",
		],
		overview:
			"This corporate office in the Financial District was planned to support a fast-growing tech team. The brief called for an open, transparent atmosphere with enough focus zones and meeting spaces to support everyday operations. The planning balances bench-style workstations with collaboration areas, huddle rooms and quiet cabins for leadership.",
		highlights: [
			"Open workstation layout that encourages movement and collaboration.",
			"Glass-partition cabins and meeting rooms to retain visual openness.",
			"Ergonomic chairs and workstations for long working hours.",
			"Brand colours and graphics thoughtfully integrated into the design.",
			"Acoustic solutions in meeting rooms and focus areas for better privacy.",
		],
	},

	{
		slug: "2bhk-elegant-madhapur",
		title: "2BHK Elegant Apartment – Soft, Cozy Interiors",
		location: "Madhapur, Hyderabad",
		type: "Residential",
		coverImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
		heroImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
		shortDescription:
			"An elegant 2BHK with muted tones, layered textures and clever storage that makes a compact home feel spacious and calm.",
		area: "1200 sq.ft • 2BHK",
		style: "Elegant Modern",
		images: [
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518939/pexels-photo-1571458_htnr7z.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518909/pexels-photo-1457844_mlyelv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518895/pexels-photo-3356416_xjsagl.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518862/governor-s-mansion-montgomery-alabama-grand-staircase-161758_f6vhem.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518844/pexels-photo-1129413_ktnhbg.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518801/pexels-photo-1457842_xi0vis.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/71jKCUz5XaL._AC_UF894_1000_QL80__gmbnb2.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/bg-scottsdale-interior-designer-25-4_mz4uev.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433918/pngtree-3d-rendering-of-scandinavian-inspired-living-room-interior-image_3726765_x0kuvt.jpg",
		],
		overview:
			"This 2BHK in Madhapur was designed for a couple that wanted a soft, cozy home with a hotel-like vibe. The design relies on a calm colour palette, fabric-rich styling and carefully designed carpentry to maximise storage without overwhelming the space. Natural light and simple lines keep the apartment feeling airy and uncluttered.",
		highlights: [
			"Living room with soft fabrics, rounded forms and warm lighting.",
			"Full-height wardrobes in bedrooms with built-in dresser solutions.",
			"Compact yet highly functional kitchen with tall units and corner storage.",
			"Muted colour palette enhanced with textures instead of heavy patterns.",
			"Multi-purpose furniture to make the most of a compact footprint.",
		],
	},

	{
		slug: "modern-kitchen-renovation-hitech",
		title: "Modern Modular Kitchen Renovation – Hitech City",
		location: "Hitech City, Hyderabad",
		type: "Residential",
		coverImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
		heroImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
		shortDescription:
			"A complete kitchen transformation with a new modular layout, efficient work triangle, tall storage units and premium finishes built for everyday use.",
		area: "250 sq.ft • Kitchen",
		style: "Contemporary Modular",
		images: [
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518939/pexels-photo-1571458_htnr7z.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518909/pexels-photo-1457844_mlyelv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518895/pexels-photo-3356416_xjsagl.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518862/governor-s-mansion-montgomery-alabama-grand-staircase-161758_f6vhem.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518844/pexels-photo-1129413_ktnhbg.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518801/pexels-photo-1457842_xi0vis.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/71jKCUz5XaL._AC_UF894_1000_QL80__gmbnb2.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/bg-scottsdale-interior-designer-25-4_mz4uev.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433918/pngtree-3d-rendering-of-scandinavian-inspired-living-room-interior-image_3726765_x0kuvt.jpg",
		],
		overview:
			"This kitchen renovation in Hitech City reimagined an old, closed layout into a bright and efficient modular kitchen. The new design improves storage, workflow and light, while integrating modern appliances and easy-to-maintain finishes. The space is planned around the cooking habits of the family, with dedicated zones for prep, cooking and cleaning.",
		highlights: [
			"Optimised work triangle between hob, sink and refrigerator.",
			"Tall pantry units and internal accessories for maximum organised storage.",
			"Easy-clean shutters and countertops suited for Indian cooking.",
			"Under-cabinet lighting and profile handles for a clean, modern look.",
			"Provision for built-in appliances and future upgrades.",
		],
	},

	{
		slug: "retail-store-banjara-hills",
		title: "Boutique Retail Store – Display-First Design",
		location: "Banjara Hills, Hyderabad",
		type: "Commercial",
		coverImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
		heroImage:
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
		shortDescription:
			"A boutique retail space crafted to highlight products – with focused lighting, clean display systems and a warm, inviting brand experience.",
		area: "1800 sq.ft • Retail",
		style: "Modern Chic",
		images: [
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518939/pexels-photo-1571458_htnr7z.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518922/pexels-photo-1454805_qhiujf.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518909/pexels-photo-1457844_mlyelv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518895/pexels-photo-3356416_xjsagl.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518881/pexels-photo-1571459_zocztb.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518862/governor-s-mansion-montgomery-alabama-grand-staircase-161758_f6vhem.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518844/pexels-photo-1129413_ktnhbg.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518833/pexels-photo-1090638_cufsck.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765518801/pexels-photo-1457842_xi0vis.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/71jKCUz5XaL._AC_UF894_1000_QL80__gmbnb2.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433920/bg-scottsdale-interior-designer-25-4_mz4uev.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433919/studio-interio-warm-minimalism-wm4s3_rwvswv.jpg",
			"https://res.cloudinary.com/dwsm6i6z9/image/upload/v1765433918/pngtree-3d-rendering-of-scandinavian-inspired-living-room-interior-image_3726765_x0kuvt.jpg",
		],
		overview:
			"This boutique store in Banjara Hills was designed to create a high-impact first impression while keeping the focus firmly on the products. The layout leads customers through key display zones, with carefully controlled lighting and material choices that support the brand language. Storage and back-of-house requirements are integrated without disturbing the front-end experience.",
		highlights: [
			"Clear circulation path that guides customers through key display areas.",
			"Custom display units designed around the product categories.",
			"Warm lighting design to enhance product colours and textures.",
			"Material palette aligned with the brand identity and target audience.",
			"Hidden storage and back-end areas planned for smooth daily operations.",
		],
	},
];
