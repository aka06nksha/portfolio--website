import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown, Github, Linkedin, Mail, Code2, Terminal } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-300/30 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-300/30 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-300/30 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="absolute inset-0 pattern-grid opacity-30 dark:opacity-20 mask-image-gradient"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10 pt-20">

                {/* Intro Chip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <span className="inline-block py-1.5 px-5 rounded-full glass text-sm font-semibold text-blue-600 dark:text-blue-300 border border-blue-100 dark:border-blue-900/50 shadow-lg backdrop-blur-md">
                        Available for Hire
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl font-extrabold tracking-tight mb-8 text-slate-900 dark:text-white"
                >
                    Hi, I'm <br className="md:hidden" />
                    <span className="text-gradient">Akanksha Cirigiri</span>
                </motion.h1>

                {/* Subheading / Roles */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl font-light text-slate-600 dark:text-slate-300 mb-10 max-w-2xl"
                >
                    Building high-performance <span className="font-semibold text-slate-800 dark:text-white">Enterprise Solutions</span> <br className="hidden md:block" />
                    & exploring the frontiers of <span className="font-semibold text-slate-800 dark:text-white">Artificial Intelligence</span>.
                </motion.p>

                {/* Mission Statement */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-slate-500 dark:text-slate-400 mb-12 max-w-lg mx-auto leading-relaxed border-l-2 border-blue-500/30 pl-6 italic"
                >
                    "Driven to bridge the gap between complex algorithms and intuitive user experiences, creating software that is as efficient as it is elegant."
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16"
                >
                    <a
                        href="/certificates/C_Akanksha_.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 overflow-hidden"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700 ease-in-out"></span>
                        <Download size={20} />
                        <span>Download Resume</span>
                    </a>

                    <div className="flex gap-4">
                        <a href="https://github.com/aka06nksha" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full glass text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/akanksha-c-614b6327b/" target="_blank" rel="noopener noreferrer" className="p-3.5 rounded-full glass text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:akankshacirigiri@gmail.com" className="p-3.5 rounded-full glass text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300">
                            <Mail size={22} />
                        </a>
                    </div>
                </motion.div>

                {/* Glassmorphic Coding Profiles */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col items-center"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 mb-6 font-bold">
                        Featured Profiles
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center">
                        <motion.a
                            href="https://leetcode.com/u/AkankshaCirigiri/"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="glass px-6 py-4 rounded-xl flex items-center gap-3 group border-t border-white/40 dark:border-white/10 hover:border-yellow-500/50 transition-all duration-300"
                        >
                            <div className="p-2 bg-yellow-100/50 dark:bg-yellow-900/20 rounded-lg text-[#FFA116] group-hover:scale-110 transition-transform duration-300">
                                <Code2 size={24} />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">Problem Solving</span>
                                <span className="block font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#FFA116] transition-colors">LeetCode</span>
                            </div>
                        </motion.a>

                        <motion.a
                            href="https://www.geeksforgeeks.org/profile/akankshac5v42?from=explore"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="glass px-6 py-4 rounded-xl flex items-center gap-3 group border-t border-white/40 dark:border-white/10 hover:border-green-500/50 transition-all duration-300"
                        >
                            <div className="p-2 bg-green-100/50 dark:bg-green-900/20 rounded-lg text-[#2F8D46] group-hover:scale-110 transition-transform duration-300">
                                <Terminal size={24} />
                            </div>
                            <div className="text-left">
                                <span className="block text-xs text-slate-500 dark:text-slate-400 font-medium">Technical Concepts</span>
                                <span className="block font-bold text-slate-800 dark:text-slate-100 group-hover:text-[#2F8D46] transition-colors">GeeksforGeeks</span>
                            </div>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="text-slate-400 dark:text-slate-600" size={32} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
