import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarLink = styled(Link)`
display: flex;
color: black;
text-decoration: none;
padding: 0.7rem;
position: relative;

&:hover {
    background: #0a2b58;
    opacity: 1;
    color: #fff;
}
`

const SideBarLabel = styled.span`
padding-left: 10px;
width: 200px;
`

const SideBarIcon = styled.img`
width: 18px;
margin: -4px 0 0;


&:active {
    background-color: red;
    opacity: 1;
    z-index: 0;
    color: #fff;
}
`

export default ({item}) => {
    
    return (
        <>
        <SideBarLink to={item.path}>
            <div>
                <SideBarIcon src={item.icon}  />
                <SideBarLabel style={{fontSize: '16px'}}>{item.title}</SideBarLabel>
            </div>
            <span style={{fontFamily: 'Helvetica',fontSize: '6px',color: '#fff',backgroundColor: item.barBgColor,position: "absolute",right: "8px",bottom: "13px",display: "block",textAlign: "center",borderRadius: "15px",padding: "4px",width: "24px"}}>{item.barText}</span>
           
        </SideBarLink>
       
        </>
    )
}