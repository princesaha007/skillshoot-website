import { useState } from 'react';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import logoImage from '../images/Logo.png';
import instaLogo from '../images/bxl-instagram-alt (1) 1.png'
import twLogo from '../images/bxl-twitter (1) 1.png'
import disLogo from '../images/bxl-discord-alt 1.png'
import WomanPic from '../images/pexels-max-fischer-5212317-removebg-preview 1.png'
import groupPic from '../images/Group 23.png'
import vectorImg from  '../images/Vector 1.png'
import orangeImg from '../images/Group 25.png'
import PurpleImg from '../images/Group 15.png'
import blueImg from '../images/Group 24.png'
import uberImge from '../images/image 11.png'
import googleImge from '../images/image 12.png'
import paypalImge from '../images/image 13.png'
import microsoftImge from '../images/image 14.png'
import diddleImge from '../images/image 15.png'
import boyImg from '../images/pexels-katerina-holmes-5905497-removebg-preview 1 (1).png'
import topleftImg from '../images/Intersect (1).png'
import bottomRightImg from '../images/Intersect.png'
import gpA from '../images/Group 574.png'
import gpB from '../images/Group 575.png'
import gpC from '../images/Group 576.png'
import gpD from '../images/Group 577.png'
import capMan from '../images/unsplash_d1UPkiFd04A.png'
import capManName from '../images/Group name.png'
import kA from '../images/member.png'
import kB from '../images/materi.png'
import square from '../images/Group 542.png'
import pyramid from '../images/pyramid.png'
import circle from '../images/wool-ball.png'
import rectangle from '../images/Group 554.png'
import cartA from '../images/cart1.png'
import cartB from '../images/cart2.png'
import cartC from '../images/cart3.png'
import manA from '../images/man1.png'
import manB from '../images/man2.png'
import manC from '../images/man3.png'
import icon from '../images/bx-user 1.png'
import play from '../images/bi_play-circle-fill.png'
import iA from '../images/i1.png'
import iB from '../images/i2.png'
import iC from '../images/i3.png'
import iD from '../images/i4.png'
import womanB from '../images/woman2.png'
import roundBack from '../images//rec.png'
import tick from '../images/check-circle-1.png'
import tickB from '../images/tick2.png'
import roundA from '../images/round1.png'
import roundB from '../images/round2.png'
import roundC from '../images/round3.png'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import footImgA from '../images/footImg1.png'
import footImgB from '../images/footImg2.png'


const Home = () => {

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   initialSlide: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }

  //   ]
  // };


  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };










  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>

{/* banner 1 starts here */}
      <div className="bg-background-color   text-white px-8 py-1 md:h-banner-h" >
        <nav className="container mx-auto flex justify-between items-center p-5 relative">
          <div className="flex items-center">
            <img className="h-10" src={logoImage} alt="Logo" />
          </div>

          <button
            className="lg:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">Home</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">Course</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">Subscribe</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">About</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">Testimonial</a>
          </div>

          <div className='hidden md:flex items-center space-x-4'>
            <button className='px-4'>Login</button>
            <button className='px-7 bg-button-color py-2 font-bold rounded-lg'>Register</button>
          </div>
        </nav>


<div className='flex gap-10'>

<div className='relative '>


<div>
  <h1 className='font-bold text-xl text-center md:text-left md:text-5xl  mx-6 py-3'>
    <span className='block mb-0 md:mb-4'>There is always</span>
    <span className='block mb-0 md:mb-4'>something new for</span>
    <span className='block'>us to learn</span>
  </h1>
</div>

<div>
  <h1 className='font-extralight text-xxs text-center md:text-left md:text-xl  mx-6 py-3'>
    <span className='block mb-0 md:mb-2'>we have created more than 100+ materials on various</span>
    <span className='block mb-0 md:mb-2'>things that will help your career, with mentors who are</span>
    <span className='block'>experienced in their fields.</span>
  </h1>
