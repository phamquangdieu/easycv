import { map } from 'lodash';
import React, { useState } from 'react'
import { CateText, CateWrapper, Header, LeftHeader, RightHeader, SigninButton, SignupButton, Wrapper, Text,
  FirstBlock, Left, Right, Description, StartButton, Name, ThirdBlock, ValuePoint, Image, SecondBlock
} from './styled';
import {Link} from 'gatsby'

const dataCategory = [
  {id: 0, title: 'Trang chủ'},
  {id: 1, title: 'Hiểu biết'},
  {id: 2, title: 'Liên hệ'},
  {id: 3, title: 'Về chúng tôi'}
]

const data = [
  {id: 0, src: 'https://cdn.stylingcv.com/wp-content/uploads/2020/07/content-filled-resume-builder.svg', description:'簡単'},
  {id: 1, src: 'https://cdn.stylingcv.com/wp-content/uploads/2020/07/boost-your-resume-builder.svg', description:"共有可能"},
  {id: 2, src: 'https://cdn.stylingcv.com/wp-content/uploads/2020/07/launch-resume-builder.svg', description:'無料'}
]

const HomeScreen = () => {
  const [isActive, setIsActive] = useState(0)
  const renderCate = () => {
    return map(dataCategory, item => {
      return <CateWrapper key={item.id} active={isActive === item.id} onClick={() => setIsActive(item.id)}>
        <CateText>{item.title}</CateText>
      </CateWrapper>
    })
  }

  return (
    <Wrapper>
      <Header>
        <LeftHeader>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/1200px-OpenCV_Logo_with_text_svg_version.svg.png" 
            style={{
              height:50,
              width: 50,
              margin:0
            }}
            alt=''
          />
          {renderCate()}
        </LeftHeader>
        <RightHeader>
          <Link to='dashboard'>
            <SigninButton >
              <Text>Sign In</Text>
            </SigninButton>
          </Link>
          <SignupButton>
            <Text>Sign Up</Text>
          </SignupButton>
        </RightHeader>
      </Header>
      <FirstBlock>
        <Left>
          <img
            src={`https://cdn.stylingcv.com/wp-content/uploads/2020/07/easy-design-resume-builder.svg`}
            height="100%"
            width="70%"
            alt=''
          />
        </Left>
        <Right>
          <Name>EzCV</Name>
          <Description>アルファベットを書くのと同じくらい簡単に履歴書を作成.</Description>
          <StartButton>
            <Text>Get started</Text>
          </StartButton>
        </Right>
      </FirstBlock>
      <SecondBlock>
        EzCV is a free and open source resume builder that is built to make the mudane tasks of creating,
        updating and sharing your CV
      </SecondBlock>
      <ThirdBlock>
        {map(data, item => {
          return <ValuePoint>
            <Image src={item.src} />
            <Description>{item.description}</Description>
          </ValuePoint>
        })}
        
      </ThirdBlock>
    </Wrapper>
  )
}
 
export default HomeScreen;