import React, { useEffect, useState } from 'react'
import { X, ArrowLeft, ArrowRight } from 'lucide-react'
import { GALLERY } from '../data/site.js'
export default function Gallery() {
  const [active,setActive]=useState(null)
  useEffect(()=>{
    if(active===null) return
    function onKey(e) { if(e.key==='Escape') setActive(null); if(e.key==='ArrowRight') setActive(i=>(i+1)%GALLERY.length); if(e.key==='ArrowLeft') setActive(i=>(i-1+GALLERY.length)%GALLERY.length) }
    document.addEventListener('keydown',onKey)
    const before=document.body.style.overflow
    document.body.style.overflow='hidden'
    return ()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=before}
  },[active])
  return <>
    <section className="page-hero compact"><div className="container"><div className="eyebrow hero-eyebrow"><span className="eyebrow-line"/> MOMENTS FROM OUR COMMUNITY</div><h1>Stories in <em>pictures.</em></h1><p>Photographs from foundation activities and community moments.</p></div></section>
    <section className="section-pad"><div className="container"><div className="gallery-grid">{GALLERY.map((src,i)=><button type="button" className="gallery-item" key={src} onClick={()=>setActive(i)} aria-label={'View gallery photograph '+(i+1)}><img src={src} alt={'Foundation activity photograph '+(i+1)} loading="lazy" decoding="async"/></button>)}</div></div></section>
    {active!==null && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer" onClick={()=>setActive(null)}><button className="lightbox-close" type="button" onClick={()=>setActive(null)} aria-label="Close photo viewer"><X size={26}/></button><button className="lightbox-prev" type="button" aria-label="Previous photo" onClick={e=>{e.stopPropagation();setActive(i=>(i-1+GALLERY.length)%GALLERY.length)}}><ArrowLeft size={24}/></button><figure onClick={e=>e.stopPropagation()}><img src={GALLERY[active]} alt={'Foundation activity photograph '+(active+1)}/><figcaption>{active+1} / {GALLERY.length}</figcaption></figure><button className="lightbox-next" type="button" aria-label="Next photo" onClick={e=>{e.stopPropagation();setActive(i=>(i+1)%GALLERY.length)}}><ArrowRight size={24}/></button></div>}
  </>
}
