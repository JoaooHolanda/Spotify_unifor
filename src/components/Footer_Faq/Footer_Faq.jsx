import insta from "./assets/instagram.png"
import face from "./assets/facebook.png"
import tt from "./assets/twitter.png"
import spoti from "./assets/social.png"
import "./footer.css"
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from "./assets/spotify_white_1.png"
import React from 'react';


function Footer_Faq(){
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    
          <section className='footer' style={{ backgroundColor: 'rgba(26, 26, 26)' ,padding:'10px'}}>
            <MDBContainer className='text-center text-md-start mt-5' >
              <MDBRow className='mt-3'>
              <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
    
                  <img src={spoti} alt="" width={150}/>
              </MDBCol>

                <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                  <h6 className='text-uppercase fw-bold mb-4'>
                    <MDBIcon icon="gem" className="me-3" />
                    Spotify
                  </h6>
                  <p>
                  Visite nossa Comunidade
                    Tem uma pergunta? Encontre respostas na nossa Comunidade de fãs especialistas do mundo todo!
                  </p>
                </MDBCol>
                <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
    
                  <h6 className='text-uppercase fw-bold mb-4'>Ferramentas</h6>
                  <p>
                    <a href='/Home' className='text-reset'>
                      Playlist
                    </a>
                  </p>
                  <p>
                    <a href='/Home' className='text-reset'>
                      Musicas
                    </a>
                  </p>
                  <p>
                    <a href='/Home' className='text-reset'>
                      Podcasts
                    </a>
                  </p>
                </MDBCol>
                
               
            
              </MDBRow>
            </MDBContainer>
          </section>
    
          <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0)' }}>
            © 2023 Copyright
          </div>
        </MDBFooter>
      );
    }

export default Footer_Faq;