import React from 'react';
import './Projects.css';
import Spin from "react-reveal/Spin";

const Projects = () => {
  return (
    <>
    <div className='container project'>
    <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>BEST RECENT PROJECTS</h2>
            <hr/>
            <p className='pb-3 text-center'>
            Book Store MERN stack project
            </p>
            <div className='row' id='ads'>
                <Spin>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <div className='card-notify-badge'>Full Stack</div>
                            <img src='https://png.pngtree.com/thumb_back/fh260/background/20210902/pngtree-the-background-photography-of-the-empty-bookstore-library-image_785536.jpg' alt='project1' />
                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express </span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Mongodb</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto' >
                                <h5 className='text-uppercase'>Book Store website</h5>
                            </div>
                            <a className='ad-btn'  href='https://github.com/mohammad-taheri1/Book-Store-MERN-Stack'>view
                            </a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <div className='card-notify-badge'>Front end</div>
                            <img src='https://www.cloudways.com/blog/wp-content/uploads/Ecommerce-Shopping-Infographics.png' alt='project2' />
                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-detail-badge'>HTML</span>
                            <span className='card-detail-badge'>CSS </span>
                            <span className='card-detail-badge'>JAVASCRIPT</span>
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto' >
                                <h5 className='text-uppercase'>Ecommerce website</h5>
                            </div>
                            <a className='ad-btn'  href='https://github.com/tech2etc/Build-and-Deploy-Ecommerce-Website'>view</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <div className='card-notify-badge'>Front end</div>
                            <img src='https://www.shutterstock.com/image-photo/analyst-uses-computer-dashboard-data-260nw-2285412737.jpg' alt='project2' />
                        </div>
                        <div className='card-image-overly m-auto mt-3'>
                            <span className='card-detail-badge'>HTML</span>
                            <span className='card-detail-badge'>CSS </span>
                            <span className='card-detail-badge'>JAVASCRIPT</span>
                            
                        </div>
                        <div className='card-body text-center'>
                            <div className='ad-title m-auto' >
                                <h6 className='text-uppercase'>Dashboard Management System</h6>
                            </div>
                            <a className='ad-btn'  href='https://github.com/mdbootstrap/TW-Elements'>view</a>
                        </div>
                    </div>
                </div>
                </Spin>
              </div>
            </div>
    </>
  )
}

export default Projects