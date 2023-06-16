import { Box, Flex, Icon, LinkBox, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import styled from "styled-components";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi"
import { FaPinterestP } from "react-icons/fa"

export const Footer = () => {
    return (
        <FOOTER id="footer">

            <div id="footer-filter">

                <div id="footer-top">
                    <img src="./project_logo.jpeg" alt="image" />
                    <p>Imprint</p>
                    <p>Privacy Policy</p>
                    <p>Term of use</p>
                    <p>Privacy setting</p>
                </div>
                <hr></hr>
                <div id='footer-bottom'>
                    <div id="copyright">
                        <ul>  <li><a href="#">Deutsch</a></li>
                            <li><a href="#">English</a></li>
                            <li><a href="#">Francais</a></li></ul>
                        <ul />
                    </div>
                    <div id="social-media">
                        <Icon as={FiInstagram}></Icon>
                        <Icon as={FiFacebook}></Icon>
                        <Icon as={FaPinterestP}></Icon>
                        <Icon as={FiTwitter}></Icon>

                    </div>
                </div>

            </div>


        </FOOTER>
    )
}
const FOOTER = styled.footer`

    margin-top:30px;
    background-color:black;

p{
  font-size: 16px;
  color: #B3B5B2;
  
}

img{
    width: 100px;
}

#footer-filter {
    background-color:#272D23;
    padding: 35px 90px;
}

#footer-filter a:hover {
    text-decoration: underline;
}

#social-media{
    font-size: 30px;
    color: #B3B5B2;
    display: flex;
    width: 18%;
    justify-content: space-between;
}

#footer-top {
    display: flex;
    justify-content: space-between;
    align-items:center;
    font-family: Arial, Helvetica, sans-serif;
    padding-right: 65px;
    padding-left: 22px;
    font-size: 11px;
    line-height: 23px;
    flex-direction: row;
    padding-top: 15px;
    padding-bottom: 25px;
}

#copyright{
    color: #B3B5B2
}


#footer-bottom{
  background-color: #272D23;
  width: 88%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top:20px;
}

hr{
  
        height: 0.5px;
        background-color:  #B3B5B2;
        border: none;
        margin-left:30px;
}
@media all and (max-width: 450px){
  #footer-top{
    flex-direction: column;
  }
}


`
