import React from "react";

interface TeamMemberProps {
  imageSrc: string;
  name: string;
  position: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imageSrc,
  name,
  position,
}) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={imageSrc}
        alt={name}
        className="w-32 h-32 object-cover rounded-full"
      />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-sm text-gray-500">{position}</p>
    </div>
  );
};

const Team = () => {
  const teamData = [
    {
      imageSrc: "/team/member1.png",
      name: "John Doe",
      position: "CEO",
    },
    {
      imageSrc: "/team/member2.png",
      name: "Jane Smith",
      position: "CTO",
    },
    {
      imageSrc: "/team/member3.png",
      name: "Emily Johnson",
      position: "Designer",
    },
    {
      imageSrc: "/team/member4.png",
      name: "Michael Brown",
      position: "Developer",
    },
  ];

  return (
    <section className="flex flex-col justify-center items-center mt-40 gap-32 mb-20">
      <h1 className="text-4xl font-bold flex gap-2">
        Team
        <span className="h-3 w-3 bg-orange-500 rounded-full inline-block"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-4/5 mx-auto">
        {teamData.map((member, index) => (
          <TeamMember
            key={index}
            imageSrc={member.imageSrc}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </section>
  );
};

export { Team };