</div>

   <div >
      <div className= 'px-10 md:px-6 py-3 block md:flex items-center gap-4'>
    
         <button className='bg-button-color rounded-sm px-9 py-2 font-semibold '> Start Journey</button>

         <div className='flex gap-2 px-8 py-3 md:p-0'>
            <img className='h-6 ' src= {instaLogo} alt="" />
             <img className='h-6 ' src= {twLogo} alt="" />
             <img className='h-6 ' src= {disLogo} alt="" />
         </div>

      </div>

    </div>

    <div className='absolute top-9  left-2/3 transform -translate-x-1/2 md:left-52 md:translate-x-0 md:top-16 md:right-10'>
        <img className='h-2 md:h-3' src= {vectorImg} alt="" />
    </div>

   
   
</div>

    

    <div className='pl-96 hidden md:block relative'>
      <img className='h-4/5 pt-9' src= {WomanPic} alt="" />

        <div className='absolute bottom-64 right-80'>
        <img src= {groupPic} alt="" />
        </div>

    <div className=''>
    <img className=' absolute right-28 ' style={{bottom: '450px'}} src= {orangeImg} alt="" />
    <img className=' absolute  ' style={{bottom: '420px' , left: '290px'}}  src= {PurpleImg} alt="" />
    <img className=' absolute  ' style={{bottom: '130px', left: '720px'}}   src= {blueImg} alt="" />
    </div>

    </div>

   


</div>














      </div>
{/* banner 1 ends here */}





{/* banner 2 starts here  */}

        <div>

        <div className=" bg-white px-8 py-20 h-3/4 relative" >
        <h1 className="text-sm md:text-4xl font-bold text-center">Trusted more than <span className='text-button-color'>100+</span> in the world</h1>
        <p className='text-xxs md:text-lg text-center py-3 pt-7 text-gray-500'>they have asked us more than 3 times to teach their employees <br /> about various things. to improve their skills</p>


      <div className='grid grid-cols-2 gap-8 md:gap-0 px-11 md:flex md:justify-center items-center  pt-7'>
        <img className='w-full md: h-7 object-contain' src={uberImge} alt="Uber" />
        <img className='w-full md: h-10 object-contain' src={googleImge} alt="Google" />
        <img className='w-full md: h-10 object-contain' src={paypalImge} alt="Paypal" />
        <img className='w-full md: h-10 object-contain' src={microsoftImge} alt="Microsoft" />
        <img className='w-full md: h-9 object-contain ' src={diddleImge} alt="Diddle" />
      </div>

      </div>




        </div>
{/* banner 2 ends here */}




{/* banner 3 starts here */}

<div className='bg-background-color-2 mx-7 mt-0 md:mt-20 rounded-xl   md:mx-24 px-10 relative '>
    <div > 

    <div className="p-6  md:p-12 max-w-screen-sm mx-auto md:mx-12">
  <p className='text-pxs md:text-2xl lg:text-4xl font-bold text-center md:text-start leading-snug mx-0 mb-3 md:mb-3 '>
    Happy <span className='text-orange-color'>Chinese New Year</span>, 20%</p>
    
     
     <p className='text-pxs md:text-2xl lg:text-4xl font-bold text-center md:text-start leading-snug mx-0 mb-1 md:mb-6'>discount for you today</p>
  
  <button className='bg-background-color text-sm md:text-lg text-white px-2 md:px-7 py-2 my-4 font-bold'>Subscribe Course</button>
</div>


</div>

<div className='absolute hidden md:block bottom-1 ' style={{ right: '90px'}}>
    <img src= {boyImg} alt="" />
</div>

<div className='absolute  top-0 left-0 '>
    <img className='h-8 md:h-16 ' src= {topleftImg}  alt="" />
</div>

<div className='absolute  bottom-0 right-0 '>
    <img className='h-8 md:h-16 ' src= {bottomRightImg}  alt="" />
</div>

