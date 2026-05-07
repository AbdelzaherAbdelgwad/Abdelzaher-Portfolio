import './exp.css'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

export const Experience = () => {

  const experiences = [
    {
      title: "Software Engineer",
      company: "Namaa Consult",
      date: "Dec 2024 – Present",
      tags: ["Go", "React", "Next.js", "TypeScript", "GIS", "PySide6", "i18next", "OpenAPI", "Redux"],
      highlights: [
        "Built backend services using Go with Domain-Driven Design and sqlc",
        "Led frontend migration from legacy templates to React 18, Vite, and Tailwind CSS",
        "Reduced API integration effort by ~75% using OpenAPI TypeScript client generation",
        "Implemented internationalization (Arabic/English) with RTL/LTR support",
        "Managed scalable global state using Redux Toolkit",
        "Co-developed GIS-based web apps with Next.js, TypeScript, and ArcGIS SDK",
        "Implemented PDF export and print for map views using html2canvas and jsPDF",
        "Rebuilt desktop app UI using PySide6, Qt Designer, and QML",
        "Enforced frontend best practices through code reviews, ESLint, and Prettier",
        "Maintained Next.js marketing website with SSG, SEO, and localization"
      ]
    },
    {
      title: "Full Stack .NET Developer Intern",
      company: "Information Technology Institute (ITI)",
      date: "Nov 2024 – April 2025",
      tags: [".NET", "ASP.NET Core", "C#", "SQL Server"]
    }
  ]

  return (
    <div className="expContainer" id='experience'>
      <div className='expContent'>
        <h1 className='fontFam-italic'>PROFESSIONAL EXPERIENCE</h1>
        <div className='timeline fontFam-regular'>
          {experiences.map((exp, i) => (
            <ScrollAnimation key={i} animateIn="fadeInUp" delay={(i+1)*200}>
              <div className="timelineEntry">
                <div className="timelineDot" />
                <div className="timelineContent">
                  <h2>{exp.title} <span>at {exp.company}</span></h2>
                  <p className="timelineDate">{exp.date}</p>
                  <div className="timelineTags">
                    {exp.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  {exp.highlights && (
                    <ul className="timelineHighlights">
                      {exp.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>

      <div className='expAssets'>
        <div className="reactJsPng rotate" />
        <div className="htmlPng" />
        <div className="cssPng" />
        <div className="jsPng" />
      </div>
    </div>
  )
}
