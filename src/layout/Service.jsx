import React, { useState } from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import ServiceComponent from '../Component/ServiceComponent'

const services = [
  {
    name: 'Facebook Marketing & Page Management',
    description:
      'পেজ সেটআপ, নিয়মিত পোস্ট, audience engagement ও page growth-এর মাধ্যমে আপনার Facebook business page আরও কার্যকরভাবে পরিচালনা করা।',
  },
  {
    name: 'Instagram Marketing',
    description:
      'পোস্ট, Reels, Stories, hashtag strategy এবং audience growth-এর মাধ্যমে Instagram presence উন্নত করা।',
  },
  {
    name: 'Social Media Content Creation',
    description:
      'আকর্ষণীয় পোস্ট, caption, graphics, carousel ও short-form video content তৈরি করা।',
  },
  {
    name: 'Facebook & Instagram Ads',
    description:
      'নির্দিষ্ট audience target করে Facebook ও Instagram paid advertising campaign পরিচালনা এবং optimization করা।',
  },
  {
    name: 'Lead Generation',
    description:
      'সম্ভাব্য customer খুঁজে বের করে business inquiry ও qualified lead বাড়ানোর জন্য effective campaign তৈরি করা।',
  },
  {
    name: 'Social Media Management',
    description:
      'নিয়মিত content publishing, comment ও message management এবং social media account monitoring করা।',
  },
  {
    name: 'Brand Promotion',
    description:
      'online brand awareness বৃদ্ধি এবং একটি professional digital brand identity তৈরি করা।',
  },
  {
    name: 'Engagement & Community Management',
    description:
      'followers-এর সঙ্গে interaction বৃদ্ধি এবং customer communication কার্যকরভাবে পরিচালনা করা।',
  },
  {
    name: 'Social Media Strategy',
    description:
      'business goal অনুযায়ী monthly content plan, campaign strategy এবং social media growth plan তৈরি করা।',
  },
  {
    name: 'Analytics & Reporting',
    description:
      'reach, engagement, follower growth এবং advertising performance বিশ্লেষণ করে detailed report প্রদান করা।',
  },
  {
    name: 'Influencer Marketing',
    description:
      'প্রয়োজন অনুযায়ী influencer ও creator collaboration এবং campaign management পরিচালনা করা।',
  },
]

const Service = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <section
      id="service"
      className="mt-14 scroll-mt-[100px]"
      aria-labelledby="services-heading"
    >
      <Container>

        {/* SEO Heading */}
        <div id="services-heading">
          <Heading text="Digital Marketing Services" />
        </div>

        <p className="mx-auto mb-8 max-w-3xl text-center text-gray-600">
          Professional digital marketing services including Facebook
          marketing, Instagram marketing, social media management,
          Meta Ads, lead generation, content creation and brand promotion.
        </p>

        <div className="flex flex-col gap-2">

          {services
            .slice(0, open ? services.length : 4)
            .map((item, index) => (
              <ServiceComponent
                key={index}
                heading={item.name}
                delails={item.description}
              />
            ))}

          {/* Read More / Less */}
          <button
            type="button"
            onClick={handleOpen}
            aria-expanded={open}
            aria-controls="additional-services"
            className="mt-5 self-center rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95"
          >
            {open ? 'Read Less' : 'Read More'}
          </button>

        </div>

      </Container>
    </section>
  )
}

export default Service