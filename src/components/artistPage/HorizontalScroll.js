import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import ResizeObserver from "resize-observer-polyfill"
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion"
import './HorizontalScroll.css';




function HorizontalScroll({ artistGallery }) {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.17, stiffness: 65 }
  const spring = useSpring(transform, physics)

  return (
	  <>
			<div className="scroll-container">
				<motion.section
				ref={scrollRef}
				style={{ x: spring }}
				className="thumbnails-container"
				>
					<div className="thumbnails">

						{artistGallery.map( (src, index) => (
							<div  
							className="container-block-img thumbnail" 
							key={index}
							>
							<img
								className="container-img-selected-work"
								src={`${process.env.PUBLIC_URL}` + src.img}
								alt={src.txt}
							/>
							<p>{src.txt}</p>
							</div>
						))}
					</div>
				</motion.section>
				<div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
			</div>
			
			</>
		)
		}

export default HorizontalScroll;
