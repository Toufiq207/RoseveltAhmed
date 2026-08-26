import React from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'

const experiences = [
  {
    designation: 'Asst. General Manager (AGM)',
    company: 'AKH Outwear Ltd. (AKH Group)',
    location:
      'Tennery Road, Horindhara, Hemyetpur, Savar, Dhaka-1340',
    duration: '01 Sep, 2024 - Continuing',
    expertise: 'Production / Operation Management',
    responsibilities: [
      'Assist in supervising daily production operations and implementing production plans.',
      'Coordinate with teams to achieve production targets, maintain quality standards, and meet delivery schedules.',
      'Monitor progress across sample, cutting, sewing, finishing, and packing sections.',
      'Take initiatives to improve productivity and minimize wastage.',
      'Ensure compliance with factory SOPs, quality standards, and buyer requirements.',
      'Maintain regular communication with buyers and merchandising teams for production updates.',
      'Foster a positive work environment through effective communication with workers and supervisors.',
      'Identify and resolve production issues promptly through effective decision-making.',
      'Prepare production reports, delivery status updates, and performance analyses.',
      'Support the COO in administrative, technical, and strategic activities.',
    ],
  },

  {
    designation: 'Sr. Manager',
    company: 'AKM Knit Wear Ltd. (Al-Muslim Group)',
    location: 'Ganda, Karnapara, Savar, Dhaka-1340',
    duration: '01 Sep, 2021 - 31 Aug, 2024',
    expertise: 'Industrial Engineering',
    responsibilities: [
      'Analyze CMT and productivity details for new development styles based on garment sketches or samples and provide CMT to the merchandising department.',
      'Re-analyze evaluated garments after order confirmation to identify economical methods and reduce negotiated CMT.',
      'Release style OB, line layout, and thread consumption charts based on scheduled plans.',
      'Set and follow up style-wise daily cutting, printing, embroidery, sewing, and finishing targets against production plans and shipment schedules.',
      'Rationalize department-wise manpower requirements based on target strength ratio.',
      'Coordinate with the planning department for capacity planning, line planning, and factory monthly plans.',
      'Coordinate with General Manager for line capacity balancing, hourly production achievement, and factory efficiency.',
      'Coordinate with HR to reward outstanding operators based on skill grade, efficiency, and attendance.',
      'Maintain skill matrices and develop workers through training, counseling, and motivation.',
      'Minimize wastage and improve utilization of manpower, machines, and materials.',
      'Monitor and audit IE and Junior IE activities across different units.',
      'Implement Lean and 5S tools and techniques.',
      'Work on new projects and suggest advanced techniques for garment production.',
    ],
  },

  {
    designation: 'Manager',
    company: 'Maxcom International (BD) Ltd. (Pioneer Group)',
    location: 'Hemayetpur, Savar, Dhaka-1340',
    duration: '01 Jan, 2015 - 31 May, 2021',
    expertise: 'Industrial Engineering',
    responsibilities: [
      'Analyze CMT and productivity details for new development styles and provide CMT to the merchandising department.',
      'Re-analyze garments after order confirmation to identify better and economical production methods.',
      'Prepare style OB, line layout, and thread consumption charts according to production schedules.',
      'Set and monitor daily cutting, printing, embroidery, sewing, and finishing targets.',
      'Prepare department-wise manpower requirements and maintain manpower ratios.',
      'Coordinate with planning teams for capacity planning, line planning, and factory monthly planning.',
      'Coordinate with General Manager for capacity balancing, hourly production, and line efficiency.',
      'Coordinate with HR to recognize outstanding operators based on skill, efficiency, and attendance.',
      'Maintain skill matrices and support worker development through training and motivation.',
      'Minimize wastage and improve utilization of manpower, machines, and materials.',
      'Monitor and audit IE and Junior IE activities.',
      'Implement Lean and 5S techniques across production operations.',
    ],
  },

  {
    designation: 'Asst. Manager',
    company: 'Outerwear Ltd. (Multi Safh Group)',
    location: 'Plot #29-32, Road #04, Sector #03, CEPZ, Chittagong',
    duration: '01 Jan, 2011 - 31 Dec, 2014',
    expertise: 'Industrial Engineering',
    responsibilities: [
      'Lead the IE team and monitor activities accordingly.',
      'Prepare operation breakdown, provide SMV, and set production targets.',
      'Prepare manpower budgets for cutting, sewing, and finishing for future styles.',
      'Calculate feasible manpower requirements and identify critical operations.',
      'Conduct time study, method study, production study, and motion study.',
      'Enhance productivity by implementing improved production methods.',
      'Perform line setting, line balancing, method engineering, and workplace engineering.',
      'Conduct operator assessment, skill grading, upgrading, and training.',
      'Monitor skill development of helpers under training through I-PI monitoring.',
      'Analyze production and incentive reports and prepare daily, weekly, and monthly MIS.',
      'Ensure proper utilization of Man, Machine, Method, Material, and Motivation (5M).',
      'Implement 5S and workplace improvement activities.',
      'Develop strategies and execute plans to achieve company objectives.',
      'Develop and implement integrated production-floor systems.',
    ],
  },

  {
    designation: 'Executive / Sr. Executive',
    company: 'Ananta Jeans Wear Ltd. (Ananta Group)',
    location: '134, Kobi Jasmuddin Road, Pagar, Tongi, Gazipur',
    duration: '22 Oct, 2007 - 30 Dec, 2010',
    expertise: 'Industrial Engineering',
    responsibilities: [
      'Lead the IE team and monitor activities accordingly.',
      'Prepare operation breakdown, provide SMV, and set production targets.',
      'Prepare manpower budgets for cutting, sewing, and finishing while maintaining MMR.',
      'Calculate feasible manpower requirements and identify critical operations.',
      'Conduct time study, method study, production study, and motion study.',
      'Improve productivity through effective production improvement methods.',
      'Perform line setting, line balancing, method engineering, and workplace engineering.',
      'Conduct operator assessment and skill-wise training through I-PI monitoring.',
      'Analyze production and incentive reports.',
      'Prepare daily, weekly, and monthly MIS based on production targets, efficiency, utilization, and wastage.',
      'Ensure proper utilization of Man, Machine, Method, Material, and Motivation (5M).',
      'Implement 5S and workplace improvement activities.',
      'Develop strategies and execute plans to achieve company objectives.',
      'Develop and implement integrated systems within the production floor.',
    ],
  },
]

