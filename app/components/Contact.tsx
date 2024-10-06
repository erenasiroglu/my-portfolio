import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

interface ContactProps {
  isLoading: boolean;
}

export default function Contact({ isLoading }: ContactProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      id="contact"
      className="py-20"
    >
      <h2 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        İletişim
      </h2>
      {isLoading ? (
        <Skeleton className="h-64 w-full" />
      ) : (
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-600">
              Bana Ulaşın
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p>
              <span className="text-gray-600">Email:</span>{" "}
              erenasiroglu1@gmail.com
            </p>
            <p>
              <span className="text-gray-600">Telefon:</span> +905075675763
            </p>
            <p>
              <span className="text-gray-600">LinkedIn:</span>{" "}
              linkedin.com/in/eren-nasiroglu/
            </p>
            <p>
              <span className="text-gray-600">GitHub:</span>{" "}
              github.com/erenasiroglu
            </p>
          </CardContent>
        </Card>
      )}
    </motion.section>
  );
}
