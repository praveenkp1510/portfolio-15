import updatedTbsImg from '../assets/UpdatedTBS.png';
import busstandImg from '../assets/BusstandImg.PNG';
import tbsNativeImg from '../assets/TBSNative.png';
import crmImg from '../assets/CRM.png';
import esmartImg from '../assets/Esmart.png';
import developerImg from '../assets/developer-program.png';

export const projects = [
  {
    id: "thebusstand-website",
    title: "TheBusStand.com Web Platform",
    tagline: "High-Traffic Bus Ticketing & Reservation Engine",
    description: "Architected and delivered key responsive booking modules for TheBusStand.com. Engineered high-converting seat selection layouts, lightning-fast search filters, and smooth payment flow integrations.",
    usefulForUsers: "Drives maximum seat conversions with a sub-second search experience, intuitive visual seat mapping, instant mobile responsiveness, and zero checkout friction.",
    imageUrl: updatedTbsImg,
    metrics: "25% Increase in Mobile Booking Conversions",
    technologies: [
      { name: "React.js", icon: "React" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Redux Toolkit", icon: "Database" },
      { name: "REST APIs", icon: "Code" }
    ],
    liveLink: "https://thebusstand.com/",
    featured: true,
    category: "web",
    status: "Production"
  },
  {
    id: "react-native-ticket-booking",
    title: "TheBusStand Mobile Application",
    tagline: "Cross-Platform iOS & Android Ticketing App",
    description: "Spearheaded front-end mobile engineering for the official TBS ticketing app using React Native. Implemented dynamic seat reservation state, push notifications, offline caching, and Google Play deployment.",
    usefulForUsers: "Frictionless on-the-go booking with biometric login, real-time bus tracking UI, instant ticket generation, and offline boarding pass access.",
    imageUrl: tbsNativeImg,
    metrics: "4.5★ Play Store Rating • 25% Faster App Load Time",
    technologies: [
      { name: "React Native", icon: "React" },
      { name: "JavaScript (ES6+)", icon: "Javascript" },
      { name: "Firebase Auth", icon: "Database" },
      { name: "Redux", icon: "Code" }
    ],
    appStoreLink: "https://play.google.com/store/apps/details?id=com.thebusstandapp&pcampaignid=web_share",
    liveLink: "https://play.google.com/store/apps/details?id=com.thebusstandapp&pcampaignid=web_share",
    featured: true,
    category: "mobile",
    status: "Production"
  },
  {
    id: "crm-thebusstand",
    title: "Enterprise Bus Operations CRM",
    tagline: "Centralized Fleet, Route & Ticket Administration",
    description: "Engineered an end-to-end CRM dashboard powering daily fleet schedules, conductor ticketing assignments, real-time revenue analytics, and dispute handling workflows.",
    usefulForUsers: "Empowers fleet operators with real-time occupancy metrics, automated reconciliation, fast passenger search, and role-based permissions.",
    imageUrl: crmImg,
    metrics: "Reduced Operational Booking Delays by 40%",
    technologies: [
      { name: "React.js", icon: "React" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Chart.js / Analytics", icon: "Code" },
      { name: "REST API Integration", icon: "Database" }
    ],
    liveLink: "#",
    featured: true,
    category: "enterprise",
    status: "Production"
  },
  {
    id: "zolvehr-website",
    title: "ZolveHR - Enterprise HRMS Platform",
    tagline: "End-to-End Human Resource & Workforce Management System",
    description: "Architected and delivered comprehensive enterprise HRMS web modules for ZolveHR. Built end-to-end employee self-service portals, administrative dashboards, automated leave approval pipelines, attendance & shift scheduling, and salary disbursement management.",
    usefulForUsers: "Streamlines organizational HR operations with 1-click leave approvals, transparent attendance tracking, shift scheduling, and role-based access for admins and employees.",
    imageUrl: developerImg,
    metrics: "Automated Core HR & Leave Workflows",
    technologies: [
      { name: "React.js", icon: "React" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Redux Toolkit", icon: "Database" },
      { name: "REST APIs", icon: "Code" }
    ],
    liveLink: "#",
    featured: true,
    category: "enterprise",
    status: "Completed"
  },
  {
    id: "esmart-accounting",
    title: "E-Smart Accounting & Ledger Suite",
    tagline: "Tally-Integrated Cloud Financial Management",
    description: "Built a high-precision accounting web platform integrated with Tally workflows. Designed interactive ledger reports, automated tax calculation modals, multi-currency invoicing, and real-time P&L dashboards.",
    usefulForUsers: "Cuts manual bookkeeping overhead by 60% with instant automated ledger sync, compliant GST/Tax generation, and single-click invoice dispatch.",
    imageUrl: esmartImg,
    metrics: "Trusted by 50+ Enterprise Clients",
    technologies: [
      { name: "React.js", icon: "React" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "State Management", icon: "Database" },
      { name: "Node.js Integration", icon: "Code" }
    ],
    liveLink: "#",
    featured: true,
    category: "web",
    status: "Completed"
  },
  {
    id: "micro-finance-app",
    title: "Micro Finance & Loan Disbursal App",
    tagline: "Fintech Loan Origination & Repayment System",
    description: "Constructed loan origination and EMI collection workflows with complex multi-stage KYC validation forms, credit assessment tables, and automated schedule calculations.",
    usefulForUsers: "Accelerates loan approvals with digital verification pipelines, clear tabular ledger breakdowns, and foolproof role-based validation checks.",
    imageUrl: developerImg,
    metrics: "Zero Discrepancy Multi-Stage Form Flow",
    technologies: [
      { name: "React.js", icon: "React" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Formik / Validations", icon: "Code" },
      { name: "REST APIs", icon: "Database" }
    ],
    liveLink: "#",
    featured: true,
    category: "enterprise",
    status: "Completed"
  },
  {
    id: "slender-loris",
    title: "Slender Loris Zoo Ticket Platform",
    tagline: "Session-Based Eco-Tourism & Visitor Ticketing",
    description: "Developed a dynamic public ticketing portal for Slender Loris Zoo sanctuary, featuring timed session bookings, dynamic slot availability counters, and instant ticket PDF generation.",
    usefulForUsers: "Smooth ticket booking for visitors with automated slot locking, interactive park guide UI, and instant barcode confirmation.",
    imageUrl: busstandImg,
    metrics: "Handled 10,000+ Seasonal Bookings",
    technologies: [
      { name: "React.js", icon: "React" },
      { name: "JavaScript", icon: "Javascript" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Payment Gateways", icon: "Code" }
    ],
    liveLink: "#",
    featured: false,
    category: "web",
    status: "Completed"
  },
  {
    id: "e-payroll",
    title: "E-Payroll & HRMS Portal",
    tagline: "Automated Salary, Attendance & Tax Processing",
    description: "Designed scalable front-end components for enterprise payroll management, salary slip generation, tax deductions, and employee attendance logs.",
    usefulForUsers: "Streamlines payroll cycles for HR teams with 1-click payslip dispatches, leave balance tracking, and accurate compensation matrices.",
    imageUrl: esmartImg,
    metrics: "Processed 500+ Monthly Employee Slips",
    technologies: [
      { name: "React.js", icon: "React" },
      { name: "Tailwind CSS", icon: "Tailwind" },
      { name: "Payroll Workflows", icon: "Code" }
    ],
    liveLink: "#",
    featured: false,
    category: "enterprise",
    status: "Completed"
  }
];