<div className='absolute hidden md:block  top-20 right-96 '>
    <img className=' h-14 ' src= {gpA}  alt="" />
</div>

<div className='absolute hidden md:block  top-14 right-12 '>
    <img className=' h-12' src= {gpB}  alt="" />
</div>

<div className='absolute hidden md:block  bottom-12 right-20 '>
    <img className=' h-12' src= {gpC}  alt="" />
</div>

<div className='absolute bottom-5 md:bottom-8 right-56 md:right-80 '>
    <img className=' h-4 md:h-6 ' src= {gpD}  alt="" />
</div>





</div>

{/* banner 3 ends here */}




{/* banner 4 starts here  */}

<div>

  <div className='bg-white my-7 px-8 md:px-24 pt-3 md:pt-6 h-3/4 grid md:flex justify-between items-center'>
    <div className='max-w-half'>
      <p className='text-sm md:text-3.5xl font-bold text-center md:text-start'>Why do we <span className='text-orange-color'>exist?</span></p>

      <p className='text-pxs md:text-base text-center md:text-start py-3 pt-3 md:pt-6 text-gray-500 '>Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills</p>

      <div className='flex items-center gap-4 pt-3 md:pt-4  ml-6 md:ml-0'>
        <div className=''>
        <img className='h-14 md:h-14' src= {capMan} alt="" />
        </div>

        <div>
          <img className='h-10' src= {capManName} alt="" />
        </div>
      </div>
      <hr className=' border-t-1 mt-6 border-gray-500' />

      <div className='flex items-center gap-5 md:gap-10 mt-5 ml-9 md:ml-0'>
      <div  className=''>
        <img className='h-20' src= {kB} alt="" />
        </div>

        <div>
          <img className='h-20' src= {kA} alt="" />
        </div>

      </div>

    </div>

    <div className='grid grid-cols-1 mt-3 md:grid-cols-2 gap-4 md:gap-x-32'>

    <div  className='max-w-box'>
  <div className='ml-24 py-3 md:ml-7 '><img src={square} alt="" /></div>
  <div className='ml-7'>
    <p className='font-bold text-center md:text-start text-lilsmall'>Material Limitations</p>
    <p className='text-pxs md:text-base text-center md:text-start text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>

</div>

<div  className='max-w-box'>
  <div className='ml-24 py-3 md:ml-7 '><img src={pyramid} alt="" /></div>
  <div className='ml-7'>
    <p className='font-bold text-center md:text-start text-lilsmall'>Unprofessional Mentor</p>
    <p className='text-pxs md:text-base text-center md:text-start text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>

</div>

<div  className='max-w-box'>
  <div className='ml-24 py-3 md:ml-7 '><img src={circle} alt="" /></div>
  <div className='ml-7'>
    <p className='font-bold text-center md:text-start text-lilsmall'>Video Quality</p>
    <p className='text-pxs md:text-base text-center md:text-start text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>

</div>

<div  className='max-w-box'>
  <div className='ml-24 py-3 md:ml-7 '><img src={rectangle} alt="" /></div>
  <div className='ml-7'>
    <p className='font-bold text-center md:text-start text-lilsmall'>High Price</p>
    <p className='text-pxs md:text-base text-center md:text-start text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>

</div>

    </div>
  </div>



</div>

{/* banner 4 ends here  */}




{/* banner 5 starts here */}

<div className='bg-background-color  py-1 h-3/4 px-4  md:px-20 relative  '>

<div className='text-white mt-12 text-base md:text-4xl font-bold text-center'>Popular courses of the week</div>

<div className='text-pxs2 md:text-base text-center py-3 pt-2 md:pt-6 font-light text-gray-200 max-w-box2 mx-auto '>List of the most popular lists that are often studied by our members</div>


{/* <Slider {...settings}> */}
<Carousel responsive={responsive}>


<div className='bg-white md:mx-3 h-cart-height w-72 md:w-80 rounded-xl mt-3  '>

