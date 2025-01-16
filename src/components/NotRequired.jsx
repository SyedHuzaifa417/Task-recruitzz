import { useLocation } from "react-router-dom";

const NotRequired = () => {
  const location = useLocation();

  const currentPath = location.pathname.substring(1);
  const formattedPath =
    currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
  return (
    <div>
      <div className="flex items-center justify-between px-8 py-5">
        <h2 className="text-3xl font-bold text-gray-900">{formattedPath}</h2>
      </div>
      <p className="text-center font-semibold py-12 text-3xl text-gray-700">
        This page is not required and will be implemented in the future.
      </p>
      <div className="bg-gray-900 text-white p-4 rounded-md shadow-lg max-w-7xl mx-auto">
        <pre className="whitespace-pre-wrap text-md font-mono">
          {`I'm a passionate and versatile full-stack developer with expertise in modern web technologies, including React, Next.js, Node.js, .NET, and database management. With hands-on experience building scalable applications like Crave House, NomadNavigators, and an Amazon clone, I thrive on solving complex problems and delivering high-quality solutions. My background in electrical engineering gives me a strong analytical mindset, and my transition to web development showcases my adaptability and self-learning attitude. I’m eager to bring my skills, creativity, and problem-solving abilities to your team, contributing to impactful projects. Let’s build something amazing together!`}
        </pre>
      </div>
    </div>
  );
};

export default NotRequired;
