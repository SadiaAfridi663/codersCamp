import React from 'react'
import PricingHero from '../Component/Pricing/Hero'
import PricingPlans from '../Component/Pricing/PricingPlans'
import FAQSection from '../Component/Pricing/FAQSection'
import ComparisonTable from '../Component/Pricing/ComparisonTable'
import CTASection from '../Component/Home/CTASection'

function Prices() {
  return (
    <div>
     <PricingHero
  title="Affordable Learning for Everyone"
  subtitle="Choose a plan that fits your goals and start learning today."
  buttonText="View Plans"
  bgColor="bg-[#4481b8]"
  textColor="text-white"
/>
<PricingPlans/>
<ComparisonTable/>
<FAQSection/>
<CTASection/>

    </div>
  )
}

export default Prices
