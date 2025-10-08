import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import confetti from 'canvas-confetti'

interface CardProps {
    emoji: string;
    bg: string;
    i: number;
}

const ScrollTriggered: React.FC = () => {
    const [hasPlayed, setHasPlayed] = useState<boolean>(false)
    const [showPlayButton, setShowPlayButton] = useState<boolean>(false)
    const audioRef = useRef<HTMLAudioElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)
    const confettiIntervalRef = useRef<NodeJS.Timeout | null>(null)

    // Infinite confetti function with all types
    const startInfiniteConfetti = (): void => {
        const confettiColors = ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc', '#ff69b4', '#ff1493', '#ffd700', '#ffa500', '#ff6347', '#ff4757', '#ff3838', '#ff6b9d', '#ff9ff3', '#f368e0', '#ff9f43', '#ff6348', '#ff7675', '#fd79a8']
        
        const createConfettiBurst = () => {
            // Random position for confetti
            const x = Math.random()
            const y = Math.random()
            
            // Random confetti type
            const confettiType = Math.random()
            
            if (confettiType < 0.1) {
                // Heart confetti
                confetti({
                    particleCount: 50,
                    spread: 60,
                    origin: { x, y },
                    colors: confettiColors,
                    shapes: ['heart'],
                    scalar: 1.2
                })
            } else if (confettiType < 0.2) {
                // Star confetti
                confetti({
                    particleCount: 40,
                    spread: 70,
                    origin: { x, y },
                    colors: confettiColors,
                    shapes: ['star'],
                    scalar: 1.5
                })
            } else if (confettiType < 0.3) {
                // Circle confetti
                confetti({
                    particleCount: 45,
                    spread: 65,
                    origin: { x, y },
                    colors: confettiColors,
                    shapes: ['circle'],
                    scalar: 1.3
                })
            } else if (confettiType < 0.4) {
                // Mixed shapes confetti
                confetti({
                    particleCount: 60,
                    spread: 80,
                    origin: { x, y },
                    colors: confettiColors,
                    shapes: ['heart', 'star', 'circle'],
                    scalar: 1.4
                })
            } else if (confettiType < 0.5) {
                // Burst confetti from center
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: confettiColors,
                    shapes: ['heart', 'star'],
                    scalar: 1.2
                })
            } else if (confettiType < 0.6) {
                // Side bursts
                confetti({
                    particleCount: 75,
                    angle: 45,
                    spread: 50,
                    origin: { x: 0.1, y: 0.7 },
                    colors: confettiColors,
                    shapes: ['star', 'circle']
                })
                confetti({
                    particleCount: 75,
                    angle: 135,
                    spread: 50,
                    origin: { x: 0.9, y: 0.7 },
                    colors: confettiColors,
                    shapes: ['heart', 'circle']
                })
            } else if (confettiType < 0.7) {
                // Fireworks effect
                confetti({
                    particleCount: 80,
                    spread: 90,
                    origin: { x, y },
                    colors: confettiColors,
                    shapes: ['star'],
                    scalar: 1.8,
                    gravity: 0.8
                })
            } else if (confettiType < 0.8) {
                // Rainbow confetti
                confetti({
                    particleCount: 70,
                    spread: 75,
                    origin: { x, y },
                    colors: ['#ff6b6b', '#ff8e8e', '#ffa8a8', '#ffb3ba', '#ffc0cb', '#ffd1dc', '#ff69b4', '#ff1493', '#ffd700', '#ffa500'],
                    shapes: ['heart', 'star', 'circle'],
                    scalar: 1.6
                })
            } else if (confettiType < 0.9) {
                // Floating confetti
                confetti({
                    particleCount: 55,
                    spread: 60,
                    origin: { x, y },
                    colors: confettiColors,
                    shapes: ['heart'],
                    scalar: 1.3,
                    gravity: 0.3,
                    drift: 0.1
                })
            } else {
                // Mega burst
                confetti({
                    particleCount: 120,
                    spread: 100,
                    origin: { x, y },
                    colors: confettiColors,
                    shapes: ['heart', 'star', 'circle'],
                    scalar: 1.5,
                    gravity: 1.2
                })
            }
        }
        
        // Start infinite confetti with faster interval for more excitement
        confettiIntervalRef.current = setInterval(createConfettiBurst, 1500)
    }

    const stopInfiniteConfetti = (): void => {
        if (confettiIntervalRef.current) {
            clearInterval(confettiIntervalRef.current)
            confettiIntervalRef.current = null
        }
    }

    useEffect(() => {
        console.log('🎪 ScrollTriggered component mounted!')
        debugger; // Breakpoint here to see component mount
        
        // Auto-play music when component mounts (user already clicked the button)
        const playMusic = async () => {
            console.log('🎵 Attempting to play music...')
            debugger; // Breakpoint here to see music play attempt
            
            if (audioRef.current && !hasPlayed) {
                try {
                    // Set audio properties
                    audioRef.current.volume = 0.7
                    audioRef.current.currentTime = 142
                    console.log('🔊 Audio properties set - volume: 0.7, time: 142s')
                    
                    // Try to play with user gesture context
                    const playPromise = audioRef.current.play()
                    
                    if (playPromise !== undefined) {
                        await playPromise
                        console.log('✅ Music started playing from 2:22!')
                        setHasPlayed(true)
                    }
                } catch (error) {
                    console.log('❌ Audio play failed:', error)
                    setShowPlayButton(true)
                    
                    // Try again after a short delay
                    setTimeout(async () => {
                        try {
                            if (audioRef.current) {
                                console.log('🔄 Retrying music playback...')
                                await audioRef.current.play()
                                setHasPlayed(true)
                                setShowPlayButton(false)
                                console.log('✅ Retry successful!')
                            }
                        } catch (retryError) {
                            console.log('❌ Retry failed:', retryError)
                        }
                    }, 1000)
                }
            }
        }

        // Try to play immediately when component mounts
        setTimeout(playMusic, 500)
        
        // Start infinite confetti when component mounts
        setTimeout(() => {
            console.log('🎉 Starting infinite confetti!')
            debugger; // Breakpoint here to see confetti start
            startInfiniteConfetti()
        }, 1000)
        
        // Cleanup confetti on unmount
        return () => {
            console.log('🧹 Cleaning up confetti...')
            stopInfiniteConfetti()
        }
    }, [hasPlayed])

    const handleManualPlay = async (): Promise<void> => {
        console.log('🎮 Manual play button clicked!')
        debugger; // Breakpoint here to see manual play
        
        if (audioRef.current) {
            try {
                // Set the audio to start from 2 minutes 22 seconds (142 seconds)
                audioRef.current.currentTime = 142
                audioRef.current.volume = 0.7
                console.log('🔊 Manual play - audio properties set')
                
                await audioRef.current.play()
                setHasPlayed(true)
                setShowPlayButton(false)
                console.log('✅ Manual play successful!')
            } catch (error) {
                console.log('❌ Manual play failed:', error)
                // Show user-friendly error message
                alert('Unable to play music. Please check your browser settings and try again.')
            }
        } else {
            console.warn('⚠️ Audio ref is null!')
        }
    }

    return (
        <div ref={sectionRef} className="scroll-triggered-section">
            {/* Audio element */}
            <audio
                ref={audioRef}
                loop
                preload="auto"
                crossOrigin="anonymous"
            >
                <source src="/Tu Mile Dil Khile Duet Criminal 320 Kbps.mp3" type="audio/mpeg" />
                <source src="/Tu Mile Dil Khile Duet Criminal 320 Kbps.ogg" type="audio/ogg" />
                Your browser does not support the audio element.
            </audio>


            {/* Fallback play button */}
            {showPlayButton && !hasPlayed && (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1000,
                    background: 'rgba(255, 107, 107, 0.9)',
                    color: 'white',
                    padding: '1rem 2rem',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)'
                }} onClick={handleManualPlay}>
                    🎵 Reveal the Magic
                </div>
            )}

            {/* Original Card Animation */}
            <div style={container}>
                {food.map(([emoji], i) => (
                    <Card key={i} i={i} emoji={emoji} bg="" />
                ))}
            </div>
        </div>
    )
}

