// ===========================
// SITE DATA
// Department of Science & Technology Education
// University of Ibadan
// ===========================

export const siteConfig = {
  deptName: "Department of Science and Technology Education",
  shortName: "STE",
  faculty: "Faculty of Education",
  university: "University of Ibadan",
  email: "dste@ui.edu.ng",
  phone: "+234 802 345 6789",
  address:
    "Faculty of Education Building, University of Ibadan, Ibadan, Oyo State, Nigeria",
  officeHours: "Monday – Friday: 8:00 AM – 6:00 PM",
};

export const navLinks = [
  {
    label: "About",
    href: "/about",
    children: [
      { label: "History & Overview", href: "/about#history" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Leadership", href: "/about#leadership" },
    ],
  },
  { label: "Programmes", href: "/programmes" },
  {
    label: "People",
    href: "/people",
    children: [
      { label: "Academic Staff", href: "/people#academic" },
      { label: "Non-Academic Staff", href: "/people#non-academic" },
    ],
  },
  { label: "Research", href: "/research" },
  { label: "Admissions", href: "/admissions" },
  {
    label: "News & Events",
    href: "/news",
    children: [
      { label: "News & Announcements", href: "/news" },
      { label: "Events", href: "/events" },
    ],
  },
  { label: "Students", href: "/students" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const programmes = [
  {
    id: 1,
    level: "Undergraduate",
    degree: "B.Sc. (Ed)",
    title: "Biology",
    duration: "4 Years",
    description:
      "A Bachelor of Science in Education (Biology) preparing graduates to teach biology with strong content knowledge and practical laboratory skills.",
    tracks: ["Biology"],
    icon: "🧫",
  },
  {
    id: 2,
    level: "Undergraduate",
    degree: "B.Sc. (Ed)",
    title: "Chemistry",
    duration: "4 Years",
    description:
      "A Bachelor of Science in Education (Chemistry) focused on chemistry content knowledge, laboratory competence, and pedagogy for secondary and tertiary teaching.",
    tracks: ["Chemistry"],
    icon: "⚗️",
  },
  {
    id: 3,
    level: "Undergraduate",
    degree: "B.Sc. (Ed)",
    title: "Physics",
    duration: "4 Years",
    description:
      "A Bachelor of Science in Education (Physics) designed to produce competent physics teachers with strong theoretical and practical foundations.",
    tracks: ["Physics"],
    icon: "🌌",
  },
  {
    id: 4,
    level: "Undergraduate",
    degree: "B.Sc. (Ed)",
    title: "Mathematics",
    duration: "4 Years",
    description:
      "A Bachelor of Science in Education (Mathematics) emphasising deep mathematical content knowledge and effective mathematics teaching strategies.",
    tracks: ["Mathematics"],
    icon: "📐",
  },
  {
    id: 5,
    level: "Undergraduate",
    degree: "B.Sc. (Ed)",
    title: "Computer Science",
    duration: "4 Years",
    description:
      "A Bachelor of Science in Education (Computer Science) preparing graduates to teach computing and computational thinking in schools.",
    tracks: ["Computer Science"],
    icon: "💻",
  },
  {
    id: 6,
    level: "Undergraduate",
    degree: "B.Ed.",
    title: "Educational Technology",
    duration: "4 Years",
    description:
      "A Bachelor of Education in Educational Technology focused on instructional design, multimedia, and the use of technology in teaching and learning.",
    tracks: ["Educational Technology"],
    icon: "🎯",
  },

  // Postgraduate programmes
  {
    id: 7,
    level: "Postgraduate",
    degree: "M.Ed.",
    title: "Science Education",
    duration: "18 Months",
    description:
      "A Master of Education in Science Education aimed at enhancing pedagogical knowledge and research capacity for science teachers and curriculum specialists.",
    tracks: ["Science Education"],
    icon: "🔬",
  },
  {
    id: 8,
    level: "Postgraduate",
    degree: "M.Ed.",
    title: "Educational Technology",
    duration: "18 Months",
    description:
      "A Master of Education in Educational Technology focusing on the design, implementation and evaluation of technology-enhanced learning.",
    tracks: ["Educational Technology", "Digital Pedagogy"],
    icon: "⚙️",
  },
  {
    id: 9,
    level: "Postgraduate",
    degree: "MSc. Ed",
    title: "Mathematics Education",
    duration: "2 Years",
    description:
      "A Master of Science in Education (Mathematics) that explores advanced topics in mathematics education, research methods and curriculum development.",
    tracks: ["Mathematics Education"],
    icon: "📊",
  },
  {
    id: 10,
    level: "Postgraduate",
    degree: "MSc. Ed",
    title: "Science Education (Zoology, Physics, Chemistry, Botany)",
    duration: "2 Years",
    description:
      "Programme offering MSc. Ed specialisations in core science disciplines: Zoology, Physics, Chemistry and Botany for subject-specific science educators and researchers.",
    tracks: ["Zoology", "Physics", "Chemistry", "Botany"],
    icon: "🧬",
  },

  // Doctoral programmes
  {
    id: 11,
    level: "Doctoral",
    degree: "Ph.D.",
    title: "Science & Technology Education",
    duration: "3–5 Years",
    description:
      "A rigorous research-focused programme producing scholars and innovators who advance the frontiers of science and technology education.",
    tracks: [
      "Research & Policy",
      "Curriculum Theory",
      "Teacher Professional Development",
    ],
    icon: "🎓",
  },
  {
    id: 12,
    level: "Doctoral",
    degree: "Ph.D.",
    title: "Educational Technology",
    duration: "3–5 Years",
    description:
      "A research-intensive programme focused on the design, implementation, and evaluation of educational technologies in diverse learning environments.",
    tracks: [
      "Learning Analytics & AI in Education",
      "EdTech Design & Evaluation",
      "Digital Equity & Inclusion",
    ],
    icon: "🤖",
  },
];

export const academicStaff = [
  {
    id: 1,
    name: "Akinyemi, Adetunbi L.",
    title: "Ag. Head of Department / Senior Lecturer",
    specialization: "Educational Technology",
    discipline: "Educational Technology",
    email: "",
    qualifications: "B.Ed., M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "AA",
    color: "#003366",
  },
  {
    id: 2,
    name: "Olagunju, Alice Morenike",
    title: "Professor",
    specialization: "Science Education (Biology/Environmental Education)",
    discipline: "Biology / Environmental Education",
    email: "",
    qualifications: "B.Sc.Ed. (Hons), M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "OM",
    color: "#004080",
  },
  {
    id: 3,
    name: "Aremu, Ayotola",
    title: "Professor",
    specialization: "Educational Technology",
    discipline: "Educational Technology",
    email: "",
    qualifications: "B.Sc. (Hons), PGDE, M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "AA",
    color: "#0055a5",
  },
  {
    id: 4,
    name: "Ige, Temisan",
    title: "Professor",
    specialization: "Science Education (Biology/Curriculum & Instruction)",
    discipline: "Biology / Curriculum & Instruction",
    email: "",
    qualifications: "B.Ed. (Benin), M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "IT",
    color: "#003366",
  },
  {
    id: 5,
    name: "Tella, A.",
    title: "Professor",
    specialization: "Mathematics Education",
    discipline: "Mathematics Education",
    email: "",
    qualifications: "B.Ed., M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "AT",
    color: "#004080",
  },
  {
    id: 6,
    name: "Edidiong, Ukoh",
    title: "Reader",
    specialization: "Physics Education",
    discipline: "Physics Education",
    email: "",
    qualifications: "B.Sc.Ed. (Calabar), M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "EU",
    color: "#0055a5",
  },
  {
    id: 7,
    name: "Olasunkanmi, I. A.",
    title: "Senior Lecturer",
    specialization: "Educational Technology",
    discipline: "Educational Technology",
    email: "",
    qualifications: "B.Sc.Ed. (Ekiti), M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "OI",
    color: "#003366",
  },
  {
    id: 8,
    name: "Mabel I. Idika",
    title: "Lecturer I",
    specialization: "Chemistry Education",
    discipline: "Chemistry Education",
    email: "",
    qualifications: "B.Sc. Ed. (Minna), M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "MI",
    color: "#004080",
  },
  {
    id: 9,
    name: "Omilani, N. A.",
    title: "Lecturer I",
    specialization: "Chemistry Education",
    discipline: "Chemistry Education",
    email: "",
    qualifications: "B.Sc. Ed. (Lagos), M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "NO",
    color: "#0055a5",
  },
  {
    id: 10,
    name: "Ojo, Temitope",
    title: "Assistant Lecturer",
    specialization: "Biology Education",
    discipline: "Biology Education",
    email: "",
    qualifications: "B.Sc. Ed. (Lagos), M.Ed., Ph.D. (Ibadan)",
    researchInterests: [],
    imageInitials: "OT",
    color: "#003366",
  },
  {
    id: 11,
    name: "Ogundipe, Tomi",
    title: "Assistant Lecturer",
    specialization: "Educational Technology",
    discipline: "Educational Technology",
    email: "",
    qualifications: "B.Sc. (Ogun), PGDE, M.Ed. (Ibadan)",
    researchInterests: [],
    imageInitials: "OT",
    color: "#004080",
  },
  {
    id: 12,
    name: "Grace T. Babaloa",
    title: "Lecturer II",
    specialization: "Science Education",
    discipline: "Integrated Science",
    email: "",
    qualifications: "B.Sc. Ed., M.Ed., Ph.D.",
    researchInterests: [],
    imageInitials: "GB",
    color: "#0055a5",
  },
  {
    id: 13,
    name: "Oluwatosin B. Eniriolami",
    title: "Lecturer II",
    specialization: "Science Education",
    discipline: "Biology",
    email: "",
    qualifications: "B.Sc. Ed. (Biology), M.Ed. (Sci. Ed), Ph.D.",
    researchInterests: [],
    imageInitials: "OE",
    color: "#003366",
  },
  {
    id: 14,
    name: "A. C. Olawale",
    title: "Lecturer II",
    specialization: "Educational Technology",
    discipline: "Educational Technology",
    email: "",
    qualifications: "B.Ed., M.Ed. (EdTech), Ph.D.",
    researchInterests: [],
    imageInitials: "AO",
    color: "#004080",
  },
  {
    id: 15,
    name: "I. O. Afolabi",
    title: "Assistant Lecturer",
    specialization: "Educational Technology",
    discipline: "Educational Technology",
    email: "",
    qualifications: "B.Sc. Ed. (Geography), M.Ed. (EdTech), Ph.D. (in view)",
    researchInterests: [],
    imageInitials: "IA",
    color: "#0055a5",
  },
  {
    id: 16,
    name: "G. O. Oloyede",
    title: "Assistant Lecturer",
    specialization: "Mathematics",
    discipline: "Mathematics",
    email: "",
    qualifications: "B.Sc. Ed. Math, M.Ed. (Math), Ph.D. (in view)",
    researchInterests: [],
    imageInitials: "GO",
    color: "#003366",
  },
  {
    id: 17,
    name: "T. M. Ologunada",
    title: "Assistant Lecturer",
    specialization: "Educational Technology",
    discipline: "Educational Technology",
    email: "",
    qualifications:
      "B.Sc. Ed. (Computer Science), M.Ed. (EdTech), Ph.D. (in view)",
    researchInterests: [],
    imageInitials: "TO",
    color: "#004080",
  },
];

export const nonAcademicStaff = [
  {
    id: 1,
    name: "Mrs. Blessing O. Adamu",
    role: "Principal Administrative Officer",
    email: "bo.adamu@ui.edu.ng",
  },
  {
    id: 2,
    name: "Mr. Seun F. Olatunji",
    role: "Senior Technical Officer (Lab)",
    email: "sf.olatunji@ui.edu.ng",
  },
  {
    id: 3,
    name: "Miss Amina K. Ibrahim",
    role: "Administrative Secretary",
    email: "ak.ibrahim@ui.edu.ng",
  },
  {
    id: 4,
    name: "Mr. David O. Ajayi",
    role: "Computer Laboratory Technician",
    email: "do.ajayi@ui.edu.ng",
  },
  {
    id: 5,
    name: "Mrs. Grace E. Okoro",
    role: "Confidential Secretary",
    email: "ge.okoro@ui.edu.ng",
  },
  {
    id: 6,
    name: "Mr. Yemi A. Fasanya",
    role: "Library Officer",
    email: "ya.fasanya@ui.edu.ng",
  },
];

export const newsItems = [
  {
    id: 1,
    category: "Award",
    date: "March 28, 2025",
    title: "DSTE Wins Best Education Research Department at NUC Awards 2025",
    excerpt:
      "The Department of Science and Technology Education was honoured with the Best Education Research Department award at the 2025 National Universities Commission Excellence Awards held in Abuja.",
    image: null,
    featured: true,
  },
  {
    id: 2,
    category: "Partnership",
    date: "March 15, 2025",
    title:
      "New MoU Signed with Nigerian Educational Research and Development Council",
    excerpt:
      "The department formalised a partnership with NERDC aimed at co-developing next-generation science curriculum materials for Nigerian secondary schools.",
    image: null,
    featured: false,
  },
  {
    id: 3,
    category: "Publication",
    date: "February 22, 2025",
    title:
      "Faculty Members Publish Landmark Study in International Journal of Science Education",
    excerpt:
      "Drs. Adeleke and Yusuf co-authored a major study on inquiry-based science learning outcomes in West African schools, now published in a leading international peer-reviewed journal.",
    image: null,
    featured: false,
  },
  {
    id: 4,
    category: "Achievement",
    date: "February 5, 2025",
    title: "PhD Student Wins Pan-African STEM Education Innovation Prize",
    excerpt:
      "Doctoral candidate Mr. Ibrahim Musa was awarded the Pan-African STEM Education Innovation Prize for his groundbreaking work on mobile-based science learning in underserved communities.",
    image: null,
    featured: false,
  },
  {
    id: 5,
    category: "Grant",
    date: "January 18, 2025",
    title: "Department Secures ₦45 Million TETFund Research Grant",
    excerpt:
      "The department has been awarded a significant TETFund research grant to investigate the integration of artificial intelligence tools in tertiary science education across Nigeria.",
    image: null,
    featured: false,
  },
  {
    id: 6,
    category: "Announcement",
    date: "January 10, 2025",
    title: "Call for Applications: 2025/2026 Postgraduate Admissions Now Open",
    excerpt:
      "The department invites qualified candidates to apply for M.Ed. and Ph.D. programmes in Science, Technology, and Mathematics Education for the 2025/2026 academic session.",
    image: null,
    featured: false,
  },
];

export const events = [
  {
    id: 1,
    title: "Annual DSTE Research Colloquium 2025",
    date: "April 24–25, 2025",
    time: "9:00 AM",
    location: "Faculty of Education Auditorium, UI",
    type: "Conference",
    description:
      "A two-day colloquium bringing together researchers, educators, and policymakers to present findings and discuss the future of STEM education in Nigeria.",
    isUpcoming: true,
  },
  {
    id: 2,
    title: "Workshop: Integrating AI Tools in Science Teaching",
    date: "May 8, 2025",
    time: "10:00 AM – 3:00 PM",
    location: "ICT Centre, University of Ibadan",
    type: "Workshop",
    description:
      "A hands-on workshop for educators on leveraging AI-powered tools including ChatGPT, Gemini, and subject-specific platforms for classroom science instruction.",
    isUpcoming: true,
  },
  {
    id: 3,
    title: "Open Day for Prospective Students",
    date: "May 17, 2025",
    time: "9:00 AM – 2:00 PM",
    location: "DSTE Department, Faculty of Education",
    type: "Open Day",
    description:
      "Prospective students and their guardians are invited to tour the department, meet faculty, and learn about our programmes, scholarships, and career opportunities.",
    isUpcoming: true,
  },
  {
    id: 4,
    title: "Inaugural Lecture: Prof. Ngozi Okafor",
    date: "June 5, 2025",
    time: "2:00 PM",
    location: "Trenchard Hall, University of Ibadan",
    type: "Inaugural Lecture",
    description:
      "Prof. Ngozi Okafor delivers her inaugural lecture titled 'From Classroom to Career: Reimagining Physics Education for the 21st-Century African Student'.",
    isUpcoming: true,
  },
  {
    id: 5,
    title: "STEM Outreach Day — Secondary Schools",
    date: "June 19, 2025",
    time: "8:00 AM – 1:00 PM",
    location: "Various Partner Schools, Ibadan",
    type: "Outreach",
    description:
      "DSTE students and staff visit partner secondary schools to inspire the next generation of scientists and technologists through interactive experiments and mentorship.",
    isUpcoming: true,
  },
];

export const researchClusters = [
  {
    id: 1,
    title: "STEM Pedagogy & Curriculum Innovation",
    lead: "Prof. A.O. Fadahunsi",
    description:
      "Investigating transformative approaches to science, technology, engineering, and mathematics curriculum design and instructional delivery at all educational levels.",
    projects: 7,
    publications: 34,
    icon: "🔬",
  },
  {
    id: 2,
    title: "Educational Technology & Digital Learning",
    lead: "Dr. E.S. Nwosu",
    description:
      "Exploring the integration of digital tools, artificial intelligence, and emerging technologies to enhance learning outcomes in science and technology education.",
    projects: 5,
    publications: 22,
    icon: "💻",
  },
  {
    id: 3,
    title: "Teacher Professional Development",
    lead: "Dr. F.A. Adeleke",
    description:
      "Designing and evaluating evidence-based professional development programmes that transform science and mathematics teacher knowledge, practice, and identity.",
    projects: 4,
    publications: 19,
    icon: "👩‍🏫",
  },
  {
    id: 4,
    title: "Science Communication & Public Engagement",
    lead: "Dr. R.B. Yusuf",
    description:
      "Developing strategies for effective science communication, promoting scientific literacy, and fostering public understanding of science and technology.",
    projects: 3,
    publications: 11,
    icon: "📡",
  },
];

export const galleryImages = [
  {
    id: 1,
    caption: "Laboratory practical session — Chemistry Education students",
    category: "Academics",
  },
  { id: 2, caption: "Annual Research Colloquium 2024", category: "Events" },
  {
    id: 3,
    caption: "STEM Outreach Day at Government College Ibadan",
    category: "Outreach",
  },
  {
    id: 4,
    caption: "Graduation ceremony — Class of 2024",
    category: "Graduation",
  },
  {
    id: 5,
    caption: "Faculty workshop on innovative pedagogy",
    category: "Training",
  },
  {
    id: 6,
    caption: "Computer laboratory — Technology Education students",
    category: "Academics",
  },
  { id: 7, caption: "International conference delegation", category: "Events" },
  { id: 8, caption: "Student project presentation day", category: "Academics" },
  {
    id: 9,
    caption: "Welcome address — New student orientation",
    category: "Events",
  },
];

export const stats = [
  { value: "200+", label: "Current Students" },
  { value: "17", label: "Academic Staff" },
  { value: "120+", label: "Research Publications" },
  { value: "6", label: "Degree Programmes" },
];

export const admissionsInfo = {
  undergraduate: {
    title: "Undergraduate Admissions",
    requirements: [
      "Minimum of five (5) O'Level credit passes in WAEC/NECO including English Language and Mathematics",
      "Credits in relevant science subjects (Biology, Chemistry, Physics, Further Mathematics as applicable)",
      "Valid UTME score with a minimum cut-off mark as stipulated by the University",
      "Post-UTME screening exercise conducted by the University of Ibadan",
    ],
    process: [
      "Apply through JAMB CAPS and choose University of Ibadan",
      "Await Post-UTME screening notification from UI",
      "Participate in the Post-UTME screening exercise",
      "Await admission offer and accept on JAMB CAPS",
      "Proceed with UI departmental registration",
    ],
  },
  postgraduate: {
    title: "Postgraduate Admissions",
    requirements: [
      "A good first degree (minimum of Second Class Lower) in Education or relevant discipline",
      "For Ph.D.: A Master's degree with a minimum of Credit level in Education or related field",
      "NYSC discharge or exemption certificate",
      "Three academic reference letters",
      "Statement of purpose / research proposal (for Ph.D. applicants)",
    ],
    process: [
      "Visit the University of Ibadan Postgraduate School portal",
      "Complete the online application form",
      "Upload required documents and credentials",
      "Pay the application fee",
      "Attend the departmental screening interview",
      "Await offer letter from the Postgraduate School",
    ],
  },
};

export const studentResources = [
  {
    title: "Course Registration Portal",
    description:
      "Register for courses, view timetables, and manage your academic record on the UI Student Portal.",
    link: "#",
    icon: "📋",
  },
  {
    title: "e-Library Access",
    description:
      "Access thousands of journals, textbooks, and research databases through the University of Ibadan Library portal.",
    link: "#",
    icon: "📚",
  },
  {
    title: "Examination Guidelines",
    description:
      "Important rules, regulations, and schedules for all departmental and faculty examinations.",
    link: "#",
    icon: "📝",
  },
  {
    title: "Research & Thesis Support",
    description:
      "Guidelines, templates, and resources for undergraduate projects and postgraduate theses/dissertations.",
    link: "#",
    icon: "🔍",
  },
  {
    title: "Student Welfare & Counselling",
    description:
      "Access mental health support, academic counselling, and student welfare services at the University.",
    link: "#",
    icon: "💙",
  },
  {
    title: "Scholarships & Bursaries",
    description:
      "Information on available scholarships, TETFund bursaries, and financial aid opportunities for DSTE students.",
    link: "#",
    icon: "🏆",
  },
];
