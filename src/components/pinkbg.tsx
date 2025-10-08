import React from 'react';

interface PinkGlassBackgroundProps {
  children: React.ReactNode;
}

const PinkGlassBackground: React.FC<PinkGlassBackgroundProps> = ({ children }) => {


  return (
    <div style={styles.container}>
      {/* Animated blobs */}
      <div style={{...styles.blob, ...styles.blob1}} />
      <div style={{...styles.blob, ...styles.blob2}} />
      <div style={{...styles.blob, ...styles.blob3}} />
      
      {/* Floating particles */}
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          style={{
            ...styles.particle,
            left: `${(i + 1) * 10}%`,
            animationDelay: `${i * 1.5}s`
          }}
        />
      ))}

      {/* Glass card */}
      <div style={styles.cardWrapper}>
        <div style={styles.glassCard}>
          {/* Shine effect overlay */}
          <div style={styles.shine} />
          
          {/* Content */}
          {children}
        </div>

        {/* Multiple decorative circles all over the section */}
        <div style={{...styles.decorCircle, ...styles.decorCircle1}} />
        <div style={{...styles.decorCircle, ...styles.decorCircle2}} />
        {/* Additional decorative circles can be added here */}
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-50px, 50px) scale(0.9);
          }
        }

        @keyframes rise {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }

        button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.05);
          box-shadow: 0 8px 30px rgba(255, 107, 157, 0.4);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #ff6b9d 0%, #ffc3e0 50%, #ff8fab 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    marginTop: '100px'
  },
  blob: {
    position: 'absolute',
    borderRadius: '50%',
    filter: 'blur(80px)',
    opacity: 0.6,
    animation: 'blob 20s infinite ease-in-out'
  },
  blob1: {
    width: '400px',
    height: '400px',
    background: '#ff4d94',
    top: '-100px',
    left: '-100px',
    animationDelay: '0s'
  },
  blob2: {
    width: '350px',
    height: '350px',
    background: '#ffa6d5',
    bottom: '-100px',
    right: '-100px',
    animationDelay: '7s'
  },
  blob3: {
    width: '300px',
    height: '300px',
    background: '#ff7ab5',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    animationDelay: '14s'
  },
  particle: {
    position: 'absolute',
    width: '4px',
    height: '4px',
    background: 'rgba(255, 255, 255, 0.6)',
    borderRadius: '50%',
    animation: 'rise 15s infinite ease-in'
  },
  cardWrapper: {
    position: 'relative',
    zIndex: 10,
    width: '100%',
    maxWidth: '450px',
    margin: '0 20px'
  },
  glassCard: {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    borderRadius: '30px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px rgba(255, 107, 157, 0.3)',
    padding: '50px 40px'
  },
  shine: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%)',
    borderRadius: '30px',
    pointerEvents: 'none'
  },
  content: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  },
  titleInput: {
    width: '100%',
    fontSize: '48px',
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
  },
  descriptionInput: {
    width: '100%',
    fontSize: '18px',
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    resize: 'none',
    lineHeight: '1.6',
    textShadow: '0 1px 5px rgba(0, 0, 0, 0.1)',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  buttonContainer: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    paddingTop: '16px'
  },
  button: {
    padding: '12px 24px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    borderRadius: '25px',
    color: 'white',
    fontWeight: '500',
    border: '1px solid rgba(255, 255, 255, 0.4)',
    boxShadow: '0 4px 15px rgba(255, 107, 157, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontSize: '16px'
  },
  decorCircle: {
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    WebkitBackdropFilter: 'blur(15px)',
    borderRadius: '50%',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    animation: 'pulse 3s infinite ease-in-out'
  },
  decorCircle1: {
    width: '120px',
    height: '120px',
    top: '-30px',
    right: '-30px'
  },
  decorCircle2: {
    width: '90px',
    height: '90px',
    bottom: '-20px',
    left: '-20px',
    animationDelay: '1s'
  },
};

export default PinkGlassBackground;