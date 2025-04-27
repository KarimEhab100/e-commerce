import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testimonials = [
    { name: 'Sarah M.', image: 'https://randomuser.me/api/portraits/women/1.jpg', text: "I'm blown away by the quality and style..." },
    { name: 'Alex K.', image: 'https://randomuser.me/api/portraits/men/2.jpg', text: "Finding clothes that align with my personal style..." },
    { name: 'James L.', image: 'https://randomuser.me/api/portraits/men/3.jpg', text: "As someone who's always on the lookout for unique fashion pieces..." },
    { name: 'Emma R.', image: 'https://randomuser.me/api/portraits/women/4.jpg', text: "The customer service at Shop.co is exceptional..." },
    { name: 'Michael T.', image: 'https://randomuser.me/api/portraits/men/5.jpg', text: "The quality of their clothes is outstanding..." },
    { name: 'Sophia P.', image: 'https://randomuser.me/api/portraits/women/6.jpg', text: "I love how Shop.co stays current with fashion trends..." },
    
    // New testimonials
    { name: 'Olivia B.', image: 'https://randomuser.me/api/portraits/women/7.jpg', text: "The clothes fit perfectly and are so comfortable!" },
    { name: 'Daniel H.', image: 'https://randomuser.me/api/portraits/men/8.jpg', text: "I’m always getting compliments on my outfits from here." },
    { name: 'Liam P.', image: 'https://randomuser.me/api/portraits/men/9.jpg', text: "Great variety and excellent quality. Highly recommend!" },
    { name: 'Ava S.', image: 'https://randomuser.me/api/portraits/women/10.jpg', text: "I'm so happy with my purchase, the fabrics are amazing." },
    { name: 'Ethan W.', image: 'https://randomuser.me/api/portraits/men/11.jpg', text: "Perfect for my style, always top-notch quality!" },
    { name: 'Chloe R.', image: 'https://randomuser.me/api/portraits/women/12.jpg', text: "Love the trendy designs and they fit so well." }
  ];
  groupedTestimonials: any[] = [];

  ngOnInit() {
    const perSlide = 3;
    for (let i = 0; i < this.testimonials.length; i += perSlide) {
      this.groupedTestimonials.push(this.testimonials.slice(i, i + perSlide));
    }
  }
}
