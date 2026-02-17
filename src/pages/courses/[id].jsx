import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const CourseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchCourse();
    }
  }, [id]);

  const fetchCourse = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/courses/${id}`);

      if (response.ok) {
        const courseData = await response.json();
        setCourse(courseData);
      } else {
        throw new Error("Course not found");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return null;
  }

  return (
    <>
      <Head>
        <title>{course.name} - MICC</title>
        <meta name="description" content={course.shortDescription} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  {course.name}
                </h1>
                <p className="text-xl mb-6">{course.shortDescription}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
                    Duration: {course.duration}
                  </span>
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
                    Level: {course.level}
                  </span>
                  {course.fees > 0 && (
                    <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold">
                      ₹{course.fees}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-sm font-semibold">
                      🎓 Certificate Provided
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-sm font-semibold">
                      💼 Industry Relevant
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-sm font-semibold">
                      👨‍🏫 Expert Instructors
                    </span>
                  </div>
                </div>
              </div>
              {course.image && (
                <div className="flex justify-center">
                  <img
                    src={`${API_BASE_URL.replace("/api", "")}${course.image}`}
                    alt={course.name}
                    className="rounded-lg shadow-lg max-w-full h-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Course Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Description */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                <p className="text-gray-700 leading-relaxed">
                  {course.fullDescription}
                </p>
              </div>

              {/* What You'll Learn */}
              {course.learningOutcomes &&
                course.learningOutcomes.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">
                      What You'll Learn
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.learningOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Curriculum */}
              {course.curriculum && course.curriculum.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                  <div className="space-y-4">
                    {course.curriculum.map((module, index) => (
                      <div
                        key={index}
                        className="border-l-4 border-blue-500 pl-4"
                      >
                        <h3 className="text-lg font-semibold mb-2">
                          {module.module}
                        </h3>
                        {module.duration && (
                          <p className="text-sm text-gray-600 mb-2">
                            Duration: {module.duration}
                          </p>
                        )}
                        {module.topics && module.topics.length > 0 && (
                          <ul className="list-disc list-inside space-y-1">
                            {module.topics.map((topic, topicIndex) => (
                              <li key={topicIndex} className="text-gray-700">
                                {topic}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Why This Course */}
              {course.whyThisCourse && course.whyThisCourse.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-4">
                    Why Choose This Course
                  </h2>
                  <div className="space-y-3">
                    {course.whyThisCourse.map((reason, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info Card */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4">Course Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-semibold">{course.level}</span>
                  </div>
                  {course.fees > 0 && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fee:</span>
                      <span className="font-semibold">₹{course.fees}</span>
                    </div>
                  )}
                  {course.certificateProvided && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Certificate:</span>
                      <span className="font-semibold text-green-600">Yes</span>
                    </div>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-lg">
                    <span className="text-blue-600 text-sm">
                      ✓ Hands-on Projects
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-50 rounded-lg">
                    <span className="text-green-600 text-sm">
                      ✓ Lifetime Access
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg">
                    <span className="text-purple-600 text-sm">
                      ✓ Career Support
                    </span>
                  </div>
                </div>
              </div>

              {/* Prerequisites */}
              {course.prerequisites && course.prerequisites.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                  <ul className="space-y-2">
                    {course.prerequisites.map((prereq, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-orange-500 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{prereq}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tools Used */}
              {course.toolsUsed && course.toolsUsed.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold mb-4">Tools & Software</h3>
                  <div className="flex flex-wrap gap-2">
                    {course.toolsUsed.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Opportunities */}
              {course.careerOpportunities &&
                course.careerOpportunities.length > 0 && (
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-bold mb-4">
                      Career Opportunities
                    </h3>
                    <ul className="space-y-2">
                      {course.careerOpportunities.map((career, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{career}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailPage;
