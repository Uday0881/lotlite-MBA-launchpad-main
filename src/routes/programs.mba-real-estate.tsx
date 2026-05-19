import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/site/ProgramPage";

export const Route = createFileRoute("/programs/mba-real-estate")({
  head: () => ({
    meta: [
      { title: "MBA in Real Estate — Lotlite" },
      {
        name: "description",
        content:
          "Master the intersection of business strategy, real estate economics, and modern property technology to lead the next generation of real estate enterprises.",
      },
    ],
  }),
  component: () => (
    <ProgramPage
      theme="crm"
      heroImage="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&q=80&auto=format&fit=crop"
      eyebrow="The Growth & Transaction Hub"
      title="Master of Business Administration in Real Estate"
      subtitle="Master the intersection of business strategy, real estate economics, and modern property technology to lead the next generation of real estate enterprises."
      ctaLabel="Apply to MBA Cohort"
      semesters={[
        {
          name: "Semester I",
          courses: [
            "Generic Core (GC): Managerial Economics, Organizational Behaviour, Financial Accounting, Business Research Methods",
            "Subject Core (SC): Marketing Management, Design Thinking",
          ],
        },
        {
          name: "Semester II",
          courses: [
            "Generic Core (GC): Financial Management, Human Resource Management, Operations & Supply Chain Management",
            "Subject Core (SC): Legal Aspects of Business",
            "Skill Lab: Desk Research, Field Projects, Selling & Negotiation Skills",
          ],
        },
        {
          name: "Semester III",
          courses: [
            "Project Management: Planning, scheduling, and executing complex projects",
            "Real Estate Economics & Finance: Real estate valuation, funding, and appraisal methods",
            "Legal Aspects in Real Estate: Regulatory frameworks, contract management, and land laws",
            "Summer Internship Project (SIP): Mandatory industry training (8-10 weeks)",
          ],
        },
        {
          name: "Semester IV",
          courses: [
            "Sustainable Real Estate & Urban Infrastructure: Green building norms and smart city development principles",
            "Facilities & Property Management: Operation, maintenance, and optimization of built assets",
            "Dissertation / Capstone Project: A research-based or practical implementation project on a real-world real estate problem",
          ],
        },
      ]}
    />
  ),
});