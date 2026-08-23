import React, { useState } from 'react'
import Container from '../Component/Container'
import Heading from '../Component/Heading'
import ServiceComponent from '../Component/ServiceComponent'

const service = [
  {
    name: "Facebook Marketing & Page Management",
    description: "পেজ সেটআপ, নিয়মিত পোস্ট, audience engagement ও page growth।"
  },
  {
    name: "Instagram Marketing",
    description: "পোস্ট, Reels, Stories, hashtag strategy এবং audience growth।"
  },
  {
    name: "Social Media Content Creation",
    description: "আকর্ষণীয় পোস্ট, ক্যাপশন, graphics, carousel ও short-form video content।"
  },
  {
    name: "Facebook & Instagram Ads",
    description: "নির্দিষ্ট audience target করে paid advertising campaign পরিচালনা ও optimization।"
  },
  {
    name: "Lead Generation",
    description: "সম্ভাব্য customer খুঁজে বের করে business inquiry ও lead বাড়ানোর জন্য campaign তৈরি।"
  },
  {
    name: "Social Media Management",
    description: "নিয়মিত content publishing, comment/message management এবং account monitoring।"
  },
  {
    name: "Brand Promotion",
    description: "online brand awareness ও professional brand identity তৈরি।"
  },
  {
    name: "Engagement & Community Management",
    description: "followers-এর সঙ্গে interaction বাড়ানো এবং customer communication পরিচালনা।"
  },
  {
    name: "Social Media Strategy",
    description: "business goal অনুযায়ী monthly content plan, campaign strategy ও growth plan তৈরি।"
  },
  {
    name: "Analytics & Reporting",
    description: "reach, engagement, follower growth, ad performance ইত্যাদি বিশ্লেষণ করে report প্রদান।"
  },
  {
    name: "Influencer Marketing",
    description: "প্রয়োজন অনুযায়ী influencer/creator collaboration ও campaign management।"
  }
]

const Service = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <section className='mt-14'>
      <Container>

        <Heading text='Service' />

        <div className='flex flex-col gap-2'>

          {service
            .slice(0, open ? service.length : 4)
            .map((item, index) => (
              <ServiceComponent
                key={index}
                heading={item.name}
                delails={item.description}
              />
            ))
          }

          <button
            className='self-center mt-5 rounded-lg bg-black px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-lg active:scale-95'
            onClick={handleOpen}
          >
            {open ? "Read Less" : "Read More"}
          </button>

        </div>

      </Container>
    </section>
  )
}

export default Service