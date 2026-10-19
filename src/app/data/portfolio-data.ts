// Auto-generated TypeScript portfolio data for THIVAGAR S.M

export interface SubComponent {
  name: string;
  role: string;
  spreads: number[];
  description: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  siteArea: string;
  year?: string;
  period?: string;
  heroSpread: number;
  coverSpread: number;
  spreadStart: number;
  spreadEnd: number;
  spreadCount: number;
  subComponents: SubComponent[];
  statement: string;
  highlights?: string[];
}

export interface Spread {
  page: number;
  title: string;
  category: string;
  projectId: string;
  subProject?: string | null;
  type: string;
  description: string;
  tags: string[];
  fullImage: string;
  mediumImage: string;
  thumbImage: string;
  width: number;
  height: number;
}


export const CANDIDATE = {
  "name": "THIVAGAR S.M",
  "degree": "Bachelor of Architecture (B.Arch)",
  "institution": "Sasi Creative School Of Architecture, Coimbatore",
  "academic_years": "2021 - 2026",
  "location": "Tirunelveli, Tamil Nadu, India",
  "contact": {
    "phone": "+91-9080422838",
    "email": "thivagar.sm28@gmail.com",
    "linkedin": "https://www.linkedin.com/in/thivagar-sm-7637b7367/"
  },
  "languages": [
    {
      "name": "Tamil",
      "proficiency": "Native"
    },
    {
      "name": "English",
      "proficiency": "Advance"
    },
    {
      "name": "Kannada",
      "proficiency": "Elementary"
    },
    {
      "name": "Malayalam",
      "proficiency": "Elementary"
    }
  ],
  "software_skills": [
    {
      "name": "AutoCAD",
      "category": "2D Drafting & Documentation",
      "level": 95
    },
    {
      "name": "SketchUp",
      "category": "3D Massing & Modeling",
      "level": 92
    },
    {
      "name": "Rhino",
      "category": "Parametric & Complex Surfaces",
      "level": 82
    },
    {
      "name": "Twinmotion",
      "category": "Real-time Visualization",
      "level": 90
    },
    {
      "name": "Lumion",
      "category": "Architectural Rendering",
      "level": 88
    },
    {
      "name": "Enscape",
      "category": "Real-time Walkthroughs",
      "level": 85
    },
    {
      "name": "D5 Render",
      "category": "Ray-traced Photorealism",
      "level": 88
    },
    {
      "name": "Photoshop",
      "category": "Post-production & Presentation",
      "level": 92
    },
    {
      "name": "Illustrator",
      "category": "Vector Graphics & Portfolio Layout",
      "level": 86
    },
    {
      "name": "ArcMap (GIS)",
      "category": "Urban Spatial Analysis",
      "level": 78
    },
    {
      "name": "Tableau",
      "category": "Data & Demographic Visualization",
      "level": 75
    },
    {
      "name": "MS Office",
      "category": "Documentation & Specifications",
      "level": 90
    }
  ],
  "core_competencies": [
    "Architectural Design & Space Planning",
    "3D Modeling & Photorealistic Rendering",
    "Good For Construction (GFC) Drawings",
    "Facade Systems & Climate-Responsive Design",
    "Physical Scale Modelmaking",
    "Urban Analysis & Demographic Mapping",
    "Millwork & Joinery Detailing"
  ],
  "education": [
    {
      "degree": "Bachelor of Architecture (B.Arch)",
      "institution": "Sasi Creative School Of Architecture, Coimbatore",
      "period": "2021 - 2026"
    },
    {
      "qualification": "Higher Secondary Certificate (HSC)",
      "institution": "Cambridge Matriculation Hr. Sec. School, Ambasamudram",
      "year": "2021"
    },
    {
      "qualification": "Secondary School Leaving Certificate (SSLC)",
      "institution": "Cambridge Matriculation Hr. Sec. School, Ambasamudram",
      "year": "2019"
    }
  ],
  "workshops": [
    {
      "year": "2021",
      "title": "Collaborative Design Studio Workshop",
      "conducted_by": "UTM (Universiti Teknologi Malaysia)"
    },
    {
      "year": "2023",
      "title": "Parametric Architecture Workshop",
      "conducted_by": "Ar. Uttam Solanki"
    },
    {
      "year": "2023",
      "title": "Urban Photography & Spatial Framing",
      "conducted_by": "Ar. Binsan Oommen Baby"
    },
    {
      "year": "2024",
      "title": "Parametric Coding & CNC Fabrication Modeling",
      "conducted_by": "Ar. Mohafiz Riyaz"
    },
    {
      "year": "2025",
      "title": "Geo-Spatial Science & Remote Sensing Analysis",
      "conducted_by": "Bharathidasan University"
    }
  ],
  "explorations": [
    {
      "year": "2022",
      "title": "IIM Bangalore & Mythic Society Library",
      "type": "Architectural Precedent Study"
    },
    {
      "year": "2023",
      "title": "Kochi-Muziris Biennale",
      "type": "Contemporary Art & Spatial Installations"
    },
    {
      "year": "2023",
      "title": "Udaiyalur Rural Heritage Settlement",
      "type": "Vernacular Vernacular & Rural Settlement Study"
    },
    {
      "year": "2023",
      "title": "Bangalore International Center (BIC)",
      "type": "Contemporary Public Architecture"
    },
    {
      "year": "2025",
      "title": "Kozhikode Urban Fabric & Coastal Morphology",
      "type": "Urban Study & Transit Dynamics"
    }
  ],
  "experience": [
    {
      "role": "Junior Architect & Interior Designer",
      "firm": "IK Design Studio",
      "location": "Bangalore, Karnataka",
      "period": "October 2026 - Present",
      "current": true,
      "description": "Contributed to the planning and design of villas, apartments, hospitality projects, and office spaces. Involved in space planning, layout development, architectural working drawings, interior detailing, and design development, ensuring functional efficiency, aesthetic quality, and practical solutions tailored to project requirements."
    },
    {
      "role": "Architectural Intern",
      "firm": "Studio PITCH",
      "location": "Bangalore, Karnataka",
      "period": "July 2025 - November 2025",
      "current": false,
      "description": "Engaged in architectural working drawings, corporate executive interiors, custom millwork/reception desk details, reflected ceiling plans, site coordination, and vendor liaison."
    }
  ]
};

