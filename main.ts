<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>THE COAST</title>

</head>
<style>
    body {
         background-image: url("old_white_wood_70100-450x315.jpg");
    background-size: cover;
        display: grid;
        grid-template-areas: "header header header header"
                          "sidebar section section aside"
                          "footer footer footer footer" ; 
                          gap:50px;
                         }

a { color: black;}
    img {padding: 25px;
        width: 200px;
        height: 200px;
        opacity: 0.9;
    }
    /* header { 
         position: relative;     
        animation: titel ;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: 1;
        
    }
    @keyframes title { from {width: 30%; height: 7%;}
    to {width:7%; height: 17%;}
    }
   */


    .header { grid-area: header;
        font-size: xx-large;
        font-family: 'Hachi Maru Pop', cursive;
        text-align: center;
        color: blanchedalmond;
        background-color: black;
        opacity: 0.4;

        }
 
    .section {grid-area: section;
    font-size: x-large;
    font-family: 'East Sea Dokdo', cursive;
    border: 2px solid black;
    box-shadow: 4px 4px 4px wheat;
    padding: 20px;
        }
    
    .sidebar {grid-area: sidebar;
     font-size: x-large;
     }

    .aside{grid-area: aside; 
        }

    .footer {grid-area: footer;
    text-align: center;
    font-family: 'Hachi Maru Pop', cursive;
    font-size:x-large;
    color: blanchedalmond;
    background-color: black;
        opacity: 0.4;
        
    
   }
   button { font-size: large;
   color: blanchedalmond;}
   
   .sidebar:hover { font-size: xx-large;
   color: blanchedalmond;}

</style>

<body>
    
    <header  class="header">THE COAST HOTEL</header>

    <section class="section">
        <p> Welcome to resort Stylish and contemporary, our resort design is based on outdoor living, bringing the Koh
            Phangan sunset beach
            and the natural atmosphere into our resort, making it a special place for everyone to relax, enjoy and
            remember. A minimalist design resort made with a simple and minimalist hospitality idea; simply to make
            people happy. Build a modern resort, build a team of good people, make them happy and they in turn make our
            Guests happy.

            Come be our Guest, make new friends and experience this unique island with us</p>
    </section>
                                    
    <sidebr>
        <div class="sidebar">
            <div> <a href="#">About us</a></div>
            <br>
            <br>
            <div> <a href="#">Services</a></div>
            <br>
            <br>
            <div> <a href="#">rooms</a></div>
            <br>
            <br>
            <div><a href="#">deals</a></div>
            <br>
            <br>
            <div> <button><a class="deal" href="#">book now </a></div></button>
        </div>
    </sidebr>

    <aside class="aside">
        
        <img src="1-TCP-Sea-View-Villa-Terrace.jpg" alt="gallery">
        <img src="coast-kilmore-quay.jpg" alt="gallery">
        <img src="coast_hotel_featured.jpg" alt="gallery">
        <img src="coast.png" alt="gallery">


    </aside>

    <footer class="footer"> <i class="fa fa-phone-square" style="font-size:24px">For customer service call 089418884<i class="fa fa-phone-square" style="font-size:24px"></i> </footer>







</body>

</html>