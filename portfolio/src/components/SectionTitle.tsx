import { ReactElement } from 'react'

import { SectionTitleInterface } from '@/types'

export default function SectionTitle({
  title
}: SectionTitleInterface): ReactElement {
  return (
    <div className="section-title-container">
      {title}
      <span className="section-title-line"></span>
    </div>
  )
}