export const PROJECTS = [
  {
    "id": "mixed-use-development",
    "title": "Mixed Use Development",
    "subtitle": "Live-Work-Play Urban Master Plan",
    "category": "Master Planning & Mixed-Use",
    "location": "Peelamedu, Coimbatore, Tamil Nadu",
    "siteArea": "11.7 Acres (47,348 m²)",
    "year": "Academic Design Studio",
    "heroSpread": 15,
    "coverSpread": 6,
    "spreadStart": 6,
    "spreadEnd": 31,
    "spreadCount": 26,
    "subComponents": [
      {
        "name": "The Morphix",
        "role": "Commercial High-Rise Landmark",
        "spreads": [
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15
        ],
        "description": "Aerodynamically twisted high-rise tower featuring a multi-level retail galleria base and column-free corporate office floor plates."
      },
      {
        "name": "Alorea Residences",
        "role": "Microclimatic Courtyard Housing",
        "spreads": [
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        "description": "U-shaped residential blocks wrapping a vehicular-free landscaped podium courtyard, promoting natural stack cross-ventilation."
      },
      {
        "name": "Nova Clubhouse",
        "role": "Social & Wellness Facility",
        "spreads": [
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        "description": "Angular geometric recreational hub housing double-height atrium reception, indoor sports, gym, and rooftop infinity lap pool."
      }
    ],
    "statement": "An integrated 11.7-acre urban enclave in Peelamedu, Coimbatore, synthesized to harmonize intensive commercial density with serene residential tranquility. The design establishes a continuous pedestrian spine linking transit nodes to vibrant plazas, residential courtyards, and community amenities.",
    "highlights": [
      "11.7-Acre comprehensive site zoning & microclimate orientation",
      "Parametric form-generation reducing wind shear on high-rise tower",
      "Subterranean parking separating vehicles from active pedestrian green podiums",
      "Diverse housing typologies from compact 1BHKs to luxury 3BHK family suites"
    ]
  },
  {
    "id": "vertex-towers",
    "title": "Vertex Towers",
    "subtitle": "Commercial Twin Towers & Entertainment Galleria",
    "category": "Commercial High-Rise",
    "location": "Anna Salai, Chennai, Tamil Nadu",
    "siteArea": "8.15 Acres (32,981 m²)",
    "year": "High-Rise Design Studio",
    "heroSpread": 33,
    "coverSpread": 32,
    "spreadStart": 32,
    "spreadEnd": 43,
    "spreadCount": 12,
    "subComponents": [
      {
        "name": "Twin Commercial Towers",
        "role": "High-Density Grade-A Workspaces",
        "spreads": [
          32,
          33,
          34,
          35,
          38,
          41,
          42
        ],
        "description": "Iconic twin corporate towers linked by a structural skybridge and wrapped in an efficient structural diagrid envelope."
      },
      {
        "name": "Retail Galleria & Vertex Cinemas",
        "role": "Podium Retail & Entertainment Multiplex",
        "spreads": [
          36,
          37,
          40,
          43
        ],
        "description": "4-level sunlit retail mall galleria featuring multi-screen Vertex Cinemas multiplex and public civic plazas."
      }
    ],
    "statement": "Positioned prominently along Chennai's metropolitan arterial corridor on Anna Salai, Vertex Towers establishes a bold architectural landmark. The scheme pairs high-density commercial towers with a civic retail podium and 6-screen multiplex, crowned by a skybridge and protected by a parametric diagrid facade.",
    "highlights": [
      "Parametric diagrid exoskeleton minimizing internal column obstructions",
      "Direct pedestrian transit connectivity to Chennai Metro network",
      "Acoustically engineered 6-screen cinema multiplex layout",
      "Longitudinal skybridge fostering executive interchange and structural redundancy"
    ]
  },
  {
    "id": "norwyn-stay",
    "title": "Norwyn Stay",
    "subtitle": "Bioclimatic 3-Star Business & Leisure Hotel",
    "category": "Hospitality Architecture",
    "location": "Kochi, Kerala",
    "siteArea": "0.89 Acres (3,600 m²)",
    "year": "Hospitality Studio",
    "heroSpread": 53,
    "coverSpread": 44,
    "spreadStart": 44,
    "spreadEnd": 53,
    "spreadCount": 10,
    "subComponents": [
      {
        "name": "Z-Shaped Climatic Massing",
        "role": "Passive Cooling & Wind Capture",
        "spreads": [
          44,
          45,
          46,
          49,
          50,
          51
        ],
        "description": "Z-shaped building configuration generating dual microclimate courtyards that funnel southwest monsoon breeze."
      },
      {
        "name": "Elevated Pool Deck & Living Green Wall",
        "role": "Wellness & Eco-Envelope",
        "spreads": [
          47,
          48,
          52,
          53
        ],
        "description": "First-floor elevated infinity pool deck with integrated 1:20 living vertical green wall facade system and timber shading."
      }
    ],
    "statement": "Located in coastal Kochi, Norwyn Stay is a contemporary 3-star business and leisure hotel that marries coastal vernacular hospitality with climate-responsive design. The Z-shaped massing harnesses southwest coastal breezes, while vertical green walls and timber louvers mitigate tropical solar gain.",
    "highlights": [
      "Passive Z-shaped massing optimizing natural cross-ventilation",
      "Living green wall detail with integrated automated drip-irrigation",
      "Elevated podium infinity lap pool commanding panoramic views",
      "Acoustic separation between grand banquet halls and serene guest suites"
    ]
  },
  {
    "id": "truenest",
    "title": "Truenest",
    "subtitle": "Contemporary 3-BHK Nature-Embracing Villa",
    "category": "Residential Architecture",
    "location": "Papanasam, Tirunelveli, Tamil Nadu",
    "siteArea": "2,660.3 sq.ft (247.15 m²)",
    "year": "Residential Studio",
    "heroSpread": 59,
    "coverSpread": 54,
    "spreadStart": 54,
    "spreadEnd": 59,
    "spreadCount": 6,
    "subComponents": [
      {
        "name": "Private Residence & Courtyard",
        "role": "Single-Family Contemporary Residence",
        "spreads": [
          54,
          55,
          56,
          57,
          58,
          59
        ],
        "description": "3-BHK home designed around an internal green court, framed river views, and deep cantilevered balcony terraces."
      }
    ],
    "statement": "Truenest is an intimate 2,660 sq.ft private residence designed for a family in Papanasam, Tirunelveli. Surrounded by lush river landscapes and western hills, the residence incorporates an internal courtyard that drives passive air circulation and provides shaded outdoor living terraces.",
    "highlights": [
      "Internal light court creating a serene microclimate and stack ventilation",
      "Cantilevered balconies providing deep shade against tropical sun",
      "Clean contemporary volumes articulated with textured local stone and warm timber",
      "Optimal balance of family social zones and private personal retreats"
    ]
  },
  {
    "id": "studio-pitch",
    "title": "Studio PITCH Internship Works",
    "subtitle": "Professional Practice & Precision Working Drawings",
    "category": "Working Drawings & Joinery",
    "location": "Bangalore, Karnataka",
    "siteArea": "Professional Practice",
    "period": "July 2025 - November 2025",
    "heroSpread": 61,
    "coverSpread": 60,
    "spreadStart": 60,
    "spreadEnd": 63,
    "spreadCount": 4,
    "subComponents": [
      {
        "name": "Custom Curved Reception Joinery",
        "role": "1:10 Millwork & Metal Fabrication",
        "spreads": [
          61
        ],
        "description": "Detailed working drawings for executive curved reception desk with MS framework, veneer cladding, and cove lighting."
      },
      {
        "name": "Residential Modular Wardrobe & Consoles",
        "role": "Custom Interior Millwork",
        "spreads": [
          62
        ],
        "description": "1:10 joinery drawings for master bedroom wardrobes, concealed hardware, and integrated TV consoles."
      },
      {
        "name": "Commercial Workspace GFC Drawings",
        "role": "Good For Construction Coordination",
        "spreads": [
          63
        ],
        "description": "Reflected ceiling plan (RCP), HVAC diffuser alignments, and glazed partition systems for corporate office interiors."
      }
    ],
    "statement": "During a 5-month architectural internship at Studio PITCH, Bangalore (July–November 2025), Thivagar developed rigorous Good For Construction (GFC) sets, detailed millwork fabrication drawings, and coordinated directly with on-site contractors, MEP engineers, and specialist vendors.",
    "highlights": [
      "1:10 custom joinery drawings with precise fabrication tolerances",
      "Reflected ceiling plans coordinating lighting, HVAC diffusers & acoustics",
      "Modular cabinetry and wardrobe details with complete material schedules",
      "Hands-on site coordination and vendor specification liaison"
    ]
  }
];

export const SPREADS = [
  {
    "page": 1,
    "title": "Front Cover - Architecture Portfolio",
    "category": "Portfolio Cover",
    "projectId": "cover",
    "subProject": null,
    "type": "Presentation Cover",
    "description": "Front cover of Thivagar S.M's Architecture Portfolio (2021-2026), B.Arch from Sasi Creative School Of Architecture.",
    "tags": [
      "Cover",
      "Portfolio",
      "Minimalist Graphic"
    ],
    "fullImage": "assets/images/full/1.webp",
    "mediumImage": "assets/images/medium/1.webp",
    "thumbImage": "assets/images/thumbs/1.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 2,
    "title": "Architectural Statement & Biography",
    "category": "Curriculum Vitae & Bio",
    "projectId": "profile",
    "subProject": null,
    "type": "Statement / Portrait",
    "description": "Personal design philosophy statement, architectural portrait, and introduction to academic trajectory.",
    "tags": [
      "Bio",
      "Portrait",
      "Design Philosophy"
    ],
    "fullImage": "assets/images/full/2.webp",
    "mediumImage": "assets/images/medium/2.webp",
    "thumbImage": "assets/images/thumbs/2.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 3,
    "title": "Curriculum Vitae",
    "category": "Curriculum Vitae & Bio",
    "projectId": "profile",
    "subProject": null,
    "type": "Resume / CV",
    "description": "Comprehensive CV detailing education, core & software skills, national workshops, travel case studies, and Studio PITCH internship.",
    "tags": [
      "CV",
      "Resume",
      "Education",
      "Skills"
    ],
    "fullImage": "assets/images/full/3.webp",
    "mediumImage": "assets/images/medium/3.webp",
    "thumbImage": "assets/images/thumbs/3.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 4,
    "title": "Table of Contents - Selected Projects Index",
    "category": "Portfolio Index",
    "projectId": "contents",
    "subProject": null,
    "type": "Table of Contents",
    "description": "Table of contents outlining academic, competition, and professional projects from 2021 to 2026.",
    "tags": [
      "Index",
      "Contents",
      "Navigation"
    ],
    "fullImage": "assets/images/full/4.webp",
    "mediumImage": "assets/images/medium/4.webp",
    "thumbImage": "assets/images/thumbs/4.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 5,
    "title": "Table of Contents - Secondary Index & Philosophy",
    "category": "Portfolio Index",
    "projectId": "contents",
    "subProject": null,
    "type": "Table of Contents",
    "description": "Table of contents continuation featuring architectural project breakdowns and chronological overview.",
    "tags": [
      "Index",
      "Contents",
      "Chronology"
    ],
    "fullImage": "assets/images/full/5.webp",
    "mediumImage": "assets/images/medium/5.webp",
    "thumbImage": "assets/images/thumbs/5.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 6,
    "title": "Mixed Use Development - Cover & Macro Context",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Master Plan",
    "type": "Project Cover & Context",
    "description": "Project title page and regional site context in Peelamedu, Coimbatore, establishing the live-work-play urban vision.",
    "tags": [
      "Mixed-Use",
      "Master Plan",
      "Urban Design",
      "Cover"
    ],
    "fullImage": "assets/images/full/6.webp",
    "mediumImage": "assets/images/medium/6.webp",
    "thumbImage": "assets/images/thumbs/6.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 7,
    "title": "Mixed Use Development - Site Analysis & Master Zoning",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Master Plan",
    "type": "Site Analysis & Zoning",
    "description": "Site circulation, climatic orientation, vehicular access, pedestrian spine, and master zoning across the 11.7-acre parcel.",
    "tags": [
      "Site Analysis",
      "Microclimate",
      "Circulation",
      "Zoning Diagrams"
    ],
    "fullImage": "assets/images/full/7.webp",
    "mediumImage": "assets/images/medium/7.webp",
    "thumbImage": "assets/images/thumbs/7.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 8,
    "title": "The Morphix - Conceptual Massing & Form Generation",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Conceptual Massing",
    "description": "Step-by-step evolution of The Morphix tower: twisting geometry optimizing aerodynamic wind flow and daylight penetration.",
    "tags": [
      "The Morphix",
      "Form Finding",
      "Parametric",
      "Aerodynamics"
    ],
    "fullImage": "assets/images/full/8.webp",
    "mediumImage": "assets/images/medium/8.webp",
    "thumbImage": "assets/images/thumbs/8.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 9,
    "title": "The Morphix - Ground Master Layout & Public Realm",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Master Plan Detail",
    "description": "Ground floor plaza integration showing pedestrian promenades, outdoor cafes, landscape buffering, and drop-off loops.",
    "tags": [
      "The Morphix",
      "Ground Plan",
      "Public Realm",
      "Landscape"
    ],
    "fullImage": "assets/images/full/9.webp",
    "mediumImage": "assets/images/medium/9.webp",
    "thumbImage": "assets/images/thumbs/9.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 10,
    "title": "The Morphix - Lower Commercial & Retail Floor Plan",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Technical Floor Plan",
    "description": "Detailed retail galleria floor plate with central atrium, retail anchors, food court, and circulation escalators.",
    "tags": [
      "The Morphix",
      "Floor Plan",
      "Retail",
      "Commercial",
      "Technical Drawing"
    ],
    "fullImage": "assets/images/full/10.webp",
    "mediumImage": "assets/images/medium/10.webp",
    "thumbImage": "assets/images/thumbs/10.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 11,
    "title": "The Morphix - Upper Office Floor Plates & Core Design",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Technical Floor Plan",
    "description": "Typical corporate office floor plates featuring central shear core, fire exits, MEP shafts, and column-free perimeter lease spans.",
    "tags": [
      "The Morphix",
      "Floor Plan",
      "Office Core",
      "High-Rise"
    ],
    "fullImage": "assets/images/full/11.webp",
    "mediumImage": "assets/images/medium/11.webp",
    "thumbImage": "assets/images/thumbs/11.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 12,
    "title": "The Morphix - Transverse & Longitudinal Sections",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Architectural Section",
    "description": "Cross-sections through the tower demonstrating vertical program transition from retail base to high-density office plates.",
    "tags": [
      "The Morphix",
      "Sections",
      "Vertical Zoning",
      "Technical Drawing"
    ],
    "fullImage": "assets/images/full/12.webp",
    "mediumImage": "assets/images/medium/12.webp",
    "thumbImage": "assets/images/thumbs/12.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 13,
    "title": "The Morphix - Architectural Elevations & Facade Articulation",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Building Elevations",
    "description": "Exterior elevations highlighting vertical fins, solar shading louvers, and crystalline glazing system.",
    "tags": [
      "The Morphix",
      "Elevations",
      "Facade System",
      "Louver Details"
    ],
    "fullImage": "assets/images/full/13.webp",
    "mediumImage": "assets/images/medium/13.webp",
    "thumbImage": "assets/images/thumbs/13.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 14,
    "title": "The Morphix - Exploded Axonometric Assembly",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Exploded Axonometric",
    "description": "3D exploded axonometric illustrating basement parking, retail podium, structural transfer slab, office floors, and crown.",
    "tags": [
      "The Morphix",
      "Axonometric",
      "Structural Diagram",
      "Exploded View"
    ],
    "fullImage": "assets/images/full/14.webp",
    "mediumImage": "assets/images/medium/14.webp",
    "thumbImage": "assets/images/thumbs/14.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 15,
    "title": "The Morphix - Hero Exterior Visualizations",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "The Morphix",
    "type": "Photorealistic Render",
    "description": "Dusk and daytime photorealistic 3D perspectives showing street-level pedestrian approach and iconic skyline presence.",
    "tags": [
      "The Morphix",
      "3D Render",
      "Dusk Perspective",
      "Hero Visual"
    ],
    "fullImage": "assets/images/full/15.webp",
    "mediumImage": "assets/images/medium/15.webp",
    "thumbImage": "assets/images/thumbs/15.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 16,
    "title": "Alorea Residences - Massing & Microclimatic Layout",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Concept & Massing",
    "description": "Residential block massing designed around central landscaped courtyards to maximize cross ventilation and natural lighting.",
    "tags": [
      "Alorea Residences",
      "Housing",
      "Microclimate",
      "Courtyard Concept"
    ],
    "fullImage": "assets/images/full/16.webp",
    "mediumImage": "assets/images/medium/16.webp",
    "thumbImage": "assets/images/thumbs/16.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 17,
    "title": "Alorea Residences - Podium Ground Master Plan",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Landscape Master Plan",
    "description": "Vehicular-free podium level featuring jogging trails, children's play court, water features, and community seating groves.",
    "tags": [
      "Alorea Residences",
      "Landscape Plan",
      "Podium",
      "Community"
    ],
    "fullImage": "assets/images/full/17.webp",
    "mediumImage": "assets/images/medium/17.webp",
    "thumbImage": "assets/images/thumbs/17.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 18,
    "title": "Alorea Residences - Unit Typologies: 1BHK & Studio Plans",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Unit Floor Plans",
    "description": "Efficient space planning for studio apartments and 1-bedroom units with integrated balconies, dry/wet kitchens, and storage.",
    "tags": [
      "Alorea Residences",
      "Unit Plans",
      "1BHK",
      "Studio",
      "Interior Layout"
    ],
    "fullImage": "assets/images/full/18.webp",
    "mediumImage": "assets/images/medium/18.webp",
    "thumbImage": "assets/images/thumbs/18.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 19,
    "title": "Alorea Residences - Unit Typologies: 2BHK & 3BHK Plans",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Unit Floor Plans",
    "description": "Spacious 2BHK and 3BHK family residences featuring cross-ventilated living areas, master suites, and utility terraces.",
    "tags": [
      "Alorea Residences",
      "Unit Plans",
      "2BHK",
      "3BHK",
      "Family Housing"
    ],
    "fullImage": "assets/images/full/19.webp",
    "mediumImage": "assets/images/medium/19.webp",
    "thumbImage": "assets/images/thumbs/19.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 20,
    "title": "Alorea Residences - Typical Cluster Floor Plate",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Technical Floor Plan",
    "description": "Typical residential floor plate showing four units per core, acoustic buffer lobbies, fire stairs, and service risers.",
    "tags": [
      "Alorea Residences",
      "Cluster Plan",
      "Circulation Core",
      "Fire Safety"
    ],
    "fullImage": "assets/images/full/20.webp",
    "mediumImage": "assets/images/medium/20.webp",
    "thumbImage": "assets/images/thumbs/20.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 21,
    "title": "Alorea Residences - Environmental Courtyard Section",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Architectural Section",
    "description": "Longitudinal section demonstrating stack ventilation effect, subterranean parking, podium planting, and stepped balconies.",
    "tags": [
      "Alorea Residences",
      "Environmental Section",
      "Stack Effect",
      "Passive Cooling"
    ],
    "fullImage": "assets/images/full/21.webp",
    "mediumImage": "assets/images/medium/21.webp",
    "thumbImage": "assets/images/thumbs/21.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 22,
    "title": "Alorea Residences - Architectural Elevations",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Building Elevations",
    "description": "Front and courtyard elevations highlighting rhythmic balcony fenestration, texture changes, and earthy material palette.",
    "tags": [
      "Alorea Residences",
      "Elevations",
      "Balcony Detail",
      "Materials"
    ],
    "fullImage": "assets/images/full/22.webp",
    "mediumImage": "assets/images/medium/22.webp",
    "thumbImage": "assets/images/thumbs/22.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 23,
    "title": "Alorea Residences - Photorealistic Perspectives",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Alorea Residences",
    "type": "Photorealistic Render",
    "description": "Vibrant courtyard community perspectives and stepped garden terraces rendered under golden afternoon light.",
    "tags": [
      "Alorea Residences",
      "Courtyard Render",
      "Housing Perspectives",
      "3D Visualization"
    ],
    "fullImage": "assets/images/full/23.webp",
    "mediumImage": "assets/images/medium/23.webp",
    "thumbImage": "assets/images/thumbs/23.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 24,
    "title": "Nova Clubhouse - Geometric Form & Programmatic Zoning",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Concept & Zoning",
    "description": "Angular geometric form tailored to triangular parcel corner, integrating indoor sports, co-working, and wellness.",
    "tags": [
      "Nova Clubhouse",
      "Clubhouse",
      "Form Generation",
      "Recreation"
    ],
    "fullImage": "assets/images/full/24.webp",
    "mediumImage": "assets/images/medium/24.webp",
    "thumbImage": "assets/images/thumbs/24.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 25,
    "title": "Nova Clubhouse - Ground Floor Plan & Atrium",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Technical Floor Plan",
    "description": "Ground floor layout with soaring double-height reception lobby, community lounge, cafe, and badminton courts.",
    "tags": [
      "Nova Clubhouse",
      "Floor Plan",
      "Atrium",
      "Sports Facility"
    ],
    "fullImage": "assets/images/full/25.webp",
    "mediumImage": "assets/images/medium/25.webp",
    "thumbImage": "assets/images/thumbs/25.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 26,
    "title": "Nova Clubhouse - First Floor Plan: Wellness & Gym",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Technical Floor Plan",
    "description": "First floor plan detailing high-tech gymnasium, cardio zone, yoga/aerobics studio, steam/sauna, and changing rooms.",
    "tags": [
      "Nova Clubhouse",
      "Floor Plan",
      "Gymnasium",
      "Wellness"
    ],
    "fullImage": "assets/images/full/26.webp",
    "mediumImage": "assets/images/medium/26.webp",
    "thumbImage": "assets/images/thumbs/26.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 27,
    "title": "Nova Clubhouse - Second Floor & Infinity Pool Deck",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Technical Floor Plan",
    "description": "Upper floor and rooftop recreation deck featuring semi-covered infinity lap pool, sun loungers, and alfresco terrace.",
    "tags": [
      "Nova Clubhouse",
      "Roof Plan",
      "Swimming Pool",
      "Terrace Deck"
    ],
    "fullImage": "assets/images/full/27.webp",
    "mediumImage": "assets/images/medium/27.webp",
    "thumbImage": "assets/images/thumbs/27.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 28,
    "title": "Nova Clubhouse - Cross Sections & Structural Trusses",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Architectural Section",
    "description": "Cross-sectional drawings highlighting long-span steel trusses over sports hall and double-height spatial volumes.",
    "tags": [
      "Nova Clubhouse",
      "Sections",
      "Steel Trusses",
      "Double Height"
    ],
    "fullImage": "assets/images/full/28.webp",
    "mediumImage": "assets/images/medium/28.webp",
    "thumbImage": "assets/images/thumbs/28.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 29,
    "title": "Nova Clubhouse - Architectural Elevations",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Building Elevations",
    "description": "Modern sharp-angled elevations with composite panels, structural glazing, and warm wood accents.",
    "tags": [
      "Nova Clubhouse",
      "Elevations",
      "Modernist Facade",
      "Canopy"
    ],
    "fullImage": "assets/images/full/29.webp",
    "mediumImage": "assets/images/medium/29.webp",
    "thumbImage": "assets/images/thumbs/29.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 30,
    "title": "Nova Clubhouse - Interior Visualizations",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Interior Render",
    "description": "Photorealistic interior perspectives of the double-height entrance atrium, timber acoustic paneling, and co-working lounge.",
    "tags": [
      "Nova Clubhouse",
      "Interior Render",
      "Atrium",
      "Lounge"
    ],
    "fullImage": "assets/images/full/30.webp",
    "mediumImage": "assets/images/medium/30.webp",
    "thumbImage": "assets/images/thumbs/30.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 31,
    "title": "Nova Clubhouse - Exterior Dusk Visualizations",
    "category": "Project 01: Mixed Use Development",
    "projectId": "mixed-use-development",
    "subProject": "Nova Clubhouse",
    "type": "Photorealistic Render",
    "description": "Dramatic night rendering showcasing underwater pool lighting, glowing glass curtain walls, and landscaped approach.",
    "tags": [
      "Nova Clubhouse",
      "Night Render",
      "Pool Deck",
      "Architectural Lighting"
    ],
    "fullImage": "assets/images/full/31.webp",
    "mediumImage": "assets/images/medium/31.webp",
    "thumbImage": "assets/images/thumbs/31.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 32,
    "title": "Vertex Towers - Cover & Urban Identity",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Project Cover & Intro",
    "description": "Mixed-use commercial twin towers on arterial Anna Salai, combining premium corporate offices, retail mall, and Vertex Cinemas.",
    "tags": [
      "Vertex Towers",
      "Twin Towers",
      "Commercial",
      "Anna Salai",
      "Cover"
    ],
    "fullImage": "assets/images/full/32.webp",
    "mediumImage": "assets/images/medium/32.webp",
    "thumbImage": "assets/images/thumbs/32.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 33,
    "title": "Vertex Towers - Hero Dusk Skyline Perspective",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Photorealistic Render",
    "description": "Striking architectural hero render of the twin towers connected by elevated skybridge against Chennai dusk skyline.",
    "tags": [
      "Vertex Towers",
      "Hero Visual",
      "Skybridge",
      "Dusk Render",
      "Iconic Architecture"
    ],
    "fullImage": "assets/images/full/33.webp",
    "mediumImage": "assets/images/medium/33.webp",
    "thumbImage": "assets/images/thumbs/33.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 34,
    "title": "Vertex Towers - Urban Context & Connectivity",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Urban Analysis",
    "description": "Metropolitan connectivity analysis along Anna Salai corridor, pedestrian transit links to Metro station, and solar shadow studies.",
    "tags": [
      "Vertex Towers",
      "Urban Transit",
      "Metro Link",
      "Site Context"
    ],
    "fullImage": "assets/images/full/34.webp",
    "mediumImage": "assets/images/medium/34.webp",
    "thumbImage": "assets/images/thumbs/34.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 35,
    "title": "Vertex Towers - Ground Master Plan & Plazas",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Master Plan",
    "description": "Comprehensive ground floor layout showing civic event plaza, VIP corporate drop-offs, security gates, and multi-tier basement ramps.",
    "tags": [
      "Vertex Towers",
      "Ground Plan",
      "Urban Plaza",
      "Traffic Flow"
    ],
    "fullImage": "assets/images/full/35.webp",
    "mediumImage": "assets/images/medium/35.webp",
    "thumbImage": "assets/images/thumbs/35.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 36,
    "title": "Vertex Towers - Retail Mall Podium Level Plans",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "Multi-level podium floor plan featuring 4-story retail galleria, anchor department stores, gourmet dining, and central light atrium.",
    "tags": [
      "Vertex Towers",
      "Retail Mall",
      "Podium Plan",
      "Atrium Circulation"
    ],
    "fullImage": "assets/images/full/36.webp",
    "mediumImage": "assets/images/medium/36.webp",
    "thumbImage": "assets/images/thumbs/36.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 37,
    "title": "Vertex Towers - Vertex Cinemas Multiplex Plan",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "Multiplex level layout housing 6 cinema auditoriums, acoustic soundlocks, central ticket lobby, and concession concourse.",
    "tags": [
      "Vertex Towers",
      "Cinema Multiplex",
      "Auditorium Design",
      "Acoustics"
    ],
    "fullImage": "assets/images/full/37.webp",
    "mediumImage": "assets/images/medium/37.webp",
    "thumbImage": "assets/images/thumbs/37.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 38,
    "title": "Vertex Towers - Commercial Office Floor Plates",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "Flexible commercial workspace floor plates featuring column-free spans, high-speed lift banks, and perimeter executive suites.",
    "tags": [
      "Vertex Towers",
      "Office Floor Plate",
      "Commercial",
      "Workspace Planning"
    ],
    "fullImage": "assets/images/full/38.webp",
    "mediumImage": "assets/images/medium/38.webp",
    "thumbImage": "assets/images/thumbs/38.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 39,
    "title": "Vertex Towers - Longitudinal Architectural Section",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Architectural Section",
    "description": "Full-height longitudinal section through both towers, showing subterranean parking, retail atrium, skybridge, and mechanical penthouses.",
    "tags": [
      "Vertex Towers",
      "Sections",
      "Longitudinal Section",
      "Skybridge"
    ],
    "fullImage": "assets/images/full/39.webp",
    "mediumImage": "assets/images/medium/39.webp",
    "thumbImage": "assets/images/thumbs/39.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 40,
    "title": "Vertex Towers - Transverse Podium Section",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Architectural Section",
    "description": "Transverse section through retail mall galleria and multiplex auditoriums showing sightlines and escalator stacks.",
    "tags": [
      "Vertex Towers",
      "Sections",
      "Mall Atrium",
      "Auditorium Sightlines"
    ],
    "fullImage": "assets/images/full/40.webp",
    "mediumImage": "assets/images/medium/40.webp",
    "thumbImage": "assets/images/thumbs/40.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 41,
    "title": "Vertex Towers - Tower Elevations & Diagrid Facade",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Building Elevations",
    "description": "Tower elevations highlighting parametric diagrid structural exoskeleton, integrated solar shading, and crown spire.",
    "tags": [
      "Vertex Towers",
      "Elevations",
      "Diagrid Facade",
      "Exoskeleton"
    ],
    "fullImage": "assets/images/full/41.webp",
    "mediumImage": "assets/images/medium/41.webp",
    "thumbImage": "assets/images/thumbs/41.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 42,
    "title": "Vertex Towers - Structural Diagrid & Facade Axonometric",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Technical Axonometric",
    "description": "Exploded structural axonometric detailing node connections, insulated double glazing, and passive solar thermal breaks.",
    "tags": [
      "Vertex Towers",
      "Technical Axonometric",
      "Facade Details",
      "Structural Nodes"
    ],
    "fullImage": "assets/images/full/42.webp",
    "mediumImage": "assets/images/medium/42.webp",
    "thumbImage": "assets/images/thumbs/42.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 43,
    "title": "Vertex Towers - Atrium & Skyline Perspectives",
    "category": "Project 02: Vertex Towers",
    "projectId": "vertex-towers",
    "subProject": null,
    "type": "Photorealistic Render",
    "description": "Photorealistic visualization of the 4-level sunlit retail atrium and pedestrian ground entrance with street-level vitality.",
    "tags": [
      "Vertex Towers",
      "Retail Atrium Render",
      "3D Visualization",
      "Interior Perspective"
    ],
    "fullImage": "assets/images/full/43.webp",
    "mediumImage": "assets/images/medium/43.webp",
    "thumbImage": "assets/images/thumbs/43.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 44,
    "title": "Norwyn Stay - Cover & Hospitality Concept",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Project Cover & Intro",
    "description": "3-Star contemporary business and leisure hotel combining tropical Kerala vernacular with sustainable modern hospitality.",
    "tags": [
      "Norwyn Stay",
      "Hospitality",
      "Hotel",
      "Kochi",
      "Cover"
    ],
    "fullImage": "assets/images/full/44.webp",
    "mediumImage": "assets/images/medium/44.webp",
    "thumbImage": "assets/images/thumbs/44.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 45,
    "title": "Norwyn Stay - Climatic Context & Z-Shaped Massing",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Concept & Massing",
    "description": "Climatic response to coastal humidity: Z-shaped massing creating dual microclimate courtyards that funnel southwest monsoon breezes.",
    "tags": [
      "Norwyn Stay",
      "Climatic Design",
      "Z-Shaped Massing",
      "Monsoon Winds"
    ],
    "fullImage": "assets/images/full/45.webp",
    "mediumImage": "assets/images/medium/45.webp",
    "thumbImage": "assets/images/thumbs/45.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 46,
    "title": "Norwyn Stay - Ground Floor Plan & Public Amenities",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "Ground floor layout featuring porte-cochère, reception lobby, all-day dining restaurant, back-of-house kitchen, and banquet hall.",
    "tags": [
      "Norwyn Stay",
      "Floor Plan",
      "Hotel Lobby",
      "All Day Dining"
    ],
    "fullImage": "assets/images/full/46.webp",
    "mediumImage": "assets/images/medium/46.webp",
    "thumbImage": "assets/images/thumbs/46.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 47,
    "title": "Norwyn Stay - First Floor & Elevated Pool Deck Plan",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "First floor layout housing the elevated infinity pool deck, poolside bistro, spa treatment rooms, and fitness suite.",
    "tags": [
      "Norwyn Stay",
      "Floor Plan",
      "Pool Deck",
      "Spa",
      "Wellness"
    ],
    "fullImage": "assets/images/full/47.webp",
    "mediumImage": "assets/images/medium/47.webp",
    "thumbImage": "assets/images/thumbs/47.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 48,
    "title": "Norwyn Stay - Typical Guest Room Floor Plates",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "Guest floor plans showing deluxe rooms, executive suites, housekeeping pantries, and acoustically insulated corridors.",
    "tags": [
      "Norwyn Stay",
      "Floor Plan",
      "Guest Rooms",
      "Suite Layouts"
    ],
    "fullImage": "assets/images/full/48.webp",
    "mediumImage": "assets/images/medium/48.webp",
    "thumbImage": "assets/images/thumbs/48.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 49,
    "title": "Norwyn Stay - Architectural Longitudinal Sections",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Architectural Section",
    "description": "Longitudinal sections demonstrating level changes, double-height lobby volume, and vertical planter wall integrations.",
    "tags": [
      "Norwyn Stay",
      "Sections",
      "Longitudinal Section",
      "Green Wall"
    ],
    "fullImage": "assets/images/full/49.webp",
    "mediumImage": "assets/images/medium/49.webp",
    "thumbImage": "assets/images/thumbs/49.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 50,
    "title": "Norwyn Stay - Architectural Elevations",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Building Elevations",
    "description": "Elevations featuring timber screening, living vertical green walls, terracotta tile cladding, and deep overhangs.",
    "tags": [
      "Norwyn Stay",
      "Elevations",
      "Timber Louvers",
      "Terracotta"
    ],
    "fullImage": "assets/images/full/50.webp",
    "mediumImage": "assets/images/medium/50.webp",
    "thumbImage": "assets/images/thumbs/50.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 51,
    "title": "Norwyn Stay - Exploded Axonometric Layering",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Exploded Axonometric",
    "description": "Programmatic exploded axonometric detailing vertical separation between public amenities, banquet spaces, and private guest floors.",
    "tags": [
      "Norwyn Stay",
      "Axonometric",
      "Program Layering",
      "3D Diagram"
    ],
    "fullImage": "assets/images/full/51.webp",
    "mediumImage": "assets/images/medium/51.webp",
    "thumbImage": "assets/images/thumbs/51.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 52,
    "title": "Norwyn Stay - Living Green Wall & Shading Detail",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Technical Detail & Wall Section",
    "description": "1:20 detailed wall section of the bio-climatic facade: drip-irrigation green wall panels, air cavities, and motorized louvers.",
    "tags": [
      "Norwyn Stay",
      "Wall Section",
      "Facade Detail",
      "Green Wall",
      "Biophilic"
    ],
    "fullImage": "assets/images/full/52.webp",
    "mediumImage": "assets/images/medium/52.webp",
    "thumbImage": "assets/images/thumbs/52.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 53,
    "title": "Norwyn Stay - Photorealistic Hospitality Perspectives",
    "category": "Project 03: Norwyn Stay",
    "projectId": "norwyn-stay",
    "subProject": null,
    "type": "Photorealistic Render",
    "description": "High-resolution 3D renders of the elevated pool deck sunset lounge and welcoming tropical lobby atmosphere.",
    "tags": [
      "Norwyn Stay",
      "Hospitality Render",
      "Pool Sunset",
      "Lobby Atmosphere"
    ],
    "fullImage": "assets/images/full/53.webp",
    "mediumImage": "assets/images/medium/53.webp",
    "thumbImage": "assets/images/thumbs/53.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 54,
    "title": "Truenest - Cover & Residential Concept",
    "category": "Project 04: Truenest",
    "projectId": "truenest",
    "subProject": null,
    "type": "Project Cover & Intro",
    "description": "Serene contemporary 3-BHK private residence in Papanasam, designed around nature-embracing balconies and biophilic tranquility.",
    "tags": [
      "Truenest",
      "Residence",
      "Villa",
      "Papanasam",
      "Cover"
    ],
    "fullImage": "assets/images/full/54.webp",
    "mediumImage": "assets/images/medium/54.webp",
    "thumbImage": "assets/images/thumbs/54.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 55,
    "title": "Truenest - Context, Orientation & Passive Strategies",
    "category": "Project 04: Truenest",
    "projectId": "truenest",
    "subProject": null,
    "type": "Concept & Microclimate",
    "description": "Site orientation analysis capitalizing on cool river breezes and western mountain backdrop with shaded courtyard integration.",
    "tags": [
      "Truenest",
      "Passive Design",
      "Microclimate",
      "Sun Path"
    ],
    "fullImage": "assets/images/full/55.webp",
    "mediumImage": "assets/images/medium/55.webp",
    "thumbImage": "assets/images/thumbs/55.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 56,
    "title": "Truenest - Ground Floor Plan & Living Spaces",
    "category": "Project 04: Truenest",
    "projectId": "truenest",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "Ground floor layout featuring covered porch, foyer, open-concept living & dining, internal landscape court, and master suite.",
    "tags": [
      "Truenest",
      "Floor Plan",
      "Ground Floor",
      "Courtyard Residence"
    ],
    "fullImage": "assets/images/full/56.webp",
    "mediumImage": "assets/images/medium/56.webp",
    "thumbImage": "assets/images/thumbs/56.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 57,
    "title": "Truenest - First Floor Plan & Terrace Lounges",
    "category": "Project 04: Truenest",
    "projectId": "truenest",
    "subProject": null,
    "type": "Technical Floor Plan",
    "description": "Upper floor layout with two bedrooms, family entertainment lounge, and generous nature-viewing cantilevered balconies.",
    "tags": [
      "Truenest",
      "Floor Plan",
      "First Floor",
      "Balcony Lounge"
    ],
    "fullImage": "assets/images/full/57.webp",
    "mediumImage": "assets/images/medium/57.webp",
    "thumbImage": "assets/images/thumbs/57.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 58,
    "title": "Truenest - Architectural Section & Elevations",
    "category": "Project 04: Truenest",
    "projectId": "truenest",
    "subProject": null,
    "type": "Section & Elevation",
    "description": "Section and elevations illustrating sloping tiled roof accents, natural ventilation path through central court, and warm finishes.",
    "tags": [
      "Truenest",
      "Section",
      "Elevation",
      "Ventilation Flow"
    ],
    "fullImage": "assets/images/full/58.webp",
    "mediumImage": "assets/images/medium/58.webp",
    "thumbImage": "assets/images/thumbs/58.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 59,
    "title": "Truenest - Photorealistic Residence Perspectives",
    "category": "Project 04: Truenest",
    "projectId": "truenest",
    "subProject": null,
    "type": "Photorealistic Render",
    "description": "Renders of Truenest's exterior facade blending modern massing with regional materials, plus scenic upper balcony garden.",
    "tags": [
      "Truenest",
      "Residential Render",
      "Facade",
      "Balcony Garden"
    ],
    "fullImage": "assets/images/full/59.webp",
    "mediumImage": "assets/images/medium/59.webp",
    "thumbImage": "assets/images/thumbs/59.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 60,
    "title": "Studio PITCH - Internship Profile & Scope of Work",
    "category": "Project 05: Studio PITCH Internship Works",
    "projectId": "studio-pitch",
    "subProject": null,
    "type": "Professional Practice Overview",
    "description": "Professional architectural internship documentation at Studio PITCH, Bangalore, highlighting working drawings, joinery, and site coordination.",
    "tags": [
      "Studio PITCH",
      "Internship",
      "Professional Practice",
      "Bangalore",
      "GFC Drawings"
    ],
    "fullImage": "assets/images/full/60.webp",
    "mediumImage": "assets/images/medium/60.webp",
    "thumbImage": "assets/images/thumbs/60.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 61,
    "title": "Studio PITCH - Executive Reception Desk Joinery Details",
    "category": "Project 05: Studio PITCH Internship Works",
    "projectId": "studio-pitch",
    "subProject": null,
    "type": "Millwork & Joinery Detail",
    "description": "1:10 working drawing and fabrication details for a custom curved reception desk: MS framework, veneer cladding, and LED cove lighting.",
    "tags": [
      "Studio PITCH",
      "Working Drawing",
      "Reception Desk",
      "Joinery Detail",
      "MS Framework"
    ],
    "fullImage": "assets/images/full/61.webp",
    "mediumImage": "assets/images/medium/61.webp",
    "thumbImage": "assets/images/thumbs/61.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 62,
    "title": "Studio PITCH - Residential Custom Joinery & Wardrobes",
    "category": "Project 05: Studio PITCH Internship Works",
    "projectId": "studio-pitch",
    "subProject": null,
    "type": "Millwork & Interior Detail",
    "description": "Full working drawings for master bedroom modular wardrobe systems, concealed hardware, TV console units, and material schedule.",
    "tags": [
      "Studio PITCH",
      "Working Drawing",
      "Wardrobe Detail",
      "Interior Millwork"
    ],
    "fullImage": "assets/images/full/62.webp",
    "mediumImage": "assets/images/medium/62.webp",
    "thumbImage": "assets/images/thumbs/62.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 63,
    "title": "Studio PITCH - Commercial Workspace GFC & Ceiling Plans",
    "category": "Project 05: Studio PITCH Internship Works",
    "projectId": "studio-pitch",
    "subProject": null,
    "type": "GFC Drawing & Reflected Ceiling",
    "description": "Good For Construction (GFC) drawings for corporate office fit-out: reflected ceiling plan, HVAC diffuser alignment, and glazed partitions.",
    "tags": [
      "Studio PITCH",
      "GFC Drawing",
      "Reflected Ceiling Plan",
      "Corporate Interior"
    ],
    "fullImage": "assets/images/full/63.webp",
    "mediumImage": "assets/images/medium/63.webp",
    "thumbImage": "assets/images/thumbs/63.webp",
    "width": 4960,
    "height": 3507
  },
  {
    "page": 64,
    "title": "Portfolio Back Cover & Acknowledgements",
    "category": "Portfolio Cover",
    "projectId": "cover",
    "subProject": null,
    "type": "Back Cover",
    "description": "Concluding spread with personal architectural signature and professional contact sign-off.",
    "tags": [
      "Back Cover",
      "Sign-off",
      "Acknowledgements"
    ],
    "fullImage": "assets/images/full/64.webp",
    "mediumImage": "assets/images/medium/64.webp",
    "thumbImage": "assets/images/thumbs/64.webp",
    "width": 4960,
    "height": 3507
  }
];

export const SITE_METRICS = {
  totalSpreads: 64,
  totalProjects: 5,
  institution: "Sasi Creative School Of Architecture, Coimbatore",
  degree: "Bachelor of Architecture (B.Arch)",
  years: "2021 - 2026",
  currentFirm: "IK Design Studio, Bangalore",
  internshipFirm: "Studio PITCH, Bangalore",
  resumePdfPath: "assets/docs/Thivagar_SM_Resume.pdf",
  resumeThumbPath: "assets/resume/resume_thumb.webp",
  resumeFullPath: "assets/resume/resume_full.webp"
};
