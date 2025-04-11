
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GameCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  color: string;
  delay: number;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  link,
  color,
  delay
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  // Convert the id to the appropriate route slug
  const getGameRoute = () => {
    const slugs = [
      'pixel-battle',
      'puzzle-quest',
      'endless-runner',
      'wizard-academy',
      'dream-farm'
    ];
    return `/game/${slugs[id - 1]}`;
  };

  return (
    <div 
      ref={cardRef}
      className="game-card opacity-0 translate-y-10 transition-all duration-700 hover:shadow-xl hover:shadow-[rgba(var(--primary),0.2)] bg-white dark:bg-gray-800 overflow-hidden group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="game-card-img-container">
        <img 
          src={imageUrl} 
          alt={title} 
          className="game-card-img"
        />
        <div className="game-card-overlay"></div>
      </div>
      
      <div className="p-6">
        <h3 className="game-title text-gray-900 dark:text-white">{title}</h3>
        <p className="game-desc">{description}</p>
        
        <Link 
          to={getGameRoute()}
          className="btn-start mt-6 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
          style={{ backgroundColor: color }}
        >
          Bắt đầu ngay
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default GameCard;