<div className='relative'>
  <img src= {cartA
  } alt="" />

  <div className='absolute top-16 md:top-20 left-28 md:left-32'>
    <img src= {play} alt="" />
  </div>



</div>

<div className='py-2 px-3'>
<p className='font-bold text-start text-lilsmall'>Basics of learning team management</p>

<div className='flex items-center gap-8 p-1'>


<div className='flex items-center gap-12'>
  <div>
    <img className='pt-4 w-10' src= {manA} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-pxs3 md:text-sm'>Jone Owel</p>
    <p className='text-pxs3 md:text-pxs'>IT Manager</p>
  </div>
</div>


<div>
<div className='flex items-center gap-2'>
  <div>
    <img className='pt-4 w-8' src= {icon} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-xs md:text-sm'>120</p>
    <p className='text-xs'>Participant</p>
  </div>

</div>


</div>
</div>

<div className='flex gap-14 items-center'>

<div>
  <button className='bg-background-color font-bold rounded-lg text-white px-3 py-2.5 mt-6 ml-2'>Buy Now</button>
</div>

<div >
  <p className='font-bold text-black text-lg mt-5'>$120<span className='text-xs font-light'>/25 Video</span></p>
</div>



</div>



</div>




</div>

<div className='bg-white md:mx-3 h-cart-height w-72 md:w-80 rounded-xl mt-3 '>

<div className='relative'>
  <img src= {cartB} alt="" />

  <div className='absolute top-16 md:top-20 left-28 md:left-32'>
    <img src= {play} alt="" />
  </div>



</div>

<div className='py-2 px-3'>
<p className='font-bold text-start text-lilsmall'>Learn basic database structure</p>

<div className='flex items-center gap-8 p-1'>


<div className='flex items-center gap-3'>
  <div>
    <img className='pt-4 w-10' src= {manB} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-pxs md:text-sm'>Roynaldo Jr</p>
    <p className='text-pxs'>Data Science</p>
  </div>
</div>


<div>
<div className='flex items-center gap-2'>
  <div>
    <img className='pt-4 w-8' src= {icon} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-xs md:text-sm'>55</p>
    <p className='text-xs'>Participant</p>
  </div>

</div>


</div>
</div>

<div className='flex gap-14 items-center'>

<div>
  <button className='bg-background-color font-bold rounded-lg text-white px-3 py-2.5 mt-6 ml-2'>Buy Now</button>
</div>

<div >
  <p className='font-bold text-black text-lg mt-5'>$180<span className='text-xs font-light'>/55 Video</span></p>
</div>



</div>



</div>


</div>

<div className='bg-white md:mx-3 h-cart-height w-72 md:w-80 rounded-xl mt-3 '>

<div className='relative'>
  <img src= {cartC} alt="" />

  <div className='absolute top-16 md:top-20 left-28 md:left-32'>
    <img src= {play} alt="" />
  </div>
</div>

<div className='py-2 px-3'>
<p className='font-bold text-start text-lilsmall'>Create dynamic website with basic php</p>

<div className='flex items-center gap-8 p-1'>


<div className='flex items-center gap-3'>
  <div>
    <img className='pt-4 w-10' src= {manC} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-pxs md:text-sm'>Markus Low </p>
    <p className='text-pxs'>Programer</p>
  </div>
</div>


<div>
<div className='flex items-center gap-2'>
  <div>
    <img className='pt-4 w-8' src= {icon} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-xs md:text-sm'>98</p>
    <p className='text-xs'>Participant</p>
  </div>

</div>


</div>
</div>

<div className='flex gap-14 items-center'>

<div>
  <button className='bg-background-color font-bold rounded-lg text-white px-3 py-2.5 mt-6 ml-2'>Buy Now</button>
</div>

<div >
  <p className='font-bold text-black text-lg mt-5'>$135<span className='text-xs font-light'>/20 Video</span></p>
