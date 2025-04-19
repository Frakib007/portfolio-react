import React from 'react';

const WhyWork = () => {
    return (
        <div id="why-me" className='flex justify-around  bg-[#292929] w-full min-h-screen'>
            <div className='px-5'>
                <h2 style={{ color: '#F2F2F2', fontFamily: 'Anta', fontSize: '48px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}>
                    Why work with me
                </h2>
            </div>

            {/* div 2  */}
            <div className="">
                <div >
                    <h1 style={{ color: '#F2F2F2', fontFamily: 'Inter', fontSize: '36px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', width: '310px', height: '44px' }}>
                        Focus on Quality
                    </h1>
                    <h6 style={{ color: '#F2F2F2', fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: '25px', width: '599px', height: '175px' }}>
                        I deliver clean, maintainable, and scalable code that ensures high-performing and reliable solutions.
                    </h6>
                </div>

                <div className='-mt-20'>
                <h1 style={{ color: '#F2F2F2', fontFamily: 'Inter', fontSize: '36px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', width: '470px', height: '44px' }}>
                Adaptable and Up-to Date
                    </h1>
                    <h6 style={{ color: '#F2F2F2', fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: '25px', width: '599px', height: '175px' }}>
                    I stay updated with the latest industry trends, incorporating modern techniques to create responsive and efficient designs
                    </h6>
                </div>

                <div  className='-mt-20'>
                <h1 style={{ color: '#F2F2F2', fontFamily: 'Inter', fontSize: '36px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal', width: '310px', height: '44px' }}>
                Team-Driven
                    </h1>
                    <h6 style={{ color: '#F2F2F2', fontFamily: 'Lato', fontSize: '18px', fontStyle: 'normal', fontWeight: '400', lineHeight: '25px', width: '599px', height: '175px' }}>
                    I thrive in team environments, bringing strong communication and problem-solving skills to achieve shared goals
                    </h6>
                </div>

            </div>

        </div>
    );
};

export default WhyWork;