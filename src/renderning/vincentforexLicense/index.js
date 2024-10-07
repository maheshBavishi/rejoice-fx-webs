import React from 'react'
import VincentforexLicenseBanner from './vincentforexLicenseBanner'
import FormationSection from './formationSection'
import VincentforexLicenseProcess from './vincentforexLicenseProcess'
import RequirementsSection from '../mauritiusForexLicense/requirementsSection'
import Explicit from '../mauritiusForexLicense/explicit'
import TrustedPartners from '../mauritiusForexLicense/explicit/trustedPartners'
import Overview from '../mauritiusForexLicense/explicit/overview'

export default function VincentforexLicense() {
  return (
    <div>
      <VincentforexLicenseBanner/>
      <FormationSection/>
      <VincentforexLicenseProcess/>
      <RequirementsSection/>
      <Explicit/>
      <TrustedPartners/>
      <Overview/>
    </div>
  )
}
