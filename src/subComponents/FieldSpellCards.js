import React from 'react'
import useGetAllCardsInformation from '../utils/useGetAllCardsInformation'

const FieldSpellCards = () => {
    const getRenderedFieldSpellCards = useGetAllCardsInformation()

    const { renderFieldSpellCardData } = getRenderedFieldSpellCards
  return (
    <div>{renderFieldSpellCardData}</div>
  )
}

export default FieldSpellCards