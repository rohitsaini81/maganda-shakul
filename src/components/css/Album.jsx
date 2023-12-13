import React from 'react';

export default function Album() {
  return (
    <section id='album' style={{padding:"0px 9%"}}>
      <h3>Album</h3>
      <iframe
        style={{ borderRadius: '12px', border: '0',height:"60vh"}}
        display="block"
        src="https://open.spotify.com/embed/artist/5PyVrB3KzJSStrgaTdFl2A?utm_source=generator"
        width="100%"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
}
