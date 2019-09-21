import React from 'react'
import styled from '@emotion/styled'

const WhiteCard = styled.div`
  min-width: 920px;
  height: 300px;
  background: red;
  margin: 10px 10px
`

const ResearchCard = ({SearchResults}) => (
  SearchResults.map(SearchResult => (
    <WhiteCard>
      <div>
        {SearchResult.name_en}
      </div>
      <div>
        {SearchResult.name_th}
      </div>
    </WhiteCard>
  ))
)

export default ResearchCard