import React from 'react';
import CustomStyle from './custom.css';
import { contactUsFrom, FooterCopyright, FooterElement, FooterMainContainer, FooterWrapper } from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterMainContainer>
                <FooterWrapper>
                    <FooterElement>
                        <h3 className="footerElTitle">From the Blog</h3>
                        <h4 className="footerElPostTitle">Post Title</h4>
                        <span className="qaqarin"><a className="footerElPostUser" href="#">Admin</a>, <a className="footerElPostDomain" href="#">yourdomain.com</a></span>
                        <small className="footerElPostDate">Saturday, 9th January 2021</small>
                        <p className="footerElPostText">Vestibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.</p>
                        <a className="footerElPostReadMore" href="#">Read More >></a>
                    </FooterElement>
                    <FooterElement>
                        <h3 className="footerElTitle">Quick Links</h3>
                        <div className="footerElLinks"><img src={require('../../images/link.png').default} /><a href="#">Lorem ipsum dolor sit</a></div>
                        <div className="footerElLinks"><img src={require('../../images/link.png').default} /><a href="#">Amet consectetur</a></div>
                        <div className="footerElLinks"><img src={require('../../images/link.png').default} /><a href="#">Praesent vel sem id</a></div>
                        <div className="footerElLinks"><img src={require('../../images/link.png').default} /><a href="#">Curabitur hendrerit est</a></div>
                        <div className="footerElLinks"><img src={require('../../images/link.png').default} /><a href="#">Aliquam eget erat nec sapien</a></div>
                        <div className="footerElLinks"><img src={require('../../images/link.png').default} /><a href="#">Cras id augue nunc</a></div>
                        <div className="footerElLinks"><img src={require('../../images/link.png').default} /><a href="#">Sed a nulla urna</a></div>
                    </FooterElement>
                    <FooterElement>
                        <h3 className="footerElTitle">Latest Tweets</h3>
                        <a className="footerElTweet" href="#"><a href="#">@namehere</a> Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoremut vitae doloreet 1 day ago</a>
                        <a className="footerElTweet" href="#"><a href="#">@namehere</a> Justoid nonummy laoreet phasellent penatoque in antesque pellus elis eget tincidunt. Nequatdui laorem justo a non tellus laoremut vitae doloreet 1 day ago</a>
                    </FooterElement>
                    <FooterElement>
                        <h3 className="footerElTitle">Contact Us</h3>
                        <contactUsFrom className="contactUsForm">
                            <input type="text" placeholder="Full Name" />
                            <input type="text" placeholder="Email Adress" />
                            <input type="text" placeholder="Subject" />
                            <textarea rows="3" placeholder="Message"></textarea>
                            <button type="submit">SUBMIT</button>
                        </contactUsFrom>
                    </FooterElement>
                </FooterWrapper>
                <FooterCopyright>
                    <small className="copyright">Copyright &copy; {new Date().getFullYear()} Domain Name ~ All Rights Reserved</small>
                </FooterCopyright>
            </FooterMainContainer>
        </>
    )
}

export default Footer