const Card: React.FC<CardProps> = ({ emoji, bg, i }) => {

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ amount: 0.9 }}
        >
            <div style={{ ...splash, backgroundImage: `url(${"https://imgs.search.brave.com/tw5B3nz6KE24sI2AU9QaqoATTvy8nvbE_X6jrfQr4wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzAxLzQ0Lzc1/LzM2MF9GXzcwMTQ0/NzU2N19LVHhLa1pU/NHlDbjdhc3NMVUJC/QkxEbElvY2dzY3NU/NS5qcGc"})`, objectFit: 'cover' }} />
            <motion.div style={card} variants={cardVariants} className="card">
                <img 
                    src={emoji} 
                    alt={`Memory ${i + 1}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '20px'
                    }}
                />
            </motion.div>
        </motion.div>
    )
}

const cardVariants = {
    offscreen: {
        y: 300,
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
        },
    },
}

// const hue = (h: number): string => `hsl(${h}, 100%, 50%)`

/**
 * ==============   Styles   ================
 */

const container = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
}

const cardContainer = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: -120,
}

const splash = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
}

const card = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow:
        "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
    transformOrigin: "10% 60%",
}

/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
    //["/WhatsApp Image 2025-10-06 at 9.50.34 PM.jpeg", 340, 10],
    ["/WhatsApp Image 2025-10-06 at 9.50.34 PM (1).jpeg", 20, 40],
    //["/WhatsApp Image 2025-10-06 at 9.50.34 PM (2).jpeg", 60, 90],
    ["/WhatsApp Image 2025-10-06 at 9.50.34 PM (3).jpeg", 80, 120],
    ["/WhatsApp Image 2025-10-06 at 9.50.34 PM (4).jpeg", 100, 140],
    ["/WhatsApp Image 2025-10-06 at 9.50.34 PM (5).jpeg", 205, 245],
    ["/WhatsApp Image 2025-10-06 at 9.50.34 PM (6).jpeg", 260, 290],
    ["/WhatsApp Image 2025-10-06 at 9.50.34 PM (7).jpeg", 290, 320],
    ["/WhatsApp Image 2025-10-06 at 9.50.34 PM (8).jpeg", 320, 350],
    //["/WhatsApp Image 2025-10-06 at 9.50.34 PM (9).jpeg", 350, 380],
]

export default ScrollTriggered