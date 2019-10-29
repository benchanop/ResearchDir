import React from 'react'
import styled from '@emotion/styled'

const WhiteCard = styled.div`
  display: flex;
  padding: 20px;
  min-width: 920px;
  height: 300px;
  background: white;
  margin: 10px 10px;
  box-shadow: 1px 1px 5px 5px rgba(50, 50, 50, .1);
`
const ContainnerAvatar = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background-color: yellow;
  border-radius: 10px;
`
const NameEn = styled.div`
  font-size: 24px;
`
const NameTh = styled.div`
  font-size: 18px
`

const ResearchCard = ({searchResults}) => (
  searchResults.map(searchResult => (
    <WhiteCard>
      <ContainnerAvatar>
        <div>
          Image
        </div>
      </ContainnerAvatar>
      <div>
        <NameEn>
          {searchResult.name_en}
        </NameEn>
        <NameTh>
          {searchResult.name_th}
        </NameTh>
        {
          searchResult.keywords.map((keyword, index) => {
            if(index === 0) {
              return <div>{`keyword: ${keyword.en} / ${keyword.th}`}</div>
            } else {
              return <div>{`${keyword.en} / ${keyword.th}`}</div>
            }
          })


        }
        <div>
          {
            searchResult.target.map((tar, index) => {
              if(index === 0 ) {
                return <div>{`Target Industy: ${tar}`}</div>
              } else {
                return <div>{tar}</div>
              }
            })
          }
        </div>
      </div>

    </WhiteCard>
  ))
)

export default ResearchCard