const Experience = () => {
  return (
    <section
      id="experience"
      className="scroll-mt-[90px] py-16"
      aria-labelledby="experience-heading"
    >
      <Container>

        {/* Section Heading */}
        <div
          id="experience-heading"
          className="mb-10 text-center sm:mb-12"
        >
          <Heading text="Professional Experience" />

          <p className="mx-auto mt-3 max-w-3xl px-4 text-sm leading-6 text-gray-600 sm:text-base">
            Over 17 years of professional experience in Industrial
            Engineering, Production & Operation Management, Garment
            Manufacturing, Lean Manufacturing, Production Planning,
            Quality Management, and Process Improvement.
          </p>
        </div>

        {/* Experience Cards */}
        <div
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2"
          role="list"
          aria-label="Professional work experience"
        >
          {experiences.map((experience) => (
            <article
              key={`${experience.company}-${experience.designation}`}
              role="listitem"
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >

              {/* Duration */}
              <div className="mb-5">
                <time
                  className="inline-block rounded-full bg-black px-4 py-2 text-xs font-semibold text-white"
                >
                  {experience.duration}
                </time>
              </div>

              {/* Designation */}
              <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {experience.designation}
              </h3>

              {/* Company */}
              <p className="mt-2 text-base font-semibold text-gray-700">
                {experience.company}
              </p>

              {/* Location */}
              <address className="mt-1 not-italic text-sm leading-6 text-gray-500">
                {experience.location}
              </address>

              {/* Expertise */}
              <div className="mt-5 border-t border-gray-100 pt-4">
                <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
                  Area of Expertise
                </p>

                <p className="mt-1 font-semibold text-gray-900">
                  {experience.expertise}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mt-5">
                <h4 className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-900">
                  Key Responsibilities
                </h4>

                <ul className="space-y-2.5">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-gray-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </article>
          ))}
        </div>

      </Container>
    </section>
  )
}

export default Experience