</div>



</div>



</div>


</div>

<div className='bg-white md:mx-3 h-cart-height w-72 md:w-80 rounded-xl mt-3 mb-10 '>

<div className='relative'>
  <img src= {cartA} alt="" />
  <div className='absolute top-16 md:top-20 left-28 md:left-32'>
    <img src= {play} alt="" />
  </div>
</div>

<div className='py-2 px-3'>
<p className='font-bold text-start text-lilsmall'>Basics of learning team management</p>

<div className='flex items-center gap-8 p-1'>


<div className='flex items-center gap-3'>
  <div>
    <img className='pt-4 w-10' src= {manA} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-pxs md:text-sm'>Jone Owel</p>
    <p className='text-pxs'>IT Manager</p>
  </div>
</div>


<div>
<div className='flex items-center gap-2'>
  <div>
    <img className='pt-4 w-8' src= {icon} alt="" />
  </div>

  <div className='mt-2'>
    <p className='font-bold text-xs md:text-sm'>120</p>
    <p className='text-xs'>Participant</p>
  </div>

</div>


</div>
</div>

<div className='flex gap-14 items-center'>

<div>
  <button className='bg-background-color font-bold rounded-lg text-white px-3 py-2.5 mt-6 ml-2'>Buy Now</button>
</div>

<div >
  <p className='font-bold text-black text-lg mt-5'>$120<span className='text-xs font-light'>/25 Video</span></p>
</div>



</div>



</div>


</div>

</Carousel>

{/* </Slider> */}

<div className='absolute top-8 left-5 md:top-28 md:left-48'>
  <img className='w-6 md:w-10' src= {gpB} alt="" />
</div>

<div className='absolute top-16 right-5 md:top-16 md:right-52'>
  <img className='w-3 md:w-5' src= {gpD} alt="" />
</div>

</div>

{/* banner 5 ends here  */}





{/* banner 6 starts here */}


<div className='bg-white  px-4 md:px-24 pt-3 md:pt-6 h-3/4 flex  flex-row-reverse relative'>

<div>

<div className='max-w-box3'>
<p className='text-black mt-12 text-base md:text-4xl font-bold mb-7'>Let us <span className='text-background-color'>Skill Shoot</span></p>
  <p className='text-pxs md:text-base text-start text-gray-500 mb-5'>We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want.
  </p>

  <p className='text-pxs md:text-base text-start text-gray-500 '>
  we have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
  </p>
</div>

<div className='grid grid-cols-2 max-w-box4 pt-8'>
  <div className='flex items-center gap-2'>
    <div>
    <img className='w-7 md:w-11 pt-4' src= {iA} alt="" />
    </div>
    <div>
   < p className='font-bold pt-4 text-pxs4 md:text-base'>15K People Join</p>
    </div>

  </div>

  <div className='flex items-center gap-2'>
    <div>
    <img className='w-7 md:w-11 pt-4' src= {iB} alt="" />
    </div>
    <div>
   < p className='font-bold pt-4 text-pxs4 md:text-base'>Trusted Mentor</p>
    </div>

  </div>

  <div className='flex items-center gap-2'>
    <div>
    <img className='w-7 md:w-11 pt-4' src= {iC} alt="" />
    </div>
    <div>
   < p className='font-bold pt-4 text-pxs4 md:text-base'>30+ Free Videos</p>
    </div>

  </div>

  <div className='flex items-center gap-2'>
    <div>
    <img className='w-7 md:w-11 pt-4' src= {iD} alt="" />
    </div>
    <div>
   < p className='font-bold pt-4 text-pxs4 md:text-base'>100+ Premium Videos</p>
    </div>

  </div>


</div>


</div>


