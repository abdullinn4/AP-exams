import type {CourseCardResponse} from "@/entities/dashboard/dashboard.ts";
import {Link} from "react-router-dom";
import {useState} from "react";

interface CourseNavigationPanelProps {
    myCourses: CourseCardResponse[]
    availableCourses: CourseCardResponse[]
}

export const CourseNavigationPanel = ({ myCourses, availableCourses }: CourseNavigationPanelProps) => {
    const [activeCourseId, setActiveCourseId] = useState<string | null>(
        myCourses[0]?.id ?? null
    )

    return (
        <>
            <h2 className="display-4">My Courses</h2>
            <div className="mg-top-32px">
                <div className="w-layout-grid grid-1-column gap-row-0px">
                    {myCourses.map((course, index) => (
                        <a
                            key={course.id}
                            href={`#course-${course.id}`}
                            onClick={() => setActiveCourseId(course.id)}
                            className={`chapter-category-v1-wrapper w-inline-block ${
                                index === 0 ? 'first' : ''
                            } ${
                                index === myCourses.length - 1 ? 'last' : ''
                            } ${
                                activeCourseId === course.id ? 'w--current' : ''
                            }`}
                        >
                            <div className="chapter-category-v1">
                                <img src="src/assets/webflow/images/start-category-icon-courselify-x-webflow-template.svg"
                                     loading="eager" alt="Start Icon - Courselify X Webflow Template"/>
                                <div className="display-2">{course.title}</div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {availableCourses.length > 0 && (
                <>
                    <div className="mg-top-48px">
                        <h2 className="display-4">Available Courses</h2>
                    </div>
                    <div className="mg-top-32px">
                        <div className="w-layout-grid grid-1-column gap-row-0px">
                            {availableCourses.map((course, index) => (
                                <Link
                                    key={course.id}
                                    to={`/courses/${course.slug}/preview`}
                                    className={`chapter-category-v1-wrapper w-inline-block ${
                                        index === 0 ? 'first' : ''
                                    } ${
                                        index === availableCourses.length - 1 ? 'last' : ''
                                    }`}
                                >
                                    <div className="chapter-category-v1">
                                        <img src="src/assets/webflow/images/start-category-icon-courselify-x-webflow-template.svg"
                                             loading="eager" alt="Start Icon - Courselify X Webflow Template"/>
                                        <div className="display-2">{course.title}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}