"use client"

import { motion } from "framer-motion"

interface AnimatedSectionProps {
    children: React.ReactNode
    className?: string
}

export function AnimatedSection({ children, className = "" }: AnimatedSectionProps) {
    return (
        <motion.section
            className={className}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.01 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    )
}
