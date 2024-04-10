import { useState } from 'react'

import {
  ArchiveCardInterface,
  HandleShowMoreClickFunctionType,
  HandleShowMoreInterface,
  VisibleCardsType
} from '@/types'

export default function HandleShowMore(): HandleShowMoreInterface {
  const [visibleCardsCount, setVisibleCardsCount] =
    useState<VisibleCardsType>(3)

  function handleShowMoreClick(
    archiveCardsData: ArchiveCardInterface[]
  ): HandleShowMoreClickFunctionType {
    if (visibleCardsCount < archiveCardsData.length) {
      setVisibleCardsCount(visibleCardsCount + 3)
    } else {
      setVisibleCardsCount(3)
    }
  }

  return { visibleCardsCount, handleShowMoreClick }
}