<div className='pt-5  hidden md:block' >

  <div className=''>
    <img className='w-80 mr-96 mt-44 ' src={roundBack} alt="" />

    <div className=''>
      <img className='bottom-0 w-72 absolute' src= {womanB} alt="" />
    </div>

    <div>
      <img className='absolute w-48 bottom-7 left-96' src= {groupPic} alt="" />
    </div>

    <div>
      <img className='absolute w-9 bottom-36 ' src= {blueImg} alt="" />

    </div>

    <div>
      <img className='absolute w-9 bottom-80 ' src= {PurpleImg} alt="" />

    </div>

    <div>
      <img className='absolute w-9 bottom-64 left-xx' src= {orangeImg} alt="" />

    </div>

  </div>
  


</div>

<div className='absolute top-20 md:top-28 right-40 md:right-60'>
        <img className='h-2 md:h-4' src= {vectorImg} alt="" />
    </div>





</div>

{/* banner 6 ends here */}





{/* banner 7 starts here  */}

<div className='bg-background-color-2 mt-7 h-52 md:mt-20 rounded-xl m-5  md:mx-24 md:px-20 block md:flex items-center justify-between p-4 relative'>
  <div className='md:w-w2'>
  <p className='text- md:text-2xl lg:text-4xl font-bold text-center md:text-start leading-custom md:leading-3 mx-0 mb-3 md:mb-3'> <span className='text-orange-color'>Improve</span> your skills, and reach your career as soon as possible</p>
  </div>

<div className='grid justify-center items-center gap-0  md:flex md:gap-10 '>
<div>
  <button className='bg-orange-color text-sm md:text-lg text-white px-5 md:px-7 py-2 my-1 ml-5 md:ml-0 font-bold rounded-md'>join Now</button>
</div>

  <div>
  <button className='bg-background-color text-sm md:text-lg text-white px-3 md:px-7 py-3 md:py-2 my-2 font-bold rounded-md'>Subscribe Course</button>
  </div>
</div>

<div>
  <img className='absolute top-0 left-0 w-6 md:w-16' src= {topleftImg} alt="" />
</div>

<div>
  <img className='absolute bottom-xxx md:-bottom-4 -right-2  md:right-xxx w-7 md:w-9' src= {gpB} alt="" />
</div>



</div>

{/* banner 7 ends here */}




