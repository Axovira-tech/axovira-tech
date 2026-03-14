/* ═══════════════════════════════════════════════════════════
   AXOVIRA — GSAP Animations (exact JS Mastery replica)
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    /* ───── 1. Hero Entrance ───── */
    const heroTl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
    heroTl
        .from('.nav-logo', { y: -30, opacity: 0 })
        .from('.main-heading', { y: 40, opacity: 0 }, '-=0.6')
        .from('.hero-desc', { y: 30, opacity: 0 }, '-=0.6')
        .from('.hero-actions', { y: 20, opacity: 0 }, '-=0.5');

    /* ───── 2. Staggered Service Cards ───── */
    gsap.from('.stagger-up', {
        y: 120,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'back.out(1.4)',
        delay: 0.9
    });

    /* ───── 3. Floating Star Badge ───── */
    gsap.to('.star-badge', {
        y: -12,
        rotation: 20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    /* ───── 4. Universal Reveal Up (feature cards, pricing cards, etc.) ───── */
    gsap.utils.toArray('.reveal-up').forEach(item => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: 'top 85%' },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    /* ───── 5. Universal Scale Reveal (roadmap cards, about box, showreel) ───── */
    gsap.utils.toArray('.reveal-scale').forEach(item => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: 'top 80%' },
            y: 60,
            scale: 0.95,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    /* ───── 6. Parallax Huge Numbers ───── */
    gsap.utils.toArray('.huge-number').forEach(number => {
        gsap.to(number, {
            scrollTrigger: {
                trigger: number.closest('.roadmap-card'),
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1
            },
            y: -150,
            ease: 'none'
        });
    });

    /* ───── 7. Word-by-Word Text Reveal ───── */
    const revealEl = document.getElementById('revealText');
    if (revealEl) {
        // Split text into word spans
        const originalHTML = revealEl.innerHTML;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalHTML;

        // Process text nodes and wraps into spans
        function wrapWords(node) {
            if (node.nodeType === Node.TEXT_NODE) {
                const words = node.textContent.split(/(\s+)/);
                const frag = document.createDocumentFragment();
                words.forEach(w => {
                    if (w.trim() === '') {
                        frag.appendChild(document.createTextNode(w));
                    } else {
                        const span = document.createElement('span');
                        span.className = 'word';
                        span.textContent = w;
                        frag.appendChild(span);
                    }
                });
                node.parentNode.replaceChild(frag, node);
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                // For highlight spans, wrap the inner text too
                if (node.classList.contains('highlight-word')) {
                    const span = document.createElement('span');
                    span.className = 'word';
                    span.innerHTML = node.outerHTML;
                    node.parentNode.replaceChild(span, node);
                } else {
                    Array.from(node.childNodes).forEach(child => wrapWords(child));
                }
            }
        }
        Array.from(revealEl.childNodes).forEach(child => wrapWords(child));

        const allWords = revealEl.querySelectorAll('.word');
        const totalWords = allWords.length;

        ScrollTrigger.create({
            trigger: '.text-reveal-section',
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 0.5,
            onUpdate: (self) => {
                const progress = self.progress;
                const revealCount = Math.floor(progress * totalWords);
                allWords.forEach((word, i) => {
                    if (i <= revealCount) {
                        word.classList.add('revealed');
                    } else {
                        word.classList.remove('revealed');
                    }
                });
            }
        });
    }

    /* ───── 8. Badge Wiggle on Scroll ───── */
    gsap.utils.toArray('.badge-wiggle').forEach(badge => {
        gsap.from(badge, {
            scrollTrigger: { trigger: badge, start: 'top 85%' },
            rotation: -15,
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            ease: 'back.out(2)'
        });
    });

    /* ───── 9. FAQ Items Stagger ───── */
    gsap.utils.toArray('.faq-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: { trigger: item, start: 'top 85%' },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power2.out'
        });
    });

    /* ───── 10. Scroll-to-Top Button ───── */
    const scrollBtn = document.getElementById('scrollTopBtn');
    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ───── 11. Section Titles Entrance ───── */
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: { trigger: title, start: 'top 85%' },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    /* ───── 12. Section Descriptions Entrance ───── */
    gsap.utils.toArray('.section-desc').forEach(desc => {
        gsap.from(desc, {
            scrollTrigger: { trigger: desc, start: 'top 85%' },
            y: 20,
            opacity: 0,
            duration: 0.7,
            delay: 0.15,
            ease: 'power3.out'
        });
    });
});
