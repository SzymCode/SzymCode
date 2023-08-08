import { useState } from "react"

import { ArchiveCardProps } from "@/components/ArchiveCard"

export default function HandleShowMore() {
  const [visibleCardsCount, setVisibleCardsCount] = useState(3)

  function handleShowMoreClick(archiveCardsData: ArchiveCardProps[]) {
    if (visibleCardsCount < archiveCardsData.length) {
      setVisibleCardsCount(visibleCardsCount + 3)
    }

    else {
      setVisibleCardsCount(3)
    }
  }
  return { visibleCardsCount, handleShowMoreClick }
}