{/* banner 8 starts here */}
<div>

  <div className=''>
    <p className='mt-12 text-base md:text-4xl font-bold text-center'> <span className='text-orange-color'>Subscribe</span> with us now</p>
    <p className='  text-xxs md:text-lg text-center py-3 md:pt-7 text-gray-500'>by subscribing now you will be able to access the material easily <br /> and cheaply, so you will be very efficient and benefit</p>

  </div>

  <div className='grid md:flex justify-center items-center'>

    <div className='bg-white h-cart-height m-10 rounded-xl w-64  order-2 md:order-1'>
 

       <div>
        <p className='text-black font-extrabold text-3xl px-6 pt-4'>$50<span className='text-sm font-normal'>/ 1 month</span></p>
       </div>

       <div>
        <p className='text-black font-extrabold text-3xl px-6 pt-2'>Base</p>
        <p className='text-black text-sm px-6 pt-2'>Lorem Ipsum is simply <br /> dummy text of the printing <br />and typesetting industry </p>
       </div>

       <div className='flex items-center gap-2 px-6 pt-3'>
        <div>
          <img src= {tickB} alt="" />

        </div>
        <div>
          <p className='text-black text-xs '>Access all videos</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tickB} alt="" />

        </div>
        <div>
          <p className='text-black text-xs '>Get Certificate</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tickB} alt="" />

        </div>
        <div>
          <p className='text-black text-xs '>Chat support</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tickB} alt="" />

        </div>
        <div>
          <p className='text-black text-xs '>Update Notification</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tickB} alt="" />

        </div>
        <div>
          <p className='text-black text-xs '>Download material</p>
        </div>

       </div>

       <div>
        <button className='text-orange-color font-bold  px-8 py-1 rounded-xl ml-12 mt-4 '>Choose plan</button>
       </div>


    </div>

    <div className='bg-background-color h-cart-height m-10 rounded-xl w-64 shadow-lg shadow-gray-600 order-1 md:order-2'>
       <div>
        <button className='bg-orange-color text-white text-xs font-bold px-3 py-1 ml-32 mt-4 rounded-xl'>MOST POPULAR</button>
       </div>

       <div>
        <p className='text-white font-extrabold text-3xl px-6 pt-4 order-first md:order-none'>$100<span className='text-sm font-normal'>/ 6 month</span></p>
       </div>

       <div>
        <p className='text-white font-extrabold text-3xl px-6 pt-2'>Pro</p>
        <p className='text-white text-sm px-6 pt-2'>Lorem Ipsum is simply <br /> dummy text of the printing </p>
       </div>

       <div className='flex items-center gap-2 px-6 pt-3'>
        <div>
          <img src= {tick} alt="" />

        </div>
        <div>
          <p className='text-white text-xs '>Access all videos</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tick} alt="" />

        </div>
        <div>
          <p className='text-white text-xs '>Get Certificate</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tick} alt="" />

        </div>
        <div>
          <p className='text-white text-xs '>Chat support</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tick} alt="" />

        </div>
        <div>
          <p className='text-white text-xs '>Update Notification</p>
        </div>

       </div>

       <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
        <div>
          <img src= {tick} alt="" />

        </div>
        <div>
          <p className='text-white text-xs '>Download material</p>
        </div>

       </div>

       <div>
        <button className='text-white font-bold bg-orange-color px-8 py-1 rounded-xl ml-12 mt-4 '>Choose plan</button>
       </div>


    </div>

    <div className='bg-white h-cart-height m-10 rounded-xl w-64  order-3 md:order-3'>
 

 <div>
  <p className='text-black font-extrabold text-3xl px-6 pt-4'>$200<span className='text-sm font-normal'>/ 12 month</span></p>
 </div>

 <div>
  <p className='text-black font-extrabold text-3xl px-6 pt-2'>Enterprise</p>
  <p className='text-black text-sm px-6 pt-2'>Lorem Ipsum is simply <br /> dummy text of the printing <br />and typesetting industry </p>
 </div>

 <div className='flex items-center gap-2 px-6 pt-3'>
  <div>
    <img src= {tickB} alt="" />

  </div>
  <div>
    <p className='text-black text-xs '>Access all videos</p>
  </div>

 </div>

 <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
  <div>
    <img src= {tickB} alt="" />

  </div>
  <div>
    <p className='text-black text-xs '>Get Certificate</p>
  </div>

 </div>

 <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
  <div>
    <img src= {tickB} alt="" />

  </div>
  <div>
    <p className='text-black text-xs '>Chat support</p>
  </div>

 </div>

 <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
  <div>
    <img src= {tickB} alt="" />

  </div>
  <div>
    <p className='text-black text-xs '>Update Notification</p>
  </div>

 </div>

 <div className='flex items-center gap-2 px-6 pt-3 md:pt-2'>
  <div>
    <img src= {tickB} alt="" />

  </div>
  <div>
    <p className='text-black text-xs '>Download material</p>
  </div>

 </div>

 <div>
  <button className='text-orange-color font-bold  px-8 py-1 rounded-xl ml-12 mt-4 '>Choose plan</button>
 </div>


</div>

  </div>


</div>

{/* banner 8 ends here */}





{/* banner 9 starts here  */}

<div className='bg-background-color-3'>
  <div>
    <p className='text-black md:mt-12 md:pt-5 text-base md:text-4xl font-bold mb-5 text-center'>What do they <span className='text-orange-color'>say?</span></p>
    <p className='text-pxs md:text-base text-center text-gray-500'>This is an honest review from members who have joined us</p>
  </div>

  <Carousel responsive={responsive}>

  <div className='bg-white h-72 w-72 mt-4 mx-5 md:mx-32'>

    <div>
      <img className='w-20 ml-28 pr-2 pt-16' src= {roundA} alt="" />
    </div>

    

