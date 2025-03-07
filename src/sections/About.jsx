import { useState,  useRef, useEffect } from 'react'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(false)
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            // Play the video when the component mounts
            video.play();

            // Add event listener to loop the video
            video.addEventListener('ended', () => {
                video.currentTime = 0;
                video.play();
            });

            // Prevent pausing
            video.addEventListener('pause', () => {
                video.play();
            });
        }
    }, []);

    const handleCopy = () => {
        navigator.clipboard.writeText('peterslap67@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 20000);
    }
    const copyPhoneNumber = () => {
        navigator.clipboard.writeText('+254 113316552')
        setPhoneNumber(true)
        
        setTimeout(() => {
            setPhoneNumber(false)
        }, 20000);
    }

  return (
    <section className='c-space my-20' id="about">
        <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-0 h-fit'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid1.png' className='w-full sm:h-[276px] h-fit object-contain' />
                    <div>
                        <h4 className='grid-headtext'>Hi, I&lsquo;m Peter</h4>
                        <p className='grid-subtext'>
                            I am a versatile Developer and UI Designer with 5 years of experience specializing in creating seamless, user-friendly web applications. Skilled in Figma, Django, Node.js, Express, Tailwind CSS, and React, I bring a unique blend of design and development expertise to every project. My goal is to transform complex ideas into intuitive, visually appealing digital experiences that captivate users and drive engagement
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
            <div className='grid-container items-center'>
                <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:w-[276px] h-fit object-contain items-center' />
                <div>
                    <h4 className='grid-headtext'>Tech Stack</h4>
                    <p className='grid-subtext'>
                        I specialize in designing user-friendly interfaces with Figma and building robust web applications using Django, Node.js, and Express. I also style with Tailwind CSS and create dynamic UIs with React.
                    </p>
                </div>
            </div>
            </div>
            <div className="col-span-1 xl:row-span-4">
                <div className='grid-container'>
                    <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>          
                    <video
                        ref={videoRef}
                        src="assets/simulate.mp4"
                        autoPlay
                        muted
                        loop
                        width="600" // Adjust the width as needed
                    />
                    </div>
                    <div>
                        <p className='grid-headtext text-center'>User Centric, Maintainable And Secure Solutions</p>
                        <p className='grid-subtext text-center'>
                            I believe the future is completely autonomous and I proudly strive to play my part in achieving this future via creating high quality software products with modern trends and standard best practices
                        </p>
                        <a href='#contact'>
                            <Button  name="Contact Me" isBeam containerClass="w-full w-full" />
                        </a> 
                    </div>
                </div>
            </div>
            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src='/assets/grid3.jpg' alt='grid2 img' className='min-w-full sm:h-[266px] h-fit object-contain rounded-lg' />
                    <div>
                        <h4 className='grid-headtext'>
                            My passion for Coding
                        </h4>
                        <p className='grid-subtext'>
                         My passion for technology transcends the mere act of coding—it&lsquo;s about solving complex problems and creating seamless digital experiences that connect people. This deep-rooted love for innovation drives me to constantly refine my skills and embrace new challenges, ultimately delivering exceptional solutions that stand out in a rapidly evolving tech landscape.
                        </p>
                    </div>
                </div>
            </div>
            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container flex items-center'>
                    <img src='assets/grid4.png' alt='grid4' className='w-full md:h-[126px] sm:h-[276px] h-fit  object-cover sm:object-top' />
                    <div className='space-y-2'>
                            <h4 className='grid-subtext text-center text-underline'>
                                Contact Me
                            </h4>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy email' />
                                <p className='grid-headtext'>peterslap67@gmail.com</p>
                            </div>
                            <div className='copy-container' onClick={copyPhoneNumber}>
                                <img src={phoneNumber ? 'assets/tick.svg' : 'assets/copy.svg'} alt='copy email' />
                                <p className='grid-headtext'>
                                    +254-113,331,552
                                </p>
                            </div>
                            <div className='flex flex-col items-center'>
                            <div className='flex w-full items-center justify-between pb-5'>
                                    <p className='grid-headtext underline'>Scan QR To whatsapp Me</p>
                                    <a className="social-icon hover:cursor-pointer" href="https://wa.link/om8aa8" target="_blank">
                                        <img src="/assets/whatsapp.png" alt="whatsapp image" />
                                    </a>
                                </div>
                                <img src="/assets/whatsappScan.png" className='w-1/4 h-1/4' alt="scan for whatsapp" /> 
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
