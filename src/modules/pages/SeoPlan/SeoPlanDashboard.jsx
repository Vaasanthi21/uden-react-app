import React, { useState, useEffect, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  TextField,
  MenuItem,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  IconButton,
  Tooltip,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Search,
  Copy,
  ExternalLink,
  CheckCircle2,
  Clock,
  Send,
  Sparkles,
  Download,
  Filter,
  ShieldCheck,
  TrendingUp,
  FileText
} from 'lucide-react';

const INITIAL_SITES = [
  // Category 1
  { id: 1, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Google Business Profile', url: 'https://google.com/business', type: 'Local SEO / Citation', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Claim GBP; verify phone/address; add logo & description' },
  { id: 2, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Bing Places for Business', url: 'https://bingplaces.com', type: 'Search Citation', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Sync from Google Business Profile or claim free' },
  { id: 3, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Facebook Business Page', url: 'https://facebook.com/business', type: 'Social Citation', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Create verified business page; add website link' },
  { id: 4, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'LinkedIn Company Page', url: 'https://linkedin.com/company', type: 'Professional Citation', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Update official page with all audience URLs' },
  { id: 5, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Apple Business Connect', url: 'https://businessconnect.apple.com', type: 'Mobile Citation', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Verify business location on Apple Maps' },
  { id: 6, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Yelp for Business', url: 'https://biz.yelp.com', type: 'Authority Profile', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Create free listing; add services & hours' },
  { id: 7, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Foursquare for Business', url: 'https://foursquare.com/business', type: 'Location Citation', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Claim listing; provide address & NAP' },
  { id: 8, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Trustpilot', url: 'https://business.trustpilot.com', type: 'Verified Reviews', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Create free business profile; request 5 initial reviews' },
  { id: 9, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Crunchbase', url: 'https://crunchbase.com', type: 'Startup Profile', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Add funding, founders, DPIIT, and partner badges' },
  { id: 10, cat: 'Category 1', catName: 'Tier-1 Global Authority Listings', name: 'Better Business Bureau', url: 'https://bbb.org', type: 'Trust Profile', priority: 'Low', target: 'https://uden.tech', method: 'Self-serve', notes: 'Free basic listing for cross-border credibility' },

  // Category 2
  { id: 11, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Justdial', url: 'https://justdial.com', type: 'Local Directory', priority: 'High', target: 'https://uden.tech', method: 'Self-serve / OTP', notes: 'Phone OTP + GST verification required' },
  { id: 12, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Sulekha', url: 'https://sulekha.com', type: 'Education / Services', priority: 'High', target: 'https://uden.tech/colleges', method: 'Self-serve / OTP', notes: 'Categorize under Education & Placement' },
  { id: 13, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'IndiaMART', url: 'https://indiamart.com', type: 'B2B Directory', priority: 'High', target: 'https://uden.tech/recruiters', method: 'Self-serve / OTP', notes: 'List Campus Placement System & Talent services' },
  { id: 14, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'TradeIndia', url: 'https://tradeindia.com', type: 'B2B Portal', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Create vendor catalog; add link' },
  { id: 15, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Yellow Pages India', url: 'https://yellowpages.in', type: 'National Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Standard business submission' },
  { id: 16, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Indian Yellow Pages', url: 'https://indianyellowpages.com', type: 'National Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Education / Placement services' },
  { id: 17, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Hotfrog India', url: 'https://hotfrog.in', type: 'Business Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Add HSR Layout NAP and bio' },
  { id: 18, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Grotal', url: 'https://grotal.com', type: 'Local Search Engine', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Free business listing' },
  { id: 19, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Asklaila', url: 'https://asklaila.com', type: 'Local City Guide', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Select Bangalore as primary city' },
  { id: 20, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'ExportersIndia', url: 'https://exportersindia.com', type: 'Enterprise Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Submit EdTech solutions catalog' },
  { id: 21, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Indiabizlist', url: 'https://indiabizlist.com', type: 'Indian Business Index', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Free business profile' },
  { id: 22, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Brownbook', url: 'https://brownbook.net', type: 'Global / Regional Index', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Submit NAP and audience links' },
  { id: 23, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Yalwa India', url: 'https://yalwa.in', type: 'Classifieds & Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Category: Education & Training' },
  { id: 24, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'iGlobal', url: 'https://iglobal.co', type: 'Indian Business Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Free profile with NAP' },
  { id: 25, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Ezlocal', url: 'https://ezlocal.com', type: 'Local SEO Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Submit business profile' },
  { id: 26, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'CitySquares', url: 'https://citysquares.com', type: 'Neighborhood Search', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Submit Bangalore location details' },
  { id: 27, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'MSME Mart', url: 'https://msmeonline.in', type: 'Official MSME Portal', priority: 'High', target: 'https://uden.tech', method: 'Govt Verification', notes: 'UDEN is MSME-registered; link Udyam certificate' },
  { id: 28, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'GeM Vendor Profile', url: 'https://gem.gov.in', type: 'Government e-Marketplace', priority: 'High', target: 'https://uden.tech/government-partnership', method: 'Govt Vendor', notes: 'Essential for B2G skilling work' },
  { id: 29, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Bangalore Local Directory', url: 'https://bengaluru.clickindia.com', type: 'City Local Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Search HSR Layout Bengaluru business directories' },
  { id: 30, cat: 'Category 2', catName: 'Indian Business & Local Directories', name: 'Ranchi Business Directory', url: 'https://ranchi.clickindia.com', type: 'Regional Operations', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Relevant for Ranchi operations & B2G work' },

  // Category 3
  { id: 31, cat: 'Category 3', catName: 'Accelerator & Government Badges', name: 'Startup India / DPIIT', url: 'https://startupindia.gov.in', type: 'Official Startup Profile', priority: 'High', target: 'https://uden.tech', method: 'Warm Outreach', notes: 'Claim / verify public profile on Startup India' },
  { id: 32, cat: 'Category 3', catName: 'Accelerator & Government Badges', name: 'Microsoft for Startups', url: 'https://startups.microsoft.com', type: 'Founders Hub Portfolio', priority: 'High', target: 'https://uden.tech', method: 'Warm Outreach', notes: 'Email account manager to verify portfolio link' },
  { id: 33, cat: 'Category 3', catName: 'Accelerator & Government Badges', name: 'NVIDIA Inception', url: 'https://nvidia.com/inception', type: 'Member Directory', priority: 'High', target: 'https://uden.tech', method: 'Warm Outreach', notes: 'Request member directory listing from partner team' },
  { id: 34, cat: 'Category 3', catName: 'Accelerator & Government Badges', name: 'AWS EdStart', url: 'https://aws.amazon.com/edstart', type: 'EdStart Members Hub', priority: 'High', target: 'https://uden.tech', method: 'Warm Outreach', notes: 'Ask program manager to verify profile on member page' },
  { id: 35, cat: 'Category 3', catName: 'Accelerator & Government Badges', name: 'NSRCEL IIM Bangalore', url: 'https://nsrcel.org', type: 'Alumni / Portfolio Page', priority: 'High', target: 'https://uden.tech', method: 'Warm Outreach', notes: 'Email NSRCEL lead to verify public startup link' },

  // Category 4
  { id: 36, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'Product Hunt', url: 'https://producthunt.com', type: 'Product Launch', priority: 'High', target: 'https://uden.tech/students', method: 'Founder Account', notes: 'Schedule launch day for UDEN AI Interview Prep' },
  { id: 37, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'Wellfound (AngelList)', url: 'https://wellfound.com', type: 'Startup Ecosystem', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Update jobs and company details' },
  { id: 38, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'F6S', url: 'https://f6s.com', type: 'Accelerator Network', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Complete company profile & funding details' },
  { id: 39, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'BetaList', url: 'https://betalist.com', type: 'Early Stage Showcase', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Submit AI Career Readiness platform' },
  { id: 40, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'Indie Hackers', url: 'https://indiehackers.com', type: 'Product Profile', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Add product milestone (2,500+ placed students)' },
  { id: 41, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'AlternativeTo', url: 'https://alternativeto.net', type: 'Software Alternatives', priority: 'Medium', target: 'https://uden.tech/students', method: 'Self-serve', notes: 'Position as AI-first alternative to manual TPO tools' },
  { id: 42, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'StackShare', url: 'https://stackshare.io', type: 'Tech Stack Sharing', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'List React, Node, Python, AWS, and AI stack' },
  { id: 43, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'G2', url: 'https://g2.com', type: 'Software Reviews', priority: 'High', target: 'https://uden.tech/colleges', method: 'Vendor Account', notes: 'List Campus Placement System; collect college reviews' },
  { id: 44, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'Capterra', url: 'https://capterra.com', type: 'Enterprise Software', priority: 'High', target: 'https://uden.tech/colleges', method: 'Vendor Account', notes: 'Education & Placement Software category' },
  { id: 45, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'GetApp', url: 'https://getapp.com', type: 'Business Apps Directory', priority: 'High', target: 'https://uden.tech/colleges', method: 'Vendor Account', notes: 'Managed through Gartner Digital Markets' },
  { id: 46, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'SaaSHub', url: 'https://saashub.com', type: 'Software Alternatives', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Submit profile and tags' },
  { id: 47, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: "There's An AI For That", url: 'https://theresanaiforthat.com', type: 'AI Tool Aggregator', priority: 'High', target: 'https://uden.tech/students', method: 'Self-serve', notes: 'Submit under AI Mock Interview & Career Prep' },
  { id: 48, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'Futurepedia', url: 'https://futurepedia.io', type: 'AI Directory', priority: 'High', target: 'https://uden.tech/students', method: 'Self-serve', notes: 'Submit UDEN AI Career Practice' },
  { id: 49, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'StartuPage', url: 'https://startupage.com', type: 'Startup Showcase', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Free startup listing' },
  { id: 50, cat: 'Category 4', catName: 'Startup & Product Discovery Directories', name: 'Crunchbase (Enhanced)', url: 'https://crunchbase.com', type: 'Company Profile', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Add recent employee growth & institutional partnerships' },

  // Category 5
  { id: 51, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'YourStory', url: 'https://yourstory.com', type: 'Founder Pitch / Press', priority: 'High', target: 'https://uden.tech', method: 'PR Pitch', notes: 'Pitch founder story: Tier 2/3 engineering employability' },
  { id: 52, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'Inc42', url: 'https://inc42.com', type: 'Startup Story Pitch', priority: 'High', target: 'https://uden.tech', method: 'PR Pitch', notes: 'Pitch AI placement automation traction' },
  { id: 53, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'Entrackr', url: 'https://entrackr.com', type: 'Tech Media Pitch', priority: 'Medium', target: 'https://uden.tech', method: 'PR Pitch', notes: 'Pitch 2500+ placed milestone' },
  { id: 54, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'VCCircle', url: 'https://vccircle.com', type: 'Investment & Tech News', priority: 'Medium', target: 'https://uden.tech', method: 'PR Pitch', notes: 'News tip on corporate hiring partner network' },
  { id: 55, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'StartupTalky', url: 'https://startuptalky.com', type: 'Startup Profile & Interview', priority: 'High', target: 'https://uden.tech', method: 'PR Pitch', notes: 'Submit case study on scaling Tier 2/3 placement' },
  { id: 56, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'TheKredible', url: 'https://thekredible.com', type: 'Financial & Startup Intel', priority: 'Medium', target: 'https://uden.tech', method: 'PR Pitch', notes: 'Share company profile & metrics' },
  { id: 57, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'Tracxn', url: 'https://tracxn.com', type: 'Company Intelligence', priority: 'High', target: 'https://uden.tech', method: 'Self-serve', notes: 'Claim company profile; update verified traction' },
  { id: 58, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'NASSCOM Member Directory', url: 'https://nasscom.in', type: 'Industry Consortium', priority: 'High', target: 'https://uden.tech', method: 'Member Directory', notes: 'Submit via NASSCOM membership or 10,000 Startups' },
  { id: 59, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'TiE Bangalore', url: 'https://tie.org', type: 'Entrepreneurship Network', priority: 'Medium', target: 'https://uden.tech', method: 'Member Directory', notes: 'Update member directory listing' },
  { id: 60, cat: 'Category 5', catName: 'India Startup / Founder Ecosystem', name: 'NextBigWhat', url: 'https://nextbigwhat.com', type: 'Product & Tech Community', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Share launch story & AI engineering insights' },

  // Category 6
  { id: 61, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'SoftwareSuggest', url: 'https://softwaresuggest.com', type: 'Indian Software Directory', priority: 'High', target: 'https://uden.tech/colleges', method: 'Vendor Account', notes: 'Top software directory for Indian colleges' },
  { id: 62, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'GoodFirms', url: 'https://goodfirms.co', type: 'B2B IT & Software Reviews', priority: 'High', target: 'https://uden.tech/recruiters', method: 'Vendor Account', notes: 'List under Recruitment Software & IT Services' },
  { id: 63, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'Clutch', url: 'https://clutch.co', type: 'B2B Service Profiles', priority: 'High', target: 'https://uden.tech/recruiters', method: 'Vendor Account', notes: 'High DA backlink; request 3 client reviews' },
  { id: 64, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'SourceForge', url: 'https://sourceforge.net', type: 'Open/Tech Software Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Vendor Account', notes: 'List Campus Placement System' },
  { id: 65, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'TrustRadius', url: 'https://trustradius.com', type: 'Verified B2B Reviews', priority: 'Medium', target: 'https://uden.tech/colleges', method: 'Vendor Account', notes: 'Enterprise review platform' },
  { id: 66, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'Slashdot', url: 'https://slashdot.org', type: 'Tech Review Directory', priority: 'Medium', target: 'https://uden.tech', method: 'Self-serve', notes: 'Software listing under Slashdot directory' },
  { id: 67, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'FinancesOnline', url: 'https://financesonline.com', type: 'SaaS Comparison Engine', priority: 'Medium', target: 'https://uden.tech/colleges', method: 'Vendor Account', notes: 'Submit EdTech SaaS profile' },
  { id: 68, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'Crozdesk', url: 'https://crozdesk.com', type: 'Software Discovery', priority: 'Medium', target: 'https://uden.tech/colleges', method: 'Vendor Account', notes: 'Submit Campus software details' },
  { id: 69, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'AppSumo', url: 'https://appsumo.com', type: 'Product Listing', priority: 'Low', target: 'https://uden.tech/students', method: 'Vendor Account', notes: 'Optional special student promotion listing' },
  { id: 70, cat: 'Category 6', catName: 'Review & SaaS/EdTech-Adjacent', name: 'Educational App Store', url: 'https://educationalappstore.com', type: 'EdTech Directory', priority: 'Medium', target: 'https://uden.tech/students', method: 'Self-serve', notes: 'Submit Android & Web apps' },

  // Category 7
  { id: 71, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'Shiksha', url: 'https://shiksha.com', type: 'College & Career Portal', priority: 'High', target: 'https://uden.tech/colleges', method: 'Partner / Pitch', notes: 'Pitch placement data & college partnership' },
  { id: 72, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'Collegedunia', url: 'https://collegedunia.com', type: 'Higher Ed Portal', priority: 'High', target: 'https://uden.tech/colleges', method: 'Partner / Pitch', notes: 'Submit placement index benchmark article' },
  { id: 73, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'Careers360', url: 'https://careers360.com', type: 'Education Discovery', priority: 'High', target: 'https://uden.tech/students', method: 'Partner / Pitch', notes: 'Guest article on Tier 2 engineering placements' },
  { id: 74, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'GetMyUni', url: 'https://getmyuni.com', type: 'Student Portal', priority: 'Medium', target: 'https://uden.tech/students', method: 'Partner / Pitch', notes: 'Pitch student placement roadmap' },
  { id: 75, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'CollegeSearch', url: 'https://collegesearch.in', type: 'Campus Portal', priority: 'Medium', target: 'https://uden.tech/colleges', method: 'Partner / Pitch', notes: 'Submit college placement tool listing' },
  { id: 76, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'iSchoolConnect Blog', url: 'https://ischoolconnect.com', type: 'Guest Post Pitch', priority: 'Medium', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Editorial Pitch', notes: 'Pitch article: Role of AI in engineering hiring' },
  { id: 77, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'EdTechReview', url: 'https://edtechreview.in', type: 'EdTech Industry Media', priority: 'High', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Editorial Pitch', notes: 'Pitch Placement Report data release' },
  { id: 78, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'Digital Learning Magazine', url: 'https://digitallearning.eletsonline.com', type: 'Higher Ed Publication', priority: 'High', target: 'https://uden.tech/colleges', method: 'Editorial Pitch', notes: 'Institutional magazine read by Principals & TPOs' },
  { id: 79, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'Higher Education Digest', url: 'https://highereducationdigest.com', type: 'University Leadership', priority: 'High', target: 'https://uden.tech/colleges', method: 'Editorial Pitch', notes: 'Pitch article on NAAC/NBA placement analytics' },
  { id: 80, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'The Higher Education Review', url: 'https://thehighereducationreview.com', type: 'Institutional Magazine', priority: 'High', target: 'https://uden.tech/colleges', method: 'Editorial Pitch', notes: 'TPO software spotlight pitch' },
  { id: 81, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'EdSurge', url: 'https://edsurge.com', type: 'Global EdTech Press', priority: 'Medium', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Editorial Pitch', notes: 'Global perspective on Indian Tier 2/3 engineers' },
  { id: 82, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'Education World India', url: 'https://educationworld.in', type: 'Pan-India Education News', priority: 'High', target: 'https://uden.tech', method: 'Editorial Pitch', notes: 'Pitch 2026 Placement Report' },
  { id: 83, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'India Education Diary', url: 'https://indiaeducationdiary.in', type: 'Education PR & News', priority: 'High', target: 'https://uden.tech', method: 'Press Release', notes: 'Send placement index release' },
  { id: 84, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'ETEducation (Economic Times)', url: 'https://brandequity.economictimes.indiatimes.com/education', type: 'Premium Press Pitch', priority: 'High', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Press Pitch', notes: 'Economic Times education desk pitch' },
  { id: 85, cat: 'Category 7', catName: 'EdTech / Education & Career-Niche', name: 'HR Katha', url: 'https://hrkatha.com', type: 'HR & Recruitment Publication', priority: 'High', target: 'https://uden.tech/recruiters', method: 'Editorial Pitch', notes: 'HR angles: Campus hiring challenges in 2026' },

  // Category 8
  { id: 86, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Quora', url: 'https://quora.com', type: 'Q&A Thought Leadership', priority: 'Medium', target: 'https://uden.tech/students', method: 'Answer Contribution', notes: 'Answer questions on Tier 2 college placements' },
  { id: 87, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Reddit (r/developersIndia)', url: 'https://reddit.com/r/developersIndia', type: 'Developer Community', priority: 'High', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Community Post', notes: 'Share helpful placement trends data' },
  { id: 88, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Medium', url: 'https://medium.com', type: 'Syndication / Blog', priority: 'Medium', target: 'https://uden.tech/blogs', method: 'Article Syndicate', notes: 'Publish placement articles linking back to canonical' },
  { id: 89, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Dev.to', url: 'https://dev.to', type: 'Technical Community', priority: 'Medium', target: 'https://uden.tech', method: 'Technical Article', notes: 'Write post on building AI mock interview engines' },
  { id: 90, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Hashnode', url: 'https://hashnode.com', type: 'Developer Blogging', priority: 'Medium', target: 'https://uden.tech', method: 'Technical Article', notes: 'Post technical skilling roadmap' },
  { id: 91, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Pinterest', url: 'https://pinterest.com', type: 'Visual Infographics', priority: 'Low', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Infographic Pin', notes: 'Pin placement statistics infographics' },
  { id: 92, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'SlideShare', url: 'https://slideshare.net', type: 'Slide Deck Sharing', priority: 'Medium', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Deck Upload', notes: 'Upload 2026 Placement Report presentation deck' },
  { id: 93, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Scribd', url: 'https://scribd.com', type: 'Document Publishing', priority: 'Medium', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'PDF Upload', notes: 'Upload whitepaper PDF' },
  { id: 94, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Behance', url: 'https://behance.net', type: 'Design Case Study', priority: 'Low', target: 'https://uden.tech', method: 'Case Study', notes: 'UI/UX showcase of AI interview dashboard' },
  { id: 95, cat: 'Category 8', catName: 'Q&A Forums & Social Bookmarking', name: 'Google Business Updates', url: 'https://google.com/business', type: 'Local Updates', priority: 'High', target: 'https://uden.tech/students', method: 'Weekly Post', notes: 'Weekly Google Posts highlighting student success' },

  // Category 9
  { id: 96, cat: 'Category 9', catName: 'Press Release & News Submission', name: 'PRLog', url: 'https://prlog.org', type: 'Free Press Wire', priority: 'Medium', target: 'https://uden.tech/reports/tier-2-3-placement-report-2026', method: 'Press Distribution', notes: 'Free distribution of 2026 Placement Report' },
  { id: 97, cat: 'Category 9', catName: 'Press Release & News Submission', name: 'openPR', url: 'https://openpr.com', type: 'Free Press Distribution', priority: 'Medium', target: 'https://uden.tech', method: 'Press Distribution', notes: 'Submit company milestone press release' },
  { id: 98, cat: 'Category 9', catName: 'Press Release & News Submission', name: 'IndiaPRwire', url: 'https://indiaprwire.com', type: 'Indian Regional Wire', priority: 'Medium', target: 'https://uden.tech', method: 'Press Distribution', notes: 'Distribute to Indian news desks' },
  { id: 99, cat: 'Category 9', catName: 'Press Release & News Submission', name: 'PRUnderground', url: 'https://prunderground.com', type: 'Syndicated News Release', priority: 'Medium', target: 'https://uden.tech', method: 'Press Distribution', notes: 'Syndicate across Google News & regional portals' },
  { id: 100, cat: 'Category 9', catName: 'Press Release & News Submission', name: 'Business Wire India / PR Newswire', url: 'https://businesswireindia.com', type: 'Paid Enterprise Wire', priority: 'High', target: 'https://uden.tech', method: 'Paid Milestone', notes: 'Reserve for major institutional funding or placement milestone' }
];

const STORAGE_KEY = 'uden_backlinks_tracker_state';

const NAP_TEXT = `Company Name: UDEN (Digverve Solutions Pvt. Ltd.)
Address: HSR Layout, Sector 7, Bengaluru, Karnataka 560102, India
Phone: +91-99000-00000
Website: https://uden.tech
Category: EdTech / Higher Education Technology / Career Services`;

const SHORT_BIO = `UDEN (Unified Development and Employment Network) is an AI-driven career readiness and placement automation platform bridging Tier 2 and Tier 3 college students with 150+ corporate hiring partners. Backed by Microsoft for Startups, NVIDIA Inception, AWS EdStart, and DPIIT, UDEN provides 24x7 AI mock interviews, resume optimization, and campus hiring drives with 2,500+ placements.`;

const FULL_BIO = `UDEN (Unified Development and Employment Network), operated by Digverve Solutions Pvt. Ltd., is an AI-first employability and campus placement ecosystem engineered for students and colleges in Tier 2 and Tier 3 cities across India. By combining 24x7 generative AI mock interviews, automated resume optimization, comprehensive 8-axis technical skill assessments, and the automated Campus Placement System (CPS) for Training and Placement Officers (TPOs), UDEN eliminates placement operational bottlenecks and delivers pre-assessed talent to recruiters within 48 hours. Backed by Microsoft for Startups, NVIDIA Inception, AWS EdStart, DPIIT, and NSRCEL IIM Bangalore, UDEN has placed over 2,500 candidates across 150+ corporate employers.`;

const PITCH_TEMPLATE = `Subject: Tier 2/3 College Placement Data & AI Readiness Benchmark (UDEN.tech)

Hi Editorial Team,

I am reaching out from UDEN (Unified Development and Employment Network), an AI placement platform backed by Microsoft for Startups and DPIIT. We recently compiled empirical data across 2,500+ placed engineering students and 150+ corporate recruiters in India.

Key findings from our 2026 Employability Index:
- Students practicing with 24x7 AI mock interviews demonstrated a 91.4% placement clearance rate vs 48.2% unassisted.
- Average campus package for Tier 2/3 engineering freshers reached ₹6.8 LPA, with high demand for Full-Stack and Generative AI Ops.

We would love to share exclusive regional data cuts or contribute an expert guest analysis on how colleges are modernizing TPO drives.

Full report: https://uden.tech/reports/tier-2-3-placement-report-2026

Best regards,
UDEN Partnerships & Research Team
contact@uden.tech | https://uden.tech`;

export const SeoPlanDashboard = () => {
  const [sites, setSites] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {}
    return INITIAL_SITES.map(s => ({ ...s, status: 'To Submit', liveUrl: '' }));
  });

  const [activeTab, setActiveTab] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCat, setSelectedCat] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
    } catch (e) {}
  }, [sites]);

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setSnackbarMessage(`${label} copied to clipboard!`);
  };

  const handleStatusChange = (id, newStatus) => {
    setSites(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  const stats = useMemo(() => {
    const total = sites.length;
    const completed = sites.filter(s => s.status === 'Live' || s.status === 'Submitted').length;
    const live = sites.filter(s => s.status === 'Live').length;
    const inProgress = sites.filter(s => s.status === 'In Progress').length;
    const toSubmit = sites.filter(s => s.status === 'To Submit').length;
    const percent = Math.round((completed / total) * 100);
    return { total, completed, live, inProgress, toSubmit, percent };
  }, [sites]);

  const categories = useMemo(() => {
    const cats = Array.from(new Set(INITIAL_SITES.map(s => s.catName)));
    return ['All', ...cats];
  }, []);

  const filteredSites = useMemo(() => {
    return sites.filter(site => {
      const matchesSearch = site.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            site.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            site.notes.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCat = selectedCat === 'All' || site.catName === selectedCat;
      const matchesPriority = selectedPriority === 'All' || site.priority === selectedPriority;
      const matchesStatus = selectedStatus === 'All' || site.status === selectedStatus;
      return matchesSearch && matchesCat && matchesPriority && matchesStatus;
    });
  }, [sites, searchTerm, selectedCat, selectedPriority, selectedStatus]);

  const downloadUpdatedCsv = () => {
    const headers = ['ID', 'Category', 'CategoryName', 'SiteName', 'DirectoryURL', 'Type', 'Priority', 'TargetMoneyPage', 'SubmissionMethod', 'Status', 'Notes'];
    const rows = sites.map(s => [
      s.id,
      `"${s.cat}"`,
      `"${s.catName}"`,
      `"${s.name}"`,
      `"${s.url}"`,
      `"${s.type}"`,
      `"${s.priority}"`,
      `"${s.target}"`,
      `"${s.method}"`,
      `"${s.status}"`,
      `"${s.notes}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `uden_backlinks_100_tracker_updated_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box sx={{ bgcolor: '#F8FAFC', py: 5, minHeight: '100vh' }}>
      <Container maxWidth="xl">
        {/* Header Title */}
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mb: 1 }}>
            <Chip label="90-Day SEO Engine" size="small" sx={{ bgcolor: '#F55825', color: '#fff', fontWeight: 700 }} />
            <Chip label="Canonical Integrity Verified" size="small" sx={{ bgcolor: '#ECFDF5', color: '#065F46', fontWeight: 700 }} />
          </Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 900, color: '#0F172A', mb: 1 }}>
            UDEN.tech — SEO Boost Plan & 100 Backlink Directory Tracker
          </Typography>
          <Typography variant="body1" sx={{ color: '#64748B' }}>
            Interactive submission command center: Monitor weekly execution pacing, maintain canonical NAP consistency, and track live citation links.
          </Typography>
        </Box>

        {/* Top Progress & Metrics Overview */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} md={8}>
            <Card sx={{ borderRadius: '16px', border: '1px solid #E2E8F0', p: 3, bgcolor: '#FFFFFF', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ color: '#64748B', fontWeight: 600 }}>
                    Submission Progress
                  </Typography>
                  <Typography variant="h4" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    {stats.completed} / {stats.total} Sites ({stats.percent}%)
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  size="small"
                  startIcon={<Download size={16} />}
                  onClick={downloadUpdatedCsv}
                  sx={{ textTransform: 'none', borderColor: '#CBD5E1', color: '#1E293B', fontWeight: 700 }}
                >
                  Export Updated CSV
                </Button>
              </Box>
              <LinearProgress
                variant="determinate"
                value={stats.percent}
                sx={{ height: 10, borderRadius: 5, bgcolor: '#E2E8F0', '& .MuiLinearProgress-bar': { bgcolor: '#F55825' } }}
              />
              <Box sx={{ display: 'flex', gap: 3, mt: 3, flexWrap: 'wrap' }}>
                <Typography variant="body2" sx={{ color: '#64748B' }}>
                  <strong style={{ color: '#059669' }}>{stats.live}</strong> Live Listings
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B' }}>
                  <strong style={{ color: '#2563EB' }}>{stats.completed - stats.live}</strong> Submitted
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B' }}>
                  <strong style={{ color: '#D97706' }}>{stats.inProgress}</strong> In Progress
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748B' }}>
                  <strong style={{ color: '#64748B' }}>{stats.toSubmit}</strong> To Submit
                </Typography>
              </Box>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: '16px', border: '1px solid #E2E8F0', p: 3, bgcolor: '#FFFFFF', height: '100%' }}>
              <Typography variant="subtitle2" sx={{ color: '#64748B', fontWeight: 600, mb: 1 }}>
                Canonical Self-Referencing Fix
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#059669', mb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
                <ShieldCheck size={22} color="#059669" /> Top Blocker Resolved
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748B', lineHeight: 1.6 }}>
                Each audience page (`/students`, `/jobseekers`, `/colleges`, `/recruiters`) now features its own isolated, self-referencing canonical tag via <code>SEOHead.jsx</code>. Backlinks pointing to money pages retain 100% link equity.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        {/* Tab Navigation */}
        <Box sx={{ borderBottom: 1, borderColor: '#E2E8F0', mb: 3 }}>
          <Tabs value={activeTab} onChange={(e, val) => setActiveTab(val)}>
            <Tab label="100 Directory Submissions" sx={{ textTransform: 'none', fontWeight: 700 }} />
            <Tab label="Boilerplate & Outreach Pitch Copy" sx={{ textTransform: 'none', fontWeight: 700 }} />
            <Tab label="90-Day Execution Calendar" sx={{ textTransform: 'none', fontWeight: 700 }} />
          </Tabs>
        </Box>

        {/* TAB 0: 100 Directory Submissions Table */}
        {activeTab === 0 && (
          <Box>
            {/* Filters Row */}
            <Card sx={{ p: 2, mb: 3, borderRadius: '14px', border: '1px solid #E2E8F0' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Search site, domain, or notes..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    InputProps={{
                      startAdornment: <Search size={18} color="#94A3B8" style={{ marginRight: 8 }} />
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    select
                    fullWidth
                    size="small"
                    label="Category"
                    value={selectedCat}
                    onChange={e => setSelectedCat(e.target.value)}
                  >
                    {categories.map(cat => (
                      <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={6} sm={2.5}>
                  <TextField
                    select
                    fullWidth
                    size="small"
                    label="Priority"
                    value={selectedPriority}
                    onChange={e => setSelectedPriority(e.target.value)}
                  >
                    <MenuItem value="All">All Priorities</MenuItem>
                    <MenuItem value="High">High</MenuItem>
                    <MenuItem value="Medium">Medium</MenuItem>
                    <MenuItem value="Low">Low</MenuItem>
                  </TextField>
                </Grid>
                <Grid item xs={6} sm={2.5}>
                  <TextField
                    select
                    fullWidth
                    size="small"
                    label="Status"
                    value={selectedStatus}
                    onChange={e => setSelectedStatus(e.target.value)}
                  >
                    <MenuItem value="All">All Statuses</MenuItem>
                    <MenuItem value="To Submit">To Submit</MenuItem>
                    <MenuItem value="In Progress">In Progress</MenuItem>
                    <MenuItem value="Submitted">Submitted</MenuItem>
                    <MenuItem value="Live">Live</MenuItem>
                  </TextField>
                </Grid>
              </Grid>
            </Card>

            {/* Sites Table */}
            <TableContainer component={Paper} sx={{ borderRadius: '14px', border: '1px solid #E2E8F0', boxShadow: 'none' }}>
              <Table size="small">
                <TableHead sx={{ bgcolor: '#F1F5F9' }}>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 700, color: '#334155' }}>#</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Site & Domain</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Category</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Priority</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Target Money URL</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Submission Method</TableCell>
                    <TableCell sx={{ fontWeight: 700, color: '#334155' }}>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredSites.map(site => (
                    <TableRow key={site.id} hover>
                      <TableCell sx={{ color: '#64748B', fontWeight: 600 }}>{site.id}</TableCell>
                      <TableCell>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#0F172A' }}>
                          {site.name}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                          <Typography variant="caption" sx={{ color: '#64748B' }}>
                            {site.url.replace(/^https?:\/\//, '')}
                          </Typography>
                          <IconButton size="small" href={site.url} target="_blank" rel="noopener noreferrer" sx={{ p: 0.2 }}>
                            <ExternalLink size={12} color="#94A3B8" />
                          </IconButton>
                        </Box>
                        {site.notes && (
                          <Typography variant="caption" sx={{ display: 'block', color: '#94A3B8', mt: 0.3, fontStyle: 'italic' }}>
                            {site.notes}
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell>
                        <Chip label={site.catName.split(' ')[0]} size="small" variant="outlined" sx={{ fontSize: '0.75rem' }} />
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={site.priority}
                          size="small"
                          sx={{
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            bgcolor: site.priority === 'High' ? '#FEF2F2' : site.priority === 'Medium' ? '#EFF6FF' : '#F8FAFC',
                            color: site.priority === 'High' ? '#B91C1C' : site.priority === 'Medium' ? '#1D4ED8' : '#64748B'
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" sx={{ color: '#F55825', fontWeight: 600 }}>
                          {site.target.replace('https://uden.tech', '') || '/'}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="caption" sx={{ color: '#475569' }}>
                          {site.method}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <TextField
                          select
                          size="small"
                          value={site.status}
                          onChange={e => handleStatusChange(site.id, e.target.value)}
                          sx={{
                            minWidth: 120,
                            '& .MuiSelect-select': {
                              py: 0.5,
                              fontSize: '0.8rem',
                              fontWeight: 700,
                              color: site.status === 'Live' ? '#059669' : site.status === 'Submitted' ? '#2563EB' : site.status === 'In Progress' ? '#D97706' : '#64748B'
                            }
                          }}
                        >
                          <MenuItem value="To Submit">To Submit</MenuItem>
                          <MenuItem value="In Progress">In Progress</MenuItem>
                          <MenuItem value="Submitted">Submitted</MenuItem>
                          <MenuItem value="Live">Live</MenuItem>
                        </TextField>
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredSites.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={7} sx={{ textAlign: 'center', py: 4, color: '#94A3B8' }}>
                        No submission directories match your search or filter.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        )}

        {/* TAB 1: Boilerplate & Copy Assets */}
        {activeTab === 1 && (
          <Grid container spacing={3}>
            {/* Consistent NAP */}
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, borderRadius: '16px', border: '1px solid #E2E8F0', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    1. Official NAP (Consistent Across All Listings)
                  </Typography>
                  <Button
                    size="small"
                    startIcon={<Copy size={14} />}
                    onClick={() => copyToClipboard(NAP_TEXT, 'NAP')}
                    sx={{ textTransform: 'none', color: '#F55825', fontWeight: 700 }}
                  >
                    Copy NAP
                  </Button>
                </Box>
                <Box component="pre" sx={{ p: 2, bgcolor: '#F1F5F9', borderRadius: '10px', fontSize: '0.85rem', whiteSpace: 'pre-wrap', color: '#334155' }}>
                  {NAP_TEXT}
                </Box>
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 1 }}>
                  Note: Discrepancies in address or phone number across directories erode local search engine trust. Always use this exact format.
                </Typography>
              </Card>
            </Grid>

            {/* Short Bio */}
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, borderRadius: '16px', border: '1px solid #E2E8F0', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    2. Standard 2-3 Line Boilerplate (Directory Bio)
                  </Typography>
                  <Button
                    size="small"
                    startIcon={<Copy size={14} />}
                    onClick={() => copyToClipboard(SHORT_BIO, 'Short Bio')}
                    sx={{ textTransform: 'none', color: '#F55825', fontWeight: 700 }}
                  >
                    Copy Bio
                  </Button>
                </Box>
                <Box component="pre" sx={{ p: 2, bgcolor: '#F1F5F9', borderRadius: '10px', fontSize: '0.85rem', whiteSpace: 'pre-wrap', color: '#334155' }}>
                  {SHORT_BIO}
                </Box>
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 1 }}>
                  Ideal for Justdial, Sulekha, IndiaMART, Crunchbase, Product Hunt, and G2 short descriptions.
                </Typography>
              </Card>
            </Grid>

            {/* Long Entity Boilerplate */}
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, borderRadius: '16px', border: '1px solid #E2E8F0', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    3. Canonical Entity Boilerplate (GEO / LLM Answer Engines)
                  </Typography>
                  <Button
                    size="small"
                    startIcon={<Copy size={14} />}
                    onClick={() => copyToClipboard(FULL_BIO, 'Full Entity Bio')}
                    sx={{ textTransform: 'none', color: '#F55825', fontWeight: 700 }}
                  >
                    Copy Entity Bio
                  </Button>
                </Box>
                <Box component="pre" sx={{ p: 2, bgcolor: '#F1F5F9', borderRadius: '10px', fontSize: '0.85rem', whiteSpace: 'pre-wrap', color: '#334155' }}>
                  {FULL_BIO}
                </Box>
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 1 }}>
                  Contains authoritative factual anchors: DPIIT, Microsoft for Startups, NVIDIA Inception, AWS EdStart, NSRCEL IIM Bangalore, and 2,500+ placed students.
                </Typography>
              </Card>
            </Grid>

            {/* Outreach Pitch */}
            <Grid item xs={12} md={6}>
              <Card sx={{ p: 3, borderRadius: '16px', border: '1px solid #E2E8F0', height: '100%' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A' }}>
                    4. EdTech Media & Editorial Pitch Template
                  </Typography>
                  <Button
                    size="small"
                    startIcon={<Copy size={14} />}
                    onClick={() => copyToClipboard(PITCH_TEMPLATE, 'Pitch Email')}
                    sx={{ textTransform: 'none', color: '#F55825', fontWeight: 700 }}
                  >
                    Copy Pitch
                  </Button>
                </Box>
                <Box component="pre" sx={{ p: 2, bgcolor: '#F1F5F9', borderRadius: '10px', fontSize: '0.85rem', whiteSpace: 'pre-wrap', color: '#334155' }}>
                  {PITCH_TEMPLATE}
                </Box>
                <Typography variant="caption" sx={{ color: '#64748B', display: 'block', mt: 1 }}>
                  Use this warm pitch when contacting Shiksha, Collegedunia, EdTechReview, Digital Learning, and YourStory editors.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}

        {/* TAB 2: Execution Calendar */}
        {activeTab === 2 && (
          <Card sx={{ p: 4, borderRadius: '16px', border: '1px solid #E2E8F0', bgcolor: '#FFFFFF' }}>
            <Typography variant="h6" sx={{ fontWeight: 800, color: '#0F172A', mb: 2 }}>
              90-Day Execution Calendar (Pacing: 5–10 Submissions / Week)
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ p: 3, bgcolor: '#FFFDF7', borderRadius: '12px', border: '1px solid #FEF5D8', height: '100%' }}>
                  <Chip label="Month 1: Foundation & Authority" size="small" sx={{ bgcolor: '#F55825', color: '#fff', fontWeight: 700, mb: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
                    Weeks 1 to 4
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 1.5 }}>
                    • <strong>Week 1:</strong> Canonical verification + 10 Tier-1 Global Listings (Google Business, Bing, LinkedIn, Crunchbase) + 5 Warm Accelerator Outreach (Startup India, Microsoft, NVIDIA, AWS, NSRCEL).
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 1.5 }}>
                    • <strong>Week 2:</strong> Indian business & local directories (First 10 of 20: Justdial, Sulekha, IndiaMART, MSME Mart, GeM).
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 1.5 }}>
                    • <strong>Week 3:</strong> Indian directories remainder (10) + Global product directories (First 10 of 15: Product Hunt, Wellfound, BetaList, G2).
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569' }}>
                    • <strong>Week 4:</strong> Product directories remainder + 10 Review & SaaS listing platforms (SoftwareSuggest, Clutch, GoodFirms).
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ p: 3, bgcolor: '#F0FDF4', borderRadius: '12px', border: '1px solid #DCFCE7', height: '100%' }}>
                  <Chip label="Month 2: EdTech Niche & Startup Press" size="small" sx={{ bgcolor: '#059669', color: '#fff', fontWeight: 700, mb: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
                    Weeks 5 to 8
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 1.5 }}>
                    • <strong>Weeks 5 & 6:</strong> Pitch Category 7 EdTech & higher education niche portals (Shiksha, Collegedunia, Careers360, EdTechReview, Digital Learning).
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 1.5 }}>
                    • <strong>Weeks 7 & 8:</strong> Category 5 Indian startup media outreach (YourStory, Inc42, StartupTalky, Tracxn, NASSCOM directory).
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569' }}>
                    • Leverage the newly published <em>Tier 2/3 Placement Report 2026</em> as the primary data hook for journalist backlinks.
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={4}>
                <Box sx={{ p: 3, bgcolor: '#F0F9FF', borderRadius: '12px', border: '1px solid #E0F2FE', height: '100%' }}>
                  <Chip label="Month 3: Forums, Syndication & PR Wires" size="small" sx={{ bgcolor: '#0284C7', color: '#fff', fontWeight: 700, mb: 2 }} />
                  <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#0F172A', mb: 1 }}>
                    Weeks 9 to 12
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 1.5 }}>
                    • <strong>Weeks 9 & 10:</strong> Thought-leadership syndication across Quora, Reddit (r/developersIndia), Medium, and Dev.to with natural contextual citations.
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', mb: 1.5 }}>
                    • <strong>Weeks 11 & 12:</strong> Category 9 milestone press release distribution across PRLog, openPR, IndiaPRwire, and Business Wire India.
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569' }}>
                    • Measure GSC ranking improvements on long-tail target keywords and refer to monthly placement lead conversions.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        )}

        <Snackbar
          open={Boolean(snackbarMessage)}
          autoHideDuration={3000}
          onClose={() => setSnackbarMessage('')}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert severity="success" onClose={() => setSnackbarMessage('')}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default SeoPlanDashboard;
