import { map } from 'lodash';
import React, {useState} from 'react'
import { LeftHeader } from '../Home/styled';
import { Dropdown, Email, Header, RightHeader, SearchInput, Wrapper, WrapperIcon,
  Name,
  Item,
  ItemWrapper,
  AccountIcon,
  Bell, CardResume, ContentWrapper, CardWrapper, ListIcon, WrapperIconFooter, SearchIconWrapper
} from './styled';
import EditIcon from '@material-ui/icons/Edit';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

const data = [
  {id: 0, title: 'Profile', icon:'user'},
  {id: 1, title: 'Setting', icon:'setting'},
  {id: 2, title: 'Logout', icon: 'sign out'}, 
]

const DashboardScreen = () => {
  const [visible, setVisible] = useState(false)
  return (
    <Wrapper>
      <Header>
        <LeftHeader>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/OpenCV_Logo_with_text_svg_version.svg/1200px-OpenCV_Logo_with_text_svg_version.svg.png" 
            style={{
              height:50,
              width:50,
              margin:0
            }}
            alt=''
          />
          <div style={{position:'relative', display: "flex", alignItems:'center'}}>
          <SearchInput placeholder="search cv" />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          </div>
        </LeftHeader>
        <RightHeader>
          <WrapperIcon>
            <Bell />
          </WrapperIcon>
          <WrapperIcon onClick={() => setVisible(!visible)}>
            <AccountIcon />
            {visible && <Dropdown>
              <Name>Long nguyen</Name>  
              <Email>long@gmail.com</Email>
              <hr/>
              {map(data, item => {
                return <ItemWrapper >
                  <Item>{item.title}</Item>
                </ItemWrapper>
              })}
            </Dropdown>}
          </WrapperIcon>
        </RightHeader>
      </Header>
      <ContentWrapper>
        <CardWrapper>
          <CardResume>
            <div style={{
              height:'100%',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems:'center',
              flexDirection: 'column'
            }}>
              <AddIcon style={{fontSize: 36, lineHeight:3}} />
              <div>Add resume</div>
            </div>
          </CardResume>
        </CardWrapper>
        <CardWrapper>
        <CardResume>
          <img src="https://cdn.shopify.com/s/files/1/1038/1798/products/Web-Developer-Resume-740x1046.jpg?v=1534162095"
            style={{
              width: "100%",
              maxHeight:300,
              borderRadius:13,
              margin: 0
            }}
            alt=''
          />
          <CardResume.Content>
            <ListIcon>
              <WrapperIconFooter>
                <EditIcon style={{color:"blue", fontSize:20}} />
              </WrapperIconFooter>
              <WrapperIconFooter>
                <FileCopyIcon style={{color:"#ffbc52", fontSize:20}} />
              </WrapperIconFooter>
              <WrapperIconFooter>
                <DeleteIcon style={{color:"red", fontSize:20}} />
              </WrapperIconFooter>
            </ListIcon>
          </CardResume.Content>
        </CardResume>
        </CardWrapper>
        <CardWrapper>
          <CardResume>
            <img src="https://www.freesumes.com/wp-content/uploads/2018/06/contrast-resume.jpg"
              style={{
                width: "100%",
                maxHeight:300,
                borderRadius:13,
                margin: 0
              }}
              alt=''
            />
            <CardResume.Content>
              <ListIcon>
                <WrapperIconFooter>
                  <EditIcon style={{color:"blue", fontSize:20}} />
                </WrapperIconFooter>
                <WrapperIconFooter>
                  <FileCopyIcon style={{color:"#ffbc52", fontSize:20}} />
                </WrapperIconFooter>
                <WrapperIconFooter>
                  <DeleteIcon style={{color:"red", fontSize:20}} />
                </WrapperIconFooter>
              </ListIcon>
            </CardResume.Content>
          </CardResume>
        </CardWrapper>
        <CardWrapper>
          <CardResume>
            <img src="https://www.freesumes.com/wp-content/uploads/2018/06/contrast-resume.jpg"
              style={{
                width: "100%",
                maxHeight:300,
                borderRadius:13,
                margin: 0
              }}
              alt=''
            />
            <CardResume.Content>
              <ListIcon>
                <WrapperIconFooter>
                  <EditIcon style={{color:"blue", fontSize:20}} />
                </WrapperIconFooter>
                <WrapperIconFooter>
                  <FileCopyIcon style={{color:"#ffbc52", fontSize:20}} />
                </WrapperIconFooter>
                <WrapperIconFooter>
                  <DeleteIcon style={{color:"red", fontSize:20}} />
                </WrapperIconFooter>
              </ListIcon>
            </CardResume.Content>
          </CardResume>
        </CardWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}
 
export default DashboardScreen;