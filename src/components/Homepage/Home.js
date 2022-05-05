import { React,useState,useEffect } from "react";
import "./Home.css";
import apple from '../../images/apple.png'
import Arrow from '../../images/Arrow.png'
import blue from '../../images/blue.png'
import calendar from '../../images/calendar.png'
import cancel from '../../images/cancel.png'
import frame28 from '../../images/Frame 28.png'
import girl from '../../images/girl.png'
import Group from '../../images/Group.png'
import house from '../../images/house.png'
import intrax from '../../images/intrax.png'
import location from '../../images/location.png'
import mastercard from '../../images/mastercard.png'
import menu from '../../images/menu.png'
import picture from '../../images/picture.png'
import plane from '../../images/plane.png'
import skate from '../../images/skate.png'
import ski from '../../images/ski.png'
import star from '../../images/star.png'
import tree from '../../images/tree.png'
import user from '../../images/user.png'
import Vector from '../../images/Vector.png'
import yellow from '../../images/yellow.png'
import map from '../../images/map.png'


function Home() {
  const [ winWidth,setWinwidth ] = useState(window.innerWidth)

  function loadResize(){
    setWinwidth(window.innerWidth)
    if( window.innerWidth<850 ){
      document.querySelector('.links').innerHTML=''
      document.querySelector('.right').innerHTML= `<div class="menu" ><img src=${menu} /> <span>Menu</span > </div>`
      document.querySelector('.menu').addEventListener('click',dropdown)
    }
    else{
      document.querySelector('.links').innerHTML=` <span>About Us</span>
      <span>Support</span>
      <span>Language</span>`
      document.querySelector('.right').innerHTML= `<button>sign in </button>`
      document.querySelector('.dropdown').innerHTML=''
    }
  }

  const dropdown =()=>{
    if(document.querySelector('.dropdown').style.height=='300px'){
      document.querySelectorAll('.p').forEach( item => item.style.visibility='hidden')
    document.querySelector('.dropdown').style.height='0px'
    document.querySelector('.menu').innerHTML= `<img src=${menu} /> <span>Menu</span > `

    }
    else{
      document.querySelector('.dropdown').style.height='300px'
      document.querySelector('.menu').innerHTML= `<img src=${cancel} />  `
      document.querySelectorAll('.p').forEach( item => item.style.visibility='visible')
    }
  
  }
    
  useEffect(()=>{
    window.addEventListener('resize',loadResize)
    window.addEventListener('load',loadResize)
    
    },[]
  )

  return (
    <>

      <div className="landingPage">
        <div className="coverimage">
        <img src={frame28} alt="cover" className="cover" />
            </div>
        <div className="headings">
          <div className="left">
            <div className="logo">
              <img src={Vector} alt="plane" className="plane" />
              <span> Damax Travels</span>
    
            </div>
            <div className="links">
              <span>About Us</span>
              <span>Support</span>
              <span>Language</span>
            </div>
          </div>
          <div className="right">
            <button>sign in </button>
          </div>
        </div>

        <div className="dropdown">
          <p className="p">about</p>
          <p className="p">support</p>
          <p className="p">Language</p>
        </div>
        <div className="bookings">
          <div className="plan">
            <h1>plan the perfect winter trip</h1>
            <span>
              easily plan your ideal ski trip from home with the help of
              professionals
            </span>
            <button>book here</button>
          </div>
        </div>
      </div>

      <div className="secondPage">
      <div className="frame">
        <div className="location">
          <span>
            <img src={location} alt="location" />
            location
          </span>
          <span>
            <b>IceLand</b>
          </span>
        </div>
        <div className="persons">
          <span>
            <img src={user} alt="user" />
            persons
          </span>
          <span>4 persons</span>
        </div>
        <div className="check-in" >
          <span>
            <img src={calendar} alt="checkin" />
            check in
          </span>
          <span>12 january 2022</span>
        </div>
        <div className="check-out">
          <span>
            <img src={calendar} alt="checkout"/>
            check out
          </span>
          <span>18 january 2022</span>
        </div>
        <div className="book-trip">
          <button onMouseOver={movePlane} onMouseOut={returnPlane}>
            book a trip <img src={plane} className="flight" alt="plane" />
          </button>
        </div>
      </div>


    <div className="sponsors">
          <img src={Group} alt="nike"/>
          <img src={apple} alt="apple"/>
          <img src={star} alt="star"/>
          <img src={intrax} alt="intrax"/>
          <img src={mastercard} alt="mastercard"/>
    </div>
    </div>

    <div className="regions">
     <h2>Creating the best <span>ice-cold !</span> experience you would never forget.</h2>
     <p>Would you explore nature paradise in the world, find the best destination in the world with us</p>
     <h2 className="view">View Regions available</h2>
     <img src={Arrow} className='arrow' />
     <img src={map} className='map' />
    </div>

    <div className="triple-image">
      <div className="imageone">
          <h2>Mountain Resort</h2>
          <img src={girl} alt="girl"/>
      </div>
      <div className="imagetwo">
          <h2>Fuji Mountain </h2>
          <img src={ski} alt="ski"/>
      </div>
      <div className="imagethree">
          <h2>Freezing WinterLake</h2>
          <img src={yellow} alt="yellow" />
      </div>

    </div>

    <div className="thirdPage">
     <div className="contain">

      <div className="relax">
      <h2 className="best">The best resort to chill and relax</h2>
      <div onMouseOver={details} onMouseOut={undetails}>
        <div>
        <h2>Badagry beach</h2>
        <p>lagos</p>
        <button>Book now</button>
        </div>
        <img src={tree} alt="house" />
        </div>
        
        <div  onMouseOver={details} onMouseOut={undetails}>
        <div>
        <h2>Lekki beach</h2>
        <p>ikeja</p>
        <button>Book now</button>
        </div>
        <img src={picture} alt="house" />
        </div>

      </div>
      
      <div className="pics">
      
        <div onMouseOver={details} onMouseOut={undetails}>
        <div>
        <h2>Elegushi beach</h2>
        <p>lagos</p>
        <button>Book now</button>
        </div>
        <img src={house} alt="house" />
        </div>
        
        <div  onMouseOver={details} onMouseOut={undetails}>
        <div>
        <h2>Landmark beach</h2>
        <p>ikeja</p>
        <button>Book now</button>
        </div>
        <img src={blue} alt="house" />
        </div>

      </div>
     </div>
    </div>

    <div className="fourthPage">
      <div className="view">
        <h1>view passes we've made available for you</h1>
        <button>view passes</button>
      </div>
      <img  src={skate}/>
    </div>
    <footer>
      <div className="up">
      
        <div className="upleft">
          <img src={Vector} alt="plane" />
          <h2>Damax Travels</h2>
          <p>Book your trip in minutes get full control for much longer.</p>
          <div>socials</div>
        </div>
      
        <div className="lists">
          <ul>
            <li>company</li>
            <li>about</li>
            <li>careers</li>
            <li>mobile</li>
          </ul>
          <ul>
            <li>contact</li>
            <li>FAQ</li>
            <li>press</li>
            <li>affiliates</li>
          </ul>
          <ul>
            <li>more</li>
            <li>airlines</li>
            <li>airfees</li>
            <li>lawfare tips</li>
          </ul>
        </div>
      </div>

      <div className="down">
      <span>© 2022 Damax Travels - Side hustle cohort 5.0 </span>
      <span>
        <p>privacy policy</p>
        <p>Terms of use</p>
      </span>
      </div>
    </footer>
    </>
  );

  
  
  function details(e){
   e.target.offsetParent.children[0].style.display='flex';
   e.target.offsetParent.children[0].style.top='45%';
   e.target.offsetParent.children[0].style.zIndex='10';
  }
  function undetails(e){
    e.target.offsetParent.children[0].style.top='5%';
    e.target.offsetParent.children[0].style.zIndex='-10';
  }


  function movePlane() {
    document.querySelector(".flight").style.transform = "translateX(25px)";
    document.querySelector(".flight").style.opacity = "0";
  }
  function returnPlane() {
    document.querySelector(".flight").style.transform = "translateX(0px)";
    document.querySelector(".flight").style.opacity = "1";
  }
}

export default Home;
