// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    navUl.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navUl.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Newsletter Form Submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input').value;
    
    // Here you would typically send the email to your server
    console.log('Subscribed with email:', email);
    
    // Show success message
    alert('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Testimonial Slider
const testimonials = document.querySelectorAll('.testimonial');
const prevBtn = document.querySelector('.testimonial-nav .prev');
const nextBtn = document.querySelector('.testimonial-nav .next');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    testimonials[index].classList.add('active');
}

prevBtn.addEventListener('click', () => {
    currentTestimonial--;
    if (currentTestimonial < 0) {
        currentTestimonial = testimonials.length - 1;
    }
    showTestimonial(currentTestimonial);
});

nextBtn.addEventListener('click', () => {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
});

// Auto-rotate testimonials
setInterval(() => {
    currentTestimonial++;
    if (currentTestimonial >= testimonials.length) {
        currentTestimonial = 0;
    }
    showTestimonial(currentTestimonial);
}, 5000);

// Gallery Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send this data to your server
        console.log('Form submitted:', { name, email, phone, service, message });
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  });
  