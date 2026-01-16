import React, { useState } from 'react';
import { X, ZoomIn, ChevronLeft, ChevronRight, Image, Calendar, Award, Users, BookOpen } from 'lucide-react';

function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categories = [
        { name: 'All', icon: <Image className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: 'Events', icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: 'Workshops', icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: 'Students', icon: <Users className="w-4 h-4 sm:w-5 sm:h-5" /> },
        { name: 'Classes', icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" /> }
    ];

    const galleryImages = [
        {
            id: 1,
            url: "/gallery/g1.jpeg",
            title: "Computer Lab Workshop",
            category: "Workshops",
            description: "Students learning advanced programming techniques"
        },
        {
            id: 2,
            url: "/gallery/g2.jpeg",
            title: "Annual Tech Fest",
            category: "Events",
            description: "Our biggest tech event of the year"
        },
        {
            id: 3,
            url: "/gallery/g3.jpeg",
            title: "Coding Bootcamp",
            category: "Classes",
            description: "Intensive programming training session"
        },
        {
            id: 4,
            url: "/gallery/g4.jpeg",
            title: "Student Achievement Day",
            category: "Events",
            description: "Celebrating our students' success"
        },
        {
            id: 5,
            url: "/gallery/g5.jpeg",
            title: "Group Study Session",
            category: "Students",
            description: "Collaborative learning environment"
        },
        {
            id: 6,
            url: "/gallery/g6.jpeg",
            title: "Web Development Workshop",
            category: "Workshops",
            description: "Learning modern web technologies"
        },
        {
            id: 7,
            url: "/gallery/g7.jpeg",
            title: "Design Thinking Class",
            category: "Classes",
            description: "Creative problem-solving session"
        },
        {
            id: 8,
            url: "/gallery/g8.jpeg",
            title: "Team Building Activity",
            category: "Events",
            description: "Building stronger connections"
        },
        {
            id: 9,
            url: "/gallery/g9.jpeg",
            title: "Graduation Ceremony",
            category: "Events",
            description: "Celebrating course completion"
        },
        {
            id: 10,
            url: "/gallery/g10.jpeg",
            title: "Data Science Workshop",
            category: "Workshops",
            description: "Hands-on data analysis training"
        },
        {
            id: 11,
            url: "/gallery/g11.jpeg",
            title: "Classroom Learning",
            category: "Classes",
            description: "Interactive classroom session"
        },
        {
            id: 12,
            url: "/gallery/g12.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 13,
            url: "/gallery/g13.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 14,
            url: "/gallery/g14.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 15,
            url: "/gallery/g15.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 16,
            url: "/gallery/g16.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 17,
            url: "/gallery/g17.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 18,
            url: "/gallery/g18.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 19,
            url: "/gallery/g19.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 20,
            url: "/gallery/g20.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 21,
            url: "/gallery/g21.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 22,
            url: "/gallery/g22.jpg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 23,
            url: "/gallery/g23.jpg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 24,
            url: "/gallery/g24.jpg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 25,
            url: "/gallery/g25.jpg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 26,
            url: "/gallery/g26.jpg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 27,
            url: "/gallery/g27.jpeg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        },
          {
            id: 28,
            url: "/gallery/g28.jpg",
            title: "Student Success Stories",
            category: "Students",
            description: "Our amazing students achieving their goals"
        }
    ];

    const filteredImages = selectedCategory === 'All' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === selectedCategory);

    const openLightbox = (image) => {
        setSelectedImage(image);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const navigateImage = (direction) => {
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
        let newIndex;
        
        if (direction === 'next') {
            newIndex = (currentIndex + 1) % filteredImages.length;
        } else {
            newIndex = currentIndex - 1 < 0 ? filteredImages.length - 1 : currentIndex - 1;
        }
        
        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
                
                <div className="relative max-w-7xl mx-auto px-4 py-16 sm:py-20 lg:py-24 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">Gallery</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-indigo-100 max-w-3xl mx-auto">
                        Explore moments from our journey - workshops, events, and the incredible community we've built together.
                    </p>
                </div>

                {/* Wave divider */}
                <div className="absolute bottom-0 left-0 right-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
                        <path fill="#f9fafb" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                    </svg>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Category Filter */}
                <div className="mb-8 sm:mb-12">
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full whitespace-nowrap transition-all duration-300 text-sm sm:text-base font-medium ${
                                    selectedCategory === category.name
                                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
                                }`}
                            >
                                {category.icon}
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Image Count */}
                <div className="text-center mb-6 sm:mb-8">
                    <p className="text-sm sm:text-base text-gray-600">
                        Showing <span className="font-bold text-indigo-600">{filteredImages.length}</span> {filteredImages.length === 1 ? 'image' : 'images'}
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                    {filteredImages.map((image, index) => (
                        <div
                            key={image.id}
                            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                            onClick={() => openLightbox(image)}
                            style={{
                                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                            }}
                        >
                            <div className="aspect-square overflow-hidden">
                                <img
                                    src={image.url}
                                    alt={image.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-2 sm:px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full mb-2">
                                        {image.category}
                                    </span>
                                    <h3 className="text-white font-bold text-base sm:text-lg mb-1">
                                        {image.title}
                                    </h3>
                                    <p className="text-white/80 text-xs sm:text-sm">
                                        {image.description}
                                    </p>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Results */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-12 sm:py-16">
                        <Image className="w-16 h-16 sm:w-20 sm:h-20 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-xl sm:text-2xl font-medium text-gray-700 mb-2">No images found</h3>
                        <p className="text-sm sm:text-base text-gray-500">Try selecting a different category</p>
                    </div>
                )}
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={closeLightbox}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-50"
                        aria-label="Close"
                    >
                        <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Previous Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('prev');
                        }}
                        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-50"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            navigateImage('next');
                        }}
                        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2 sm:p-3 rounded-full transition-all z-50"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    {/* Image Container */}
                    <div 
                        className="relative max-w-6xl w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.url}
                            alt={selectedImage.title}
                            className="w-full h-auto max-h-[70vh] sm:max-h-[80vh] object-contain rounded-lg"
                        />
                        
                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
                            <span className="inline-block px-2 sm:px-3 py-1 bg-indigo-600 text-white text-xs font-medium rounded-full mb-2">
                                {selectedImage.category}
                            </span>
                            <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl mb-1 sm:mb-2">
                                {selectedImage.title}
                            </h3>
                            <p className="text-white/80 text-sm sm:text-base">
                                {selectedImage.description}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
        </div>
    );
}

export default Gallery;