import React from 'react'
import { Menu } from 'antd'
import styled from '@emotion/styled'
import 'antd/dist/antd.css';
import logo from '../common/logo.png'
import ResearchCard from '../components/ResearchCard'
import { Input } from 'antd';

const { Search } = Input;

const CustomMenu = styled(Menu)`
  background: black;
  color: white;
  border-bottom: none;
`

const Body = styled.div`
  display: flex;
  height: 350px;
  align-items: center;
  flex-direction: column;
  background: #2f3b7a;
`
const CustomSearch = styled(Search)`
  max-width: 800px;
  margin-top: 30px;
`

const ContainerWhiteCard = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const SearchResults = [
  {
    avatar: "",
    name_th: "นายคน แรก",
    name_en: "People 1",
    keyword: [{
      th: "dog",
      en: "หมา"
    }, {
      th: "cat",
      en: "แมว"
    }],
    target: ["dog", "cat", "rabbit"]
  },
  {
    avatar: "",
    name_th: "นายคน สอง",
    name: "People 2",
     keyword: [{
      th: "dog",
      en: "หมา"
    }, {
      th: "cat",
      en: "แมว"
    }],
    target: ["dog", "cat", "rabbit"]
  },
  {
    avatar: "",
    name_th: "นายคน สาม",
    name: "People 3",
     keyword: [{
      th: "dog",
      en: "หมา"
    }, {
      th: "cat",
      en: "แมว"
    }],
    target: ["dog", "cat", "rabbit"]
  },
  {
    avatar: "",
    name_th: "นายคน สี่",
    name: "People 4",
     keyword: [{
      th: "dog",
      en: "หมา"
    }, {
      th: "cat",
      en: "แมว"
    }],
    target: ["dog", "cat", "rabbit"]
  },
]
const App = () => <div>
  <div>
    <CustomMenu mode="horizontal">
      <Menu.Item key="All">
        All
      </Menu.Item>
      <Menu.Item key="Researcher">
        Researcher
      </Menu.Item>
      <Menu.Item key="Research-output">
        Research output
      </Menu.Item>
      <Menu.Item key="Intellectual-Property">
        Intellectual Property
      </Menu.Item>
      <Menu.Item key="Target-Industry">
        Target Industry
      </Menu.Item>
    </CustomMenu>
  </div>

  <Body>
    <img src={logo} alt="logo"/>

    <CustomSearch
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
    />
  </Body>

  <ContainerWhiteCard>
    <ResearchCard SearchResults={SearchResults}/>
  </ContainerWhiteCard>
</div>

export default App