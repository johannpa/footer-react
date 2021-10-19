import React from 'react';
import Footer from '../components/footer';
import { Icon } from '../components/footer/icons/styles/icons';

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">Story</Footer.Link>
                        <Footer.Link href="#">Clients</Footer.Link>
                        <Footer.Link href="#">Testimonials</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Services</Footer.Title>
                        <Footer.Link href="#">Marketing</Footer.Link>
                        <Footer.Link href="#">Development</Footer.Link>
                        <Footer.Link href="#">Consulting</Footer.Link>
                        <Footer.Link href="#">Design</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>About Us</Footer.Title>
                        <Footer.Link href="#">United States</Footer.Link>
                        <Footer.Link href="#">United Kingdom</Footer.Link>
                        <Footer.Link href="#">Australia</Footer.Link>
                        <Footer.Link href="#">Support</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social</Footer.Title>
                        <Footer.Link href="#"><Icon className="fab fa-facebook-square"></Icon>Facebook</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-instagram"></Icon>Instagram</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-youtube"></Icon>Youtube</Footer.Link>
                        <Footer.Link href="#"><Icon className="fab fa-twitter"></Icon>Twitter</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}