document.addEventListener('DOMContentLoaded', ()=>{
    const para = document.querySelectorAll('.para');
para.forEach((element) =>{

  const splitPara = new SplitType(element,{types:"words, chars",tagName:"span"});

  const words = splitPara.words;

  const t1 = gsap.timeline({
    scrollTrigger:{
      trigger:element,
      start:"top bottom-=15%",
      end:"bottom center+=15%",
      scrub:1,
    }
  });
   
  t1.fromTo(
    words,
    {
      opacity:0,
      skewX:-20,
      filter:"blur(8px)",
      willChange:"filter, transform"
    },
    {
      opacity:1,
      skewX:0,
      ease:"sine",
      stagger:0.04,
      filter:"blur(0px)",
    }
  )
});
  })

  