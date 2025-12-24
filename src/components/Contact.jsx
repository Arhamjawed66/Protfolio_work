"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./button";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import { Loader2, CheckCircle } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setStatus("success");
    // In a real app, you'd handle form data and API errors
  };

  return (
    <Card className="h-[85vh] overflow-y-auto border-none shadow-none">
      <CardHeader>
        <CardTitle className="uppercase text-2xl font-bold text-primary">
          Get in Touch
        </CardTitle>
      </CardHeader>
      <CardContent>
        <motion.form
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4 md:space-y-6"
        >
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Input id="name" name="name" type="text" required className="mt-1 bg-card" />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Input id="email" name="email" type="email" required className="mt-1 bg-card" />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
            <motion.div whileFocus={{ scale: 1.02 }}>
              <Textarea id="message" name="message" required rows={5} className="mt-1 bg-card" />
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <Button
              type="submit"
              size="lg"
              disabled={status === "sending" || status === "success"}
              className="w-48"
            >
              <AnimatePresence mode="wait">
                {status === "sending" && (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                  >
                    <Loader2 className="animate-spin" />
                  </motion.div>
                )}
                {status === "idle" && <motion.span key="idle">Send Message</motion.span>}
                {status === "success" && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="mr-2" /> Sent!
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.form>
      </CardContent>
    </Card>
  );
};

export default Contact;
