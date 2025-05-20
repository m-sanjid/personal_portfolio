const code = `import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  IconArrowLeft,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { TeamMembers } from "@/lib/Constants";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    mail: string;
  };
}

const SocialIcon = ({ type, url }: { type: string; url: string }) => {
  const iconProps = { size: 20, className: "text-secondary" };

  switch (type) {
    case "linkedin":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <IconBrandLinkedin {...iconProps} />
        </a>
      );
    case "github":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <IconBrandGithub {...iconProps} />
        </a>
      );
    case "twitter":
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          <IconBrandX {...iconProps} />
        </a>
      );
    case "mail":
      return (
        <a href={\`mailto:\${url}\`} target="_blank" rel="noopener noreferrer">
          <IconMail {...iconProps} />
        </a>
      );
    default:
      return null;
  }
};

export default function TeamGallery({ teamMembers }: { teamMembers: TeamMember[] }) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hovered, setIsHovered] = useState<number | null>(null);

  //handle esc key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleBack();
      }
    };
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, []);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const handleBack = () => {
    setSelectedMember(null);
  };

  return (
    <div className="max-w-5xl min-h-screen mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

      <AnimatePresence mode="popLayout">
        {selectedMember ? (
          // Expanded view of a team member
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={handleBack}
            className="fixed inset-0 bg-primary/20 backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
          >
            <motion.div
              key="expanded-card"
              layoutId={\`card-container-\${selectedMember.id}\`}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-secondary rounded-2xl border shadow-xl max-w-4xl mx-auto overflow-hidden"
            >
              <div className="flex items-center flex-col md:flex-row">
                <motion.div
                  layoutId={\`card-image-\${selectedMember.id}\`}
                  className="w-full md:w-2/5 h-full bg-secondary/80 overflow-hidden p-2"
                >
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-64 md:h-full object-cover rounded-[8px]"
                  />
                </motion.div>

                <div className="p-6 md:p-8 w-full md:w-3/5">
                  <motion.button
                    onClick={handleBack}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.1,
                    }}
                    className="mb-4 flex items-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    <IconArrowLeft size={20} className="mr-2" />
                    <span>Back to team</span>
                  </motion.button>

                  <motion.h3
                    layoutId={\`card-name-\${selectedMember.id}\`}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-2xl font-bold mb-1 text-start"
                  >
                    {selectedMember.name}
                  </motion.h3>

                  <motion.p
                    layoutId={\`card-role-\${selectedMember.id}\`}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="text-muted-foreground font-medium mb-4 text-start"
                  >
                    {selectedMember.role}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <p className="text-muted-foreground mb-6 text-sm text-start">
                      {selectedMember.bio}
                    </p>

                    <div className="border-t pt-4">
                      <h4 className="text-lg font-medium mb-3">
                        Connect with {selectedMember.name.split(" ")[0]}
                      </h4>
                      <div
                        onMouseLeave={() => setIsHovered(null)}
                        className="flex space-x-4 w-full justify-center items-center"
                      >
                        {Object.entries(selectedMember.socials).map(
                          ([platform, url], index) => (
                            <div
                              onMouseEnter={() => setIsHovered(index)}
                              key={platform}
                              className="relative flex items-center cursor-pointer bg-primary rounded-full p-2"
                            >
                              <SocialIcon
                                key={platform}
                                type={platform}
                                url={url}
                              />
                              {hovered === index && (
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  layoutId="hover"
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                  }}
                                  className="absolute -bottom-5 -right-4 text-xs bg-primary/20 backdrop-blur-sm rounded-full px-2 py-px"
                                >
                                  {platform}
                                </motion.div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          // Grid view of all team members
          <motion.div
            key="grid-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {teamMembers.map((member) => (
              <motion.div
                layoutId={\`card-container-\${member.id}\`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                key={member.id}
                onClick={() => handleCardClick(member)}
                className="bg-white dark:bg-zinc-900 p-2 rounded-3xl border shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <motion.div
                  layoutId={\`card-image-\${member.id}\`}
                  className="w-full h-64 overflow-hidden bg-secondary/80 border rounded-[16px]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    height={64}
                    width={64}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="p-4">
                  <motion.h3
                    layoutId={\`card-name-\${member.id}\`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-xl font-bold mb-1"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    layoutId={\`card-role-\${member.id}\`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-muted-foreground"
                  >
                    {member.role}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`
export default code;