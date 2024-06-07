	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-sun')){
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.remove('active');
        }
    }

    // const contactForm = document.getElementById("contact-form"),
    //       contactMessage = document.getElementById("contact-message")


    // const sendEmail = (e)=>{
    //     e.preventDefault()

    //     // serviceID - templeteID - #form - publickey

    //     emailjs.sendForm('service_a9ooeo9','template_0sw32bg','#contact-form','w85yGTXpb-Z_4mGlX')
    //         .then(()=>{
    //             // Show Sent Message
    //             contactMessage.textContent = 'Message sent successfully !!!'

    //             // Remove Message
    //             setTimeout(()=>{
    //             contactMessage.textContent = ''
    //             },5000)
    //         })

    // }

    // contactForm.addEventListener('click',sendEmail)