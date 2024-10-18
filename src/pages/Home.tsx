import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import Layout from "../components/Layout";
import Quote from "../components/Quote";
import Carousel from "../components/Carousel";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../components/GlobalContext";
import SocialIcons from "../components/SocialIcons";
import CustomButton from "../components/CustomButton";
import map from "../scripts/map";
import Text from "../components/Text";
import { ProjectCategory, iProject } from "../types";

interface SimpleTransform {
    start: number;
    mid: number;
    end: number;
}

interface Transform {
    x: SimpleTransform;
    y: SimpleTransform;
}

interface SectionAnimation {
    translation: Transform;
    opacity: SimpleTransform;
    scale: Transform;
}

export default function Home() {
    const [currentItem, setCurrentItem] = useState<ProjectCategory>("all");
    const [progress, setProgress] = useState(0);
    const [targetProgress, setTargetProgress] = useState(progress);

    const totalSections = 5;
    const maxProgress = 100 * (totalSections) - 1;
    const lastTouchRef = useRef({ x: 0, y: 0 });
    const { state } = useGlobalContext();
    const items: iProject[] = state.projects.filter(i => currentItem === "all" ? true : i.category === currentItem);
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    function handleCarouselNext(){
        if(currentIndex >= items.length - 1) setCurrentIndex(0)
        else setCurrentIndex(e=>e+1);
    }
    function handleCarouselPrev(){
        if(currentIndex <= 0) setCurrentIndex(items.length-1)
        else setCurrentIndex(e=>e-1);
    }

    // Define section animations
    const sectionAnimations: SectionAnimation[] = useMemo(() => [
        {
            opacity: { start: 1, mid: 1, end: 0 },
            scale: { x: { start: 1, mid: 1, end: 1 }, y: { start: 1, mid: 1, end: 1 } },
            translation: { x: { start: 0, mid: 0, end: 0 }, y: { start: 0, mid: 100, end: 300 } },
        },
        {
            opacity: { start: 0, mid: 1, end: 0 },
            scale: { x: { start: 1, mid: 1, end: 1 }, y: { start: 1, mid: 1, end: 1 } },
            translation: { x: { start: 0, mid: 0, end: 0 }, y: { start: -100, mid: 0, end: 100 } }
        },
        {
            opacity: { start: 0, mid: 1, end: 0 },
            scale: { x: { start: 1, mid: 1, end: 1 }, y: { start: 1, mid: 1, end: 1 } },
            translation: { x: { start: 0, mid: 0, end: 0 }, y: { start: 100, mid: 0, end: -100 } }
        },
        {
            opacity: { start: 0, mid: 1, end: 0 },
            scale: { x: { start: 1, mid: 1, end: 1 }, y: { start: 1, mid: 1, end: 1 } },
            translation: { x: { start: 0, mid: 0, end: 0 }, y: { start: -100, mid: 0, end: 0 } },
        },
        {
            opacity: { start: 0, mid: 1, end: 1 },
            scale: { x: { start: 1, mid: 1, end: 1 }, y: { start: 1, mid: 1, end: 0.5 } },
            translation: { x: { start: 0, mid: 0, end: 0 }, y: { start: 100, mid: 0, end: 0 } }
        },
    ], []);

    const [shouldProgress, setShouldProgress] = useState(true);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleContactBtn = () => {
        navigate(`/contact`);
    };

    const updateProgress = useCallback((newProgress: number) => {
        if (newProgress !== targetProgress) {
            setTargetProgress(newProgress);
        }
    }, [targetProgress]);

    const animate = useCallback(() => {
        const ease = (start: number, end: number, t: number): number => start + (end - start) * t;
        if (Math.abs(progress - targetProgress) > 0.1) {
            const newProgress = ease(progress, targetProgress, 0.1);
            setProgress(newProgress);
            requestAnimationFrame(animate);
        } else {
            setProgress(targetProgress);
        }
    }, [progress, targetProgress]);

    useEffect(() => {
        requestAnimationFrame(animate);
    }, [animate]);

    useEffect(() => {
        const handleWheel = (event: WheelEvent) => {
            event.preventDefault();
            const delta = Math.sign(event.deltaY);
            const newProgress = Math.max(0, Math.min(maxProgress, targetProgress + delta * 10));
            updateProgress(newProgress);
        };

        const handleTouchMove = (event: TouchEvent) => {
            const currentTouchY = event.touches[0].clientY;
            const deltaY = lastTouchRef.current.y - currentTouchY;
            const sensitivity = 0.3; 
            const newProgress = Math.max(0, Math.min(maxProgress, targetProgress + deltaY * sensitivity));
            updateProgress(newProgress);
            lastTouchRef.current.y = currentTouchY;
            event.preventDefault();
        };

        const handleTouchStart = (event: TouchEvent) => {
            lastTouchRef.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchmove', handleTouchMove, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [updateProgress, maxProgress, targetProgress]);

    useEffect(() => {
        if (!shouldProgress && timeoutRef.current === null) {
            timeoutRef.current = setTimeout(() => {
                setShouldProgress(true);
                timeoutRef.current = null;
            }, 300);
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
                timeoutRef.current = null;
            }
        };
    }, [shouldProgress]);

    const getSectionProgress = () => progress % 100;
    const sectionProgress = getSectionProgress() / 100;

    const animations = useMemo(() => {
        return Array.from({ length: totalSections }).map((_, index) => {
            let opacity = 0;
            let scaleX = 1;
            let scaleY = 1;
            let translateY = 0;
            let translateX = 0;
            let minProgress = 0;
            let maxProgress = 1;

            const isCurrentSection = index === Math.floor(progress / 100);

            if (isCurrentSection) {
                if (sectionProgress <= 0.5) {
                    minProgress = 0;
                    maxProgress = 0.5;
                    opacity = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].opacity.start,
                        sectionAnimations[index].opacity.mid, false);
                    scaleX = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].scale.x.start,
                        sectionAnimations[index].scale.x.mid, false);
                    scaleY = map(sectionProgress, minProgress, maxProgress - 50,
                        sectionAnimations[index].scale.y.start,
                        sectionAnimations[index].scale.y.mid, false);
                    translateY = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].translation.y.start,
                        sectionAnimations[index].translation.y.mid, false);
                    translateX = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].translation.x.start,
                        sectionAnimations[index].translation.x.mid, false);
                } else {
                    minProgress = 0.5;
                    maxProgress = 1;
                    opacity = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].opacity.mid,
                        sectionAnimations[index].opacity.end, false);
                    scaleX = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].scale.x.mid,
                        sectionAnimations[index].scale.x.end, false);
                    scaleY = map(sectionProgress, minProgress, maxProgress - 50,
                        sectionAnimations[index].scale.y.mid,
                        sectionAnimations[index].scale.y.end, false);
                    translateY = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].translation.y.mid,
                        sectionAnimations[index].translation.y.end, false);
                    translateX = map(sectionProgress, minProgress, maxProgress,
                        sectionAnimations[index].translation.x.mid,
                        sectionAnimations[index].translation.x.end, false);
                }
            }

            return { opacity, scaleX, scaleY, translateY, translateX };
        });
    }, [progress, sectionAnimations, sectionProgress, totalSections]);

    return (
        <Layout progress={progress}>
            {Array.from({ length: totalSections }).map((_, index) => {
                const { opacity, scaleX, scaleY, translateY, translateX } = animations[index];
                const isCurrentSection = index === Math.floor(progress / 100);

                return (
                    <div
                        key={index}
                        style={{
                            transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scaleX}, ${scaleY})`,
                            opacity: opacity,
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            display: isCurrentSection ? "flex" : "none"
                        }}
                        className="home-section flex py-5 items-center justify-center w-full h-full"
                    >
                        {index === 0 && (
                            <div className="text-center w-full md:max-w-4xl ">
                                <Text font="display" weight={"regular"} mainColor={false} size="md" text="Hello, my name is" />
                                <Text font="title" weight={"black"} mainColor size="xl" text="Arthur Matias" />
                                <Text font="display" weight="thin" mainColor={false} size="md" text="Designer & Software Engineer" />
                            </div>
                        )}
                        {index === 1 && (
                            <div className="flex flex-col items-center justify-center w-5/6 md:max-w-4xl ">
                                <Quote author="Neil deGrasse Tyson" phrase="I fear living a life where I could have done something and didn’t." />
                            </div>
                        )}
                        {index === 2 && (
                            <div className="flex flex-col items-center justify-center w-full h-full md:max-w-4xl">
                                <div className="mb-5">
                                    <button type="button" className={`px-2 sm:px-5 border-b-2 border-transparent hover:border-main transition-colors ${currentItem === "all" ? "border-main" : ""}`} onClick={() => setCurrentItem("all")}>All</button>
                                    <button type="button" className={`px-2 sm:px-5 border-b-2 border-transparent hover:border-main transition-colors ${currentItem === "design" ? "border-main" : ""}`} onClick={() => setCurrentItem("design")}>Design</button>
                                    <button type="button" className={`px-2 sm:px-5 border-b-2 border-transparent hover:border-main transition-colors ${currentItem === "dev" ? "border-main" : ""}`} onClick={() => setCurrentItem("dev")}>Development</button>
                                </div>
                                <Carousel items={items} currentIndex={currentIndex} handleNext={handleCarouselNext} handlePrev={handleCarouselPrev} />
                            </div>
                        )}
                        {index === 3 && (
                            <div className="flex flex-col items-center justify-center w-5/6 md:max-w-3xl ">
                                {/* <div className="w-5/6 sm:w-full"></div> */}
                                <Quote author="Arthur Matias" phrase="If you can dream, I can develop." />
                            </div>
                        )}
                        {index === 4 && (
                            <div className="flex flex-col items-center px-8 w-full sm:w-2/3 max-w-xl">
                                <div className="flex flex-col items-start justify-start mb-3 w-full border-main border-b-2">
                                    <Text mainColor={false} size="lg" weight="bold" font="title" text="Let’s bring your ideas to life. Contact me today!" />
                                    <div className="flex flex-col sm:flex-row w-full pb-8 mt-10">
                                        <div className="sm:w-1/2 border-r-2 border-main text-end ps-8 pr-8 mb-5">
                                            <Text text="email" font="display" mainColor={false} size="sm" weight="thin" />
                                            <a href="mailto:ahmmfdc@gmail.com" target="_blank">
                                                <Text text="ahmmfdc@gmail.com" font="display" mainColor={false} size="sm" weight="regular" />
                                            </a>
                                        </div>
                                        <div className="sm:w-1/2 border-r-2 sm:border-none border-main ms-8 text-end sm:text-end justify-end sm:justify-start pe-8">
                                            <Text text="social" font="display" mainColor={false} size="sm" weight="thin" />
                                            <SocialIcons />
                                        </div>
                                    </div>
                                </div>
                                <div className="flex w-full justify-end">
                                    <CustomButton btnType="button" handleClick={handleContactBtn} text="Get in touch" />
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </Layout>
    );
}
