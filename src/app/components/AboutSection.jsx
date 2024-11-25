"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>UI/UX Graphic Designer</li>
        <li>Adobe XD</li>
        <li>Inkspace
        </li>
        <li>Rd Works</li>
        <li>Adobe Illustrator</li>
        <li>Adobe Photoshop</li>
        <li>Strong grip on Canva!</li>
        <li>Google 
Analytical Skills
-Google Office 
Forms, Sheets, 
Cloud and Docs</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelors in Business Administration University of Wah (UW) 
Specialization in Finance
CGPA: 3.92</li>
      
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Got Certificate of Appreciation in recognition of organizing three-day training on
PSX Online trading: Learn and Earn! From ORIC and Department of Management 
Sciences at 24,25 & 30 August</li>
        <li>Certificate of Merit for having high CGPA in consecutive semesters by Faculty 
        of Management Sciences, University of Wah</li>
        <li>
        Got Award for Outstanding Academic Excellence as Dean’s Roll of Honor
        by Faculty of Management Sciences
        </li>
        <li>Got Certificate of Appreciation for Participating in Management Career 
        Expo June 01,2022</li>
        <li>Got Certificate of Participation in National Business Development 
Program  Entrepreneurship as Viable Career Option at Sep 08, 2022, 
Organized by SMEDA and University of Wah, Wah Cantt</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="A description of the image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m creative and skilled professional specializing in digital design with expertise in UI/UX design and graphic design. I excel in tools such as Adobe XD, Photoshop, Illustrator, Figma, Inkscape, RD Works, and Canva, with a strong focus on creating visually compelling and user-friendly designs. My goal is to bring innovative ideas to life, helping brands establish impactful digital identities and resonate with their audiences through strategic and captivating design solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
