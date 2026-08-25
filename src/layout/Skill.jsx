import React from "react";
import Container from "../Component/Container";
import Heading from "../Component/Heading";

const skills = [
  {
    name: "Production / Operation Management",
    category: "Garments / Textile",
    level: "Expert",
  },
  {
    name: "Industrial Engineering",
    category: "Garments / Textile",
    level: "Expert",
  },
  {
    name: "Production Planning",
    category: "Management",
    level: "Expert",
  },
  {
    name: "LEAN Manufacturing",
    category: "Manufacturing",
    level: "Advanced",
  },
  {
    name: "Continuous Improvement",
    category: "Process Management",
    level: "Advanced",
  },
  {
    name: "Quality Assurance & Control",
    category: "Quality Management",
    level: "Advanced",
  },
  {
    name: "Root Cause Analysis",
    category: "Problem Solving",
    level: "Advanced",
  },
  {
    name: "Problem Solving & Decision Making",
    category: "Management",
    level: "Advanced",
  },
  {
    name: "Standard Operating Procedure",
    category: "SOP",
    level: "Advanced",
  },
  {
    name: "Cost Reduction",
    category: "Business Improvement",
    level: "Advanced",
  },
  {
    name: "Process Improvement",
    category: "Manufacturing",
    level: "Expert",
  },
  {
    name: "Performance Monitoring",
    category: "KPI / Management",
    level: "Advanced",
  },
  {
    name: "Manufacturing Methods & Procedures",
    category: "Production",
    level: "Expert",
  },
  {
    name: "Follow Up",
    category: "Operations",
    level: "Advanced",
  },
  {
    name: "KPI Management",
    category: "Performance Management",
    level: "Advanced",
  },
  {
    name: "Team Leading",
    category: "Leadership",
    level: "Expert",
  },
];

const Skill = () => {
  return (
    <section id="skills" className="py-16">
      <Container>
        {/* Heading */}
        <div className="mb-10 text-center sm:mb-12">
          <Heading text="Skills & Expertise" />

          <p className="mx-auto mt-3 max-w-2xl px-4 text-sm leading-6 text-gray-600 sm:text-base">
            Professional expertise in production management, industrial
            engineering, process improvement, and manufacturing operations.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg"
            >
              {/* Top */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  {/* Number */}
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Skill Name */}
                  <h3 className="pt-1 text-base font-bold leading-6 text-gray-900">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Category */}
              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                {skill.category}
              </p>

              {/* Level */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  Expertise
                </span>

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700">
                  {skill.level}
                </span>
              </div>

              {/* Progress */}
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full bg-black transition-all duration-500 ${
                    skill.level === "Expert"
                      ? "w-[95%]"
                      : "w-[85%]"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mx-auto mt-10 max-w-6xl rounded-2xl bg-black p-6 text-center text-white sm:p-8">
          <h3 className="text-xl font-bold sm:text-2xl">
            Core Professional Strengths
          </h3>

          <p className="mx-auto mt-3 max-w-3xl text-sm leading-6 text-gray-300 sm:text-base">
            Production & Operation Management, Industrial Engineering,
            Production Planning, LEAN Manufacturing, Continuous Improvement,
            Quality Control, Cost Reduction, KPI Management, and Team
            Leadership.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Skill;