import React, {useState} from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { SideBarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
background: red;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`

const NavIcon = styled(Link)`
margin-left: 1rem;
font-size: 2rem;
height: 80px;
display: flex;
justify:content: flex-start;
align-items: center';
`

const SideBarNav = styled.div`
background: #eaeaea;
opacity: 1;
width: 17vw;
z-index: 999;
top: 0;
padding: 10px 0 0;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;

`

const SideBarWrap = styled.div`
width: 200%;
`


export default () => {
   
  return (
    <>
      {/* <div className={`${css.navbar}`}>
        <Link to="#" className={`${css.menubar}`}>
          <img className={`${css.cmpicon}`} src="icons/company-menu.png"></img> 
          <span>Company Details</span>
        </Link>
      </div> */}
      {/* <Nav>
        <NavIcon to='#'>
          <FaIcons.FaBars />
        </NavIcon>
      </Nav> */}
      <SideBarNav>
        <SideBarWrap>
        {/* <img src="/icons/scb-logo.png"/> */}
        <img src="icons/side-bar-logo.png" style={{width: "165px", padding: "0 0 10px 10px"}}/>
        {SideBarData.map((item, index) => {
          return <SubMenu key={index} item={item} />
        })}
        </SideBarWrap>
      </SideBarNav>
    </>
    
  );
};
