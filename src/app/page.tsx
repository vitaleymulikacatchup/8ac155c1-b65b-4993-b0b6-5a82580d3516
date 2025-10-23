"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import TestimonialCardThree from '@/components/sections/testimonial/TestimonialCardThree';
import SocialProofTwo from '@/components/sections/socialProof/SocialProofTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Bed, Building2, ChefHat, Dumbbell, Flower2, MessageSquare, Phone, Sparkles, Star, Waves } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "Events", id: "events" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grand Vista Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.grandvistahotel.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Beyond Compare"
          description="Welcome to Grand Vista Hotel, where exceptional service meets unparalleled elegance. Discover a world of comfort and sophistication in the heart of the city."
          tag="5-Star Hotel"
          tagIcon={Star}
          buttons={[
            { text: "Reserve Your Stay", href: "https://booking.grandvistahotel.com" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel lobby with elegant interior design"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Hospitality Redefined"
          description={[
            "For over 25 years, Grand Vista Hotel has been the epitome of luxury hospitality, setting the standard for exceptional service and elegant accommodations.",
            "Our commitment to excellence ensures that every guest experiences the perfect blend of comfort, sophistication, and personalized care that makes every stay memorable."
          ]}
          buttons={[
            { text: "Our Story", href: "about" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxurious Accommodations"
          description="Choose from our carefully designed rooms and suites, each offering the perfect blend of comfort and elegance"
          tag="Rooms & Suites"
          tagIcon={Bed}
          products={[
            {
              id: "1",
              brand: "Grand Vista",
              name: "Deluxe Suite",
              price: "$450/night",
              rating: 5,
              reviewCount: "2.8k",
              imageSrc: "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe Suite with city view"
            },
            {
              id: "2",
              brand: "Grand Vista",
              name: "Presidential Suite",
              price: "$850/night",
              rating: 5,
              reviewCount: "1.2k",
              imageSrc: "https://images.pexels.com/photos/14917460/pexels-photo-14917460.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Presidential Suite living area"
            },
            {
              id: "3",
              brand: "Grand Vista",
              name: "Family Suite",
              price: "$650/night",
              rating: 5,
              reviewCount: "3.5k",
              imageSrc: "https://images.pexels.com/photos/7533766/pexels-photo-7533766.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Spacious family suite"
            }
          ]}
          buttons={[
            { text: "View All Rooms", href: "rooms" }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardTwo
          title="World-Class Amenities"
          description="Indulge in our exceptional facilities designed to enhance your stay with luxury and convenience"
          tag="Amenities"
          tagIcon={Sparkles}
          features={[
            {
              title: "Luxury Spa & Wellness",
              description: "Rejuvenate your body and mind at our full-service spa featuring therapeutic treatments and wellness programs",
              icon: Flower2
            },
            {
              title: "Infinity Pool & Deck",
              description: "Relax by our stunning rooftop infinity pool with panoramic city views and premium poolside service",
              icon: Waves
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Stay active in our modern fitness center equipped with the latest exercise equipment and personal training services",
              icon: Dumbbell
            },
            {
              title: "Fine Dining Restaurant",
              description: "Experience culinary excellence at our award-winning restaurant featuring international cuisine and premium wines",
              icon: ChefHat
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardTwo
          title="Excellence in Numbers"
          description="Our commitment to exceptional service is reflected in these achievements"
          tag="Awards"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "98%",
              description: "Guest Satisfaction Rate"
            },
            {
              id: "2",
              value: "25+",
              description: "Years of Excellence"
            },
            {
              id: "3",
              value: "500k+",
              description: "Happy Guests Served"
            },
            {
              id: "4",
              value: "50+",
              description: "International Awards"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThree
          title="Guest Experiences"
          description="Discover what our valued guests say about their stay at Grand Vista Hotel"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              handle: "@sarahtravels",
              testimonial: "Absolutely stunning hotel! The service was impeccable and the attention to detail was remarkable. Every moment of our stay felt truly special.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              handle: "@mchen_business",
              testimonial: "Perfect for business travelers. The concierge service was outstanding and the meeting facilities exceeded all expectations. Highly recommended!",
              imageSrc: "https://images.pexels.com/photos/34389929/pexels-photo-34389929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              handle: "@emily_explores",
              testimonial: "The spa experience was transformative and the rooftop pool area provided the most incredible city views. A true luxury escape in the heart of the city.",
              imageSrc: "https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David & Lisa Kim",
              handle: "@kimsadventures",
              testimonial: "Our honeymoon suite was beyond our wildest dreams. The staff made our special celebration unforgettable with their thoughtful touches and exceptional care.",
              imageSrc: "https://images.pexels.com/photos/34345272/pexels-photo-34345272.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David and Lisa Kim"
            },
            {
              id: "5",
              name: "Amanda Foster",
              handle: "@foster_exec",
              testimonial: "As a frequent traveler, I can confidently say Grand Vista sets the gold standard for luxury hospitality. Every detail is perfectly executed.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Amanda Foster"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofTwo
          title="Trusted by Leading Companies"
          description="Corporate partners who choose Grand Vista for their business events and executive accommodations"
          tag="Partners"
          tagIcon={Building2}
          logos={[
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Get In Touch"
          tagIcon={Phone}
          title="Ready for Your Perfect Stay?"
          description="Contact our dedicated team to plan your exceptional experience at Grand Vista Hotel. We're here to make your stay unforgettable."
          inputPlaceholder="Enter your email for updates"
          buttonText="Contact Us"
          termsText="By contacting us, you agree to receive updates about our services and exclusive offers."
          imageSrc="https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Hotel concierge desk with professional staff"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grand Vista Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" }
              ]
            },
            {
              items: [
                { label: "Events & Meetings", href: "events" },
                { label: "Wedding Services", href: "weddings" },
                { label: "Corporate Packages", href: "corporate" },
                { label: "Special Offers", href: "offers" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press & Media", href: "press" },
                { label: "Sustainability", href: "sustainability" }
              ]
            },
            {
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Guest Services", href: "services" },
                { label: "Concierge", href: "concierge" },
                { label: "Location", href: "location" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}