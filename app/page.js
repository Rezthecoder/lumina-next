import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container container-sm">
          <h2> <span className="bg-primary">Passionate</span> creative crafting
            distinct projects, driven by
            <span className="bg-primary">innovation</span>
          </h2>
        </div>
      </section>
      <section className="gallery">
        <div className="container container-lg gallery-flex">
          <a href="/images/image1.jpg" data-lightbox="gallery" data-title="Image 1" className="lightbox-link">
            <Image src="/images/portfolio1.jpg" alt="Image 1" width={300} height={200} />
          </a>
          <a href="/images/image2.jpg" data-lightbox="gallery" data-title="Image 2" className="lightbox-link">
            <Image src="/images/portfolio2.jpg" alt="Image 2" width={300} height={200} />
          </a>
          <a href="/images/image3.jpg" data-lightbox="gallery" data-title="Image 3" className="lightbox-link">
            <Image src="/images/portfolio3.jpg" alt="Image 3" width={300} height={200} />
          </a>
          <a href="/images/image4.jpg" data-lightbox="gallery" data-title="Image 4" className="lightbox-link">
            <Image src="/images/portfolio4.jpg" alt="Image 4" width={300} height={200} />
          </a>
          <a href="/images/image5.jpg" data-lightbox="gallery" data-title="Image 5" className="lightbox-link">
            <Image src="/images/portfolio5.jpg" alt="Image 5" width={300} height={200} />
          </a>
          <a href="/images/image6.jpg" data-lightbox="gallery" data-title="Image 6" className="lightbox-link">
            <Image src="/images/portfolio6.jpg" alt="Image 6" width={300} height={200} />
          </a>
          <a href="/images/image7.jpg" data-lightbox="gallery" data-title="Image 7" className="lightbox-link">
            <Image src="/images/portfolio7.jpg" alt="Image 7" width={300} height={200} />
          </a>
          <a href="/images/image8.jpg" data-lightbox="gallery" data-title="Image 8" className="lightbox-link">
            <Image src="/images/portfolio8.jpg" alt="Image 8" width={300} height={200} />
          </a>
          <a href="/images/image9.jpg" data-lightbox="gallery" data-title="Image 9" className="lightbox-link">
            <Image src="/images/portfolio9.jpg" alt="Image 9" width={300} height={200} />
          </a>
        </div>
      </section>
    </>
  );
}
