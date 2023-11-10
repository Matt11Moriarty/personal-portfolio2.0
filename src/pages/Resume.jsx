import React from "react";

const Resume = () => {
  return (
    <div className="app-background app-container text-light px-5">
      {/* resume download button  */}
      <a
        href="/downloads/Matthew_Resume.pdf"
        download="Matthew's Resume"
        className="btn btn-light m-3"
      >
        Download Resume
      </a>
      {/* resume  */}
      <h3>EDUCATION</h3>
      <p>
        <strong>ASU Full-Stack Coding Bootcamp</strong>
        <br />
        Online
        <br />
        June 2023 - November 2023
        <br />
      </p>
      <p>
        <strong>BS, Industrial and Management Systems Engineering</strong>
        <br />
        Montana State University
        <br />
        2012 - 2017
        <br />
        Bozeman, MT
      </p>
      <h3>CERTIFICATES</h3>
      <p>AWS Certified Solutions Architect - Associate</p>
      <p>AWS Certified Cloud Practitioner</p>
      <p>FE Industrial and Systems</p>
      <h3>TOOLBELT</h3>
      <p>Javascript</p>
      <p>Python</p>
      <p>React</p>
      <p>Git and Github</p>
      <p>AWS Cloud Infrastructure</p>
      <p>SQL</p>
      <p>MongoDB</p>
      <h3>WORK EXPERIENCE</h3>
      <h4>Senior Integrations Specialist</h4>
      <p>
        <strong>Paradox, LLC</strong>
        <br />
        06/2023 - Present
        <br />
        Scottsdale, AZ
      </p>
      <p>
        <em>Achievements/Tasks:</em>
        <br />
        - Direct technical consultation to clients for client implementations
        requiring integrations between our software and the clients.
        <br />
        - Built inbound and outbound integrations for large clients such as
        Crocs, Pfizer, and General Motors.
        <br />- Train integrations team on troubleshooting and technical
        resolutions to reduce bug tickets and foster self-reliance on
        non-integration related issues.
      </p>
      <h4>Senior Technical Support Engineer</h4>
      <p>
        <strong>Paradox, LLC</strong>
        <br />
        09/2022 - 06/2023
        <br />
        Scottsdale, AZ
      </p>
      <p>
        <em>Achievements/Tasks:</em>
        <br />
        - Conducted training and onboarding for new TSE's
        <br />
        - Worked directly with high priority clients such as Lowe's and
        McDonalds to resolve technical issues.
        <br />
        - Triaged escalated issues as tier 3 support.
        <br />
        <br />
        <h4>Technical Support Engineer</h4>
        <p>
          <strong>Paradox, LLC</strong>
          <br />
          09/2021 - 09/2022
          <br />
          Scottsdale, AZ
        </p>
        <p>
          <em>Achievements/Tasks:</em>
          <br />
          - Triage and troubleshoot bug tickets and service requests from all
          clients as tier 2 support.
          <br />
          - Leveraged SQL and other technologies to analyze and resolve issues.
          <br />
          - Support our client success team in meeting SLA's and worked with
          engineers to provide solutions.
          <br />
          <br />
        </p>
        <h4>Technology Operations Manager</h4>
        <p>
          <strong>Keelson Mgt. LLC</strong>
          <br />
          03/2020 - 09/2021
        </p>
        <br />
        Scottsdale, AZ
      </p>
      <p>
        <em>Achievements/Tasks:</em>
        <br />
        - Founding team member of cross-functional team that supports Fenix
        Marine Services through technical and operational expertise.
        <br />
        - Use of SQL and data analytics to optimize operational efficiency and
        system performance.
        <br />
        - Oversaw compilation and presentation of operational data and
        performance metrics.
        <br />
        - Create and manage dashboards for management review.
        <br />- Support of all systems and IT infrastructure at the Terminal
        including 24/7 On-Call support.
      </p>
      <h4>Terminal Technology Engineer</h4>
      <p>
        <strong>Keelson Mgt. LLC</strong>
        <br />
        09/2017 - 03/2020
        <br />
        Scottsdale, AZ
        <br />
        <br />
        <p>
          <em>Achievements/Tasks:</em>
          <br />
          - Spearheaded the Fenix Marine RTLS (Real Time Locating System)
          installation and integration into Vessel, Rail, and Gate operations.
          Savings were realized of $500k/mo. in labor costs and fees.
          <br />
          - Managed vendors and Union labor to implement an ABB OCR system on 16
          ship-to-shore cranes. 98% accuracy for container handoffs and savings
          of $35k/mo. in labor costs and fees.
          <br />- Acted as a Team Lead for a Terminal Operating System (TOS)
          replacement. SPARCS was replaced with Navis N4.
        </p>
      </p>
      <h3>Internship Experience</h3>
      <p>International Internship in Istanbul, Turkey</p>
    </div>
  );
};

export default Resume;
