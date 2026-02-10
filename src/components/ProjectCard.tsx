 'use client';
 
 import { motion } from 'framer-motion';
 import { Badge } from './Tag';
 
 interface LiveLink {
   label: string;
   url: string;
 }
 
 interface ProjectCardProps {
   title: string;
   description: string;
   meta: string;
   stack: string[];
   architecture?: string;
   liveLinks?: LiveLink[];
   tags?: string[];
 }
 
 export function ProjectCard({ title, description, meta, stack, architecture, liveLinks, tags }: ProjectCardProps) {
   return (
     <motion.div
       whileHover={{ scale: 1.03 }}
       transition={{ type: 'spring', stiffness: 300, damping: 25 }}
       className="section-shell p-5 sm:p-6 space-y-3"
     >
       <div className="flex items-start justify-between gap-2">
         <div>
           <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
           <p className="text-muted text-sm sm:text-base mt-1">{description}</p>
         </div>
         <Badge className="whitespace-nowrap px-3 py-1.5 text-[11px] leading-none">{meta}</Badge>
       </div>
 
       <div className="flex flex-wrap gap-2">
         {stack.map((item) => (
           <span key={item} className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted border border-white/5">
             {item}
           </span>
         ))}
       </div>
 
       {tags && tags.length > 0 && (
         <div className="flex flex-wrap gap-2">
           {tags.map((tag) => (
             <Badge key={tag} variant="glow">
               {tag}
             </Badge>
           ))}
         </div>
       )}
 
       {liveLinks && liveLinks.length > 0 && (
         <div className="space-y-1 pt-1">
           <p className="text-xs uppercase tracking-[0.18em] text-accent font-semibold">Live architecture</p>
           <div className="flex flex-wrap gap-3 text-sm text-muted">
             {liveLinks.map((link) => (
               <a
                 key={link.url}
                 href={link.url}
                 target="_blank"
                 rel="noreferrer"
                 className="text-accent hover:text-accent2"
               >
                 {link.label}
               </a>
             ))}
           </div>
         </div>
       )}
 
       {architecture && (
         <p className="text-xs text-muted leading-relaxed border-t border-white/5 pt-3">
           Architecture: {architecture}
         </p>
       )}
     </motion.div>
   );
 }
