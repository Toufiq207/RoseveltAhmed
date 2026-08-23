import React, { useState } from 'react'

const faq = [
  {
    ques: "What is Social Media Marketing?",
    Ans: "Social Media Marketing হলো Facebook, Instagramসহ বিভিন্ন social media platform ব্যবহার করে business-এর brand awareness, audience engagement, lead generation এবং sales বৃদ্ধি করার প্রক্রিয়া।"
  },
  {
    ques: "Which social media platforms do you manage?",
    Ans: "আমি Facebook, Instagram, TikTok, LinkedInসহ প্রয়োজন অনুযায়ী বিভিন্ন social media platform পরিচালনা ও marketing strategy তৈরি করি।"
  },
  {
    ques: "Can you create content for my social media pages?",
    Ans: "হ্যাঁ। প্রয়োজন অনুযায়ী social media post, caption, Reels, Stories, carousel এবং অন্যান্য engaging content তৈরি করা যায়।"
  },
  {
    ques: "Do you provide Facebook and Instagram Ads services?",
    Ans: "হ্যাঁ। Facebook ও Instagram-এর জন্য targeted ad campaign তৈরি, audience targeting, campaign management এবং performance optimization করা হয়।"
  },
  {
    ques: "How can Social Media Marketing help my business?",
    Ans: "সঠিক Social Media Marketing strategy আপনার brand visibility বাড়াতে, নতুন customer-এর কাছে পৌঁছাতে, quality leads generate করতে এবং দীর্ঘমেয়াদে business growth করতে সাহায্য করতে পারে।"
  },
]

const Faq = () => {

  const [open, setOpen] = useState(null)

  const handleOpen = (index) => {
    setOpen(open === index ? null : index)
  }

  return (
    <section id='faq' className='mt-14 pb-16'>
      <div className='mx-auto w-full max-w-4xl px-4'>

        {/* Heading */}
        <div className='mb-10 text-center'>
          <h2 className='text-4xl font-bold'>
            FAQ
          </h2>

          <p className='mt-3 text-gray-600'>
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ */}
        <div className='flex flex-col gap-4'>

          {faq.map((item, index) => (
            <div
              key={index}
              className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'
            >

              {/* Question */}
              <button
                onClick={() => handleOpen(index)}
                className='flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold transition hover:bg-gray-50'
              >
                <span>
                  {item.ques}
                </span>

                <span className='text-2xl'>
                  {open === index ? '−' : '+'}
                </span>
              </button>

              {/* Answer */}
              {open === index && (
                <div className='border-t border-gray-200 px-6 py-5 leading-7 text-gray-600'>
                  {item.Ans}
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Faq