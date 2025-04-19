import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Modal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#292929] p-6 rounded-lg w-3/4 max-w-3xl">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={onClose} className="text-xl">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M36.6668 20.1668H14.3552L24.6035 9.9185L22.0002 7.3335L7.3335 22.0002L22.0002 36.6668L24.5852 34.0818L14.3552 23.8335H36.6668V20.1668Z" fill="#E6D62D" />
                        </svg>
                    </button>
                    <h1 style={{ color: '#E6D62D', fontFamily: 'Anta', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
                        LOGO
                    </h1>
                    <nav className="mb-4">
                        <ul className="flex space-x-4 items-center">
                            <li><a href="#menu1" className="text-[#F2F2F2]" style={{ fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>About</a></li>
                            <li><a href="#menu2" className="text-[#F2F2F2]" style={{ fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>Project</a></li>
                            <li><a href="#menu3" className="text-[#F2F2F2]" style={{ fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>Tools</a></li>
                            <li><a href="#menu4" className="text-[#F2F2F2]" style={{ fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <h2 style={{ color: '#F2F2F2', fontFamily: 'Anta', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
                    {project.name}
                </h2>
                
                <div className="mb-4">
                    <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows>
                    {project.details.map((detail, index) => (
                        <div key={index} className="p-4 bg-[#292929] rounded-lg">
                            <h3 className="text-lg font-semibold" style={{color: '#F2F2F2'}}>{detail.title}</h3>
                            <p style={{color: '#F2F2F2'}}>{detail.description}</p>
                            <img src={detail.image} alt={detail.title} className="w-1/2 h-32 object-cover rounded-lg mb-2" style={{ width: '50%' }} />
                            <div className="flex space-x-4 mt-2">
                                <a href={detail.liveLink} className="text-[#F2F2F2] font-semibold hover:underline" target="_blank" rel="noopener noreferrer">Live Link</a>
                                <a href={detail.sourceCodeLink} className="text-[#F2F2F2] border-red-100 rounded-xs hover:underline" target="_blank" rel="noopener noreferrer">Source Code</a>
                            </div>
                        </div>
                    ))}
                </Carousel>
                <p className='mt-5' style={{ color: '#F2F2F2', fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
                    {project.methodology}
                </p>
            </div>
        </div>
    );
};

export default Modal;