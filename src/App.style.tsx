import Styled from 'styled-components';

export const Header = Styled.div`
  background: #5A5A5A;
  color: white;
  height: 400px;
  
`
export const Title = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  h2{
    padding-left: 40px;
  }
`
export const Nav = Styled.div`
   
a{
  color: white;
  text-decoration: none;
  padding: 40px;
}
  
`
export const Profile = Styled.div`
  margin-top: 40px;
  margin-left: 40px;
`
export const Desc = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .locate{
    margin-top: 20px;
    display: flex;
  }
  .icon{
    margin-top: 20px;
    gap: 30px;
  }

`
export const Img = Styled.div`
  margin-right: 60px;
  height: 300px;
  border: 10px;
  img{
    width: 70%;
    border-radius: 50%;
  }
`