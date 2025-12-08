export async function getServerSideProps({ res }) {
    // Définir les URL importantes pour le sitemap
    const baseUrl = 'https://carlaleitefan.com';
  
    const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
          <loc>${baseUrl}/</loc>
          <priority>1.0</priority>
        </url>
        <url>
          <loc>${baseUrl}/#biography</loc>
          <priority>0.8</priority>
        </url>
         <url>
          <loc>${baseUrl}/#watch</loc>
          <priority>0.6</priority>
        </url>
         <url>
          <loc>${baseUrl}/#news</loc>
          <priority>0.9</priority>
        </url>
        <url>
          <loc>${baseUrl}/#records</loc>
          <priority>0.7</priority>
        </url>
      </urlset>
    `;
  
    // Ajouter le type de réponse XML
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return { props: {} };
  }
  
  export default function Sitemap() {
    // Cette page n'a pas besoin de rendu côté client
    return null;
  }
  