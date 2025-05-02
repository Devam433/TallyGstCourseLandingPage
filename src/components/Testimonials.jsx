import { useState } from "react";
import { Star, Quote } from "lucide-react"; // Assuming you're using lucide-react or similar

const testimonials = [
  {
    name: "Rohit Das",
    role: "Accountant at XYZ Ltd.",
    image: "https://i.pravatar.cc/100?img=11",
    content: "The Tally course transformed my career. Within weeks, I landed a great job.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Freelance Bookkeeper",
    image: "https://i.pravatar.cc/100?img=12",
    content: "Excellent instructors and practical training. Highly recommended!",
    rating: 5,
  },
  {
    name: "Arjun Kalita",
    role: "Finance Assistant at ABC Corp.",
    image: "https://i.pravatar.cc/100?img=13",
    content: "Very hands-on. The job assistance was real and effective.",
    rating: 4,
  },
  {
    name: "Sonia Paul",
    role: "GST Consultant",
    image: "https://i.pravatar.cc/100?img=14",
    content: "Best course for beginners. I gained both confidence and skills.",
    rating: 5,
  },
  {
    name: "Aman Roy",
    role: "Junior Accountant",
    image: "https://i.pravatar.cc/100?img=15",
    content: "I didn't expect to learn this much. Great value for money!",
    rating: 4,
  },
  {
    name: "Neha Deka",
    role: "Accounts Trainee",
    image: "https://i.pravatar.cc/100?img=16",
    content: "The certificate helped me land my internship. Great platform.",
    rating: 5,
  },
];

const chunkTestimonials = (arr, size) =>
  arr.reduce((acc, _, i) => (i % size === 0 ? [...acc, arr.slice(i, i + size)] : acc), []);

export default function TestimonialsSection() {
  const chunks = chunkTestimonials(testimonials, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % chunks.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + chunks.length) % chunks.length);
  };

  return (
    <section id="testimonials" className="py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center px-4 py-2 bg-[#87ACE3]/10 text-[#87ACE3] rounded-full text-sm font-medium">
            <Star className="mr-2 h-4 w-4" />
            Student Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-black">
            Hear From Our <span className="text-[#87ACE3]">Graduates</span>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Our students come from diverse backgrounds but share a common goal:
            to become a Tally Expert and be job ready.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex overflow-hidden transition-transform duration-500">
            {chunks.map((group, index) => (
              <div
                key={index}
                className={`w-full flex-shrink-0 flex transition-opacity duration-500 ${
                  index === currentIndex ? "flex" : "hidden"
                }`}
              >
                {group.map((testimonial, i) => (
                  <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-4">
                    <div className="h-full bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col">
                      <div className="mb-6 text-[#87ACE3]">
                        <Quote className="h-10 w-10 opacity-20" />
                      </div>
                      <p className="flex-grow text-black/80 italic mb-6">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="hidden sm:block w-12 h-12 rounded-full mr-4 object-cover"
                          loading="lazy"
                        />
                        <div>
                          <div className="font-medium text-black">{testimonial.name}</div>
                          <div className="text-sm text-black/60">{testimonial.role}</div>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-[#87ACE3] text-[#87ACE3]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="bg-white border border-gray-200 p-2 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="bg-white border border-gray-200 p-2 rounded-full shadow hover:bg-gray-100 transition"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-[#87ACE3] mb-2">100%</div>
            <p className="text-black/70">Job Placement Rate</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-[#87ACE3] mb-2">200+</div>
            <p className="text-black/70">Graduates</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
            <div className="text-4xl font-bold text-[#87ACE3] mb-2">20k+</div>
            <p className="text-black/70">Average Starting Salary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