<div className="flex items-center ml-24  pt-3">
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div>

<div>
  <p className='text-xl font-semibold ml-24 pl-1 pt-2'>Jason Bay</p>

  <p className='text-center px-3 pt-2'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>

</div>


  </div>

  <div className='bg-white h-72 w-72 mt-4 mx-5 md:mx-32'>

    <div>
      <img className='w-20 ml-28 pr-2 pt-16' src= {roundC} alt="" />
    </div>

    

<div className="flex items-center ml-24  pt-3">
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div>

<div>
  <p className='text-xl font-semibold ml-20 md:ml-20 pl-1 pt-2'>Nany Brugman</p>

  <p className='text-center px-3 pt-2'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>

</div>


  </div>

  <div className='bg-white h-72 w-72 mt-4 mx-5 md:mx-32'>

    <div>
      <img className='w-20 ml-28 pr-2 pt-16' src= {roundB} alt="" />
    </div>

    

<div className="flex items-center ml-24  pt-3">
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div>

<div>
  <p className='text-xl font-semibold ml-20 md:ml-24 pl-1 pt-2'>Alexa Nowan</p>

  <p className='text-center px-3 pt-2'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>

</div>


  </div>

  <div className='bg-white h-72 w-72 mt-4 mx-5 md:mx-32'>

    <div>
      <img className='w-20 ml-28 pr-2 pt-16' src= {roundA} alt="" />
    </div>

    

<div className="flex items-center ml-24  pt-3">
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
    <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
    </svg>
</div>

<div>
  <p className='text-xl font-semibold ml-24 pl-1 pt-2'>Jason Bay</p>

  <p className='text-center px-3 pt-2'>I am quite satisfied, because the skills I want or dream of can really be mastered</p>

</div>


  </div>

  </Carousel>;
</div>

{/* banner 9 ends here */}





{/* footer starts here */}

<div className='bg-background-color h-34 text-white px-8 py-10 relative'>
  <div>
    <p className='text-white mt-14 text-xl md:text-4xl font-normal leading-6 text-center'>Subscribe to get notified about update</p>
    <p className='text-pxs5 leading-6 md:text-base text-center py-3 mt-4 md:pt-1 font-light text-gray-200 '>By subscribing with your mail, you will accept our privacy policy</p>
  </div>

<div className='grid  md:flex md:items-center md:justify-center gap-5 md:pt-24'>
<div>
    <input placeholder='Enter your email ' className='bg-background-color border rounded-lg py-3 px-10 md:w-96 mt-7 md:mt-0 ' type="email" name="" id="" />
  
  </div>

  <div>
  <button className='bg-orange-color text-sm md:text-lg text-white px-3 md:px-7 py-3 md:py-3 my-2 font- rounded-md ml-20 md:ml-0 mt-4 md:mt-3 '>Subscribe us</button>
  </div>



  

</div>


<div className='grid   md:flex md:justify-between px-10 pt-12 md:pt-32'>
<div className='px-8 order-2 md:order-1 pt-9 md:pt-0'>

<img src= {logoImage} alt="" />

</div>


<div className={`grid items-center justify-center text-center  md:mt-0 md:flex order-1 md:order-2 `}>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700 active:font-bold  active">Home</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">Course</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">Subscribe</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">About</a>
            <a href="#" className="block lg:inline-block px-4 py-2 text-white hover:bg-gray-700">Testimonial</a>
          </div>

</div>


<div className=''>
  <img className=' absolute w-11 md:w-16 bottom-48 md:top-96 md:left-72' src= {footImgA} alt="" />
</div>

<div className=''>
  <img className=' absolute w-12 md:w-16 top-96 right-8 md:top-52 md:right-80' src= {footImgB} alt="" />
</div>




</div>

{/* footer ends here */}






    </div>
  );
};

export default Home;
