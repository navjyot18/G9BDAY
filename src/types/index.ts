// Common types for the birthday website

export interface CardProps {
  emoji: string;
  bg: string;
  i: number;
}

export interface MusicState {
  hasPlayed: boolean;
  showPlayButton: boolean;
}

export interface ConfettiConfig {
  particleCount: number;
  spread: number;
  origin: { x: number; y: number };
  colors: string[];
  shapes?: string[];
  scalar?: number;
  gravity?: number;
  drift?: number;
}

export interface AnimationVariants {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      ease: string;
    };
  };
}

export interface ComponentProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}
