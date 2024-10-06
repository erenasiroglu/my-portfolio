// import { motion } from "framer-motion";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
// import { Button } from "./ui/button";
// import { Skeleton } from "./ui/skeleton";

// interface ProjectsProps {
//   isLoading: boolean;
// }

// export default function Projects({ isLoading }: ProjectsProps) {
//   const projects = ["BeforeSunset AI", "Decktopus AI", "GEMAS Pool Technology"];

//   return (
//     <motion.section
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.8, delay: 0.4 }}
//       id="projects"
//       className="py-20"
//     >
//       <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
//         Projeler
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={index}
//             project={project}
//             isLoading={isLoading}
//             index={index}
//           />
//         ))}
//       </div>
//     </motion.section>
//   );
// }

// interface ProjectCardProps {
//   project: string;
//   isLoading: boolean;
//   index: number;
// }

// function ProjectCard({ project, isLoading, index }: ProjectCardProps) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ delay: index * 0.1 }}
//     >
//       {isLoading ? (
//         <Skeleton className="h-64 w-full" />
//       ) : (
//         <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
//           <CardHeader>
//             <CardTitle className="text-xl text-blue-600">{project}</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-gray-600">
//               Yenilikçi AI tabanlı çözümler sunan projeler.
//             </p>
//           </CardContent>
//           <CardFooter>
//             <Button
//               variant="outline"
//               className="text-blue-600 border-blue-500 hover:bg-blue-500 hover:text-white"
//             >
//               Detayları Gör
//             </Button>
//           </CardFooter>
//         </Card>
//       )}
//     </motion.div>
//   );
// }
