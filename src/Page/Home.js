import React from 'react'
export default function Home() {
    return (
        <div>

{/* section-0 className Rectangle */}

<div className=" section-0 container-fluid">
            <img className="Cardimg1" src="\nav bar\Rectangle 6.png" alt="rectangle1" />

</div>

            {/* section-1 className Home-Featured-categories */}
<div class="container">
    
<h1 className="Section-1-h1">Featured Categories</h1>

  <div class="my-featured-container row">
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
    <h4>CLOTHES</h4>
    </div>

    <div className="col-sm">
      One of three columns
    </div>
  </div>

</div>
            
{/* section-2 Bestsellers className Home-bestsellers */}

<div class="container">

<h1 className= "Section-1-h1">Bestsellers</h1>

  <div class="Home-Bestsellers row row-cols-4">
    <div class="col"><img src="/homepageimg/teddy-bear-2771252_1920 1.png" alt="teddybear"/>   </div>
    <div class="col">  <img src="/homepageimg/Clothes 68.png" alt="cloth68"/>  </div>
    <div class="col"> <img src="/homepageimg/Shoe 4 10.png" alt="shoe48"/> </div>
    <div class="col"> <img src="/homepageimg/Clothes 23.png" alt="cloth23"/>  </div>

    <div class="col"> <img src="/homepageimg/Clothes 53.png" alt="cloth53"/> </div>
    <div class="col"> <img src="/homepageimg/Shoe 19 1.png" alt="shoe19"/>  </div>
    <div class="col"> <img src="homepageimg/Clothes 21.png" alt="cloth21"/>  </div>
    <div class="col">  <img src="/homepageimg/Toys 23 1.png" alt="toy"/> </div>
  </div>
</div>

{/* footer-section */}
<div class="container">

<div>

  <img src="/nav bar/Desktop Logo.png" alt="home-icon"/>
  </div>



<div className="footer-section">
<div>Quick Links
<ul>
<li>Contact Us</li>
<li>About Us</li>
<li>Delivery</li>
<li>Account</li>
</ul>
</div>


<div>Terms & Polices

  <ul>
    <li>Privacy Terms</li>
    <li>Terms and Conditions</li>
    
  </ul>
</div>

<div>Socials
<ul>
<li> <img src="/footericons/facebook.png" alt="facebook"/> </li>
<li>  <img src="/footericons/instagram.png" alt="instagram"/>  </li>
<li> <img src="/footericons/twitter.png" alt="twitter"/> </li>


</ul>
</div>

<div className="stay-update">Stay Updated

<p >Subscribe our newsteller to receive updates about  new products and latest promotions.</p>
<input type="email" placeholder="email"/>
</div>



</div>

</div>

        </div>
    )
}
