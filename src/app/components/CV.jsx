import React from "react";

const CV = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg grid grid-cols-3 gap-6">
      <aside className="col-span-1 bg-gray-100 p-6 rounded-lg">
        <header className="text-center mb-6">
          <img 
            src="your-image-url.jpg" 
            alt="Profile" 
            className="w-32 h-32 mx-auto rounded-full border-4 border-blue-500 mb-4" 
          />
          <h1 className="text-3xl font-extrabold text-blue-600">Nguyễn Văn A</h1>
          <p className="text-lg text-gray-700 font-medium">Frontend Developer</p>
        </header>
        <section className="mb-6">
          <h2 className="text-xl font-semibold border-b-2 pb-2 mb-4 text-gray-800">Contact Information</h2>
          <p className="text-gray-700"><strong>Email:</strong> nguyenvana@example.com</p>
          <p className="text-gray-700"><strong>Phone:</strong> 0123-456-789</p>
          <p className="text-gray-700"><strong>Address:</strong> 123 ABC Street, Ho Chi Minh City</p>
        </section>
        <section>
          <h2 className="text-xl font-semibold border-b-2 pb-2 mb-4 text-gray-800">Skills</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>React, Next.js, Remix.js</li>
            <li>Tailwind CSS, Ant Design, MIUI</li>
            <li>JavaScript, TypeScript</li>
            <li>REST API, GraphQL</li>
            <li>Unit Testing (Jest, React Testing Library)</li>
            <li>Docker, Node.js, Rust</li>
            <li>Communication and collaboration in English</li>
          </ul>
        </section>
      </aside>

      <main className="col-span-2">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4 text-gray-800">Work Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-blue-500">NextSol</h3>
            <p className="text-gray-600 italic">Intern Unity Developer | 2020</p>
            <p className="text-gray-700">I worked as an intern at NextSol, where I was responsible for developing a farming simulation game using Unity and C#. During this time, I gained hands-on experience in game development, working with game physics, UI, and animations.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-blue-500">Rikkeisoft</h3>
            <p className="text-gray-600 italic">Software Engineer | 2021 - Present</p>
            <p className="text-gray-700">At Rikkeisoft, I have been working on various projects as a front-end and full-stack developer. My responsibilities include designing and developing web applications, collaborating with backend developers, and optimizing performance. Below are some of the key projects I have worked on:</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                <strong>Tournament Management System:</strong> Developed the frontend using React, Next.js, and Tailwind CSS. This project allows users to create and manage tournaments efficiently.
              </li>
              <li>
                <strong>Game Blockchain Landing Page:</strong> Built a landing page for a blockchain-based game using React and Next.js, ensuring a visually appealing and responsive design.
              </li>
              <li>
                <strong>Shopping Mall Management Application:</strong> Created a CRUD application for managing shopping malls using React and Ant Design. Implemented various features such as store management, sales tracking, and user roles.
              </li>
              <li>
                <strong>Ride-Sharing Management System:</strong> Worked on a large-scale project involving both frontend and backend development. The system was built using React, Next.js, React Native for mobile, and Node.js with GraphQL on the backend. I was also responsible for writing test cases using Jest to ensure code quality.
              </li>
              <li>
                <strong>Data Visualization Application:</strong> Developed a chart-based management system using React and MIUI. Additionally, I contributed to building an NPM library for reusable UI components.
              </li>
            </ul>
            <p className="text-gray-700 mt-4">Apart from project development, I actively participate in company activities such as training interns and sharing knowledge on React development. Additionally, I have taken part in internal hackathons to develop innovative solutions.</p>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4 text-gray-800">Education</h2>
          <div>
            <h3 className="text-xl font-bold text-blue-500">ABC University</h3>
            <p className="text-gray-600 italic">Bachelor's Degree in Information Technology | 2017 - 2021</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CV;
